import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductSearchProps {
  onProductSelect?: (productId: string, productName: string) => void;
  categoryId: string;
}

const mockProducts: Record<string, { id: string; name: string; icon: string }[]> = {
  "home-kitchen": [
    { id: "rice-cooker", name: "Rice Cooker", icon: "🍚" },
    { id: "blender", name: "Blender", icon: "🔥" },
    { id: "microwave", name: "Microwave Oven", icon: "📡" },
    { id: "toaster", name: "Toaster", icon: "🍞" },
    { id: "coffee-maker", name: "Coffee Maker", icon: "☕" },
    { id: "mixer-grinder", name: "Mixer Grinder", icon: "⚙️" },
    { id: "pressure-cooker", name: "Pressure Cooker", icon: "🍳" },
    { id: "electric-kettle", name: "Electric Kettle", icon: "🫖" },
  ],
  "hardware-tools": [
    { id: "drill", name: "Power Drill", icon: "🔨" },
    { id: "saw", name: "Hand Saw", icon: "🪚" },
    { id: "hammer", name: "Hammer Set", icon: "🔨" },
    { id: "wrench", name: "Wrench Set", icon: "🔧" },
    { id: "tape-measure", name: "Tape Measure", icon: "📏" },
    { id: "level", name: "Spirit Level", icon: "📐" },
    { id: "screwdriver", name: "Screwdriver Kit", icon: "🪛" },
  ],
  "electrical-plumbing": [
    { id: "water-pump", name: "Water Pump", icon: "💧" },
    { id: "switch-board", name: "Switch Board", icon: "⚡" },
    { id: "wiring-cable", name: "Wiring Cable", icon: "🔌" },
    { id: "pipe-fittings", name: "Pipe Fittings", icon: "🔗" },
    { id: "led-bulb", name: "LED Bulb", icon: "💡" },
    { id: "stabilizer", name: "Voltage Stabilizer", icon: "⚖️" },
    { id: "circuit-breaker", name: "Circuit Breaker", icon: "🔋" },
  ],
  "mobile-accessories": [
    { id: "phone-case", name: "Phone Case", icon: "📱" },
    { id: "charger", name: "USB Charger", icon: "🔌" },
    { id: "screen-protector", name: "Screen Protector", icon: "🛡️" },
    { id: "tempered-glass", name: "Tempered Glass", icon: "💎" },
    { id: "car-mount", name: "Car Mount", icon: "🚗" },
    { id: "headphones", name: "Headphones", icon: "🎧" },
    { id: "power-bank", name: "Power Bank", icon: "🔋" },
  ],
  "apparel-footwear": [
    { id: "running-shoes", name: "Running Shoes", icon: "👟" },
    { id: "casual-shirt", name: "Casual Shirt", icon: "👔" },
    { id: "denim-jeans", name: "Denim Jeans", icon: "👖" },
    { id: "sports-tshirt", name: "Sports T-Shirt", icon: "👕" },
    { id: "jacket", name: "Winter Jacket", icon: "🧥" },
    { id: "formal-shoes", name: "Formal Shoes", icon: "👞" },
    { id: "cap", name: "Baseball Cap", icon: "🧢" },
  ],
};

const ProductSearch = ({ onProductSelect, categoryId }: ProductSearchProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const products = mockProducts[categoryId] || [];

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  const handleSelect = (productId: string, productName: string) => {
    if (onProductSelect) {
      onProductSelect(productId, productName);
    }
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search any product…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className={cn(
              "w-full pl-12 pr-10 py-3 rounded-full border border-gray-200",
              "bg-white transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "placeholder:text-gray-400"
            )}
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {isOpen && query && filteredProducts.length > 0 && (
          <div
            className={cn(
              "absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl",
              "shadow-soft-lg border border-gray-100 overflow-hidden z-50",
              "animate-slide-up"
            )}
          >
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/specifications/${categoryId}/${product.id}`}
                onClick={() =>
                  handleSelect(product.id, product.name)
                }
                className={cn(
                  "flex items-center gap-3 px-4 py-3 border-b border-gray-100",
                  "hover:bg-gray-50 transition-colors cursor-pointer",
                  "last:border-b-0"
                )}
              >
                <span className="text-xl">{product.icon}</span>
                <span className="text-gray-900 font-medium">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        )}

        {isOpen && query && filteredProducts.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-soft-lg border border-gray-100 p-8 z-50 text-center">
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </div>

      {!query && (
        <div className="mt-8 text-center">
          <div className="flex justify-center mb-4">
            <Search className="w-12 h-12 text-gray-300" />
          </div>
          <p className="text-gray-500 font-medium">Start typing to search for products</p>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
