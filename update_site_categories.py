import os
import csv
import re
from collections import Counter

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path = os.path.join(workspace_dir, "scanned_product_details.csv")
html_files = ["index.html", "about.html", "contact.html", "product.html"]

print("=== Starting Dynamic Site-Wide Category and Navigation Updates ===")

# 1. Parse categories and counts from CSV
if not os.path.exists(csv_path):
    print(f"Error: CSV file not found at {csv_path}")
    exit(1)

category_counts = Counter()
total_products = 0

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        cat = row.get('Category', '').strip()
        if cat:
            category_counts[cat] += 1
            total_products += 1

print(f"Found {total_products} products across {len(category_counts)} active categories.")

# The official taxonomy categories
taxonomy = [
    ("artificial-flowers", "Artificial Flowers"),
    ("artificial-flower-bunches", "Artificial flower bunches"),
    ("artificial-green-wall-panel", "Artificial green wall panel"),
    ("traditional-garlands", "Traditional Garlands & Haars"),
    ("artificial-leaves", "Artificial leaves"),
    ("artificial-plants", "Artificial plants"),
    ("floral-supplies", "Floral Supplies"),
    ("floral-arrangements", "Floral Arrangements"),
    ("dried-decorations", "Dried Decorations"),
    ("artificial-fruits", "Artificial fruits"),
    ("event-decor", "Event Decor"),
    ("floral-decor", "Floral Decor"),
    ("artificial-flora", "Artificial Flora"),
    ("wedding-decor", "Wedding Decor")
]

# Calculate actual active categories count (with products > 0)
active_categories_count = sum(1 for slug, name in taxonomy if category_counts.get(slug, 0) > 0)
print(f"Active categories with products: {active_categories_count}")

# Create dropdown items dynamically (only for categories with products)
dropdown_links = []
for slug, display_name in taxonomy:
    count = category_counts.get(slug, 0)
    if count > 0:
        label = f"{display_name} ({count})"
        dropdown_links.append(
            f'                        <a href="product.html?category={slug}"\n'
            f'                            class="text-xs py-1.5 px-3 rounded-lg hover:bg-rose-50 hover:text-primary transition-colors text-gray-600 font-medium">{label}</a>'
        )

new_dropdown_html = f"""                    <!-- Dropdown -->
                    <div id="product-dropdown-content"
                        class="hidden absolute top-full left-0 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 mt-3 p-4 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-1 z-50">
                        <a href="product.html?category=all"
                            class="text-xs py-2 px-3 rounded-lg hover:bg-rose-50 hover:text-primary transition-colors text-gray-800 font-bold border-b border-gray-100 md:col-span-2 mb-1.5 flex items-center justify-between">
                            <span>All Products ({total_products})</span>
                            <span class="text-[10px] text-gray-400 font-normal">Explore our entire collection</span>
                        </a>
{"\n".join(dropdown_links)}
                    </div>"""

# 2. Update dropdown content across all pages
for filename in html_files:
    file_path = os.path.join(workspace_dir, filename)
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    dropdown_token = 'id="product-dropdown-content"'
    token_idx = content.find(dropdown_token)
    if token_idx != -1:
        start_bracket_idx = content.find('>', token_idx)
        cursor = start_bracket_idx + 1
        depth = 1
        matching_close_idx = -1
        while depth > 0 and cursor < len(content):
            next_tag_open = content.find('<', cursor)
            if next_tag_open == -1:
                break
            next_tag_close = content.find('>', next_tag_open)
            if next_tag_close == -1:
                break
            
            tag_content = content[next_tag_open + 1:next_tag_close].strip().split()[0]
            if tag_content == 'div':
                depth += 1
            elif tag_content == '/div':
                depth -= 1
                if depth == 0:
                    matching_close_idx = next_tag_open
                    break
            cursor = next_tag_close + 1

        if matching_close_idx != -1:
            before_drop = content[:content.rfind('<div', 0, token_idx)]
            after_drop = content[matching_close_idx + 6:]
            content = before_drop + new_dropdown_html + after_drop
            print(f"  Successfully updated dropdown in {filename}!")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

# 3. Update stats and page-specific details in index.html
index_path = os.path.join(workspace_dir, "index.html")
if os.path.exists(index_path):
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Update counter stats dynamically
    # Total Products
    content = re.sub(
        r'<div class="text-4xl md:text-5xl font-serif font-bold text-white mb-2">.*?</div>(\s*)<div class="text-gray-500 text-xs uppercase tracking-\[0.25em\]">Products</div>',
        f'<div class="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{total_products}+</div>\\1<div class="text-gray-500 text-xs uppercase tracking-[0.25em]">Products</div>',
        content
    )
    # Total Categories (dynamic active count)
    content = re.sub(
        r'<div class="text-4xl md:text-5xl font-serif font-bold text-white mb-2">.*?</div>(\s*)<div class="text-gray-500 text-xs uppercase tracking-\[0.25em\]">Categories</div>',
        f'<div class="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{active_categories_count}</div>\\1<div class="text-gray-500 text-xs uppercase tracking-[0.25em]">Categories</div>',
        content
    )
    print("  Updated dynamic counter stats in index.html!")

    # 4. Generate Top Categories Grid for index.html (sorted by item count)
    top_categories = sorted([item for item in taxonomy if category_counts.get(item[0], 0) > 0], key=lambda item: category_counts.get(item[0], 0), reverse=True)[:8]
    
    # Representative images for top categories
    rep_images = {
        "artificial-flower-bunches": "assets/images/products/119.jpg",
        "artificial-green-wall-panel": "assets/images/products/194.jpg",
        "traditional-garlands": "assets/images/products/247.jpg",
        "artificial-flowers": "assets/images/products/70.jpg",
        "artificial-leaves": "assets/images/products/118.jpg",
        "artificial-plants": "assets/images/products/97.jpg",
        "floral-supplies": "assets/images/products/62.jpg",
        "floral-arrangements": "assets/images/products/2.jpg",
        "dried-decorations": "assets/images/products/63.jpg",
        "artificial-fruits": "assets/images/products/288.jpg"
    }

    grid_cards = []
    for idx, (slug, display_name) in enumerate(top_categories):
        count = category_counts.get(slug, 0)
        img_src = rep_images.get(slug, "assets/images/products/1.jpg")
        delay = 0.05 * (idx + 1)
        
        card = f"""                    <!-- Category Card {idx+1}: {display_name} -->
                    <div class="animate-on-scroll" style="animation-delay: {delay:.2f}s;">
                        <a href="product.html?category={slug}"
                            class="block h-full group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 flex-shrink-0">
                                <img src="{img_src}" alt="{display_name}"
                                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>
                            <div class="p-4 flex flex-col flex-1 text-center md:text-left">
                                <h3 class="font-serif text-sm md:text-base text-gray-800 group-hover:text-primary transition-colors font-bold leading-snug">
                                    {display_name}</h3>
                                <p class="text-gray-400 text-[10px] mt-1">{count} premium products</p>
                                <div class="mt-auto pt-3">
                                    <span class="text-[11px] text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View All &rarr;</span>
                                </div>
                            </div>
                        </a>
                    </div>"""
        grid_cards.append(card)

    new_cards_html = f'                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">\n' + "\n\n".join(grid_cards) + "\n                </div>"
    
    card_token = 'CATEGORIES -->'
    sect_idx = content.find(card_token)
    if sect_idx != -1:
        grid_start = content.find('<div class="grid grid-cols-2 md:grid-cols-4 gap-6">', sect_idx)
        if grid_start != -1:
            cursor = grid_start + len('<div class="grid grid-cols-2 md:grid-cols-4 gap-6">')
            depth = 1
            close_idx = -1
            while depth > 0 and cursor < len(content):
                next_tag_open = content.find('<', cursor)
                if next_tag_open == -1:
                    break
                next_tag_close = content.find('>', next_tag_open)
                if next_tag_close == -1:
                    break
                tag_content = content[next_tag_open + 1:next_tag_close].strip().split()[0]
                if tag_content == 'div':
                    depth += 1
                elif tag_content == '/div':
                    depth -= 1
                    if depth == 0:
                        close_idx = next_tag_open
                        break
                cursor = next_tag_close + 1
            
            if close_idx != -1:
                before_grid = content[:grid_start]
                after_grid = content[close_idx + 6:]
                content = before_grid + new_cards_html + after_grid
                print("  Successfully updated Top Categories Grid on index.html!")

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 5. Update stats in about.html
about_path = os.path.join(workspace_dir, "about.html")
if os.path.exists(about_path):
    with open(about_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Update product count counter
    content = re.sub(
        r'<span class="counter" data-target="\d+">0</span>\s*\+\s*</div>\s*<div class="text-gray-500 text-sm">Unique Products</div>',
        f'<span class="counter" data-target="{total_products}">0</span>+</div>\n            <div class="text-gray-500 text-sm">Unique Products</div>',
        content
    )
    # Update category counter
    content = re.sub(
        r'<span class="counter" data-target="\d+">0</span>\s*</div>\s*<div class="text-gray-500 text-sm">Product Categories</div>',
        f'<span class="counter" data-target="{active_categories_count}">0</span></div>\n            <div class="text-gray-500 text-sm">Product Categories</div>',
        content
    )
    # Update descriptions
    content = re.sub(r'across \d+ categories\.', f'across {active_categories_count} categories.', content)
    content = re.sub(r'over \d+ unique products', f'over {total_products} unique products', content)
    
    print("  Updated dynamic stats in about.html!")
    
    with open(about_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 6. Update category sidebar list in product.html
product_path = os.path.join(workspace_dir, "product.html")
if os.path.exists(product_path):
    with open(product_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    sidebar_links = [
        f'<li><a href="?category=all" data-cat="all" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">All Products<span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-semibold">{total_products}</span></a></li>'
    ]
    for slug, display_name in taxonomy:
        count = category_counts.get(slug, 0)
        if count > 0:
            sidebar_links.append(
                f'<li><a href="?category={slug}" data-cat="{slug}" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">{display_name}<span class="bg-rose-50/50 text-primary text-xs px-2.5 py-1 rounded-full font-semibold">{count}</span></a></li>'
            )
    sidebar_html = '<ul class="space-y-1" id="category-list">\n' + "\n".join(sidebar_links) + '\n</ul>'
    
    content = re.sub(r'<ul class="space-y-1" id="category-list">.*?</ul>', sidebar_html, content, flags=re.DOTALL)
    print("  Successfully updated Category Sidebar in product.html!")
    
    with open(product_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("\nSUCCESS: All page categories, navigation menus, and stats updated dynamically site-wide!")
