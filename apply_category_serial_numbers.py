import csv
import re
import os
import shutil

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path1 = os.path.join(workspace_dir, "scanned_product_details.csv")
csv_path2 = os.path.join(workspace_dir, "assets/accurate_products.csv")
product_html_path = os.path.join(workspace_dir, "product.html")

print("=== Starting Custom Category-Specific Serial Numbering Migration ===")

# 1. Verify existence of files
if not os.path.exists(csv_path1):
    print(f"Error: CSV database not found at {csv_path1}")
    exit(1)

# 2. Define Category Slug to Prefix mapping
slug_to_prefix = {
    "artificial-flowers": "AF",
    "artificial-flower-bunches": "AFB",
    "artificial-green-wall-panel": "AGWP",
    "traditional-garlands": "TGH",
    "dried-decorations": "DD",
    "artificial-flora": "AFL",
    "artificial-plants": "AP",
    "event-decor": "ED",
    "floral-supplies": "FS",
    "artificial-leaves": "AL",
    "floral-arrangements": "FA",
    "artificial-fruits": "AFR"
}

# 3. Create absolute backups before making any edits
print("Creating backup files...")
shutil.copy2(csv_path1, csv_path1 + ".backup")
if os.path.exists(csv_path2):
    shutil.copy2(csv_path2, csv_path2 + ".backup")
if os.path.exists(product_html_path):
    shutil.copy2(product_html_path, product_html_path + ".backup")
print("Backups created successfully.")

# 4. Read products from master CSV
products = []
with open(csv_path1, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    for row in reader:
        products.append(row)

# 5. Group products by Category and sort each group by original Product ID number
# Original product ID format is "BAG <num>"
grouped_products = {}
for p in products:
    cat = p['Category'].strip()
    if cat not in grouped_products:
        grouped_products[cat] = []
    grouped_products[cat].append(p)

# Create a mapping of old Product ID to new category serial ID
mapping = {}
for cat_slug, cat_prods in grouped_products.items():
    prefix = slug_to_prefix.get(cat_slug, "BAG")
    
    # Sort products inside the category by their numeric ID to maintain sequence
    def get_numeric_id(row):
        pid = row['Product ID']
        match = re.search(r'\d+', pid)
        return int(match.group()) if match else 999
        
    cat_prods.sort(key=get_numeric_id)
    
    # Generate new category serial numbers
    for idx, p in enumerate(cat_prods):
        new_serial = f"BAG {prefix} {idx + 1}"
        old_id = p['Product ID'].strip()
        mapping[old_id] = new_serial
        print(f"  Mapping: {old_id} -> {new_serial} ({cat_slug})")

# 6. Update CSV databases
print("Updating CSV databases...")
for csv_file in [csv_path1, csv_path2]:
    if not os.path.exists(csv_file):
        continue
        
    # Read all rows
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        
    # Update rows with new Product ID
    for row in rows:
        old_id = row['Product ID'].strip()
        if old_id in mapping:
            row['Product ID'] = mapping[old_id]
            
    # Write back to CSV
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"  Successfully updated {os.path.basename(csv_file)}")

# 7. Update product.html Catalog Cards
print("Updating product.html product cards...")
with open(product_html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replacing badges and data-prod-id attributes inside each card
# Badge pattern: <div class="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-md">BAG \d+</div>
# Button pattern: data-prod-id="BAG \d+"

def replace_card_ids(match):
    card = match.group(0)
    # Find numeric ID
    bag_match = re.search(r'BAG\s+(\d+)', card)
    if bag_match:
        old_id = f"BAG {bag_match.group(1)}"
        if old_id in mapping:
            new_id = mapping[old_id]
            # Replace visible badge
            card = re.sub(rf'BAG\s+{bag_match.group(1)}\b', new_id, card)
            # Replace data-prod-id in both WhatsApp buttons
            card = card.replace(f'data-prod-id="{old_id}"', f'data-prod-id="{new_id}"')
    return card

# Regex matching the product items
content_updated = re.sub(r'<div class="product-item product-card"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>', replace_card_ids, content, flags=re.DOTALL)

with open(product_html_path, 'w', encoding='utf-8') as f:
    f.write(content_updated)

print("  Successfully updated product.html product cards!")
print("=== Custom Serial Numbering Migration Completed Flawlessly ===")
