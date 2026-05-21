import re
import csv
import os

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
product_html_path = os.path.join(workspace_dir, "product.html")
csv_output_path = os.path.join(workspace_dir, "scanned_product_details.csv")
accurate_csv_path = os.path.join(workspace_dir, "assets", "accurate_products.csv")

print("=== Restoring and Reclassifying Catalog into 15 Categories ===")

# 1. Load the original/current product.html
with open(product_html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# 2. Extract original product cards using regex to build the database
cards_raw = re.findall(r'<div class="[^"]*product-item[^"]*"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>', html_content, re.DOTALL)
if not cards_raw:
    cards_raw = re.findall(r'<div class="[^"]*product-item[^"]*"[^>]*>.*?</h3>', html_content, re.DOTALL)

print(f"Found {len(cards_raw)} product cards in HTML.")

original_products = []
category_counts = {}

# Define the 14 new categories and their display names
categories_display_names = {
    "artificial-flowers": "Artificial Flowers",
    "dried-decorations": "Dried Decorations",
    "event-decor": "Event Decor",
    "floral-arrangements": "Floral Arrangements",
    "floral-decor": "Floral Decor",
    "floral-supplies": "Floral Supplies",
    "artificial-flora": "Artificial Flora",
    "wedding-decor": "Wedding Decor",
    "artificial-leaves": "Artificial leaves",
    "artificial-green-wall-panel": "Artificial green wall panel",
    "traditional-garlands": "Traditional Garlands & Haars",
    "artificial-plants": "Artificial plants",
    "artificial-flower-bunches": "Artificial flower bunches",
    "artificial-fruits": "Artificial fruits"
}

def classify(name, desc, old_cat):
    name_lower = name.lower()
    desc_lower = desc.lower()
    
    # 1. Artificial green wall panel
    if "panel" in name_lower or "hedge" in name_lower or "wall" in name_lower:
        return "artificial-green-wall-panel"
        
    # 2. Traditional Garlands & Haars
    if "garland" in name_lower or "haar" in name_lower or "toran" in name_lower or "string" in name_lower:
        return "traditional-garlands"
        
    # 3. Artificial fruits
    if "fruit" in name_lower or "apple" in name_lower or "lemon" in name_lower or "berry" in name_lower or "berries" in name_lower:
        return "artificial-fruits"
        
    # 4. Artificial leaves
    if "leaf" in name_lower or "leaves" in name_lower or "palm" in name_lower or "cycas" in name_lower:
        return "artificial-leaves"
        
    # 5. Artificial plants
    if "plant" in name_lower or "fern" in name_lower or "shrub" in name_lower or "tree" in name_lower or "grass" in name_lower or "wheat" in name_lower or "pampas" in name_lower:
        # Check if it should be dried instead
        if "dried" in name_lower or "preserved" in name_lower:
            return "dried-decorations"
        return "artificial-plants"
        
    # 6. Artificial flower bunches
    if "bunch" in name_lower or "bundle" in name_lower or "bouquet" in name_lower:
        if "dried" in name_lower or "preserved" in name_lower:
            return "dried-decorations"
        return "artificial-flower-bunches"
        
    # 7. Floral Supplies
    if "supply" in name_lower or "wire" in name_lower or "base" in name_lower or "foam" in name_lower or "sola" in name_lower or "rattan" in name_lower or "sphere" in name_lower:
        return "floral-supplies"
        
    # 8. Floral Arrangements
    if "arrangement" in name_lower or "centerpiece" in name_lower or "runner" in name_lower:
        return "floral-arrangements"
        
    # 9. Dried Decorations
    if "dried" in name_lower or "preserved" in name_lower or "feather" in name_lower or "baby" in name_lower:
        return "dried-decorations"
        
    # 10. Artificial Flowers
    if "flower" in name_lower or "rose" in name_lower or "orchid" in name_lower or "stem" in name_lower or "blossom" in name_lower or "spray" in name_lower or "wisteria" in name_lower or "vine" in name_lower:
        return "artificial-flowers"
        
    # Fallback logic if names didn't match
    if old_cat in categories_display_names:
        return old_cat
        
    return "artificial-flora"


# Parse details from cards
for card in cards_raw:
    bag_id = None
    bag_match = re.search(r'BAG\s+(\d+)', card)
    if bag_match:
        bag_id = int(bag_match.group(1))
    else:
        continue
        
    title = "No Title"
    title_match = re.search(r'<h3[^>]*>(.*?)</h3>', card, re.DOTALL)
    if title_match:
        title = title_match.group(1).strip()
        
    old_cat = "No Category"
    cat_match = re.search(r'data-category="([^"]*)"', card)
    if cat_match:
        old_cat = cat_match.group(1)
        
    # Extract description if present
    desc = "Premium product featuring lifelike details."
    desc_match = re.search(r'<p class="text-xs text-gray-600[^>]*>(.*?)</p>', card, re.DOTALL)
    if desc_match:
        desc = desc_match.group(1).strip()
        
    # Intercept and correct the mismatched final duplicate items to align with their actual wisteria/hanging vines images
    if bag_id == 331:
        title = "Cascading White Wisteria Hanging Spray"
        desc = "Lush, realistic cascading white wisteria spray designed to add elegant vertical floral elements to event ceilings and arches."
        new_cat = "hanging-vines"
    elif bag_id == 332:
        title = "Premium Cascading Green Ivy Vine"
        desc = "Highly realistic trailing ivy foliage spray, ideal for creating draping greenery walls, arches, and hanging installations."
        new_cat = "hanging-vines"
    elif bag_id == 333:
        title = "Artificial Green Willow Hanging Creeper"
        desc = "Vibrant, multi-strand artificial green willow hanging creeper, perfect for natural backdrops and wedding foliage decorations."
        new_cat = "hanging-vines"
    else:
        new_cat = classify(title, desc, old_cat)
    
    original_products.append({
        "id": bag_id,
        "name": title,
        "category": new_cat,
        "desc": desc
    })
    
    category_counts[new_cat] = category_counts.get(new_cat, 0) + 1

# Sort products by ID
original_products.sort(key=lambda x: x["id"])

print(f"Successfully parsed and sorted {len(original_products)} products.")
print("\nNew 15 Category Counts:")
for cat, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
    print(f"  {cat}: {count}")

# 3. Write new products to CSV files
print("\nWriting scanned_product_details.csv...")
with open(csv_output_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Product ID", "Image Filename", "Product Name", "Category", "Description"])
    for prod in original_products:
        writer.writerow([
            f"BAG {prod['id']}",
            f"{prod['id']}.jpg",
            prod["name"],
            prod["category"],
            prod["desc"]
        ])

print("Writing assets/accurate_products.csv...")
with open(accurate_csv_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Product ID", "Image Filename", "Product Name", "Category", "Description"])
    for prod in original_products:
        writer.writerow([
            f"BAG {prod['id']}",
            f"{prod['id']}.jpg",
            prod["name"],
            prod["category"],
            prod["desc"]
        ])

# 4. Generate the clean HTML cards with corrected local image paths
cards_list = []
for prod in original_products:
    img_id = prod["id"]
    cat_slug = prod["category"]
    cat_name = categories_display_names.get(cat_slug, cat_slug.replace("-", " ").title())
    title = prod["name"]
    desc = prod["desc"]
    
    card_html = f"""                    <div class="product-item product-card" data-category="{cat_slug}">
                        <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-50">
                            <div class="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden flex-shrink-0">
                                <img src="assets/images/products/{img_id}.jpg" alt="{title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div class="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-md">BAG {img_id}</div>
                                <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <button class="whatsapp-btn bg-white text-green-600 hover:bg-green-50 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg transition-colors flex items-center gap-1.5" data-prod-id="BAG {img_id}" data-prod-name="{title}">
                                        Enquire
                                        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col flex-1 p-5">
                                <div class="text-[9px] text-primary uppercase tracking-widest mb-2 font-semibold">{cat_name}</div>
                                <h3 class="font-serif font-bold text-gray-900 text-lg mb-2 leading-snug">{title}</h3>
                                <p class="text-xs text-gray-600 mb-4 flex-1 line-clamp-2">{desc}</p>
                                <div class="mt-auto">
                                    <button class="whatsapp-btn w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-sm transition-colors duration-300 flex items-center justify-center gap-2 shadow-md shadow-green-500/20" data-prod-id="BAG {img_id}" data-prod-name="{title}">
                                        Enquire
                                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>"""
    cards_list.append(card_html)

new_cards_grid = "\n".join(cards_list)

# 5. Balanced replace for productsGrid
grid_token = 'id="product-grid"'
token_idx = html_content.find(grid_token)
if token_idx != -1:
    start_bracket_idx = html_content.find('>', token_idx)
    cursor = start_bracket_idx + 1
    depth = 1
    matching_close_idx = -1
    while depth > 0 and cursor < len(html_content):
        next_tag_open = html_content.find('<', cursor)
        if next_tag_open == -1:
            break
        next_tag_close = html_content.find('>', next_tag_open)
        if next_tag_close == -1:
            break
        
        tag_content = html_content[next_tag_open + 1:next_tag_close].strip().split()[0]
        if tag_content == 'div':
            depth += 1
        elif tag_content == '/div':
            depth -= 1
            if depth == 0:
                matching_close_idx = next_tag_open
                break
        cursor = next_tag_close + 1

    if matching_close_idx != -1:
        before_grid = html_content[:start_bracket_idx + 1]
        after_grid = html_content[matching_close_idx:]
        html_content = before_grid + "\n" + new_cards_grid + "\n                " + after_grid
        print("Successfully balanced and replaced product grid!")

# 6. Rebuild Category Sidebar with the 15 categories and live counts
sidebar_list = []
sidebar_list.append(f'<li><a href="?category=all" data-cat="all" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">All Products<span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-semibold">{len(original_products)}</span></a></li>')

for cat_slug, display_name in categories_display_names.items():
    count = category_counts.get(cat_slug, 0)
    sidebar_list.append(f'<li><a href="?category={cat_slug}" data-cat="{cat_slug}" class="cat-link flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-sm transition-all duration-200 text-gray-600 hover:bg-rose-50 hover:text-primary">{display_name}<span class="bg-rose-50/50 text-primary text-xs px-2.5 py-1 rounded-full font-semibold">{count}</span></a></li>')

new_sidebar_html = "\n".join(sidebar_list)

# Locate category-list ul
sidebar_token = 'id="category-list"'
sidebar_token_idx = html_content.find(sidebar_token)
if sidebar_token_idx != -1:
    sb_bracket_idx = html_content.find('>', sidebar_token_idx)
    sb_close_idx = html_content.find('</ul>', sb_bracket_idx)
    if sb_bracket_idx != -1 and sb_close_idx != -1:
        before_sb = html_content[:sb_bracket_idx + 1]
        after_sb = html_content[sb_close_idx:]
        html_content = before_sb + "\n" + new_sidebar_html + "\n" + after_sb
        print("Successfully balanced and replaced Category list!")

# 7. Write out the restored product.html file
with open(product_html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"SUCCESS: Catalog and sidebar updated with 15 specialized categories perfectly! Total products: {len(original_products)}.")
