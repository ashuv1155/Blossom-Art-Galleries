import os
from PIL import Image

def compress_product_images():
    prod_dir = '/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site/assets/images/products'
    if not os.path.exists(prod_dir):
        print(f"Error: Products directory {prod_dir} does not exist.")
        return
        
    print("Starting product image compression to WebP...")
    files = [f for f in os.listdir(prod_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    print(f"Found {len(files)} files to compress.")
    
    compressed_count = 0
    total_saved = 0
    
    for filename in files:
        base_name, ext = os.path.splitext(filename)
        src_path = os.path.join(prod_dir, filename)
        dest_path = os.path.join(prod_dir, f"{base_name}.webp")
        
        try:
            with Image.open(src_path) as img:
                # Convert to RGB if PNG has transparency (WebP handles RGBA, but RGB is smaller for photos)
                if img.mode in ('RGBA', 'LA') and ext.lower() == '.png':
                    # If it has alpha and we want to preserve transparency, convert to RGBA
                    # Product JPEGs don't have alpha, but let's be safe.
                    img.save(dest_path, 'WEBP', quality=80)
                else:
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    img.save(dest_path, 'WEBP', quality=80)
            
            orig_size = os.path.getsize(src_path)
            webp_size = os.path.getsize(dest_path)
            saved = orig_size - webp_size
            total_saved += saved
            compressed_count += 1
            
            if compressed_count % 30 == 0 or filename == files[-1]:
                print(f"Compressed {compressed_count}/{len(files)}: {filename} ({orig_size/1024:.1f}KB -> {webp_size/1024:.1f}KB)")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
            
    print(f"Product compression complete! Succeeded: {compressed_count}/{len(files)}")
    print(f"Total space saved on products: {total_saved / 1024 / 1024:.2f} MB")

def compress_root_images():
    root_img_dir = '/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site/assets/images'
    if not os.path.exists(root_img_dir):
        print(f"Error: Root images directory {root_img_dir} does not exist.")
        return
        
    print("\nStarting root image compression to WebP...")
    # List all PNGs and JPGs in the root assets/images folder (excluding products directory)
    files = [f for f in os.listdir(root_img_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    print(f"Found {len(files)} files in root images folder to compress.")
    
    compressed_count = 0
    total_saved = 0
    
    for filename in files:
        base_name, ext = os.path.splitext(filename)
        src_path = os.path.join(root_img_dir, filename)
        dest_path = os.path.join(root_img_dir, f"{base_name}.webp")
        
        try:
            with Image.open(src_path) as img:
                # If PNG has transparency, preserve RGBA mode so it loads beautifully
                if img.mode in ('RGBA', 'LA'):
                    img.save(dest_path, 'WEBP', quality=80)
                else:
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    img.save(dest_path, 'WEBP', quality=80)
            
            orig_size = os.path.getsize(src_path)
            webp_size = os.path.getsize(dest_path)
            saved = orig_size - webp_size
            total_saved += saved
            compressed_count += 1
            print(f"Compressed: {filename} ({orig_size/1024:.1f}KB -> {webp_size/1024:.1f}KB)")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
            
    print(f"Root images compression complete! Succeeded: {compressed_count}/{len(files)}")
    print(f"Total space saved on root assets: {total_saved / 1024 / 1024:.2f} MB")

def update_html_css_references():
    print("\nUpdating image references in HTML and CSS files to point to .webp...")
    root_dir = '/Users/ashutoshbalasahebtemgire/Desktop/Blossom-Art-Static-Site'
    
    # We will search for references to files that now have a .webp counterpart
    # E.g. assets/images/hero_new.png -> assets/images/hero_new.webp
    root_img_dir = os.path.join(root_dir, 'assets/images')
    root_images = [f for f in os.listdir(root_img_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    
    # Map from original name to webp name
    replacements = {}
    for filename in root_images:
        base_name, ext = os.path.splitext(filename)
        # Avoid mapping names that are too generic
        if len(base_name) > 3:
            replacements[filename] = f"{base_name}.webp"
            
    print("Mapping created for replacements:")
    for orig, webp in replacements.items():
        print(f"  {orig} -> {webp}")
        
    # Scan root folder for HTML and CSS files
    files_to_update = []
    for root, dirs, files in os.walk(root_dir):
        # Skip backup and hidden folders
        if '.git' in root or 'tools/backups' in root or '.gemini' in root:
            continue
        for file in files:
            if file.endswith(('.html', '.css', '.js')):
                files_to_update.append(os.path.join(root, file))
                
    updated_files_count = 0
    for file_path in files_to_update:
        # Don't update this compression script or backup files
        if 'compress_assets.py' in file_path or '.backup' in file_path or 'back_perf' in file_path:
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                
            original_content = content
            # Apply replacements
            for orig, webp in replacements.items():
                # Replace exact paths (like assets/images/hero_new.png)
                # We can do exact string replacements
                content = content.replace(f"assets/images/{orig}", f"assets/images/{webp}")
                content = content.replace(f"assets/images/products/{orig}", f"assets/images/products/{webp}")
                
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated references in: {os.path.basename(file_path)}")
                updated_files_count += 1
        except Exception as e:
            print(f"Failed to process references in {file_path}: {e}")
            
    print(f"References updated successfully in {updated_files_count} files!")

if __name__ == '__main__':
    compress_product_images()
    compress_root_images()
    update_html_css_references()
