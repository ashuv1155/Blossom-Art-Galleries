import csv
import re
import os

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path1 = os.path.join(workspace_dir, "scanned_product_details.csv")
csv_path2 = os.path.join(workspace_dir, "assets/accurate_products.csv")
product_html_path = os.path.join(workspace_dir, "product.html")
index_path = os.path.join(workspace_dir, "index.html")

target_bags = [f"BAG {i}" for i in range(42, 49)]
new_category = "Artificial Flowers"
new_slug = "artificial-flowers"

categories_ordered = [
    "Artificial Flowers",
    "Dried Decorations",
    "Event Decor",
    "Floral Arrangements",
    "Floral Supplies",
    "Artificial Flora",
    "Wedding Decor",
    "Artificial leaves",
    "Artificial green wall panel",
    "Traditional Garlands & Haars",
    "Artificial plants",
    "Artificial flower bunches",
    "Artificial fruits"
]

def make_slug(name):
    if name == "Artificial leaves": return "artificial-leaves"
    if name == "Artificial green wall panel": return "artificial-green-wall-panel"
    if name == "Artificial plants": return "artificial-plants"
    if name == "Artificial flower bunches": return "artificial-flower-bunches"
    if name == "Artificial fruits": return "artificial-fruits"
    s = name.lower()
    s = s.replace('&', '')
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'\s+', '-', s).strip('-')
    return s

cat_name_to_slug = {c: make_slug(c) for c in categories_ordered}

# 1. Update CSVs and compute new counts
new_counts = {c: 0 for c in categories_ordered}

for csv_file in [csv_path1, csv_path2]:
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames
        
    for row in rows:
        if row['Product ID'] in target_bags:
            row['Category'] = new_category
            
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
        
    if csv_file == csv_path1:
        for r in rows:
            if r['Category'] in new_counts:
                new_counts[r['Category']] += 1

print("Updated CSVs!")
print(f"{new_category} now has {new_counts[new_category]} items.")

# 2. Update product.html sidebar and cards
with open(product_html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Rebuild Sidebar
sidebar_html = """                    <ul class="space-y-1" id="category-list">
<li><a href="?category=all" data-cat="all" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">All Products<span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-semibold">303</span></a></li>"""
for c in categories_ordered:
    slug = cat_name_to_slug[c]
    count = new_counts[c]
    sidebar_html += f"""
<li><a href="?category={slug}" data-cat="{slug}" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">{c}<span class="bg-rose-50/50 text-primary text-xs px-2.5 py-1 rounded-full font-semibold">{count}</span></a></li>"""
sidebar_html += """
                    </ul>"""

content = re.sub(r'<ul class="space-y-1" id="category-list">.*?</ul>', sidebar_html, content, flags=re.DOTALL)

# Rebuild Cards
def update_card(match):
    card = match.group(0)
    bag_match = re.search(r'BAG\s+(\d+)', card)
    if bag_match:
        bag_id = f"BAG {bag_match.group(1)}"
        if bag_id in target_bags:
            card = re.sub(r'data-category="[^"]*"', f'data-category="{new_slug}"', card)
            card = re.sub(r'<span class="uppercase tracking-widest text-primary font-bold">.*?</span>', f'<span class="uppercase tracking-widest text-primary font-bold">{new_category}</span>', card)
    return card

content = re.sub(r'<div class="[^"]*product-item[^"]*"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>', update_card, content, flags=re.DOTALL)

with open(product_html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated product.html sidebar and cards!")

# 3. Update index.html Top 8 Category Cards based on the new counts
top_categories = sorted(new_counts.items(), key=lambda x: x[1], reverse=True)[:8]
index_cards_html = '                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">\n'

rep_images = {}
for row in rows:
    cat = row['Category']
    if cat not in rep_images:
        rep_images[cat] = row['Image Filename']

delays = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]
for idx, (cat_name, count) in enumerate(top_categories):
    slug = cat_name_to_slug[cat_name]
    img = rep_images.get(cat_name, '1.jpg')
    desc = f"{count} exquisite pieces" if count > 0 else "Explore collection"
    
    index_cards_html += f"""
                    <!-- Category Card {idx+1}: {cat_name} -->
                    <div class="animate-on-scroll" style="animation-delay: {delays[idx]}s;">
                        <a href="product.html?category={slug}"
                            class="block h-full group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 flex-shrink-0">
                                <img src="assets/images/products/{img}" alt="{cat_name}"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>
                            <div class="p-4 flex flex-col flex-1 text-center md:text-left">
                                <h3 class="font-serif text-sm md:text-base text-gray-800 group-hover:text-primary transition-colors font-bold leading-snug">
                                    {cat_name}</h3>
                                <p class="text-gray-400 text-[10px] mt-1">{desc}</p>
                                <div class="mt-auto pt-3">
                                    <span class="text-[11px] text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View All &rarr;</span>
                                </div>
                            </div>
                        </a>
                    </div>\n"""
                    
index_cards_html += '                </div>'

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

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
            if next_tag_open == -1: break
            next_tag_close = content.find('>', next_tag_open)
            if next_tag_close == -1: break
            tag_content = content[next_tag_open + 1:next_tag_close].strip().split()[0]
            if tag_content == 'div': depth += 1
            elif tag_content == '/div':
                depth -= 1
                if depth == 0:
                    close_idx = next_tag_open
                    break
            cursor = next_tag_close + 1
        
        if close_idx != -1:
            before_grid = content[:grid_start]
            after_grid = content[close_idx + 6:]
            content = before_grid + index_cards_html + after_grid
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(content)

print("SUCCESS! Completed move.")
