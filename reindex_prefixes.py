import csv
import re
import os

workspace_dir = "/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site"
csv_path1 = os.path.join(workspace_dir, "scanned_product_details.csv")
csv_path2 = os.path.join(workspace_dir, "assets/accurate_products.csv")
product_html_path = os.path.join(workspace_dir, "product.html")

print("=== Starting Master Re-indexing of Category Prefixes ===")

category_prefixes = {
    "artificial-flower-bunches": "BAG AFB",
    "artificial-green-wall-panel": "BAG AGWP",
    "traditional-garlands": "BAG TGH",
    "artificial-flora": "BAG AFL",
    "artificial-flowers": "BAG AF",
    "dried-decorations": "BAG DD",
    "artificial-plants": "BAG AP",
    "event-decor": "BAG ED",
    "artificial-leaves": "BAG AL",
    "floral-supplies": "BAG FS",
    "floral-arrangements": "BAG FA",
    "artificial-fruits": "BAG AFR"
}

# 1. Read scanned_product_details.csv
if not os.path.exists(csv_path1):
    print(f"Error: {csv_path1} does not exist!")
    exit(1)

with open(csv_path1, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    rows = list(reader)
    fieldnames = reader.fieldnames

# Group products by their current Category
by_category = {}
for r in rows:
    cat = r['Category']
    if cat not in by_category:
        by_category[cat] = []
    by_category[cat].append(r)

# Within each category, sort products by the numeric value of their image filename
for cat, items in by_category.items():
    items.sort(key=lambda x: int(re.search(r'\d+', x['Image Filename']).group()))

# Assign sequential Product IDs within each category and build mapping
mapping = {}
new_rows = []

print("\nAssigning new sequential IDs per category:")
for cat, prefix in category_prefixes.items():
    if cat not in by_category:
        print(f"  Category '{cat}' is currently empty (skipping).")
        continue
    items = by_category[cat]
    print(f"  Category '{cat}': assigning {prefix} 1 to {prefix} {len(items)}")
    for idx, item in enumerate(items, 1):
        old_id = item['Product ID']
        new_id = f"{prefix} {idx}"
        mapping[old_id] = new_id
        
        # Update details
        item['Product ID'] = new_id
        new_rows.append(item)

# Sort new_rows to match their original position or sort by numeric image sequence
new_rows.sort(key=lambda x: int(re.search(r'\d+', x['Image Filename']).group()))

# 2. Write back to BOTH CSV databases
for csv_file in [csv_path1, csv_path2]:
    if not os.path.exists(csv_file):
        continue
    with open(csv_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(new_rows)
    print(f"  Successfully updated CSV database: {os.path.basename(csv_file)}")

# 3. Update product.html Product ID References
if os.path.exists(product_html_path):
    with open(product_html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Sort old IDs by string length descending to prevent partial substring collision
    # e.g., "BAG ED 10" must be replaced before "BAG ED 1"
    sorted_old_ids = sorted(mapping.keys(), key=lambda x: len(x), reverse=True)

    replaced_count = 0
    for old_id in sorted_old_ids:
        new_id = mapping[old_id]
        
        # Build a robust regex targeting word boundaries for the multi-word product ID
        parts = old_id.split()
        pattern = r'\b' + r'\s+'.join(re.escape(p) for p in parts) + r'\b'
        
        html_content, count = re.subn(pattern, new_id, html_content)
        replaced_count += count

    with open(product_html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"  Successfully replaced {replaced_count} Product ID references in product.html!")

print("\n=== Master Prefix Re-indexing completed successfully! ===")
