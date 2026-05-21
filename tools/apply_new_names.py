import csv
import re
import os

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path1 = os.path.join(workspace_dir, "scanned_product_details.csv")
csv_path2 = os.path.join(workspace_dir, "assets/accurate_products.csv")
product_html_path = os.path.join(workspace_dir, "product.html")

# 1. Parse markdown table
name_map = {}
with open('new_names.md', 'r') as f:
    for line in f:
        line = line.strip()
        if line.startswith('| BAG'):
            parts = line.split('|')
            if len(parts) >= 3:
                bag_id = parts[1].strip()
                name = parts[2].strip()
                name_map[bag_id] = name

print(f"Loaded {len(name_map)} name mappings.")

# 2. Update CSVs
for csv_file in [csv_path1, csv_path2]:
    if not os.path.exists(csv_file):
        continue
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames
        
    updated_count = 0
    for row in rows:
        b_id = row['Product ID']
        if b_id in name_map:
            row['Product Name'] = name_map[b_id]
            updated_count += 1
            
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Updated {updated_count} names in {csv_file}")

# 3. Update product.html
with open(product_html_path, 'r', encoding='utf-8') as f:
    content = f.read()

def update_card(match):
    card = match.group(0)
    bag_match = re.search(r'BAG\s+(\d+)', card)
    if bag_match:
        bag_id = f"BAG {bag_match.group(1)}"
        if bag_id in name_map:
            new_name = name_map[bag_id]
            # Update alt tag
            card = re.sub(r'alt="[^"]*"', f'alt="{new_name}"', card)
            # Update data-prod-name in any buttons
            card = re.sub(r'data-prod-name="[^"]*"', f'data-prod-name="{new_name}"', card)
            # Update h3 Title
            card = re.sub(r'<h3 class="font-serif font-bold text-gray-900 text-lg mb-2 leading-snug">.*?</h3>', f'<h3 class="font-serif font-bold text-gray-900 text-lg mb-2 leading-snug">{new_name}</h3>', card, flags=re.DOTALL)
    return card

# Regex that matches the product-item cards
card_pattern = r'<div class="product-item product-card"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>'
content, count = re.subn(card_pattern, update_card, content, flags=re.DOTALL)
print(f"Updated {count} product cards in product.html.")

with open(product_html_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated product.html product names!")

print("SUCCESS! Completed all name updates.")
