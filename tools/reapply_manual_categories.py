import csv
import re
import os

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path1 = os.path.join(workspace_dir, "scanned_product_details.csv")
csv_path2 = os.path.join(workspace_dir, "assets/accurate_products.csv")
product_html_path = os.path.join(workspace_dir, "product.html")

print("=== Starting Master Re-application of Manual Category Placements ===")

# Define the exact mapping of manual categories (Product ID -> Slug)
manual_moves = {}

# 1. move_to_flora.py
for bag in ["BAG 290", "BAG 291", "BAG 295", "BAG 300", "BAG 301"]:
    manual_moves[bag] = "artificial-flora"

# 2. move_to_bunches.py
for bag in ["BAG 159", "BAG 164", "BAG 167", "BAG 188"]:
    manual_moves[bag] = "artificial-flower-bunches"

# 3. move_to_panel.py
for bag in ["BAG 226", "BAG 228"]:
    manual_moves[bag] = "artificial-green-wall-panel"

# 4. move_to_garlands.py
for i in range(8, 42):
    manual_moves[f"BAG {i}"] = "traditional-garlands"

# 5. move_303.py
manual_moves["BAG 303"] = "artificial-flora"

# 6. move_to_flowers.py
for i in range(42, 49):
    manual_moves[f"BAG {i}"] = "artificial-flowers"

# 7. move_to_event.py
for i in range(2, 8):
    manual_moves[f"BAG {i}"] = "event-decor"

# 8. move_to_flowers2.py
for bag in ["BAG 81", "BAG 88", "BAG 92"]:
    manual_moves[bag] = "artificial-flowers"

# 9. move_to_flowers3.py
for bag in ["BAG 60", "BAG 89"]:
    manual_moves[bag] = "artificial-flowers"

# 10. move_to_dried.py
for bag in ["BAG 66", "BAG 70", "BAG 95"]:
    manual_moves[bag] = "dried-decorations"

# 11. remove_wedding.py
for bag in ["BAG 1", "BAG 49", "BAG 50", "BAG 51", "BAG 52", "BAG 53", "BAG 54", "BAG 61", "BAG 63", "BAG 83"]:
    manual_moves[bag] = "event-decor"

# 12. multi_move.py
for bag in ["BAG 10", "BAG 11", "BAG 12"]:
    manual_moves[bag] = "traditional-garlands"
for bag in ["BAG 294", "BAG 296", "BAG 297", "BAG 298"]:
    manual_moves[bag] = "artificial-flora"

# 13. New moves requested at 8:03 PM
for bag in ["BAG 132", "BAG 140", "BAG 160"]:
    manual_moves[bag] = "artificial-flower-bunches"

for bag in ["BAG 268", "BAG 270", "BAG 191"]:
    manual_moves[bag] = "artificial-flora"

manual_moves["BAG 85"] = "floral-supplies"

for bag in ["BAG 55", "BAG 56", "BAG 57", "BAG 58", "BAG 59", "BAG 64", "BAG 65", "BAG 71", "BAG 72", "BAG 74", "BAG 75", "BAG 76", "BAG 77", "BAG 80", "BAG 90", "BAG 93"]:
    manual_moves[bag] = "dried-decorations"

for bag in ["BAG 66", "BAG 70"]:
    manual_moves[bag] = "floral-supplies"

# 14. New moves requested at 8:05 PM
for bag in ["BAG 97", "BAG 98", "BAG 99", "BAG 100", "BAG 103", "BAG 107", "BAG 108", "BAG 112", "BAG 113", "BAG 114"]:
    manual_moves[bag] = "artificial-plants"

# 15. New moves requested at 8:13 PM
for bag in ["BAG 66", "BAG 70"]:
    manual_moves[bag] = "dried-decorations"
for bag in ["BAG 147", "BAG 180"]:
    manual_moves[bag] = "artificial-flower-bunches"

# 16. New moves requested at 11:17 PM
for bag in ["BAG 264", "BAG 265", "BAG 271", "BAG 272", "BAG 273", "BAG 274", "BAG 275", "BAG 276", "BAG 277", "BAG 278", "BAG 279"]:
    manual_moves[bag] = "artificial-flora"

# 17. New moves requested at 11:19 PM
manual_moves["BAG 86"] = "event-decor"

# 18. New moves requested at 11:21 PM
manual_moves["BAG 118"] = "artificial-flora"
manual_moves["BAG 282"] = "traditional-garlands"

# 19. New moves requested at 11:51 PM
manual_moves["BAG 289"] = "artificial-fruits"

# 20. New moves requested at 11:57 PM
manual_moves["BAG 243"] = "artificial-leaves"
manual_moves["BAG 246"] = "artificial-leaves"

# 21. New moves requested at 12:01 AM
manual_moves["BAG 145"] = "artificial-flora"
manual_moves["BAG 269"] = "artificial-flora"

# 22. New moves requested at 12:04 AM
manual_moves["BAG 247"] = "event-decor"

# 23. New moves requested at 12:06 AM
manual_moves["BAG 266"] = "artificial-flora"
manual_moves["BAG 267"] = "artificial-flora"

# 24. New moves requested at 12:10 AM
manual_moves["BAG 299"] = "artificial-flora"
manual_moves["BAG 302"] = "artificial-flora"

# 25. New moves requested at 12:13 AM
manual_moves["BAG 139"] = "artificial-leaves"

# 26. New moves requested at 12:17 AM
manual_moves["BAG 54"] = "artificial-leaves"

# 27. New moves requested at 12:21 AM
manual_moves["BAG 2"] = "floral-arrangements"
manual_moves["BAG 3"] = "floral-arrangements"
manual_moves["BAG 4"] = "floral-arrangements"
manual_moves["BAG 5"] = "floral-arrangements"
manual_moves["BAG 6"] = "floral-arrangements"
manual_moves["BAG 7"] = "floral-arrangements"

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

# 1. Update CSV Databases
for csv_file in [csv_path1, csv_path2]:
    if not os.path.exists(csv_file):
        continue
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames
        
    for row in rows:
        img_filename = row['Image Filename']
        img_num = img_filename.replace('.jpg', '')
        bag_id = f"BAG {img_num}"
        if bag_id in manual_moves:
            row['Category'] = manual_moves[bag_id]
            
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Updated CSV database: {os.path.basename(csv_file)}")

# 2. Update product.html Cards
with open(product_html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define replacement card mapping
def update_card(match):
    card = match.group(0)
    # Match using the image filename since it uniquely represents the original BAG ID
    img_match = re.search(r'src="assets/images/products/(\d+)\.jpg"', card)
    if img_match:
        img_num = img_match.group(1)
        bag_id = f"BAG {img_num}"
        if bag_id in manual_moves:
            slug = manual_moves[bag_id]
            display_name = categories_display_names.get(slug, slug.replace("-", " ").title())
            # Replace data-category
            card = re.sub(r'data-category="[^"]*"', f'data-category="{slug}"', card)
            # Replace uppercase category badge text (e.g. mb-2 font-semibold font-bold uppercase tracking-widest text-primary)
            card = re.sub(r'<div class="text-\[9px\] text-primary uppercase tracking-widest mb-2 font-semibold">.*?</div>', 
                          f'<div class="text-[9px] text-primary uppercase tracking-widest mb-2 font-semibold">{display_name}</div>', card)
    return card

content = re.sub(r'<div class="product-item product-card"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>', update_card, content, flags=re.DOTALL)

with open(product_html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated product.html product cards!")

print("=== Successfully completed master re-application script ===")
