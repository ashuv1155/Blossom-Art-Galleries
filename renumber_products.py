import os
import csv
import re
import shutil

# Paths
csv_path1 = 'scanned_product_details.csv'
csv_path2 = 'assets/accurate_products.csv'
html_path = 'product.html'
images_dir = 'assets/images/products'
unused_dir = os.path.join(images_dir, 'unused')

# 1. Create unused dir
os.makedirs(unused_dir, exist_ok=True)

# 2. Read current products
products = []
with open(csv_path1, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Extract numeric ID
        old_id = int(re.search(r'\d+', row['Product ID']).group())
        products.append({
            'old_id': old_id,
            'row': row
        })

# Sort by old_id just to be sure
products.sort(key=lambda x: x['old_id'])

# 3. Create mapping and rename images
mapping = {}
for i, p in enumerate(products):
    new_id = i + 1
    mapping[p['old_id']] = new_id

# Move unused images to unused_dir to avoid collisions
all_images = [f for f in os.listdir(images_dir) if f.endswith('.jpg') and not f.startswith('.')]
used_images = {f"{p['old_id']}.jpg" for p in products}

moved_unused = 0
for img in all_images:
    if img not in used_images:
        src = os.path.join(images_dir, img)
        dst = os.path.join(unused_dir, img)
        shutil.move(src, dst)
        moved_unused += 1

# Rename used images. Use a temporary suffix to avoid collisions during rename
renamed_count = 0
for old_id, new_id in mapping.items():
    if old_id != new_id:
        old_path = os.path.join(images_dir, f"{old_id}.jpg")
        temp_path = os.path.join(images_dir, f"temp_{new_id}.jpg")
        if os.path.exists(old_path):
            os.rename(old_path, temp_path)

for old_id, new_id in mapping.items():
    if old_id != new_id:
        temp_path = os.path.join(images_dir, f"temp_{new_id}.jpg")
        final_path = os.path.join(images_dir, f"{new_id}.jpg")
        if os.path.exists(temp_path):
            os.rename(temp_path, final_path)
            renamed_count += 1

# 4. Update CSVs
fieldnames = ["Product ID", "Image Filename", "Product Name", "Category", "Description"]
for csv_file in [csv_path1, csv_path2]:
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for p in products:
            new_id = mapping[p['old_id']]
            row = p['row'].copy()
            row['Product ID'] = f"BAG {new_id}"
            row['Image Filename'] = f"{new_id}.jpg"
            writer.writerow(row)

# 5. Update product.html
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

def replace_card(match):
    card = match.group(0)
    bag_match = re.search(r'BAG\s+(\d+)', card)
    if bag_match:
        old_id = int(bag_match.group(1))
        if old_id in mapping:
            new_id = mapping[old_id]
            # Replace BAG <old_id> specifically (badge and data-prod-id)
            card = re.sub(rf'BAG\s+{old_id}\b', f'BAG {new_id}', card)
            # Replace <old_id>.jpg (image src)
            card = re.sub(rf'/{old_id}\.jpg\b', f'/{new_id}.jpg', card)
    return card

# The regex should match the entire product card div
new_html_content = re.sub(r'<div class="[^"]*product-item[^"]*"[^>]*>.*?</h3>.*?</div>\s*</div>\s*</div>\s*</div>', replace_card, html_content, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_html_content)

print(f"Moved {moved_unused} unused images to unused folder.")
print(f"Renamed {renamed_count} images to new sequential IDs.")
print(f"Successfully renumbered products from 1 to {len(products)}.")
