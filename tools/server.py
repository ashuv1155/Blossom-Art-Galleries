import os
import json
import base64
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 8000

class AdminAPIHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching for development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_POST(self):
        if self.path == '/api/save-catalog':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                products = data.get('products', [])
                
                # Format code content
                js_content = f"// Blossom Art Galleries — Product Catalog Array\nconst PRODUCTS_DATA = {json.dumps(products, indent=2)};\n"
                
                # Resolve paths
                root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
                js_path = os.path.join(root_dir, 'assets', 'products-data.js')
                
                with open(js_path, 'w', encoding='utf-8') as f:
                    f.write(js_content)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'success', 'message': 'Catalog saved successfully'}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'message': str(e)}).encode('utf-8'))
                
        elif self.path == '/api/upload-image':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                filename = data.get('filename')
                image_b64 = data.get('image')
                
                if not filename or not image_b64:
                    raise ValueError("Filename or image data missing")
                
                # Decode image bytes
                image_data = base64.b64decode(image_b64)
                
                # Resolve path
                root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
                img_dir = os.path.join(root_dir, 'assets', 'images', 'products')
                os.makedirs(img_dir, exist_ok=True)
                img_path = os.path.join(img_dir, filename)
                
                with open(img_path, 'wb') as f:
                    f.write(image_data)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'success', 'message': f'Image {filename} saved successfully'}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'message': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def run(server_class=HTTPServer, handler_class=AdminAPIHandler):
    # Change working directory to project root so static files serve correctly
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    os.chdir(root_dir)
    
    server_address = ('', PORT)
    httpd = server_class(server_address, handler_class)
    print(f"\n=======================================================")
    print(f" Blossom Art Galleries — Local Dev Server is Running")
    print(f" URL: http://localhost:{PORT}/admin.html")
    print(f"=======================================================\n")
    print("Serving project files. Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    print("\nStopping server.")

if __name__ == '__main__':
    run()
