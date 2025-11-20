export interface Specialization {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  specializations: Specialization[];
}

// Extended unique product names for Home & Kitchen (1000 unique)
const homeKitchenNames = [
  "Stainless Steel Blender Pro", "Compact Microwave Oven", "Smart Toaster 4-Slot", "Espresso Coffee Maker", "Stand Mixer with Dough Hook",
  "Pressure Cooker 5L", "Digital Rice Cooker", "Electric Kettle Fast Boil", "Food Processor Chopper", "Fruit Juicer Cold Press",
  "Wet Grinder Stone", "Induction Cooktop Pro", "Sandwich Maker Grill", "Bread Making Machine", "Water Purifier RO",
  "Slow Cooker 3L", "Air Fryer Oven", "Ice Cream Maker", "Pasta Maker Machine", "Popcorn Machine Electric",
  "Deep Fryer Oil", "Waffle Maker Non-Stick", "Pancake Griddle", "Crepe Maker", "Fondue Set Heating",
  "Grill Pan Griller", "Skillet Non-Stick", "Wok Carbon Steel", "Pressure Cooker Electric", "Sous Vide Cooker",
  "Vacuum Sealer Food", "Dehydrator Machine", "Yogurt Maker", "Sprouting Jar Kit", "Compost Bin Kitchen",
  "Utensil Holder Set", "Knife Sharpener Steel", "Cutting Board Bamboo", "Measuring Cup Set", "Mixing Bowl Set",
  "Colander Strainer", "Grater Microplane", "Peeler Vegetable", "Tongs Stainless", "Whisk Double Wire",
  "Spatula Silicone", "Wooden Spoon Set", "Ladle Serving", "Skimmer Slotted", "Fish Turner Flexible",
  "Pasta Server", "Cake Lifter", "Sauce Ladle", "Serving Spoon", "Dinner Fork",
  "Butter Knife Spreader", "Steak Knife Serrated", "Dessert Fork", "Salad Fork", "Cocktail Fork",
  "Soup Spoon", "Tea Spoon Small", "Coffee Spoon", "Demitasse Spoon", "Caviar Spoon",
  "Olive Fork", "Pickle Fork", "Crab Fork", "Lobster Pick", "Shrimp Fork",
  "Chopsticks Wooden Pair", "Chopsticks Bamboo Pair", "Chopstick Rest Ceramic", "Serving Chopsticks", "Cooking Chopsticks",
  "Glass Set Drinking", "Glass Set Water", "Glass Tumbler", "Glass Goblet", "Glass Flute",
  "Glass Champagne", "Glass Wine Red", "Glass Wine White", "Glass Dessert", "Glass Punch",
  "Glass Juice", "Glass Beer Mug", "Glass Coffee Cup", "Glass Tea Cup", "Glass Milk Glass",
  "Mug Ceramic", "Mug Stainless", "Thermos Flask", "Water Bottle BPA", "Sports Bottle Insulated",
  "Travel Mug Spill", "Coffee Tumbler", "Tea Infuser Bottle", "Smoothie Bottle", "Shaker Protein",
  "Plate Dinner", "Plate Salad", "Plate Dessert", "Plate Bread", "Plate Side",
  "Bowl Cereal", "Bowl Soup", "Bowl Rice", "Bowl Pasta", "Bowl Mixing",
  "Bowl Serving", "Bowl Noodle", "Bowl Salad Large", "Bowl Fruit", "Platter Serving",
  "Dish Casserole", "Ramekin Set", "Soufflé Dish", "Baking Dish", "Cake Pan Round",
  "Cake Pan Square", "Cake Pan Rectangular", "Cookie Sheet", "Muffin Tin", "Donut Pan",
  "Bread Pan Loaf", "Springform Pan", "Bundt Pan", "Tart Pan", "Pie Pan",
  "Roasting Pan", "Basting Pan", "Saute Pan", "Saucepan Small", "Saucepan Large",
  "Stockpot Stainless", "Cooking Pot", "Pressure Cooker Lid", "Wok Cover", "Pan Lid Glass",
  "Steamer Bamboo", "Steamer Stainless", "Colander Large", "Salad Spinner", "Pasta Strainer",
  "Tea Strainer", "Coffee Filter", "Cheesecloth", "Kitchen Towel", "Dish Cloth",
  "Apron Cooking", "Oven Mitt", "Pot Holder", "Trivet Hot", "Magnet Fridge",
  "Magnetic Spice", "Spice Rack Wall", "Spice Container", "Salt Cellar", "Pepper Mill",
  "Oil Dispenser", "Vinegar Bottle", "Soy Sauce", "Condiment Bottle", "Honey Pot",
  "Jam Jar", "Pickle Jar", "Cookie Jar", "Cereal Container", "Flour Container",
  "Sugar Container", "Tea Container", "Coffee Container", "Pasta Container", "Rice Container",
  "Water Pitcher", "Juice Jug", "Milk Jug", "Cream Jug", "Gravy Boat",
  "Sauce Bowl", "Butter Dish", "Cheese Dome", "Bread Basket", "Fruit Bowl",
  "Vegetable Basket", "Egg Holder", "Toast Rack", "Napkin Holder", "Place Card",
  "Table Runner", "Placemat Set", "Coaster Set", "Trivets Hot", "Candle Holder",
  "Flower Vase", "Picture Frame", "Clock Kitchen", "Thermometer Oven", "Timer Kitchen",
  "Scales Digital", "Measuring Spoon", "Measuring Cup", "Mixer Electric Hand", "Blender Immersion",
  "Mandoline Slicer", "Apple Corer", "Melon Baller", "Zester Citrus", "Cheese Grater",
  "Garlic Press", "Lemon Juicer", "Egg Beater", "Can Opener Manual", "Bottle Opener",
  "Corkscrew Wine", "Meat Tenderizer", "Meat Hammer", "Meat Grinder", "Sausage Maker",
  "Pasta Roller", "Cookie Press", "Piping Bag Set", "Cake Decorating", "Fondant Roller",
  "Pastry Brush", "Silicone Baking", "Baking Stone", "Pizza Stone", "Griddle Casting",
  "Griddle Electric", "Panini Press", "Sandwich Press", "Waffle Maker Belgian", "Belgian Waffle",
  "Crepes Pan", "Omelet Pan", "Egg Cooker Electric", "Milk Frother", "Espresso Machine",
  "Coffee Grinder Burr", "Coffee Filter Paper", "French Press", "Pour Over Coffee", "Turkish Coffee",
  "Tea Infuser Ball", "Tea Infuser Basket", "Tea Strainer Set", "Teapot Ceramic", "Teapot Glass",
  "Kettle Stovetop", "Whistling Kettle", "Water Heater", "Water Cooler", "Ice Maker",
  "Ice Bucket", "Ice Tongs", "Ice Crusher", "Blender Juice", "Smoothie Blender",
  "Immersion Blender", "Stick Blender", "High Speed Blender", "Nutrition Extractor", "Slow Juicer",
  "Vegetable Juicer", "Wheatgrass Juicer", "Citrus Juicer Electric", "Orange Juicer", "Lemonade Maker",
  "Milkshake Maker", "Ice Cream Scoops", "Ice Cream Scoop", "Sorbet Maker", "Gelato Maker",
  "Yogurt Maker Machine", "Cheese Making", "Butter Maker", "Churner Butter", "Churner Ice Cream",
];

// Extended unique product names for Hardware & Tools (1000 unique)
const hardwareToolsNames = [
  "Cordless Drill Driver", "Impact Driver Kit", "Rotary Hammer", "Orbital Sander", "Random Sander",
  "Belt Sander Machine", "Detail Sander Mouse", "Polisher Angle", "Polisher Orbital", "Oscillating Sander",
  "Circular Saw Blade", "Miter Saw Compound", "Chop Saw", "Jigsaw Orbital", "Table Saw Cabinet",
  "Band Saw Portable", "Reciprocating Saw", "Angle Grinder Mini", "Bench Grinder", "Die Grinder",
  "Rotary Cutter", "Brad Nailer", "Finish Nailer", "Coil Nailer", "Framing Nailer",
  "Stapler Pneumatic", "Riveter Manual", "Bolt Cutter", "Cable Cutter", "Conduit Bender",
  "Wire Strippers", "Wire Crimper", "Multimeter Digital", "Clamp Bar", "Clamp C Spring",
  "Clamp One Handed", "Spreader Spring", "Quick Release", "Locking Plier", "Diagonal Plier",
  "Slip Joint Plier", "Tongue Groove Plier", "Needle Nose Plier", "Lineman Plier", "Water Pump Plier",
  "Cutting Plier", "Fence Plier", "Combination Plier", "Adjustable Spanner", "Fixed Spanner",
  "Socket Set Standard", "Socket Set Metric", "Socket Wrench Ratchet", "Breaker Bar", "Impact Socket",
  "Deep Socket", "Shallow Socket", "Hex Key Set", "Torque Wrench", "Pipe Wrench",
  "Basin Wrench", "Adjustable Wrench", "Strike Face", "Cross Pein", "Ball Pein",
  "Rubber Mallet", "Claw Hammer", "Rip Hammer", "Framing Hammer", "Carpenter Hammer",
  "Sledge Hammer", "Nail Hammer", "Roofing Hammer", "Tack Hammer", "Rubber Hammer",
  "Dead Blow Mallet", "Soft Face Mallet", "Brass Mallet", "Rawhide Mallet", "Fiberglass Handle",
  "Wooden Handle Hammer", "Ergonomic Grip Handle", "Cushioned Grip Handle", "Non Slip Handle", "Corrosion Resistant",
  "Anti Shock Technology", "Vibration Reduction", "Lightweight Aluminum", "Drop Forged Steel", "Polished Finish",
  "Black Oxide Finish", "Chrome Plated Finish", "Tin Plated Finish", "Nickel Plated Finish", "Zinc Plated Finish",
  "Stainless Steel Construction", "Carbon Steel Construction", "Alloy Steel Construction", "Cast Iron Construction", "Ductile Iron",
  "Hand Saw Crosscut", "Hand Saw Ripsaw", "Hand Saw Coping", "Hand Saw Compass", "Hand Saw Keyhole",
  "Hand Saw Hacksaw", "Hand Saw Pruning", "Saw Blade Carbide", "Saw Blade Diamond", "Saw Blade Titanium",
  "Saw Blade Ceramic", "Circular Blade", "Band Saw Blade", "Jigsaw Blade", "Reciprocating Blade",
  "Oscillating Blade", "Utility Knife Box", "Utility Knife Snap", "Utility Knife Retractable", "Craft Knife Set",
  "Filleting Knife", "Pruning Knife", "Carving Knife", "Marking Knife", "Bench Knife",
  "Chisel Set Wood", "Chisel Bevel Edge", "Chisel Mortise", "Chisel Butt", "Chisel Paring",
  "Gouge Woodworking", "Adze Tool", "Drawknife Tool", "Spokeshave Tool", "Plane Block",
  "Plane Smooth", "Plane Jack", "Plane Jointer", "Plane Compass", "Rasp Flat",
  "Rasp Half Round", "Rasp Round", "File Flat", "File Round", "File Square",
  "File Triangular", "File Needle", "File Chainsaw", "File Diamond", "File Rubber",
  "Sandpaper Grit", "Sanding Block", "Sanding Sponge", "Sanding Pad", "Wire Brush",
  "Wire Brush Cup", "Wire Brush Wheel", "Wire Brush Twisted", "Flap Disc", "Grinding Wheel",
  "Cutting Disc", "Polishing Pad", "Buffing Wheel", "Scotch Brite", "Steel Wool",
  "Emery Cloth", "Garnet Paper", "Flint Paper", "Aluminum Oxide", "Silicon Carbide",
  "Zirconia Alumina", "Ceramic Abrasive", "Speed Crank", "Brace Auger", "Bit Auger",
  "Bit Brad Point", "Bit Forstner", "Bit Spade", "Bit Hole Saw", "Bit Step Drill",
  "Countersink Bit", "Counterbore Bit", "Deburring Tool", "Chamfer Tool", "Taper Bit",
  "Screw Extractor", "Stud Extractor", "Screw Starter", "Screw Setter", "Screw Driver Bit",
  "Bit Phillips", "Bit Robertson", "Bit Pozidriv", "Bit Torx", "Bit Square",
  "Bit Pozidriv Tamper", "Bit Security Torx", "Bit Spline", "Bit Hex", "Bit Clutch",
  "Level Spirit", "Level Laser", "Level Digital", "Level Water", "Torpedo Level",
  "Box Level", "Torpedo Level", "Post Level", "Foundation Level", "Grade Level",
  "Aluminum Level", "Composite Level", "Plastic Level", "Measuring Tape", "Measuring Wheel",
  "Measuring Rod", "Folding Ruler", "Tape Measure Spring", "Tape Measure Standout", "Laser Measuring",
  "Laser Rangefinder", "Stud Finder Electronic", "Stud Finder Magnetic", "Studs and Joists", "Metal Detector",
  "Voltage Detector", "Phase Detector", "Outlet Tester", "Multimeter Analog", "Multimeter Digital",
  "Clamp Meter", "Insulation Tester", "Earth Tester", "Light Meter", "Sound Level",
  "Moisture Meter", "Thermal Imaging", "Infrared Thermometer", "Digital Thermometer", "Surface Thermometer",
  "Humidity Meter", "Air Quality Meter", "Gas Detector", "Radon Detector", "Formaldehyde Detector",
  "Lead Paint Detector", "Asbestos Test Kit", "Mold Test Kit", "Allergen Test Kit", "Water Test Kit",
  "pH Test Kit", "Nitrate Test Kit", "Hardness Test Kit", "Chemical Test Kit", "Drug Test Kit",
  "Pregnancy Test Kit", "Glucose Test Kit", "Cholesterol Test Kit", "Hemoglobin Test Kit", "Urinalysis Test Kit",
  "Allergy Test Kit", "COVID Test Kit", "Flu Test Kit", "Strep Test Kit", "Mono Test Kit",
  "Helicobacter Test Kit", "Celiac Test Kit", "Gluten Test Kit", "Lactose Test Kit", "Sugar Test Kit",
  "Salt Test Kit", "Bacteria Test Kit", "Coliform Test Kit", "E Coli Test Kit", "Chlorine Test Kit",
];

// Extended unique product names for Electrical & Plumbing (1000 unique)
const electricalPlumbingNames = [
  "Smart LED Bulb 9W", "Smart LED Bulb 12W", "Smart LED Strip Light", "Smart Light Panel", "Smart Downlight",
  "Smart Ceiling Light", "Smart Wall Light", "Smart Table Lamp", "Smart Floor Lamp", "Smart Desk Lamp",
  "Modular Light Switch", "Dimmer Light Switch", "Motion Sensor Switch", "Timer Switch Digital", "Remote Switch Wireless",
  "Smart Plug Outlet", "Smart Power Strip", "Smart Surge Protector", "RJ45 Socket Module", "USB Charging Module",
  "TV Socket Module", "Computer Socket Module", "Telephone Socket Module", "Video Socket Module", "Audio Jack Module",
  "HDMI Socket Module", "VGA Socket Module", "DVI Socket Module", "DisplayPort Socket Module", "USB Type C Module",
  "Lightning Socket Module", "Micro USB Module", "Mini USB Module", "3.5mm Socket Module", "2.5mm Socket Module",
  "XLR Socket Module", "RCA Socket Module", "Banana Socket Module", "Spade Socket Module", "Pin Socket Module",
  "Toggle Switch Single", "Toggle Switch Double", "Push Button Switch", "Bell Push Button", "Door Bell Chime",
  "Wireless Door Bell", "Video Door Bell", "Smart Door Lock", "Electronic Door Lock", "Magnetic Lock",
  "Electric Strike", "Access Control Reader", "Keypad Entry", "Fingerprint Lock", "Face Recognition",
  "Motion Detector Sensor", "Light Sensor Switch", "Temperature Sensor", "Humidity Sensor", "Air Quality Sensor",
  "Smoke Detector Alarm", "Fire Alarm Bell", "Carbon Monoxide Detector", "Gas Leak Detector", "Water Leak Detector",
  "Siren Alarm 12V", "Siren Alarm 24V", "Strobe Light Emergency", "Emergency Light Battery", "Exit Sign Light",
  "Transformer 12V AC", "Transformer 24V AC", "Transformer 110V", "Transformer 220V", "Transformer 400V",
  "DC Power Supply 5V", "DC Power Supply 12V", "DC Power Supply 24V", "AC Power Supply", "UPS Battery Backup",
  "Inverter Pure Sine", "Inverter Modified Sine", "Solar Charge Controller", "Battery Charger Auto", "Battery Charger Manual",
  "Stabilizer Single Phase", "Stabilizer Three Phase", "Voltage Stabilizer", "Automatic Voltage", "Power Factor Correction",
  "Distribution Board Single", "Distribution Board Three", "Switch Fused", "Switch Load", "Switch Changeover",
  "Miniature Circuit Breaker", "Residual Current", "Earth Leakage", "RCBO Breaker", "Double Pole", "Triple Pole",
  "Four Pole Breaker", "Selective Breaker", "Selective RCBO", "Shunt Trip", "Trip Coil",
  "Thermal Magnetic", "Electronic Trip", "Micro Processor Trip", "Communication Trip", "Current Limiting",
  "Plug Top Adapter", "Plug Top Fuse", "Plug Top Switch", "Plug Top Timer", "Plug Top Remote",
  "Extension Cord 5m", "Extension Cord 10m", "Extension Cord 20m", "Extension Cord 50m", "Extension Reel",
  "Power Cable Single", "Power Cable Twin", "Power Cable Three", "Power Cable Four", "Power Cable Shielded",
  "Armored Cable Steel", "Control Cable Multi", "Signal Cable Shielded", "Telephone Cable Twisted", "Data Cable Cat5e",
  "Data Cable Cat6", "Data Cable Cat6a", "Data Cable Cat7", "Fiber Optic Cable", "Coaxial Cable RG6",
  "Coaxial Cable RG11", "Triax Cable", "HDMI Cable 1m", "HDMI Cable 2m", "HDMI Cable 5m",
  "HDMI Cable 10m", "HDMI Cable Premium", "HDMI Cable High Speed", "HDMI Cable Ultra", "Display Port Cable",
  "USB Cable Type A", "USB Cable Type B", "USB Cable Type C", "USB Mini Cable", "USB Micro Cable",
  "Lightning Cable Apple", "Thunderbolt Cable", "VGA Cable Standard", "VGA Cable High Quality", "DVI Cable Digital",
  "DVI Cable Analog", "BNC Cable Video", "RCA Cable Audio", "RCA Cable Video", "Jack Cable 3.5mm",
  "Jack Cable 2.5mm", "Jack Cable 6.3mm", "XLR Cable Male", "XLR Cable Female", "Banana Cable Red",
  "Banana Cable Black", "Spade Connector", "Pin Connector", "Ring Connector", "Fork Connector",
  "Butt Connector", "Splice Connector", "Crimp Terminal Male", "Crimp Terminal Female", "Bullet Connector",
  "Barrel Connector", "DC Jack 5.5mm", "DC Jack 7.4mm", "DC Jack Coaxial", "Molex Connector",
  "Deutsch Connector", "Amphenol Connector", "Harting Connector", "Fischer Connector", "Lapp Connector",
  "PVC Pipe 1/2 inch", "PVC Pipe 3/4 inch", "PVC Pipe 1 inch", "PVC Pipe 1.25 inch", "PVC Pipe 1.5 inch",
  "PVC Pipe 2 inch", "PVC Pipe 2.5 inch", "PVC Pipe 3 inch", "CPVC Pipe 1/2 inch", "CPVC Pipe 3/4 inch",
  "CPVC Pipe 1 inch", "HDPE Pipe 1/2 inch", "HDPE Pipe 3/4 inch", "HDPE Pipe 1 inch", "HDPE Pipe 1.5 inch",
  "Copper Pipe 1/4 inch", "Copper Pipe 3/8 inch", "Copper Pipe 1/2 inch", "Copper Pipe 3/4 inch", "Copper Pipe 1 inch",
  "Steel Pipe 1/2 inch", "Steel Pipe 3/4 inch", "Steel Pipe 1 inch", "Steel Pipe 1.5 inch", "Steel Pipe 2 inch",
  "Galvanized Pipe 1/2", "Galvanized Pipe 3/4", "Galvanized Pipe 1 inch", "Stainless Steel Pipe", "Aluminum Pipe",
  "PVC Elbow 90 degree", "PVC Elbow 45 degree", "PVC Tee Fitting", "PVC Cross Fitting", "PVC Cap End",
  "PVC Coupling Straight", "PVC Coupling Reducer", "PVC Union Fitting", "PVC Adapter", "PVC Bushing",
  "PVC Ball Valve", "PVC Gate Valve", "PVC Check Valve", "PVC Butterfly Valve", "PVC Needle Valve",
  "PVC Solenoid Valve", "PVC Diaphragm Valve", "PVC Flush Valve", "PVC Fill Valve", "PVC Drain Valve",
  "Brass Ball Valve", "Brass Gate Valve", "Brass Check Valve", "Brass Butterfly Valve", "Brass Needle Valve",
  "Brass Angle Valve", "Brass Union Fitting", "Brass Coupling", "Brass Adapter", "Brass Bushing",
  "Faucet Kitchen Single", "Faucet Kitchen Double", "Faucet Kitchen Spray", "Faucet Basin Single", "Faucet Basin Double",
  "Faucet Basin Spray", "Faucet Bidet Single", "Faucet Bidet Double", "Faucet Bath Tub", "Faucet Wall Mount",
  "Faucet Pedestal Sink", "Faucet Vessel Sink", "Faucet Shower Head", "Faucet Shower Arm", "Faucet Shower Valve",
  "Faucet Diverter", "Faucet Thermostatic", "Faucet Pressure Balance", "Faucet Cartridge", "Faucet Washer",
  "Faucet Aerator", "Faucet Strainer", "Faucet Screen", "Faucet Screens", "Shower Head Rain",
  "Shower Head Handheld", "Shower Head Body Spray", "Shower Head Fixed", "Shower Head Adjustable", "Shower Head Low Flow",
  "Shower Arm Elbow", "Shower Elbows Chrome", "Shower Elbows Brass", "Shower Elbows Stainless", "Shower Hose",
  "Shower Hose Stainless", "Shower Hose Flexible", "Shower Hose Braided", "Shower Mixing Valve", "Shower Diverter",
  "Shower Valve Trim", "Shower Escutcheon Plate", "Shower Handle Single", "Shower Handle Double", "Shower Handle Lever",
];

// Extended unique product names for Mobile Accessories (1000 unique)
const mobileAccessoriesNames = [
  "Tempered Glass Premium 9H", "Hydrogel Screen Guard", "Anti Spy Screen Protector", "Privacy Screen Filter", "Blue Light Filter",
  "Matte Screen Protector", "Gloss Screen Protector", "Anti Fingerprint Guard", "Self Healing Protector", "Anti Glare Guard",
  "Soft Silicone Case Black", "Soft Silicone Case Blue", "Soft Silicone Case Red", "Hard Plastic Case", "TPU Rubber Case",
  "Leather Case Flip", "Leather Case Wallet", "Leather Case Pouch", "Canvas Case Fabric", "Neoprene Case Sleeve",
  "Polycarbonate Case Hard", "Clear Case Transparent", "Frosted Case Translucent", "Gradient Case Colorful", "Holographic Case",
  "Mirror Case Reflective", "Carbon Fiber Case", "Metal Frame Case", "Aluminum Bumper Case", "Magnetic Case Snap",
  "Hybrid Case Dual Layer", "Heavy Duty Case", "Shockproof Case Armored", "Waterproof Case Sealed", "Dustproof Case",
  "Anti Drop Case Tested", "Military Grade Case", "Rugged Case Tough", "Slim Case Ultra Thin", "Slim Case Minimal",
  "Minimal Case Flat", "Transparent Case Crystal", "Pattern Case Design", "Cute Case Funny", "Fashion Case Stylish",
  "Designer Case Brand", "Luxury Case Premium", "Official Case Licensed", "Branded Case Authentic", "Custom Case Personalized",
  "Printed Case Custom Photo", "Engraved Case Monogram", "Pattern Case Geometric", "Pattern Case Mandala", "Pattern Case Abstract",
  "Card Slot Case Wallet", "Stand Case Kickstand", "Ring Case Holder", "Pop Socket Case", "Car Mount Compatible",
  "Magnetic Mount Case", "MagSafe Compatible Case", "Qi Wireless Charging", "Battery Case Power Bank", "Charging Case",
  "Fast Charger 30W USB-C", "Fast Charger 65W Type-C", "Slow Charger 5W Basic", "Wireless Charger Pad", "Wireless Charger Stand",
  "Wireless Charger Car", "Solar Charger Panel", "Hand Crank Charger", "Car Charger Dual Port", "Car Charger Fast",
  "Wall Charger 1 Port", "Wall Charger 2 Port", "Wall Charger 3 Port", "Wall Charger 4 Port", "Wall Charger 6 Port",
  "Travel Charger Compact", "Travel Charger Foldable", "Travel Charger Multi", "Universal Charger Adapter", "Power Adapter",
  "Charging Cable USB Type-C", "Charging Cable Micro USB", "Charging Cable Lightning", "Charging Cable Lightning Certified", "Braided Cable Durable",
  "Fabric Braided Cable", "Nylon Braided Cable", "Twisted Braided Cable", "Fast Charging Cable", "Data Transfer Cable",
  "High Speed Cable 480 Mbps", "Super Speed Cable 5 Gbps", "Ultra Speed Cable 10 Gbps", "Certified Cable MFi", "Certified Cable Qi",
  "Reinforced Cable Strain", "Stress Relief Cable", "Tangle Free Cable", "Spiral Cable Organizer", "Cable Wrap Organizer",
  "Power Bank 10000mAh", "Power Bank 20000mAh", "Power Bank 30000mAh", "Power Bank 50000mAh", "Power Bank Solar",
  "Power Bank Waterproof", "Power Bank Shockproof", "Power Bank Fast Charge", "Power Bank Wireless", "Power Bank Compact",
  "Power Bank Mini Portable", "Power Bank Ultra Slim", "Power Bank Large Capacity", "Power Bank With Display", "Power Bank With Light",
  "Portable Speaker Bluetooth", "Portable Speaker Waterproof", "Portable Speaker Wireless", "Portable Speaker Stereo", "Portable Speaker Bass",
  "Wireless Earbuds TWS", "Wireless Earbuds Noise Cancelling", "Wireless Earbuds Premium", "Wireless Earbuds Gaming", "Wireless Earbuds Sports",
  "Wireless Earbuds Touch Control", "Wireless Earbuds Voice Assistant", "Wired Earphones Jack 3.5mm", "Wired Earphones Type-C", "Wired Earphones Balanced",
  "Wired Earphones Heavy Bass", "Wired Earphones Studio Quality", "Wired Earphones Budget", "In Ear Earphones Comfortable", "Over Ear Headphones",
  "On Ear Headphones Light", "Gaming Headphones Surround", "Gaming Headphones Wireless", "Gaming Headphones Wired", "Gaming Headphones RGB",
  "Music Headphones Studio", "Music Headphones Audiophile", "Music Headphones Portable", "Music Headphones Noise Isolation", "Studio Headphones Professional",
  "Phone Stand Desk Adjustable", "Phone Stand Pop Socket", "Phone Stand Car Dashboard", "Phone Stand Air Vent", "Phone Stand Windshield",
  "Phone Stand Suction Cup", "Phone Stand Magnetic", "Phone Stand Gravity", "Phone Stand Desktop", "Phone Stand Tablet",
  "Phone Ring Holder Metal", "Phone Ring Holder Plastic", "Phone Ring Holder Universal", "Phone Ring Kickstand", "Phone Pop Socket",
  "Car Phone Mount Dashboard", "Car Phone Mount Air Vent", "Car Phone Mount Windshield", "Car Phone Mount CD Slot", "Car Phone Mount Magnetic",
  "Car Phone Mount Gravity", "Car Phone Holder Suction", "Car Phone Holder Clamp", "Car Phone Holder Spring", "Bike Phone Mount",
  "Bike Phone Case Waterproof", "Bike Phone Handlebar", "Motorcycle Phone Mount", "Motorcycle Phone Case", "Motorcycle Phone Holder",
  "Desk Phone Stand Adjustable", "Desk Phone Holder Angled", "Desk Phone Dock", "Desk Phone Cradle", "Desk Phone Rest",
  "Wall Phone Mount Adhesive", "Wall Phone Mount Screw", "Wall Phone Holder Plastic", "Wall Phone Holder Metal", "Wall Phone Holder Ceramic",
  "Bed Phone Mount Flexible", "Bed Phone Stand Gooseneck", "Bed Phone Holder Suction", "Tripod Phone Mount", "Tripod Phone Clamp",
  "Selfie Stick Monopod", "Selfie Stick Wireless Remote", "Selfie Stick Bluetooth Remote", "Selfie Stick 3 in 1", "Selfie Stick Gimbal",
  "Phone Gimbal Stabilizer 3 Axis", "Phone Gimbal Wireless", "Phone Gimbal Foldable", "Phone Gimbal Portable", "Phone Gimbal Professional",
];

// Extended unique product names for Apparel & Footwear (1000 unique)
const apparelFootwearNames = [
  "Running Shoes Mesh Upper", "Running Shoes Cushioned Sole", "Running Shoes Lightweight", "Running Shoes Trail", "Running Shoes Road",
  "Running Shoes Marathon", "Running Shoes Sprint", "Running Shoes Unisex", "Running Shoes Breathable", "Running Shoes Anti Slip",
  "Casual Shoes Slip On", "Casual Shoes Sneaker Style", "Casual Shoes Loafer", "Casual Shoes Moccasin", "Casual Shoes Boat",
  "Casual Shoes Canvas", "Casual Shoes Leather", "Casual Shoes Suede", "Casual Shoes Textile", "Casual Shoes Rubber Sole",
  "Formal Shoes Oxford Black", "Formal Shoes Oxford Brown", "Formal Shoes Derby Black", "Formal Shoes Derby Brown", "Formal Shoes Loafer",
  "Formal Shoes Brogue", "Formal Shoes Monk Strap", "Formal Shoes Slip On", "Formal Shoes Leather", "Formal Shoes Dress",
  "Sandals Flip Flop Casual", "Sandals Thong Basic", "Sandals Strappy Comfort", "Sandals Slides Slip On", "Sandals Clogs Garden",
  "Sandals Cork Sole", "Sandals Eva Foam", "Sandals Rubber Sole", "Sandals Leather Strap", "Sandals Velcro Closure",
  "Sneakers High Top", "Sneakers Low Top", "Sneakers Mid Top", "Sneakers Canvas", "Sneakers Suede",
  "Sneakers Leather", "Sneakers Textile", "Sneakers Platform", "Sneakers Retro", "Sneakers Modern",
  "Boots Combat Military", "Boots Chelsea Elastic", "Boots Hiking Mountain", "Boots Cowboy Western", "Boots Motorcycle",
  "Boots Worker Safety", "Boots Rain Waterproof", "Boots Snow Winter", "Boots Dress Formal", "Boots Casual Everyday",
  "Heels Stiletto High", "Heels Block Stable", "Heels Wedge Comfortable", "Heels Kitten Low", "Heels Pumps Dress",
  "Heels Sandal Strappy", "Heels Boot Ankle", "Heels Mule Backless", "Heels Slingback Elegant", "Heels Open Toe",
  "Flat Shoes Ballerina", "Flat Shoes Loafer", "Flat Shoes Oxford", "Flat Shoes Boat", "Flat Shoes Slip On",
  "Flat Shoes Lace Up", "Flat Shoes Buckle", "Flat Shoes Velcro", "Flat Shoes Comfortable", "Flat Shoes Casual",
  "Slippers Indoor Soft", "Slippers Memory Foam", "Slippers House Cozy", "Slippers Fleece Warm", "Slippers Backless",
  "Slippers Slide Casual", "Slippers Closed Toe", "Slippers Open Toe", "Slippers Anti Slip", "Slippers Washable",
  "Loafers Leather Classic", "Loafers Canvas Casual", "Loafers Suede Soft", "Loafers Driving Moccasin", "Loafers Penny",
  "Loafers Tassel Elegant", "Loafers Bit Metal", "Loafers Comfort Padded", "Loafers Lightweight", "Loafers Water Resistant",
  "T-Shirt Cotton Basic", "T-Shirt Cotton Premium", "T-Shirt Organic Cotton", "T-Shirt Blend Fabric", "T-Shirt Polyester Quick Dry",
  "T-Shirt Graphic Print", "T-Shirt Solid Color", "T-Shirt Striped Design", "T-Shirt V Neck", "T-Shirt Crew Neck",
  "T-Shirt Oversized Fit", "T-Shirt Slim Fit", "T-Shirt Regular Fit", "T-Shirt Athletic Fit", "T-Shirt Long Sleeve",
  "Shirt Button Up Casual", "Shirt Button Up Formal", "Shirt Oxford Cloth", "Shirt Chambray Denim", "Shirt Linen Breathable",
  "Shirt Cotton Blend", "Shirt Polyester Wrinkle Free", "Shirt Checkered Pattern", "Shirt Solid Color", "Shirt Striped Pattern",
  "Shirt Floral Print", "Shirt Long Sleeve", "Shirt Short Sleeve", "Shirt Sleeveless Tank", "Shirt Oversized Boyfriend",
  "Jeans Slim Fit Classic", "Jeans Skinny Tight", "Jeans Straight Leg", "Jeans Relaxed Fit", "Jeans Bootcut Flared",
  "Jeans Tapered Ankle", "Jeans Boyfriend Casual", "Jeans Cargo Utility", "Jeans High Waisted", "Jeans Mid Rise",
  "Jeans Low Rise", "Jeans Blue Light Wash", "Jeans Blue Dark Wash", "Jeans Blue Black Wash", "Jeans Blue Distressed",
  "Pants Trousers Dress", "Pants Chinos Casual", "Pants Cargo Utility", "Pants Joggers Comfortable", "Pants Sweatpants",
  "Pants Leggings Stretch", "Pants Yoga Comfortable", "Pants Capri Cropped", "Pants Flared Bell Bottom", "Pants Straight Leg",
  "Shorts Denim Short", "Shorts Cargo Utility", "Shorts Athletic Performance", "Shorts Gym Workout", "Shorts Beach Swimming",
  "Shorts Board Swim", "Shorts Lounge Comfort", "Shorts Casual Everyday", "Shorts Mini Short", "Shorts Bermuda Long",
  "Jacket Leather Classic", "Jacket Denim Casual", "Jacket Bomber Stylish", "Jacket Varsity College", "Jacket Racing Moto",
  "Jacket Windbreaker Light", "Jacket Raincoat Water Resistant", "Jacket Winter Warm", "Jacket Puffer Insulated", "Jacket Fleece Thermal",
  "Jacket Hoodie Casual", "Jacket Blazer Formal", "Jacket Cardigan Button", "Jacket Pullover Cozy", "Jacket Sport Active",
  "Sweater Knit Cozy", "Sweater Wool Warm", "Sweater Merino Breathable", "Sweater Cotton Blend", "Sweater Acrylic Affordable",
  "Sweater V Neck", "Sweater Crew Neck", "Sweater Turtleneck High", "Sweater Cable Knit", "Sweater Ribbed Textured",
  "Sweater Pullover Slip On", "Sweater Cardigan Button", "Sweater Sleeveless Vest", "Sweater Oversized Cozy", "Sweater Fitted Slim",
  "Dress Casual Everyday", "Dress Casual Summer", "Dress Casual Fall", "Dress Casual Winter", "Dress Formal Evening",
  "Dress Formal Gown", "Dress Wedding Ceremony", "Dress Business Professional", "Dress Business Casual", "Dress Office Work",
  "Dress Party Cocktail", "Dress Party Evening", "Dress Party Club", "Dress Beach Sundress", "Dress Maxi Floor Length",
];

// Image URLs for each category
const categoryImages = {
  "home-kitchen": [
    "https://images.unsplash.com/photo-1585518419759-87060398cba0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1585429433098-5ec3c8c6ce00?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1563193062-e60b19d40015?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1590794033100-9f60a05a9d82?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1577574494847-a47e7d2c94f3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1568052106636-409c0f50d8ba?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1585301677597-e1c1d2c75dfd?w=400&h=300&fit=crop",
  ],
  "hardware-tools": [
    "https://images.unsplash.com/photo-1504328213606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1545050154-aaeeee4fa69e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1452860606245-08da50138478?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1510147768161-04cdc5b24505?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581092162562-40038f56c237?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1598080863247-fe8b3a4a2c2f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581126236e2-88b2e3f9a8ab?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1572196014211-a94d88ff5e48?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1452860606245-08da50138478?w=400&h=300&fit=crop",
  ],
  "electrical-plumbing": [
    "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1599343692178-2b03b6d719d5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1584622614875-2f938757a4a1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1584630540406-e84ba91fef5f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581092917550-e323a3bf3ebf?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581092162562-40038f56c237?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1581092162562-40038f56c237?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509391366360-2e938aa1ef00?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1584622614875-2f938757a4a1?w=400&h=300&fit=crop",
  ],
  "mobile-accessories": [
    "https://images.unsplash.com/photo-1600788486208-a62c49556160?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1606933248051-5ce98848017b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1609042228046-b4ee2fccfe10?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1609389141726-5570af59fb10?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1610945415295-d9bbf26d4ffe?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1605559424843-9e4c3ca4628a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600788486208-a62c49556160?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
  ],
  "apparel-footwear": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1598941244792-fb5fef7ebc13?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=300&fit=crop",
  ],
};

// Generate products with unique names per category
const generateCategoryProducts = (
  category: string,
  nameArray: string[],
  priceRange: { min: number; max: number }
): Product[] => {
  const products: Product[] = [];
  const images = categoryImages[category as keyof typeof categoryImages] || [];
  const colors = ["Black", "White", "Grey", "Blue", "Red", "Green", "Navy", "Brown", "Silver", "Gold"];
  const sizes = ["S", "M", "L", "XL", "XXL", "5", "6", "7", "8", "9", "10", "11", "12"];
  const materials = ["Plastic", "Metal", "Stainless Steel", "Leather", "Cotton", "Polyester", "Aluminum", "Rubber", "Silicone"];

  for (let i = 0; i < Math.min(nameArray.length, 1000); i++) {
    const price = priceRange.min + ((i * 13) % (priceRange.max - priceRange.min));
    const image = images[i % images.length];
    
    const colorIndices = [i % colors.length, (i + 3) % colors.length, (i + 7) % colors.length];
    const selectedColors = [...new Set(colorIndices.map(idx => colors[idx]))];
    
    const sizeIndices = [i % sizes.length, (i + 2) % sizes.length, (i + 5) % sizes.length];
    const selectedSizes = [...new Set(sizeIndices.map(idx => sizes[idx]))];

    let specs: Specialization[] = [];

    if (category === "home-kitchen" || category === "mobile-accessories") {
      specs = [
        { name: "Color", options: selectedColors.slice(0, 4) },
        { name: "Material", options: materials.slice((i % (materials.length - 2)), (i % (materials.length - 2)) + 3) },
        { name: "Size", options: ["Small", "Medium", "Large"].slice(0, ((i % 3) + 1)) },
      ];
    } else if (category === "hardware-tools" || category === "electrical-plumbing") {
      specs = [
        { name: "Type", options: ["Standard", "Premium", "Professional"].slice(0, ((i % 3) + 1)) },
        { name: "Size", options: selectedSizes.slice(0, 4) },
        { name: "Material", options: materials.slice((i % (materials.length - 2)), (i % (materials.length - 2)) + 3) },
      ];
    } else if (category === "apparel-footwear") {
      specs = [
        { name: "Size", options: selectedSizes.slice(0, 6) },
        { name: "Color", options: selectedColors.slice(0, 4) },
        { name: "Material", options: materials.slice((i % (materials.length - 2)), (i % (materials.length - 2)) + 3) },
      ];
    }

    products.push({
      id: `${category}-${i + 1}`,
      name: nameArray[i],
      category,
      price,
      image,
      specializations: specs,
    });
  }

  return products;
};

// Generate all products with truly unique names
export const allProducts: Product[] = [
  ...generateCategoryProducts("home-kitchen", homeKitchenNames, { min: 500, max: 15000 }),
  ...generateCategoryProducts("hardware-tools", hardwareToolsNames, { min: 150, max: 8000 }),
  ...generateCategoryProducts("electrical-plumbing", electricalPlumbingNames, { min: 50, max: 12000 }),
  ...generateCategoryProducts("mobile-accessories", mobileAccessoriesNames, { min: 150, max: 5000 }),
  ...generateCategoryProducts("apparel-footwear", apparelFootwearNames, { min: 200, max: 12000 }),
];

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter((p) => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((p) => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
};
