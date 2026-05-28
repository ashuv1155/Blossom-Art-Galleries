// Blossom Art Galleries — Product Catalog Array
const PRODUCTS_DATA = [
  {
    "id": "BAG ED 1",
    "name": "Green Floral Wire Support Sticks / Flower Sticks",
    "category": "event-decor",
    "image": "assets/images/products/1.webp",
    "alt": "Green Floral Wire Support Sticks / Flower Sticks",
    "description": "Bundle of sturdy green-coated floral wire sticks designed to support and reinforce flower stems."
  },
  {
    "id": "BAG FA 7",
    "name": "Peach, Pink, and Cream Rose Table Runner",
    "category": "floral-arrangements",
    "image": "assets/images/products/2.webp",
    "alt": "Peach, Pink, and Cream Rose Table Runner",
    "description": "A lush artificial floral runner featuring mixed peach roses and dense green foliage for table decor."
  },
  {
    "id": "BAG FA 8",
    "name": "Artificial White Wildflower Hedge / Wall Border Panel",
    "category": "floral-arrangements",
    "image": "assets/images/products/3.webp",
    "alt": "Artificial White Wildflower Hedge / Wall Border Panel",
    "description": "A dense rectangular arrangement of white artificial wildflowers and green ferns ideal for wall or floor borders."
  },
  {
    "id": "BAG FA 9",
    "name": "Blue, Pink, and White Mixed Floral Runner / Floral Bed",
    "category": "floral-arrangements",
    "image": "assets/images/products/4.webp",
    "alt": "Blue, Pink, and White Mixed Floral Runner / Floral Bed",
    "description": "A vibrant mix of blue hydrangeas, white carnations, and pink lilies accented with silver-white leaf sprays."
  },
  {
    "id": "BAG FA 4",
    "name": "Classic White and Cream Rose Floral Runner",
    "category": "floral-arrangements",
    "image": "assets/images/products/5.webp",
    "alt": "Classic White and Cream Rose Floral Runner",
    "description": "Elegant long-form arrangement of premium white roses and eucalyptus leaves for wedding aisles or tables."
  },
  {
    "id": "BAG FA 5",
    "name": "Mixed Pink Peony and White Rose Runner with Dried Palm Fans",
    "category": "floral-arrangements",
    "image": "assets/images/products/6.webp",
    "alt": "Mixed Pink Peony and White Rose Runner with Dried Palm Fans",
    "description": "Luxury floral runner featuring deep pink peonies, white roses, and metallic gold palm fan accents."
  },
  {
    "id": "BAG FA 6",
    "name": "Mixed Pink and Hot Pink Rose Flower Wall Panel",
    "category": "floral-arrangements",
    "image": "assets/images/products/7.webp",
    "alt": "Mixed Pink and Hot Pink Rose Flower Wall Panel",
    "description": "A vibrant high-density arrangement of hot pink, soft pink, and peach roses with dark green leaves."
  },
  {
    "id": "BAG TGH 1",
    "name": "Artificial White Mogra (Jasmine) Hanging Garlands / Laris",
    "category": "traditional-garlands",
    "image": "assets/images/products/8.webp",
    "alt": "Artificial White Mogra (Jasmine) Hanging Garlands / Laris",
    "description": "Traditional long hanging strings of artificial white jasmine buds used for festive and wedding backdrops."
  },
  {
    "id": "BAG TGH 2",
    "name": "Artificial Marigold (Genda Phool) and Mango Leaf Toran / Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/9.webp",
    "alt": "Artificial Marigold (Genda Phool) and Mango Leaf Toran / Garland",
    "description": "Heavy artificial marigold garland featuring alternating thick bands of yellow and white flowers with bell accents."
  },
  {
    "id": "BAG TGH 3",
    "name": "Multi-Color Orchid and Wisteria Hanging Floral Vines",
    "category": "traditional-garlands",
    "image": "assets/images/products/10.webp",
    "alt": "Multi-Color Orchid and Wisteria Hanging Floral Vines",
    "description": "Layered strands of artificial orchids and small blossoms in white, pink, and magenta for vertical floral walls."
  },
  {
    "id": "BAG TGH 4",
    "name": "Mixed Festive Marigold and Rose Petal Hanging Garlands",
    "category": "traditional-garlands",
    "image": "assets/images/products/11.webp",
    "alt": "Mixed Festive Marigold and Rose Petal Hanging Garlands",
    "description": "A vibrant assortment of layered artificial floral garlands in pink, white, and yellow for festive backdrops."
  },
  {
    "id": "BAG TGH 5",
    "name": "White Mogra Jasmine Garland with Pink Lotus Bud Tassels",
    "category": "traditional-garlands",
    "image": "assets/images/products/12.webp",
    "alt": "White Mogra Jasmine Garland with Pink Lotus Bud Tassels",
    "description": "Elegant white jasmine-style strings finished with vibrant pink lotus bud tassels and green accents."
  },
  {
    "id": "BAG TGH 6",
    "name": "Long White Jasmine String Garland with Pink Lotus Bud Base",
    "category": "traditional-garlands",
    "image": "assets/images/products/13.webp",
    "alt": "Long White Jasmine String Garland with Pink Lotus Bud Base",
    "description": "Traditional 3-foot long artificial white floral strings featuring decorative pink lotus buds at the base."
  },
  {
    "id": "BAG TGH 7",
    "name": "Yellow Marigold and White Jasmine Festive Toran / Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/14.webp",
    "alt": "Yellow Marigold and White Jasmine Festive Toran / Garland",
    "description": "A thick, high-quality artificial garland with alternating yellow marigold and white jasmine bands and gold bell finishes."
  },
  {
    "id": "BAG TGH 8",
    "name": "Thick White Jasmine Flower Garland with Pink Lotus Bud Border",
    "category": "traditional-garlands",
    "image": "assets/images/products/15.webp",
    "alt": "Thick White Jasmine Flower Garland with Pink Lotus Bud Border",
    "description": "Compact 2-foot artificial white jasmine-style garland accented with bright pink lotus bud ends."
  },
  {
    "id": "BAG TGH 9",
    "name": "Layered Yellow Marigold and White Mogra Striped Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/16.webp",
    "alt": "Layered Yellow Marigold and White Mogra Striped Garland",
    "description": "Bold artificial garland featuring alternating sections of fluffy yellow marigold and white jasmine blossoms."
  },
  {
    "id": "BAG TGH 10",
    "name": "Tiered White Jasmine Garland with Pink Lotus Bud Segments",
    "category": "traditional-garlands",
    "image": "assets/images/products/17.webp",
    "alt": "Tiered White Jasmine Garland with Pink Lotus Bud Segments",
    "description": "A decorative hanging featuring multiple tiers of bright pink lotus buds separated by white jasmine-style bands."
  },
  {
    "id": "BAG TGH 11",
    "name": "Red/Magenta and White Rose Petal Striped Hanging Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/18.webp",
    "alt": "Red/Magenta and White Rose Petal Striped Hanging Garland",
    "description": "Vibrant magenta and white artificial floral garland with delicate green leaf separators for a striped effect."
  },
  {
    "id": "BAG TGH 12",
    "name": "Red and White Patterned Artificial Blossom Garland / Haar",
    "category": "traditional-garlands",
    "image": "assets/images/products/19.webp",
    "alt": "Red and White Patterned Artificial Blossom Garland / Haar",
    "description": "Traditional red and white artificial blossom garland designed with clean, alternating color blocks."
  },
  {
    "id": "BAG TGH 13",
    "name": "Multi-Tiered Yellow Marigold and Magenta Rose Festive Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/20.webp",
    "alt": "Multi-Tiered Yellow Marigold and Magenta Rose Festive Garland",
    "description": "Elaborate festive garland mixing yellow marigolds, white jasmine, and magenta roses with gold bell tassels."
  },
  {
    "id": "BAG TGH 14",
    "name": "Dual-Tone Vertical Split Yellow and Orange Marigold Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/21.webp",
    "alt": "Dual-Tone Vertical Split Yellow and Orange Marigold Garland",
    "description": "A vibrant hanging garland featuring vertical splits of yellow and orange artificial marigold blossoms with gold bell accents."
  },
  {
    "id": "BAG TGH 15",
    "name": "Alternating Yellow Marigold and Red Blossom Tiered Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/22.webp",
    "alt": "Alternating Yellow Marigold and Red Blossom Tiered Garland",
    "description": "A festive artificial garland designed with alternating thick blocks of red and yellow flowers and decorative tassel ends."
  },
  {
    "id": "BAG TGH 16",
    "name": "Cream White and Red Festive Blossom Hanging Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/23.webp",
    "alt": "Cream White and Red Festive Blossom Hanging Garland",
    "description": "A long artificial floral string featuring alternating segments of cream-colored blossoms and bright red petals."
  },
  {
    "id": "BAG TGH 17",
    "name": "Artificial Dense Leafy Green Foliage Garland / Lari",
    "category": "traditional-garlands",
    "image": "assets/images/products/24.webp",
    "alt": "Artificial Dense Leafy Green Foliage Garland / Lari",
    "description": "A lush 5-foot artificial garland composed of dense, small green foliage for a natural decorative look."
  },
  {
    "id": "BAG TGH 18",
    "name": "Vibrant Orange Artificial Marigold / Genda Phool Garland Strings",
    "category": "traditional-garlands",
    "image": "assets/images/products/25.webp",
    "alt": "Vibrant Orange Artificial Marigold / Genda Phool Garland Strings",
    "description": "A long 5-foot artificial flower string in a bright, festive orange hue perfect for traditional decor."
  },
  {
    "id": "BAG TGH 19",
    "name": "Soft Baby Pink Artificial Blossom Hanging Garland Strings",
    "category": "traditional-garlands",
    "image": "assets/images/products/26.webp",
    "alt": "Soft Baby Pink Artificial Blossom Hanging Garland Strings",
    "description": "A soft baby pink artificial floral garland measuring 5 feet, ideal for weddings and delicate themes."
  },
  {
    "id": "BAG TGH 20",
    "name": "Classic Deep Red Artificial Blossom Hanging Garland Strings",
    "category": "traditional-garlands",
    "image": "assets/images/products/27.webp",
    "alt": "Classic Deep Red Artificial Blossom Hanging Garland Strings",
    "description": "A traditional 5-foot artificial garland in deep red blossoms for festive and celebratory backdrops."
  },
  {
    "id": "BAG TGH 21",
    "name": "Orange Marigold and White Mogra Jasmine Striped Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/28.webp",
    "alt": "Orange Marigold and White Mogra Jasmine Striped Garland",
    "description": "An artificial hanging garland featuring alternating sections of fluffy orange marigolds and white jasmine blossoms."
  },
  {
    "id": "BAG TGH 22",
    "name": "Vibrant Rani Pink Artificial Blossom Hanging Garland Strings",
    "category": "traditional-garlands",
    "image": "assets/images/products/29.webp",
    "alt": "Vibrant Rani Pink Artificial Blossom Hanging Garland Strings",
    "description": "A 5-foot artificial floral garland in a bold Rani pink shade, perfect for vibrant cultural celebrations."
  },
  {
    "id": "BAG TGH 23",
    "name": "Assorted Multi-Color Artificial Blossom Hanging Garlands",
    "category": "traditional-garlands",
    "image": "assets/images/products/30.webp",
    "alt": "Assorted Multi-Color Artificial Blossom Hanging Garlands",
    "description": "A display of long artificial floral garlands in various colors including pink, red, yellow, white, and green."
  },
  {
    "id": "BAG TGH 24",
    "name": "Mixed Multi-Color Festive Patterned Garlands with Jasmine Accents",
    "category": "traditional-garlands",
    "image": "assets/images/products/31.webp",
    "alt": "Mixed Multi-Color Festive Patterned Garlands with Jasmine Accents",
    "description": "A vibrant set of artificial floral garlands featuring alternating blocks of orange, pink, red, and yellow with white jasmine-style bands."
  },
  {
    "id": "BAG TGH 25",
    "name": "Dense Dark Green Artificial Leafy Foliage Garland / Lari",
    "category": "traditional-garlands",
    "image": "assets/images/products/32.webp",
    "alt": "Dense Dark Green Artificial Leafy Foliage Garland / Lari",
    "description": "A full 5-foot artificial garland crafted with dense dark green foliage for a lush, natural appearance."
  },
  {
    "id": "BAG TGH 26",
    "name": "Dual-Tone Orange and Yellow Marigold Split Garland with Tassel",
    "category": "traditional-garlands",
    "image": "assets/images/products/33.webp",
    "alt": "Dual-Tone Orange and Yellow Marigold Split Garland with Tassel",
    "description": "A traditional vertical-split garland featuring fluffy orange and yellow artificial marigolds with decorative gold bell tassels."
  },
  {
    "id": "BAG TGH 27",
    "name": "Cream/Light Yellow Marigold and White Jasmine Festive Toran Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/34.webp",
    "alt": "Cream/Light Yellow Marigold and White Jasmine Festive Toran Garland",
    "description": "A thick artificial garland blending cream marigold sections with white jasmine bands and elegant bell accents."
  },
  {
    "id": "BAG TGH 28",
    "name": "Tri-Color Mixed Floral Garland Assortment",
    "category": "traditional-garlands",
    "image": "assets/images/products/35.webp",
    "alt": "Tri-Color Mixed Floral Garland Assortment",
    "description": "A decorative collection of garlands featuring vibrant pink, orange, and yellow blossoms layered with white floral spacers."
  },
  {
    "id": "BAG TGH 29",
    "name": "White and Soft Pink Cherry Blossom Hanging Vines",
    "category": "traditional-garlands",
    "image": "assets/images/products/36.webp",
    "alt": "White and Soft Pink Cherry Blossom Hanging Vines",
    "description": "Elegant hanging vines of artificial cherry blossoms in soft white and gradient pink for romantic event decor."
  },
  {
    "id": "BAG TGH 30",
    "name": "Cream White Artificial Jasmine / Mogra Hanging Garland Strings",
    "category": "traditional-garlands",
    "image": "assets/images/products/37.webp",
    "alt": "Cream White Artificial Jasmine / Mogra Hanging Garland Strings",
    "description": "A long 5-foot artificial jasmine-style garland in a classic cream white, perfect for traditional ceremonies."
  },
  {
    "id": "BAG TGH 31",
    "name": "Triple-Tone Orange, Yellow, and White Festive Marigold Garland Set",
    "category": "traditional-garlands",
    "image": "assets/images/products/38.webp",
    "alt": "Triple-Tone Orange, Yellow, and White Festive Marigold Garland Set",
    "description": "A large-scale decorative set featuring dense bands of light yellow, bright orange, and golden yellow artificial flowers."
  },
  {
    "id": "BAG TGH 32",
    "name": "Purple, Yellow, and White Patterned Festive Marigold Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/39.webp",
    "alt": "Purple, Yellow, and White Patterned Festive Marigold Garland",
    "description": "A unique festive garland featuring deep purple floral sections contrasted against bright yellow marigolds and green accents."
  },
  {
    "id": "BAG TGH 33",
    "name": "Assorted Festive Tiered Garlands with Bottom Tassels",
    "category": "traditional-garlands",
    "image": "assets/images/products/40.webp",
    "alt": "Assorted Festive Tiered Garlands with Bottom Tassels",
    "description": "A sophisticated artificial garland with alternating maroon and white floral segments accented by yellow marigold rings."
  },
  {
    "id": "BAG TGH 34",
    "name": "Loose Multi-Color Artificial Marigold Flower Heads",
    "category": "traditional-garlands",
    "image": "assets/images/products/41.webp",
    "alt": "Loose Multi-Color Artificial Marigold Flower Heads",
    "description": "A collection of high-density artificial marigold flower heads in white, orange, yellow, magenta, red, and green."
  },
  {
    "id": "BAG AF 1",
    "name": "Triple-Head Artificial Sunflower Faux Stem",
    "category": "artificial-flowers",
    "image": "assets/images/products/42.webp",
    "alt": "Triple-Head Artificial Sunflower Faux Stem",
    "description": "A realistic silk sunflower branch featuring three graduated yellow blossom heads and green leaves."
  },
  {
    "id": "BAG AF 2",
    "name": "Artificial Pink Lotus Stem with Closed Bud and Green Leaves",
    "category": "artificial-flowers",
    "image": "assets/images/products/43.webp",
    "alt": "Artificial Pink Lotus Stem with Closed Bud and Green Leaves",
    "description": "A realistic artificial lotus stem featuring two open pink blossoms, a closed bud, and broad green leaves."
  },
  {
    "id": "BAG AF 3",
    "name": "Deep Burgundy Artificial Rose Stem",
    "category": "artificial-flowers",
    "image": "assets/images/products/44.webp",
    "alt": "Deep Burgundy Artificial Rose Stem",
    "description": "An elegant long-stemmed artificial branch with multiple velvet-textured roses in a rich burgundy wine shade."
  },
  {
    "id": "BAG AF 4",
    "name": "Mixed Blue, White, and Magenta Orchid Hanging Sprays / Vines",
    "category": "artificial-flowers",
    "image": "assets/images/products/45.webp",
    "alt": "Mixed Blue, White, and Magenta Orchid Hanging Sprays / Vines",
    "description": "Decorative hanging floral sprays available in vibrant shades of royal blue, classic white, and magenta pink."
  },
  {
    "id": "BAG AF 5",
    "name": "Mixed Artificial Lotus Bud Stems",
    "category": "artificial-flowers",
    "image": "assets/images/products/46.webp",
    "alt": "Mixed Artificial Lotus Bud Stems",
    "description": "A collection of artificial aquatic floral stems featuring lotus buds in yellow, pink, and white with green sepals."
  },
  {
    "id": "BAG AF 6",
    "name": "Multi-Head Artificial Sunflower Stem / Branch",
    "category": "artificial-flowers",
    "image": "assets/images/products/47.webp",
    "alt": "Multi-Head Artificial Sunflower Stem / Branch",
    "description": "A lush artificial sunflower stem featuring five bright yellow blossom heads and detailed green foliage."
  },
  {
    "id": "BAG AF 7",
    "name": "Single Artificial Pink Lotus Flower Stem with Leaf",
    "category": "artificial-flowers",
    "image": "assets/images/products/48.webp",
    "alt": "Single Artificial Pink Lotus Flower Stem with Leaf",
    "description": "A realistic artificial lotus stem featuring two open pink blossoms, a closed bud, and broad green leaves.",
    "unlisted": false
  },
  {
    "id": "BAG FA 7",
    "name": "Long Artificial Pink and White Cherry Blossom Stems / Branches",
    "category": "event-decor",
    "image": "assets/images/products/49.webp",
    "alt": "Long Artificial Pink and White Cherry Blossom Stems / Branches",
    "description": "Tall artificial branches dense with delicate cherry blossom petals available in soft pink and pure white."
  },
  {
    "id": "BAG FA 8",
    "name": "Pastel Artificial Delphinium / Cherry Blossom Floral Sprays",
    "category": "event-decor",
    "image": "assets/images/products/50.webp",
    "alt": "Pastel Artificial Delphinium / Cherry Blossom Floral Sprays",
    "description": "A colorful assortment of artificial cherry blossom sprays in aqua blue, pink, lilac, white, and peach."
  },
  {
    "id": "BAG FA 9",
    "name": "Vibrant Artificial Gladiolus / Snapdragon Flower Stems",
    "category": "event-decor",
    "image": "assets/images/products/51.webp",
    "alt": "Vibrant Artificial Gladiolus / Snapdragon Flower Stems",
    "description": "Tall artificial floral spikes featuring dense blossoms in royal blue, white, pink, lavender, and bright red."
  },
  {
    "id": "BAG FA 4",
    "name": "38-Inch Artificial Cherry Blossom Flower Branches",
    "category": "event-decor",
    "image": "assets/images/products/52.webp",
    "alt": "38-Inch Artificial Cherry Blossom Flower Branches",
    "description": "Premium 38-inch artificial flowering branches available in a variety of vibrant colors including mint, pink, white, and red."
  },
  {
    "id": "BAG FA 5",
    "name": "Decorative Dried Feather and Faux Gold Leaf Stems",
    "category": "event-decor",
    "image": "assets/images/products/53.webp",
    "alt": "Decorative Dried Feather and Faux Gold Leaf Stems",
    "description": "Elegant artificial stems featuring layered cream and reddish-brown feathers with gold leaf accents."
  },
  {
    "id": "BAG AL 8",
    "name": "Colorful Faux Teardrop Leaf Sprays / Branch Bunches",
    "category": "artificial-leaves",
    "image": "assets/images/products/54.webp",
    "alt": "Colorful Faux Teardrop Leaf Sprays / Branch Bunches",
    "description": "Vibrant bunches of artificial teardrop leaves available in white, red, magenta, orange, and pink hues."
  },
  {
    "id": "BAG DD 1",
    "name": "Natural Dried Palm Leaves / Cut Palm Spears on Sticks",
    "category": "dried-decorations",
    "image": "assets/images/products/55.webp",
    "alt": "Natural Dried Palm Leaves / Cut Palm Spears on Sticks",
    "description": "Natural dried palm leaves trimmed into sharp spear shapes for a modern, rustic aesthetic."
  },
  {
    "id": "BAG DD 2",
    "name": "Fluffy Beige/White Faux Pampas Grass Plume",
    "category": "dried-decorations",
    "image": "assets/images/products/56.webp",
    "alt": "Fluffy Beige/White Faux Pampas Grass Plume",
    "description": "A large, fluffy white pampas grass plume perfect for minimalist and boho-style arrangements."
  },
  {
    "id": "BAG DD 3",
    "name": "Bulk Pack Fluffy Natural Pampas Grass Bundles",
    "category": "dried-decorations",
    "image": "assets/images/products/57.webp",
    "alt": "Bulk Pack Fluffy Natural Pampas Grass Bundles",
    "description": "Large quantities of dried, natural-toned pampas grass plumes ready for event decor."
  },
  {
    "id": "BAG DD 4",
    "name": "Large Natural Heart-Shaped Dried Palm Leaf Fan",
    "category": "dried-decorations",
    "image": "assets/images/products/58.webp",
    "alt": "Large Natural Heart-Shaped Dried Palm Leaf Fan",
    "description": "A single oversized dried palm leaf featuring a natural fan-shaped structure and sturdy stem."
  },
  {
    "id": "BAG DD 5",
    "name": "Miniature Natural Dried Palm Spears",
    "category": "dried-decorations",
    "image": "assets/images/products/59.webp",
    "alt": "Miniature Natural Dried Palm Spears",
    "description": "Smaller-scale dried palm spears with light natural tones ideal for tabletop vase arrangements."
  },
  {
    "id": "BAG AF 8",
    "name": "Handmade Cream Sola Wood Flower Head / Rose",
    "category": "artificial-flowers",
    "image": "assets/images/products/60.webp",
    "alt": "Handmade Cream Sola Wood Flower Head / Rose",
    "description": "A delicate, handcrafted flower made from sustainable sola wood in a soft cream finish."
  },
  {
    "id": "BAG FA 6",
    "name": "Assorted Painted / Dyed Dried Palm Fan Leaves",
    "category": "event-decor",
    "image": "assets/images/products/61.webp",
    "alt": "Assorted Painted / Dyed Dried Palm Fan Leaves",
    "description": "Sturdy dried palm fans available in a variety of dyed colors including green, yellow, pink, and terracotta."
  },
  {
    "id": "BAG FS 1",
    "name": "Woven Wicker Rattan Decorative Spheres / Balls",
    "category": "floral-supplies",
    "image": "assets/images/products/62.webp",
    "alt": "Woven Wicker Rattan Decorative Spheres / Balls",
    "description": "Hand-woven natural wicker balls ideal for rustic bowl fillers or hanging decor."
  },
  {
    "id": "BAG FA 7",
    "name": "Dyed Dried Wheat Stalk Bundles / Preserved Grass",
    "category": "event-decor",
    "image": "assets/images/products/63.webp",
    "alt": "Dyed Dried Wheat Stalk Bundles / Preserved Grass",
    "description": "Natural dried wheat stalks available in vibrant red, yellow, and green dyes for seasonal arrangements."
  },
  {
    "id": "BAG DD 6",
    "name": "Wide Natural Fan-Cut Dried Palm Leaves on Sticks",
    "category": "dried-decorations",
    "image": "assets/images/products/64.webp",
    "alt": "Wide Natural Fan-Cut Dried Palm Leaves on Sticks",
    "description": "Wide, dried fan palm leaves with sharp architectural lines for tropical-themed decor."
  },
  {
    "id": "BAG DD 7",
    "name": "Bleached White Trimmed Dried Palm Spear",
    "category": "dried-decorations",
    "image": "assets/images/products/65.webp",
    "alt": "Bleached White Trimmed Dried Palm Spear",
    "description": "A single, meticulously trimmed dried palm leaf in a sharp spear shape for modern floral design."
  },
  {
    "id": "BAG DD 8",
    "name": "Metallic Gold Painted Dried Palm Spear Leaf",
    "category": "dried-decorations",
    "image": "assets/images/products/66.webp",
    "alt": "Metallic Gold Painted Dried Palm Spear Leaf",
    "description": "A premium dried palm spear finished with a luxurious metallic gold coating for high-end events."
  },
  {
    "id": "BAG FS 2",
    "name": "Hand-Twisted Natural Vine Willow Wreath Ring Base",
    "category": "floral-supplies",
    "image": "assets/images/products/67.webp",
    "alt": "Hand-Twisted Natural Vine Willow Wreath Ring Base",
    "description": "A sturdy, hand-twisted natural vine wreath frame perfect for DIY floral projects."
  },
  {
    "id": "BAG FS 3",
    "name": "Woven Split Bamboo Mesh Decorative Pot / Sphere Vase",
    "category": "floral-supplies",
    "image": "assets/images/products/68.webp",
    "alt": "Woven Split Bamboo Mesh Decorative Pot / Sphere Vase",
    "description": "A fine-meshed decorative bamboo globe crafted from natural split wood."
  },
  {
    "id": "BAG FS 4",
    "name": "Round Natural Sola Wood Balls / Flower Shell Craft Bases",
    "category": "floral-supplies",
    "image": "assets/images/products/69.webp",
    "alt": "Round Natural Sola Wood Balls / Flower Shell Craft Bases",
    "description": "Bulk packs of smooth, round sola wood shells used as bases for handcrafted artificial flowers."
  },
  {
    "id": "BAG DD 9",
    "name": "Oversized Metallic Gold Painted Dried Palm Fan Leaves",
    "category": "dried-decorations",
    "image": "assets/images/products/70.webp",
    "alt": "Oversized Metallic Gold Painted Dried Palm Fan Leaves",
    "description": "Oversized dried palm fans painted in a shimmering gold finish for grand event backdrops."
  },
  {
    "id": "BAG DD 10",
    "name": "Fluffy Bleached White Faux Pampas Grass Plumes / Stalks",
    "category": "dried-decorations",
    "image": "assets/images/products/71.webp",
    "alt": "Fluffy Bleached White Faux Pampas Grass Plumes / Stalks",
    "description": "Long-stemmed, fluffy pampas grass plumes in a clean bleached white for minimalist decor."
  },
  {
    "id": "BAG DD 11",
    "name": "Single Long-Stemmed Light Beige Natural Pampas Grass Plume",
    "category": "dried-decorations",
    "image": "assets/images/products/72.webp",
    "alt": "Single Long-Stemmed Light Beige Natural Pampas Grass Plume",
    "description": "A single wispy dried pampas plume in a natural light beige shade for textured vase decor."
  },
  {
    "id": "BAG DD 12",
    "name": "Natural Dried Miscanthus Grass / Reed Plume Bundle",
    "category": "dried-decorations",
    "image": "assets/images/products/73.webp",
    "alt": "Natural Dried Miscanthus Grass / Reed Plume Bundle",
    "description": "A large bundle of natural dried miscanthus plumes featuring dark earthy tones and long stems."
  },
  {
    "id": "BAG DD 13",
    "name": "Natural Dried Palm Fan Leaf Set",
    "category": "dried-decorations",
    "image": "assets/images/products/74.webp",
    "alt": "Natural Dried Palm Fan Leaf Set",
    "description": "A set of four natural oversized dried palm fans with clean lines for tropical wall decor."
  },
  {
    "id": "BAG DD 14",
    "name": "Wholesale Bulk Box of Natural Mini Dried Palm Spears",
    "category": "dried-decorations",
    "image": "assets/images/products/75.webp?v=1.0.1",
    "alt": "Wholesale Bulk Box of Natural Mini Dried Palm Spears",
    "description": "A large wholesale carton filled with natural light-toned dried palm spears ready for events."
  },
  {
    "id": "BAG DD 15",
    "name": "Fluffy Natural Reed Grass / Pampas Grass Floor Bundle",
    "category": "dried-decorations",
    "image": "assets/images/products/76.webp",
    "alt": "Fluffy Natural Reed Grass / Pampas Grass Floor Bundle",
    "description": "A dense stack of fluffy natural dried reed grass used for bohemian floor arrangements."
  },
  {
    "id": "BAG DD 16",
    "name": "Feathered Natural Dried Cycas Palm Fronds / Leaves",
    "category": "dried-decorations",
    "image": "assets/images/products/77.webp",
    "alt": "Feathered Natural Dried Cycas Palm Fronds / Leaves",
    "description": "Long, feathered dried cycas palm leaves in a natural sage green tone for large arrangements."
  },
  {
    "id": "BAG DD 17",
    "name": "Golden Yellow Dyed Dried Flax Grass / Linum Bundle",
    "category": "dried-decorations",
    "image": "assets/images/products/78.webp?v=1.0.1",
    "alt": "Golden Yellow Dyed Dried Flax Grass / Linum Bundle",
    "description": "Bundles of dried flax grass available in natural gold and vibrant magenta shades."
  },
  {
    "id": "BAG DD 18",
    "name": "Natural Brown Dried Bulrush Spikes / Sorghum Grass Bundle",
    "category": "dried-decorations",
    "image": "assets/images/products/79.webp?v=1.0.1",
    "alt": "Natural Brown Dried Bulrush Spikes / Sorghum Grass Bundle",
    "description": "A large bundle of natural brown dried bulrush spikes ideal for primitive or rustic decor."
  },
  {
    "id": "BAG DD 19",
    "name": "Large High-Volume Natural Brown Pampas Grass Stalk Plume",
    "category": "dried-decorations",
    "image": "assets/images/products/80.webp",
    "alt": "Large High-Volume Natural Brown Pampas Grass Stalk Plume",
    "description": "A singular, thick dried pampas grass plume with a high-volume head and sturdy natural stem."
  },
  {
    "id": "BAG AF 9",
    "name": "Vibrantly Colored Handmade Sola Wood Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/81.webp",
    "alt": "Vibrantly Colored Handmade Sola Wood Flower Heads",
    "description": "Handcrafted spherical sola wood shells designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG FA 8",
    "name": "Woven Bamboo Mini Goblet Urns / Small Decorative Vases",
    "category": "event-decor",
    "image": "assets/images/products/82.webp",
    "alt": "Woven Bamboo Mini Goblet Urns / Small Decorative Vases",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG ED 10",
    "name": "Assorted Vibrantly Dyed Cut Dried Palm Fan Spears",
    "category": "event-decor",
    "image": "assets/images/products/83.webp",
    "alt": "Assorted Vibrantly Dyed Cut Dried Palm Fan Spears",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG FS 5",
    "name": "Hanging Woven Bamboo / Rattan Bell-Shaped Lantern Pods",
    "category": "floral-supplies",
    "image": "assets/images/products/84.webp",
    "alt": "Hanging Woven Bamboo / Rattan Bell-Shaped Lantern Pods",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG FS 6",
    "name": "Bleached Natural Grass / Twig Hand-Twisted Wreath Bases",
    "category": "floral-supplies",
    "image": "assets/images/products/85.webp",
    "alt": "Bleached Natural Grass / Twig Hand-Twisted Wreath Bases",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG ED 11",
    "name": "Hanging Decorative Golden Mesh Bell with Faux Red Rose",
    "category": "event-decor",
    "image": "assets/images/products/86.webp",
    "alt": "Hanging Decorative Golden Mesh Bell with Faux Red Rose",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG DD 20",
    "name": "Natural Brown Dried Grass / Preserved Gypsophila Branch Bundle",
    "category": "dried-decorations",
    "image": "assets/images/products/87.webp",
    "alt": "Natural Brown Dried Grass / Preserved Gypsophila Branch Bundle",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AF 10",
    "name": "Graduated Sizes of Cream Handmade Sola Wood Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/88.webp",
    "alt": "Graduated Sizes of Cream Handmade Sola Wood Flower Heads",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AF 11",
    "name": "Spherical Fluffy White Faux Carnation / Pom-Pom Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/89.webp",
    "alt": "Spherical Fluffy White Faux Carnation / Pom-Pom Flower Heads",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG DD 21",
    "name": "Large Natural Wide-Cut Dried Fan Palm Leaves",
    "category": "dried-decorations",
    "image": "assets/images/products/90.webp",
    "alt": "Large Natural Wide-Cut Dried Fan Palm Leaves",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG DD 22",
    "name": "Bulk Natural Harvested Dried Pampas / Reed Grass Stalks",
    "category": "dried-decorations",
    "image": "assets/images/products/91.webp",
    "alt": "Bulk Natural Harvested Dried Pampas / Reed Grass Stalks",
    "description": "Handcrafted spherical sola wood bases used for DIY artificial floral arrangements and crafting."
  },
  {
    "id": "BAG AF 12",
    "name": "Cream White Round Sola Wood Layered Flower Head",
    "category": "artificial-flowers",
    "image": "assets/images/products/92.webp",
    "alt": "Cream White Round Sola Wood Layered Flower Head",
    "description": "A wide-reaching natural dried palm leaf with clean architectural lines for tropical interior styling."
  },
  {
    "id": "BAG DD 23",
    "name": "Bleached White Trimmed Dried Palm Spear Leaves",
    "category": "dried-decorations",
    "image": "assets/images/products/93.webp",
    "alt": "Bleached White Trimmed Dried Palm Spear Leaves",
    "description": "A large wholesale pack of hand-trimmed natural dried palm leaves in a sharp spear shape."
  },
  {
    "id": "BAG FS 7",
    "name": "Bulk Sack of Round White Sola Wood Balls",
    "category": "floral-supplies",
    "image": "assets/images/products/94.webp",
    "alt": "Bulk Sack of Round White Sola Wood Balls",
    "description": "A single, elegantly tapered dried palm leaf spear ideal for modern bohemian floral displays."
  },
  {
    "id": "BAG DD 24",
    "name": "Metallic Gold Painted Trimmed Dried Palm Spear Bunch",
    "category": "dried-decorations",
    "image": "assets/images/products/95.webp",
    "alt": "Metallic Gold Painted Trimmed Dried Palm Spear Bunch",
    "description": "Feather-like dried palm fronds in a natural sage green tone, perfect for large-scale arrangements."
  },
  {
    "id": "BAG ED 12",
    "name": "Woven Bamboo Mini Goblet Decorative Pods",
    "category": "event-decor",
    "image": "assets/images/products/96.webp",
    "alt": "Woven Bamboo Mini Goblet Decorative Pods",
    "description": "Soft, airy bleached white pampas plumes that add a high-end bohemian touch to home decor."
  },
  {
    "id": "BAG AP 1",
    "name": "Potted Artificial Areca Palm Tree Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/97.webp",
    "alt": "Potted Artificial Areca Palm Tree Plant",
    "description": "A lush bunch of preserved white Gypsophila flowers suitable for delicate and romantic wedding decor."
  },
  {
    "id": "BAG AP 2",
    "name": "Artificial Banana Leaf Plant / Bird of Paradise Foliage",
    "category": "artificial-plants",
    "image": "assets/images/products/98.webp",
    "alt": "Artificial Banana Leaf Plant / Bird of Paradise Foliage",
    "description": "A textured assortment of dried natural grasses and botanicals for rustic vase fillers."
  },
  {
    "id": "BAG AP 3",
    "name": "Large Artificial Traveler's Palm / Banana Tree Foliage",
    "category": "artificial-plants",
    "image": "assets/images/products/99.webp",
    "alt": "Large Artificial Traveler's Palm / Banana Tree Foliage",
    "description": "A singular, voluminous dried pampas grass plume featuring a sturdy natural reed."
  },
  {
    "id": "BAG AP 4",
    "name": "Potted Artificial Banana / Canna Leaf Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/100.webp",
    "alt": "Potted Artificial Banana / Canna Leaf Tree",
    "description": "A handcrafted open-lattice rattan sphere designed for rustic table styling or decorative fillers."
  },
  {
    "id": "BAG AP 5",
    "name": "Artificial Dracaena / Song of India Plant Foliage",
    "category": "artificial-plants",
    "image": "assets/images/products/101.webp",
    "alt": "Artificial Dracaena / Song of India Plant Foliage",
    "description": "Handcrafted round sola wood flower base designed for custom floral arrangement crafting."
  },
  {
    "id": "BAG AP 6",
    "name": "Tall Potted Artificial Dracaena Fragrans Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/102.webp",
    "alt": "Tall Potted Artificial Dracaena Fragrans Tree",
    "description": "A wide, sturdy dried natural palm leaf with clean architectural lines for tropical interior styling."
  },
  {
    "id": "BAG AP 7",
    "name": "Potted Artificial Fiddle Leaf Fig Tree Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/103.webp",
    "alt": "Potted Artificial Fiddle Leaf Fig Tree Plant",
    "description": "A large wholesale set of hand-trimmed natural dried palm leaves in a sharp spear profile."
  },
  {
    "id": "BAG AP 8",
    "name": "Potted Artificial Bird of Paradise Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/104.webp",
    "alt": "Potted Artificial Bird of Paradise Plant",
    "description": "Elegantly tapered dried palm leaf spear on a long natural stem for modern bohemian floral displays."
  },
  {
    "id": "BAG AP 9",
    "name": "Artificial Potted Plumeria Flowering Bush Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/105.webp",
    "alt": "Artificial Potted Plumeria Flowering Bush Tree",
    "description": "Feathery dried cycas palm leaves in a natural sage tone, ideal for large floor vase arrangements."
  },
  {
    "id": "BAG AP 10",
    "name": "Potted Artificial Bamboo Tree Plant Foliage",
    "category": "artificial-plants",
    "image": "assets/images/products/106.webp",
    "alt": "Potted Artificial Bamboo Tree Plant Foliage",
    "description": "Soft and wispy bleached white pampas plumes that add a high-end, airy aesthetic to any space."
  },
  {
    "id": "BAG AP 11",
    "name": "Potted Artificial Golden Cane Palm Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/107.webp",
    "alt": "Potted Artificial Golden Cane Palm Tree",
    "description": "A generous bunch of preserved white Gypsophila flowers perfect for ethereal wedding and event decor."
  },
  {
    "id": "BAG AP 12",
    "name": "Large Artificial Multi-Stem Cycas Palm Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/108.webp",
    "alt": "Large Artificial Multi-Stem Cycas Palm Tree",
    "description": "A textured collection of various natural dried grasses and seed pods for rustic centerpiece designs."
  },
  {
    "id": "BAG AP 13",
    "name": "Potted Artificial Dieffenbachia Tree Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/109.webp",
    "alt": "Potted Artificial Dieffenbachia Tree Plant",
    "description": "A singular, voluminous dried pampas grass plume with a thick head and sturdy natural reed."
  },
  {
    "id": "BAG AP 14",
    "name": "Tall Potted Artificial Ficus Tree Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/110.webp",
    "alt": "Tall Potted Artificial Ficus Tree Plant",
    "description": "Handcrafted open-weave rattan sphere designed for rustic tabletop accents or decorative bowl fillers."
  },
  {
    "id": "BAG AP 15",
    "name": "Potted Artificial Bamboo Stalks / Dense Bamboo Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/111.webp",
    "alt": "Potted Artificial Bamboo Stalks / Dense Bamboo Tree",
    "description": "Handcrafted round sola wood flower base designed for custom floral arrangement crafting."
  },
  {
    "id": "BAG AP 16",
    "name": "Potted Artificial Majesty Palm Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/112.webp",
    "alt": "Potted Artificial Majesty Palm Tree",
    "description": "A wide, sturdy dried natural palm leaf with clean architectural lines for tropical interior styling."
  },
  {
    "id": "BAG AP 17",
    "name": "Artificial Cycas / Sago Palm Tree Trunk and Fronds",
    "category": "artificial-plants",
    "image": "assets/images/products/113.webp",
    "alt": "Artificial Cycas / Sago Palm Tree Trunk and Fronds",
    "description": "A large wholesale set of hand-trimmed natural dried palm leaves in a sharp spear profile."
  },
  {
    "id": "BAG AP 18",
    "name": "Large Artificial Multi-Stem Sago Palm Tree",
    "category": "artificial-plants",
    "image": "assets/images/products/114.webp",
    "alt": "Large Artificial Multi-Stem Sago Palm Tree",
    "description": "Elegantly tapered dried palm leaf spear on a long natural stem for modern bohemian floral displays."
  },
  {
    "id": "BAG AP 19",
    "name": "Potted Artificial Cordyline Evergreen Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/115.webp",
    "alt": "Potted Artificial Cordyline Evergreen Plant",
    "description": "Feathery dried cycas palm leaves in a natural sage tone, ideal for large floor vase arrangements."
  },
  {
    "id": "BAG AP 20",
    "name": "Potted Artificial Canna / Bird of Paradise Plant",
    "category": "artificial-plants",
    "image": "assets/images/products/116.webp",
    "alt": "Potted Artificial Canna / Bird of Paradise Plant",
    "description": "Soft and wispy bleached white pampas plumes that add a high-end, airy aesthetic to any space."
  },
  {
    "id": "BAG AF 13",
    "name": "Mixed Small Artificial Gypsophila Flower Sprays",
    "category": "artificial-flowers",
    "image": "assets/images/products/117.webp",
    "alt": "Mixed Small Artificial Gypsophila Flower Sprays",
    "description": "A generous bunch of preserved white Gypsophila flowers perfect for ethereal wedding and event decor."
  },
  {
    "id": "BAG AFL 1",
    "name": "Hanging Artificial Greenery Bunches / Faux Boxwood Bush",
    "category": "artificial-flora",
    "image": "assets/images/products/118.webp",
    "alt": "Hanging Artificial Greenery Bunches / Faux Boxwood Bush",
    "description": "A textured collection of various natural dried grasses and seed pods for rustic centerpiece designs."
  },
  {
    "id": "BAG AFB 1",
    "name": "Small Artificial Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/119.webp",
    "alt": "Small Artificial Rose Bud Bunches",
    "description": "A singular, voluminous dried pampas grass plume with a thick head and sturdy natural reed."
  },
  {
    "id": "BAG AFB 2",
    "name": "Artificial Camellia / Mini Rose Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/120.webp",
    "alt": "Artificial Camellia / Mini Rose Bush Bunches",
    "description": "Handcrafted open-weave rattan sphere designed for rustic tabletop accents or decorative bowl fillers."
  },
  {
    "id": "BAG AFB 3",
    "name": "Mixed Artificial Rose and Hydrangea Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/121.webp",
    "alt": "Mixed Artificial Rose and Hydrangea Flower Bunches",
    "description": "Handcrafted round sola wood flower base designed for custom floral arrangement crafting."
  },
  {
    "id": "BAG AFB 4",
    "name": "Vibrant Artificial Rose and Foliage Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/122.webp",
    "alt": "Vibrant Artificial Rose and Foliage Flower Bunches",
    "description": "A wide, sturdy dried natural palm leaf with clean architectural lines for tropical interior styling."
  },
  {
    "id": "BAG AFB 5",
    "name": "Pastel Shabby Chic Artificial Rose Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/123.webp",
    "alt": "Pastel Shabby Chic Artificial Rose Bunches",
    "description": "A large wholesale set of hand-trimmed natural dried palm leaves in a sharp spear profile."
  },
  {
    "id": "BAG AFB 6",
    "name": "Mixed Artificial Daisy / Chrysanthemum Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/124.webp",
    "alt": "Mixed Artificial Daisy / Chrysanthemum Bush Bunches",
    "description": "Elegantly tapered dried palm leaf spear on a long natural stem for modern bohemian floral displays."
  },
  {
    "id": "BAG AFB 7",
    "name": "Colorful Artificial Gerbera Daisy Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/125.webp",
    "alt": "Colorful Artificial Gerbera Daisy Flower Bunches",
    "description": "Feathery dried cycas palm leaves in a natural sage tone, ideal for large floor vase arrangements."
  },
  {
    "id": "BAG AFB 8",
    "name": "Small Artificial Sunflower Bunches / Bush",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/126.webp",
    "alt": "Small Artificial Sunflower Bunches / Bush",
    "description": "Soft and wispy bleached white pampas plumes that add a high-end, airy aesthetic to any space."
  },
  {
    "id": "BAG AFB 9",
    "name": "Mixed Artificial Peony / Rose Bud Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/127.webp",
    "alt": "Mixed Artificial Peony / Rose Bud Flower Bunches",
    "description": "A generous bunch of preserved white Gypsophila flowers perfect for ethereal wedding and event decor."
  },
  {
    "id": "BAG AFB 10",
    "name": "Faux Ranunculus / Tea Rose Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/128.webp",
    "alt": "Faux Ranunculus / Tea Rose Flower Bunches",
    "description": "A textured collection of various natural dried grasses and seed pods for rustic centerpiece designs."
  },
  {
    "id": "BAG AFB 11",
    "name": "Dense Artificial Wildflower and Carnation Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/129.webp",
    "alt": "Dense Artificial Wildflower and Carnation Bunches",
    "description": "A singular, voluminous dried pampas grass plume with a thick head and sturdy natural reed."
  },
  {
    "id": "BAG AFB 12",
    "name": "Vibrant Artificial Mini Daisy / Gerbera Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/130.webp",
    "alt": "Vibrant Artificial Mini Daisy / Gerbera Bush Bunches",
    "description": "Handcrafted open-weave rattan sphere designed for rustic tabletop accents or decorative bowl fillers."
  },
  {
    "id": "BAG AFB 13",
    "name": "Delicate Faux Tulip / Rose Bud Mixed Bunch Arrangement",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/131.webp",
    "alt": "Delicate Faux Tulip / Rose Bud Mixed Bunch Arrangement",
    "description": "Handcrafted round sola wood flower base designed for custom floral arrangement crafting."
  },
  {
    "id": "BAG AFB 14",
    "name": "Small Artificial Berry / Mini Bud Flower Sprays",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/132.webp",
    "alt": "Small Artificial Berry / Mini Bud Flower Sprays",
    "description": "A wide, sturdy dried natural palm leaf with clean architectural lines for tropical interior styling."
  },
  {
    "id": "BAG AFB 15",
    "name": "Pastel Shabby Chic Faux Camellia Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/133.webp",
    "alt": "Pastel Shabby Chic Faux Camellia Flower Bunches",
    "description": "A large wholesale set of hand-trimmed natural dried palm leaves in a sharp spear profile."
  },
  {
    "id": "BAG AFB 16",
    "name": "Colorful Artificial Chrysanthemum / Spider Gerbera Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/134.webp",
    "alt": "Colorful Artificial Chrysanthemum / Spider Gerbera Bunches",
    "description": "Elegantly tapered dried palm leaf spear on a long natural stem for modern bohemian floral displays."
  },
  {
    "id": "BAG AFB 17",
    "name": "Premium Mixed Artificial Open Rose Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/135.webp",
    "alt": "Premium Mixed Artificial Open Rose Bunches",
    "description": "Feathery dried cycas palm leaves in a natural sage tone, ideal for large floor vase arrangements."
  },
  {
    "id": "BAG AFB 18",
    "name": "Shabby Chic Artificial Mini Rose and Foliage Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/136.webp",
    "alt": "Shabby Chic Artificial Mini Rose and Foliage Bunches",
    "description": "Soft and wispy bleached white pampas plumes that add a high-end, airy aesthetic to any space."
  },
  {
    "id": "BAG AFB 19",
    "name": "Faux Peony Bud / Ranunculus Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/137.webp",
    "alt": "Faux Peony Bud / Ranunculus Bush Bunches",
    "description": "A generous bunch of preserved white Gypsophila flowers perfect for ethereal wedding and event decor."
  },
  {
    "id": "BAG AFB 20",
    "name": "Mixed Artificial Camellia / Daisy Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/138.webp",
    "alt": "Mixed Artificial Camellia / Daisy Bush Bunches",
    "description": "A textured collection of various natural dried grasses and seed pods for rustic centerpiece designs."
  },
  {
    "id": "BAG AL 10",
    "name": "Artificial Faux Fern and Mixed Greenery Bush Bunches",
    "category": "artificial-leaves",
    "image": "assets/images/products/139.webp",
    "alt": "Artificial Faux Fern and Mixed Greenery Bush Bunches",
    "description": "A singular, voluminous dried pampas grass plume with a thick head and sturdy natural reed."
  },
  {
    "id": "BAG AFB 21",
    "name": "Small Artificial Pip Berry / Blossom Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/140.webp",
    "alt": "Small Artificial Pip Berry / Blossom Bush Bunches",
    "description": "Handcrafted open-weave rattan sphere designed for rustic tabletop accents or decorative bowl fillers."
  },
  {
    "id": "BAG AFB 22",
    "name": "Rustic Artificial Wildflower / Field Daisy Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/141.webp",
    "alt": "Rustic Artificial Wildflower / Field Daisy Bush Bunches",
    "description": "Handcrafted spherical sola wood shells designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFB 23",
    "name": "Dense Faux Hydrangea and Tea Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/142.webp",
    "alt": "Dense Faux Hydrangea and Tea Rose Bud Bunches",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFB 24",
    "name": "Vintage Style Artificial Carnation / Rose Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/143.webp",
    "alt": "Vintage Style Artificial Carnation / Rose Flower Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFB 25",
    "name": "Colorful Artificial Field Chrysanthemum / Pom-Pom Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/144.webp",
    "alt": "Colorful Artificial Field Chrysanthemum / Pom-Pom Bunches",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFL 12",
    "name": "Hanging Artificial Ivy and Clematis Greenery Vines",
    "category": "artificial-flora",
    "image": "assets/images/products/145.webp",
    "alt": "Hanging Artificial Ivy and Clematis Greenery Vines",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AF 14",
    "name": "Artificial Phalaenopsis Orchid Stems / Flower Sprays",
    "category": "artificial-flowers",
    "image": "assets/images/products/146.webp",
    "alt": "Artificial Phalaenopsis Orchid Stems / Flower Sprays",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFB 26",
    "name": "Vintage Style Artificial Rose and Eucalyptus Leaf Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/147.webp",
    "alt": "Vintage Style Artificial Rose and Eucalyptus Leaf Bunches",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFB 27",
    "name": "Mixed Artificial Hydrangea / Orchid Small Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/148.webp",
    "alt": "Mixed Artificial Hydrangea / Orchid Small Flower Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AF 15",
    "name": "Large Artificial Hydrangea Flower Heads with Stems",
    "category": "artificial-flowers",
    "image": "assets/images/products/149.webp",
    "alt": "Large Artificial Hydrangea Flower Heads with Stems",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFB 28",
    "name": "Premium Artificial Open Rose Bouquet Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/150.webp",
    "alt": "Premium Artificial Open Rose Bouquet Bunches",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFB 29",
    "name": "Mixed Artificial Dahlia and Chrysanthemum Floral Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/151.webp",
    "alt": "Mixed Artificial Dahlia and Chrysanthemum Floral Bunches",
    "description": "Handcrafted spherical sola wood shells designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFB 30",
    "name": "Dense Artificial Hydrangea and Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/152.webp",
    "alt": "Dense Artificial Hydrangea and Rose Bud Bunches",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFB 31",
    "name": "Artificial Lavender / Astilbe Spiked Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/153.webp",
    "alt": "Artificial Lavender / Astilbe Spiked Flower Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFB 32",
    "name": "Mixed Artificial Cosmos / Daisy Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/154.webp",
    "alt": "Mixed Artificial Cosmos / Daisy Bush Bunches",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFB 33",
    "name": "Faux Spiked Lavender and Astilbe Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/155.webp",
    "alt": "Faux Spiked Lavender and Astilbe Flower Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFB 34",
    "name": "Small Artificial Camellia / Tea Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/156.webp",
    "alt": "Small Artificial Camellia / Tea Rose Bud Bunches",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFB 35",
    "name": "Premium Faux Peony Bouquet Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/157.webp",
    "alt": "Premium Faux Peony Bouquet Bunches",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFB 36",
    "name": "Shabby Chic Artificial Mini Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/158.webp",
    "alt": "Shabby Chic Artificial Mini Rose Bud Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFB 37",
    "name": "Artificial Clematis / Lily Flower Stems with Foliage",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/159.webp",
    "alt": "Artificial Clematis / Lily Flower Stems with Foliage",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFB 38",
    "name": "Mini Artificial Berry and Bud Flower Sprays",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/160.webp",
    "alt": "Mini Artificial Berry and Bud Flower Sprays",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFB 39",
    "name": "Tall Artificial White Gladiolus Flower Stem Bunch",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/161.webp",
    "alt": "Tall Artificial White Gladiolus Flower Stem Bunch",
    "description": "Handcrafted spherical sola wood bases used for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFB 40",
    "name": "Classic Artificial Rose Bouquet Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/162.webp",
    "alt": "Classic Artificial Rose Bouquet Bunches",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFB 41",
    "name": "Vintage Shabby Chic Artificial Camellia / Rose Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/163.webp",
    "alt": "Vintage Shabby Chic Artificial Camellia / Rose Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFB 42",
    "name": "Faux Fluffy Hydrangea / Pom-Pom Flower Heads",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/164.webp",
    "alt": "Faux Fluffy Hydrangea / Pom-Pom Flower Heads",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFB 43",
    "name": "Faux Spiked Astilbe / Lavender Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/165.webp",
    "alt": "Faux Spiked Astilbe / Lavender Flower Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFB 44",
    "name": "Faux Ranunculus and Open Peony Floral Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/166.webp",
    "alt": "Faux Ranunculus and Open Peony Floral Bunches",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFB 45",
    "name": "Faux Cherry Blossom / Clematis Flower Heads",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/167.webp",
    "alt": "Faux Cherry Blossom / Clematis Flower Heads",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFB 46",
    "name": "Small Artificial Tea Rose Bud Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/168.webp",
    "alt": "Small Artificial Tea Rose Bud Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AF 16",
    "name": "Long Artificial Delphinium / Snapdragon Flowering Stems",
    "category": "artificial-flowers",
    "image": "assets/images/products/169.webp",
    "alt": "Long Artificial Delphinium / Snapdragon Flowering Stems",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFB 47",
    "name": "Faux Spiked Lavender and Lilac Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/170.webp",
    "alt": "Faux Spiked Lavender and Lilac Bush Bunches",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFB 48",
    "name": "Premium Mixed Artificial Rose and Peony Bouquets",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/171.webp",
    "alt": "Premium Mixed Artificial Rose and Peony Bouquets",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFB 49",
    "name": "Classic Artificial Rose Bouquet Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/172.webp",
    "alt": "Classic Artificial Rose Bouquet Bunches",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFB 50",
    "name": "Assorted Artificial Daisy / Chrysanthemum Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/173.webp",
    "alt": "Assorted Artificial Daisy / Chrysanthemum Flower Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFB 51",
    "name": "Premium Faux Cabbage Rose and Peony Bouquet Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/174.webp",
    "alt": "Premium Faux Cabbage Rose and Peony Bouquet Bunches",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFB 52",
    "name": "Shabby Chic Faux Ranunculus / Pom-Pom Rose Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/175.webp",
    "alt": "Shabby Chic Faux Ranunculus / Pom-Pom Rose Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFB 53",
    "name": "Small Artificial Tea Rose Bud Bunches with Green Foliage",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/176.webp",
    "alt": "Small Artificial Tea Rose Bud Bunches with Green Foliage",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AL 8",
    "name": "Faux Rounded Eucalyptus Leaf Greenery Stems / Bunches",
    "category": "artificial-leaves",
    "image": "assets/images/products/177.webp",
    "alt": "Faux Rounded Eucalyptus Leaf Greenery Stems / Bunches",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFB 54",
    "name": "Faux Spiked Lavender and Heather Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/178.webp",
    "alt": "Faux Spiked Lavender and Heather Flower Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFB 55",
    "name": "Artificial Faux Mimosa / Frosted Foliage Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/179.webp",
    "alt": "Artificial Faux Mimosa / Frosted Foliage Bush Bunches",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFB 56",
    "name": "Hanging Artificial Wisteria and Rose Leaf Vines",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/180.webp",
    "alt": "Hanging Artificial Wisteria and Rose Leaf Vines",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFB 57",
    "name": "Faux Baby's Breath / Gypsophila White Flower Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/181.webp",
    "alt": "Faux Baby's Breath / Gypsophila White Flower Bush Bunches",
    "description": "Handcrafted spherical sola wood shells designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AF 17",
    "name": "Long-Stemmed Artificial Tiger Lily Flowers",
    "category": "artificial-flowers",
    "image": "assets/images/products/182.webp",
    "alt": "Long-Stemmed Artificial Tiger Lily Flowers",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFB 58",
    "name": "Faux Clematis / Star Lily Flower Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/183.webp",
    "alt": "Faux Clematis / Star Lily Flower Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFB 59",
    "name": "Large Multi-Color Spiked Faux Lavender Bush Bundle",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/184.webp",
    "alt": "Large Multi-Color Spiked Faux Lavender Bush Bundle",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFB 60",
    "name": "Dense Artificial Carnation Flower Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/185.webp",
    "alt": "Dense Artificial Carnation Flower Bush Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFB 61",
    "name": "Faux Mini Daisy / Field Blossom Hanging Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/186.webp",
    "alt": "Faux Mini Daisy / Field Blossom Hanging Bush Bunches",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFB 62",
    "name": "Assorted Faux Chrysanthemum / Daisy Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/187.webp",
    "alt": "Assorted Faux Chrysanthemum / Daisy Bush Bunches",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFB 63",
    "name": "Large Faux Fluffy Pom-Pom / Hydrangea Flower Heads",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/188.webp",
    "alt": "Large Faux Fluffy Pom-Pom / Hydrangea Flower Heads",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFB 64",
    "name": "Mixed Faux Hydrangea and Gerbera Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/189.webp",
    "alt": "Mixed Faux Hydrangea and Gerbera Bush Bunches",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFB 65",
    "name": "Faux Hydrangea Blossom Bush Bunches",
    "category": "artificial-flower-bunches",
    "image": "assets/images/products/190.webp",
    "alt": "Faux Hydrangea Blossom Bush Bunches",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFL 12",
    "name": "Small Artificial Baby's Breath / Gypsophila Sprays",
    "category": "artificial-flora",
    "image": "assets/images/products/191.webp",
    "alt": "Small Artificial Baby's Breath / Gypsophila Sprays",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AL 10",
    "name": "Expandable Willow Wood Trellis Fence with Artificial Leaves",
    "category": "artificial-leaves",
    "image": "assets/images/products/192.webp",
    "alt": "Expandable Willow Wood Trellis Fence with Artificial Leaves",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AL 8",
    "name": "Expandable Willow Wood Trellis Fence with Ivy Leaves",
    "category": "artificial-leaves",
    "image": "assets/images/products/193.webp",
    "alt": "Expandable Willow Wood Trellis Fence with Ivy Leaves",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AGWP 1",
    "name": "Dense Green Boxwood Artificial Grass Wall Hedge Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/194.webp",
    "alt": "Dense Green Boxwood Artificial Grass Wall Hedge Panel",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AGWP 2",
    "name": "Dense Artificial Tropical Foliage Wall Greenery Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/195.webp",
    "alt": "Dense Artificial Tropical Foliage Wall Greenery Panel",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AGWP 3",
    "name": "Premium Artificial Mixed Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/196.webp",
    "alt": "Premium Artificial Mixed Foliage Wall Panel",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 4",
    "name": "Artificial Vertical Garden Green Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/197.webp",
    "alt": "Artificial Vertical Garden Green Wall Panel",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AGWP 5",
    "name": "Dense Artificial Meadow Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/198.webp",
    "alt": "Dense Artificial Meadow Foliage Wall Panel",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 6",
    "name": "Mixed Artificial Fern and Grass Vertical Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/199.webp",
    "alt": "Mixed Artificial Fern and Grass Vertical Wall Panel",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 7",
    "name": "Mixed Artificial Tropical Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/200.webp",
    "alt": "Mixed Artificial Tropical Foliage Wall Panel",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 8",
    "name": "Dense Artificial Jungle Mix Wall Greenery Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/201.webp",
    "alt": "Dense Artificial Jungle Mix Wall Greenery Panel",
    "description": "Handcrafted spherical sola wood bases used for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 9",
    "name": "Mixed Artificial Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/202.webp",
    "alt": "Mixed Artificial Foliage Wall Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AGWP 10",
    "name": "Artificial Monstera and Taro Leaf Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/203.webp",
    "alt": "Artificial Monstera and Taro Leaf Wall Panel",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AGWP 11",
    "name": "Dense Artificial Boxwood Mat Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/204.webp",
    "alt": "Dense Artificial Boxwood Mat Wall Panel",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AGWP 12",
    "name": "Premium Artificial Tropical Garden Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/205.webp",
    "alt": "Premium Artificial Tropical Garden Wall Panel",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AGWP 13",
    "name": "Dense Artificial Meadow Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/206.webp",
    "alt": "Dense Artificial Meadow Wall Panel",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 14",
    "name": "Multi-Texture Artificial Vertical Garden Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/207.webp",
    "alt": "Multi-Texture Artificial Vertical Garden Panel",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AGWP 15",
    "name": "Mixed Artificial Tropical Succulent Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/208.webp",
    "alt": "Mixed Artificial Tropical Succulent Wall Panel",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 16",
    "name": "Dense Artificial Boxwood / Milan Grass Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/209.webp",
    "alt": "Dense Artificial Boxwood / Milan Grass Wall Panel",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 17",
    "name": "Mixed Artificial Foliage Wall Mat",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/210.webp",
    "alt": "Mixed Artificial Foliage Wall Mat",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 18",
    "name": "Faux Clover / Eucalyptus Leaf Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/211.webp",
    "alt": "Faux Clover / Eucalyptus Leaf Wall Panel",
    "description": "Handcrafted spherical sola wood shells designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 19",
    "name": "Gold and Dusty Pink Artificial Hydrangea Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/212.webp",
    "alt": "Gold and Dusty Pink Artificial Hydrangea Flower Wall Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AGWP 20",
    "name": "Vibrant Green Faux Boxwood Hedge Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/213.webp",
    "alt": "Vibrant Green Faux Boxwood Hedge Wall Panel",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG FA 7",
    "name": "Large Artificial Hydrangea Flower Table Arrangements",
    "category": "floral-arrangements",
    "image": "assets/images/products/214.webp",
    "alt": "Large Artificial Hydrangea Flower Table Arrangements",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AGWP 21",
    "name": "Multi-Color Artificial Hydrangea Flower Wall Panels",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/215.webp",
    "alt": "Multi-Color Artificial Hydrangea Flower Wall Panels",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AGWP 22",
    "name": "Classic Deep Red Artificial Hydrangea Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/216.webp",
    "alt": "Classic Deep Red Artificial Hydrangea Flower Wall Panel",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 23",
    "name": "Faux Boxwood Mat Panel with White Tip Details",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/217.webp",
    "alt": "Faux Boxwood Mat Panel with White Tip Details",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AL 10",
    "name": "Roll of Artificial Ivy / Maple Leaf Privacy Screen",
    "category": "artificial-leaves",
    "image": "assets/images/products/218.webp",
    "alt": "Roll of Artificial Ivy / Maple Leaf Privacy Screen",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 24",
    "name": "Mixed Artificial Hydrangea Flower Wall Panels",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/219.webp",
    "alt": "Mixed Artificial Hydrangea Flower Wall Panels",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 25",
    "name": "Dense Artificial Boxwood Bush Grass Mat Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/220.webp",
    "alt": "Dense Artificial Boxwood Bush Grass Mat Panel",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 26",
    "name": "Faux Meadow Grass Mat Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/221.webp",
    "alt": "Faux Meadow Grass Mat Wall Panel",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 27",
    "name": "Expandable Artificial Ivy Leaf Mesh Fence Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/222.webp",
    "alt": "Expandable Artificial Ivy Leaf Mesh Fence Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AGWP 28",
    "name": "Sky Blue Artificial Hydrangea and Rose Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/223.webp",
    "alt": "Sky Blue Artificial Hydrangea and Rose Wall Panel",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AGWP 29",
    "name": "Cream White and Tiffany Blue Artificial Floral Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/224.webp",
    "alt": "Cream White and Tiffany Blue Artificial Floral Panel",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AGWP 30",
    "name": "Dense Lush Green Artificial Meadow Boxwood Mat Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/225.webp",
    "alt": "Dense Lush Green Artificial Meadow Boxwood Mat Panel",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AGWP 31",
    "name": "Elegant Cream White Artificial Rose Floral Runner",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/226.webp",
    "alt": "Elegant Cream White Artificial Rose Floral Runner",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 32",
    "name": "Dense Artificial Fern and Grass Wall Greenery Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/227.webp",
    "alt": "Dense Artificial Fern and Grass Wall Greenery Panel",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AGWP 33",
    "name": "Blush Pink and Cream White Hydrangea Floral Runner",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/228.webp",
    "alt": "Blush Pink and Cream White Hydrangea Floral Runner",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 34",
    "name": "Lush Vibrant Green Faux Boxwood Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/229.webp",
    "alt": "Lush Vibrant Green Faux Boxwood Wall Panel",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 35",
    "name": "Faux Meadow Grass Wall Panel with White Flower Accents",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/230.webp",
    "alt": "Faux Meadow Grass Wall Panel with White Flower Accents",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 36",
    "name": "Artificial Eucalyptus / Boxwood Leaf Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/231.webp",
    "alt": "Artificial Eucalyptus / Boxwood Leaf Wall Panel",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 37",
    "name": "Mixed Artificial Garden Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/232.webp",
    "alt": "Mixed Artificial Garden Wall Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AGWP 38",
    "name": "Dense Tropical Mix Artificial Jungle Grass Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/233.webp",
    "alt": "Dense Tropical Mix Artificial Jungle Grass Wall Panel",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AGWP 39",
    "name": "Patterned Artificial Grass Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/234.webp",
    "alt": "Patterned Artificial Grass Wall Panel",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AGWP 40",
    "name": "Faux Boxwood / Milan Grass Green Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/235.webp",
    "alt": "Faux Boxwood / Milan Grass Green Wall Panel",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AGWP 41",
    "name": "Mixed Artificial Tropical Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/236.webp",
    "alt": "Mixed Artificial Tropical Foliage Wall Panel",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 42",
    "name": "Dense Artificial Meadow Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/237.webp",
    "alt": "Dense Artificial Meadow Wall Panel",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AGWP 43",
    "name": "Mixed Faux Grass and Foliage Vertical Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/238.webp",
    "alt": "Mixed Faux Grass and Foliage Vertical Wall Panel",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 44",
    "name": "Dense Artificial Fern and Jungle Leaf Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/239.webp",
    "alt": "Dense Artificial Fern and Jungle Leaf Wall Panel",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 45",
    "name": "Patterned Artificial Green Grass Wall Mat",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/240.webp",
    "alt": "Patterned Artificial Green Grass Wall Mat",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 46",
    "name": "Multi-Color Artificial Moss and Micro-Foliage Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/241.webp",
    "alt": "Multi-Color Artificial Moss and Micro-Foliage Wall Panel",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 47",
    "name": "Premium Artificial Vertical Garden Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/242.webp",
    "alt": "Premium Artificial Vertical Garden Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AL 7",
    "name": "Faux Cordyline Bush Evergreen Foliage Stem",
    "category": "artificial-leaves",
    "image": "assets/images/products/243.webp",
    "alt": "Faux Cordyline Bush Evergreen Foliage Stem",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AL 10",
    "name": "Faux Sansevieria / Artificial Snake Plant Bush",
    "category": "artificial-plants",
    "image": "assets/images/products/244.webp",
    "alt": "Faux Sansevieria / Artificial Snake Plant Bush",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AL 8",
    "name": "Artificial Croton Tropical Leaf Bunches",
    "category": "artificial-leaves",
    "image": "assets/images/products/245.webp",
    "alt": "Artificial Croton Tropical Leaf Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AL 9",
    "name": "Long Variegated Artificial Pandanus Greenery Stems",
    "category": "artificial-leaves",
    "image": "assets/images/products/246.webp",
    "alt": "Long Variegated Artificial Pandanus Greenery Stems",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AL 8",
    "name": "White Artificial Bodhi Leaf Garland",
    "category": "event-decor",
    "image": "assets/images/products/247.webp",
    "alt": "White Artificial Bodhi Leaf Garland",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AL 10",
    "name": "Artificial Rose Leaf Sprays / Faux Foliage Bunches",
    "category": "artificial-leaves",
    "image": "assets/images/products/248.webp",
    "alt": "Artificial Rose Leaf Sprays / Faux Foliage Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AF 18",
    "name": "Multi-Color Artificial Chrysanthemum Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/249.webp",
    "alt": "Multi-Color Artificial Chrysanthemum Flower Heads",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AL 7",
    "name": "Glittery Red Artificial Rose Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/250.webp",
    "alt": "Glittery Red Artificial Rose Flower Heads",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AL 9",
    "name": "Fluffy Multi-Color Artificial Carnation Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/251.webp",
    "alt": "Fluffy Multi-Color Artificial Carnation Flower Heads",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AF 21",
    "name": "Assorted Multi-Color Artificial Open Rose Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/252.webp",
    "alt": "Assorted Multi-Color Artificial Open Rose Flower Heads",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AF 22",
    "name": "Multi-Color Artificial Dahlia Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/253.webp",
    "alt": "Multi-Color Artificial Dahlia Flower Heads",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AF 23",
    "name": "Assorted Multi-Color Artificial Rose Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/254.webp",
    "alt": "Assorted Multi-Color Artificial Rose Flower Heads",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AF 24",
    "name": "Classic Red Artificial Rose Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/255.webp",
    "alt": "Classic Red Artificial Rose Flower Heads",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AF 25",
    "name": "Artificial Silk Rose Flower Heads",
    "category": "artificial-flowers",
    "image": "assets/images/products/256.webp",
    "alt": "Artificial Silk Rose Flower Heads",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AGWP 48",
    "name": "Large Red Artificial Rose Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/257.webp",
    "alt": "Large Red Artificial Rose Flower Wall Panel",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AGWP 49",
    "name": "Blush Pink and White Artificial Rose Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/258.webp",
    "alt": "Blush Pink and White Artificial Rose Flower Wall Panel",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AGWP 50",
    "name": "Ombre Gradient Artificial Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/259.webp",
    "alt": "Ombre Gradient Artificial Flower Wall Panel",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AGWP 51",
    "name": "Vertical Striped Pink and Cream Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/260.webp",
    "alt": "Vertical Striped Pink and Cream Flower Wall Panel",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AGWP 52",
    "name": "Patterned Artificial Carnation Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/261.webp",
    "alt": "Patterned Artificial Carnation Flower Wall Panel",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AGWP 53",
    "name": "Solid Medium Pink Artificial Rose Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/262.webp",
    "alt": "Solid Medium Pink Artificial Rose Flower Wall Panel",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AGWP 54",
    "name": "Red Artificial Silk Rose Flower Wall Panel",
    "category": "artificial-green-wall-panel",
    "image": "assets/images/products/263.webp",
    "alt": "Red Artificial Silk Rose Flower Wall Panel",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFL 12",
    "name": "Hanging Pink Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/264.webp",
    "alt": "Hanging Pink Artificial Wisteria Flower Bunches",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFL 12",
    "name": "Hanging Purple Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/265.webp",
    "alt": "Hanging Purple Artificial Wisteria Flower Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFL 10",
    "name": "Hanging Artificial Wisteria Garland Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/266.webp",
    "alt": "Hanging Artificial Wisteria Garland Bunches",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFL 11",
    "name": "Long Hanging Yellow Artificial Orchid Flower Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/267.webp",
    "alt": "Long Hanging Yellow Artificial Orchid Flower Garlands",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFL 12",
    "name": "Large Hanging Red Artificial Wisteria Arrangement",
    "category": "artificial-flora",
    "image": "assets/images/products/268.webp",
    "alt": "Large Hanging Red Artificial Wisteria Arrangement",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFL 13",
    "name": "Multi-Color Hanging Artificial Wisteria Flowers",
    "category": "artificial-flora",
    "image": "assets/images/products/269.webp",
    "alt": "Multi-Color Hanging Artificial Wisteria Flowers",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFL 10",
    "name": "Large Hanging Golden Yellow Wisteria Arrangement",
    "category": "artificial-flora",
    "image": "assets/images/products/270.webp",
    "alt": "Large Hanging Golden Yellow Wisteria Arrangement",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFL 11",
    "name": "Hanging Lavender Purple Artificial Wisteria Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/271.webp",
    "alt": "Hanging Lavender Purple Artificial Wisteria Bunches",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFL 12",
    "name": "Hanging Cyan Blue Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/272.webp",
    "alt": "Hanging Cyan Blue Artificial Wisteria Flower Bunches",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG AFL 13",
    "name": "Hanging Cream Champagne Artificial Wisteria Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/273.webp",
    "alt": "Hanging Cream Champagne Artificial Wisteria Bunches",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFL 26",
    "name": "Hanging Soft Pink Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/274.webp",
    "alt": "Hanging Soft Pink Artificial Wisteria Flower Bunches",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFL 28",
    "name": "Hanging Violet Magenta Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/275.webp",
    "alt": "Hanging Violet Magenta Artificial Wisteria Flower Bunches",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFL 29",
    "name": "Hanging Deep Coral Pink Artificial Wisteria Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/276.webp",
    "alt": "Hanging Deep Coral Pink Artificial Wisteria Bunches",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFL 31",
    "name": "Hanging Lime Green Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/277.webp",
    "alt": "Hanging Lime Green Artificial Wisteria Flower Bunches",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFL 26",
    "name": "Hanging Royal Purple Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/278.webp",
    "alt": "Hanging Royal Purple Artificial Wisteria Flower Bunches",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFL 28",
    "name": "Hanging Off-White Artificial Wisteria Flower Bunches",
    "category": "artificial-flora",
    "image": "assets/images/products/279.webp",
    "alt": "Hanging Off-White Artificial Wisteria Flower Bunches",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AL 8",
    "name": "Artificial Yellow Marigold and White Jasmine Toran",
    "category": "traditional-garlands",
    "image": "assets/images/products/280.webp",
    "alt": "Artificial Yellow Marigold and White Jasmine Toran",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFL 10",
    "name": "Artificial Marigold and Jasmine Festoon Door Hanging",
    "category": "traditional-garlands",
    "image": "assets/images/products/281.webp",
    "alt": "Artificial Marigold and Jasmine Festoon Door Hanging",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG AFL 11",
    "name": "Loose Artificial Orange and Yellow Marigold Flowers",
    "category": "traditional-garlands",
    "image": "assets/images/products/282.webp",
    "alt": "Loose Artificial Orange and Yellow Marigold Flowers",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG TGH 38",
    "name": "Artificial Marigold and Jasmine Door Toran Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/283.webp",
    "alt": "Artificial Marigold and Jasmine Door Toran Garland",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG TGH 39",
    "name": "Thick Artificial Marigold Flower Garland",
    "category": "traditional-garlands",
    "image": "assets/images/products/284.webp",
    "alt": "Thick Artificial Marigold Flower Garland",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG TGH 40",
    "name": "Artificial Yellow Marigold and Red Jasmine Toran",
    "category": "traditional-garlands",
    "image": "assets/images/products/285.webp",
    "alt": "Artificial Yellow Marigold and Red Jasmine Toran",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG TGH 41",
    "name": "Layered Artificial Yellow Marigold Garland Backdrop",
    "category": "traditional-garlands",
    "image": "assets/images/products/286.webp",
    "alt": "Layered Artificial Yellow Marigold Garland Backdrop",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG TGH 42",
    "name": "Artificial Marigold Festive Door Hanging Toran",
    "category": "traditional-garlands",
    "image": "assets/images/products/287.webp",
    "alt": "Artificial Marigold Festive Door Hanging Toran",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFR 1",
    "name": "Bulk Pack of Colorful Artificial Faux Fruits",
    "category": "artificial-fruits",
    "image": "assets/images/products/288.webp",
    "alt": "Bulk Pack of Colorful Artificial Faux Fruits",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFR 2",
    "name": "Hanging Artificial Fruit Garlands / Strings",
    "category": "artificial-fruits",
    "image": "assets/images/products/289.webp",
    "alt": "Hanging Artificial Fruit Garlands / Strings",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFL 29",
    "name": "Hanging Artificial White Gypsophila Vine Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/290.webp",
    "alt": "Hanging Artificial White Gypsophila Vine Garlands",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFL 31",
    "name": "Long Hanging Artificial White Baby's Breath Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/291.webp",
    "alt": "Long Hanging Artificial White Baby's Breath Garlands",
    "description": "Handcrafted spherical sola wood bases designed for creating custom artificial floral arrangements."
  },
  {
    "id": "BAG FA 8",
    "name": "Large Artificial Floral Arrangement with Orchids",
    "category": "floral-arrangements",
    "image": "assets/images/products/292.webp",
    "alt": "Large Artificial Floral Arrangement with Orchids",
    "description": "A sharply trimmed, eco-friendly dried palm leaf spear that adds a modern architectural touch to decor."
  },
  {
    "id": "BAG FA 9",
    "name": "Premium Artificial Tropical Floor Vase Arrangement",
    "category": "floral-arrangements",
    "image": "assets/images/products/293.webp",
    "alt": "Premium Artificial Tropical Floor Vase Arrangement",
    "description": "A large-scale natural dried palm fan featuring a robust stem and wide, textured leaf surface."
  },
  {
    "id": "BAG AFL 26",
    "name": "Hanging Artificial Rosemary Greenery Bush",
    "category": "artificial-flora",
    "image": "assets/images/products/294.webp",
    "alt": "Hanging Artificial Rosemary Greenery Bush",
    "description": "Elegantly hand-cut dried palm spear with a slender profile, perfect for minimalist vase styling."
  },
  {
    "id": "BAG AFL 28",
    "name": "Hanging Artificial Weeping Wisteria Bush Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/295.webp",
    "alt": "Hanging Artificial Weeping Wisteria Bush Garlands",
    "description": "A collection of lush, feathered dried cycas leaves in a muted natural green for tropical styling."
  },
  {
    "id": "BAG AFL 29",
    "name": "Large Hanging Artificial Willow Greenery Vine Bush",
    "category": "artificial-flora",
    "image": "assets/images/products/296.webp",
    "alt": "Large Hanging Artificial Willow Greenery Vine Bush",
    "description": "Soft and airy bleached white pampas grass plumes that provide a delicate, bohemian aesthetic to any space."
  },
  {
    "id": "BAG AFL 31",
    "name": "Hanging Artificial Boxwood and Eucalyptus Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/297.webp",
    "alt": "Hanging Artificial Boxwood and Eucalyptus Garlands",
    "description": "A dense bunch of preserved white Gypsophila flowers ideal for ethereal and romantic floral designs."
  },
  {
    "id": "BAG AFL 26",
    "name": "Assorted Hanging Artificial Leaf Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/298.webp",
    "alt": "Assorted Hanging Artificial Leaf Garlands",
    "description": "A curated assortment of various natural dried grasses and seed pods for textured floral displays."
  },
  {
    "id": "BAG AFL 27",
    "name": "Hanging Artificial Ivy and Variegated Pothos Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/299.webp",
    "alt": "Hanging Artificial Ivy and Variegated Pothos Garlands",
    "description": "A high-volume, fluffy natural pampas grass stalk featuring a sturdy reed and voluminous feathery head."
  },
  {
    "id": "BAG AFL 28",
    "name": "Long Hanging Artificial Amaranthus String Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/300.webp",
    "alt": "Long Hanging Artificial Amaranthus String Garlands",
    "description": "A handcrafted open-weave rattan sphere designed for rustic tabletop decor or DIY lighting projects."
  },
  {
    "id": "BAG AFL 29",
    "name": "Hanging Artificial Weeping Wisteria Bush Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/301.webp",
    "alt": "Hanging Artificial Weeping Wisteria Bush Garlands",
    "description": "Lush, realistic cascading white wisteria spray designed to add elegant vertical floral elements to event ceilings and arches."
  },
  {
    "id": "BAG AFL 30",
    "name": "Long Hanging Artificial Weeping Eucalyptus Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/302.webp",
    "alt": "Long Hanging Artificial Weeping Eucalyptus Garlands",
    "description": "Highly realistic trailing ivy foliage spray, ideal for creating draping greenery walls, arches, and hanging installations."
  },
  {
    "id": "BAG AFL 31",
    "name": "Premium Hanging Artificial Fern and Astilbe Garlands",
    "category": "artificial-flora",
    "image": "assets/images/products/303.webp",
    "alt": "Premium Hanging Artificial Fern and Astilbe Garlands",
    "description": "Vibrant, multi-strand artificial green willow hanging creeper, perfect for natural backdrops and wedding foliage decorations."
  },
  {
    "id": "BAG AF 26",
    "name": "RIBBONS Pink Pack of 6 Chrysanthemum Artificial Flowers and Plants without Pot",
    "category": "artificial-flowers",
    "image": "assets/images/products/304.webp",
    "alt": "RIBBONS Pink Pack of 6 Chrysanthemum Artificial Flowers and Plants without Pot",
    "description": "Brighten your home with TIED RIBBONS Pink Artificial Chrysanthemums. This set includes six lifelike 29 cm faux flower sticks. They offer lasting colour without any maintenance. Pots are not included"
  }
];
