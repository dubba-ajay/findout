import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useState } from "react";

const categoryNames: Record<string, string> = {
  "home-kitchen": "Home & Kitchen",
  "hardware-tools": "Hardware & Tools",
  "electrical-plumbing": "Electrical & Plumbing",
  "mobile-accessories": "Mobile Accessories",
  "apparel-footwear": "Apparel & Footwear",
};

const productNames: Record<string, string> = {
  "rice-cooker": "Rice Cooker",
  blender: "Blender",
  "phone-case": "Phone Case",
  "running-shoes": "Running Shoes",
};

const storeNames: Record<string, string> = {
  "store-1": "Home Mart Electronics",
  "store-2": "Kitchen World Store",
  "store-3": "Premium Appliances",
  "store-4": "Quality Stores",
  "store-5": "Express Store",
  "store-6": "Best Deals Store",
};

export default function Preview() {
  const { categoryId = "", productId = "", storeId = "" } = useParams<{
    categoryId: string;
    productId: string;
    storeId: string;
  }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [location_input, setLocationInput] = useState("");

  const categoryName = categoryNames[categoryId] || "Product";
  const productName = productNames[productId] || "Product";
  const storeName = storeNames[storeId] || "Store";

  const mockSpecs = {
    brand: "Prestige",
    capacity: "1L",
    color: "White",
  };

  const whatsappMessage = `Hi! I'm interested in purchasing a ${productName}. 
Could you please check availability with these specifications:
- Brand: ${mockSpecs.brand}
- Capacity: ${mockSpecs.capacity}
- Color: ${mockSpecs.color}

My location: ${location_input || "Not provided"}

Please let me know the price and availability. Thank you!`;

  const handleSendRequest = () => {
    if (!location_input.trim()) {
      alert("Please enter your location");
      return;
    }

    const message = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-32">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to={`/stores/${categoryId}/${productId}`}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Send Request
          </h1>
        </div>

        {/* Store and Product Summary */}
        <div className="glass rounded-2xl p-6 mb-8 animate-fade-in border border-gray-100/50">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {storeName}
          </h2>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
              Selected Product & Specifications
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Product</span>
                <span className="font-semibold text-gray-900">{productName}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Brand</span>
                <span className="font-semibold text-gray-900">
                  {mockSpecs.brand}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Capacity</span>
                <span className="font-semibold text-gray-900">
                  {mockSpecs.capacity}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Color</span>
                <span className="font-semibold text-gray-900">
                  {mockSpecs.color}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Input */}
        <div className="mb-8 animate-fade-in">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Your Location
          </label>
          <input
            type="text"
            placeholder="Enter your location or address"
            value={location_input}
            onChange={(e) => setLocationInput(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        {/* WhatsApp Message Preview */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Message Preview
          </h3>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
            <div className="space-y-2 text-sm text-gray-800 whitespace-pre-wrap font-medium">
              {whatsappMessage}
            </div>
          </div>
        </div>

        {/* WhatsApp Send Button */}
        <div className="space-y-4 animate-fade-in">
          <button
            onClick={handleSendRequest}
            disabled={!location_input.trim()}
            className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              location_input.trim()
                ? "gradient-whatsapp text-white shadow-soft hover:shadow-soft-lg active:scale-95"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Send Request via WhatsApp
          </button>

          <Link
            to="/"
            className="block text-center py-3 text-primary hover:underline font-medium"
          >
            Browse More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
