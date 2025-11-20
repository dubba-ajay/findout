import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useMemo } from "react";
import Chip from "@/components/Chip";

const categoryNames: Record<string, string> = {
  "home-kitchen": "Home & Kitchen",
  "hardware-tools": "Hardware & Tools",
  "electrical-plumbing": "Electrical & Plumbing",
  "mobile-accessories": "Mobile Accessories",
  "apparel-footwear": "Apparel & Footwear",
};

const productSpecifications: Record<string, any> = {
  "rice-cooker": {
    name: "Rice Cooker",
    icon: "🍚",
    specs: {
      brand: {
        label: "Brand",
        type: "chip",
        options: ["Prestige", "Philips", "Bajaj", "Wonderchef", "Cello"],
      },
      capacity: {
        label: "Capacity",
        type: "capacity",
        options: [
          { label: "0.5L", value: "0.5l" },
          { label: "1L", value: "1l" },
          { label: "1.8L", value: "1.8l" },
          { label: "2.2L", value: "2.2l" },
          { label: "3L", value: "3l" },
        ],
      },
      color: {
        label: "Color",
        type: "color",
        options: [
          { label: "White", value: "#FFFFFF" },
          { label: "Black", value: "#000000" },
          { label: "Stainless Steel", value: "#C0C0C0" },
          { label: "Silver", value: "#E8E8E8" },
        ],
      },
      material: {
        label: "Material",
        type: "chip",
        options: ["Stainless Steel", "Aluminium", "Non-Stick"],
      },
    },
  },
  blender: {
    name: "Blender",
    icon: "🔥",
    specs: {
      brand: {
        label: "Brand",
        type: "chip",
        options: ["Philips", "Bosch", "Preethi", "Butterfly", "Usha"],
      },
      power: {
        label: "Power (Watts)",
        type: "chip",
        options: ["500W", "750W", "1000W", "1500W"],
      },
      color: {
        label: "Color",
        type: "color",
        options: [
          { label: "Black", value: "#000000" },
          { label: "White", value: "#FFFFFF" },
          { label: "Red", value: "#FF0000" },
          { label: "Silver", value: "#C0C0C0" },
        ],
      },
      warranty: {
        label: "Warranty",
        type: "chip",
        options: ["1 Year", "2 Years", "3 Years"],
      },
    },
  },
  "phone-case": {
    name: "Phone Case",
    icon: "📱",
    specs: {
      brand: {
        label: "Brand",
        type: "chip",
        options: ["Spigen", "OtterBox", "NILLKIN", "Ringke", "Poetic"],
      },
      material: {
        label: "Material",
        type: "chip",
        options: ["TPU", "Hard Shell", "Hybrid", "Leather"],
      },
      color: {
        label: "Color",
        type: "color",
        options: [
          { label: "Black", value: "#000000" },
          { label: "Blue", value: "#0000FF" },
          { label: "Red", value: "#FF0000" },
          { label: "Clear", value: "#FFFFFF" },
          { label: "Green", value: "#008000" },
        ],
      },
    },
  },
  "running-shoes": {
    name: "Running Shoes",
    icon: "👟",
    specs: {
      brand: {
        label: "Brand",
        type: "chip",
        options: ["Nike", "Adidas", "Puma", "Saucony", "New Balance"],
      },
      size: {
        label: "Shoe Size",
        type: "chip",
        options: ["6", "7", "8", "9", "10", "11", "12"],
      },
      color: {
        label: "Color",
        type: "color",
        options: [
          { label: "Black", value: "#000000" },
          { label: "White", value: "#FFFFFF" },
          { label: "Red", value: "#FF0000" },
          { label: "Blue", value: "#0000FF" },
          { label: "Gray", value: "#808080" },
        ],
      },
    },
  },
};

export default function Specifications() {
  const { categoryId = "", productId = "" } = useParams<{
    categoryId: string;
    productId: string;
  }>();
  const navigate = useNavigate();

  const product = productSpecifications[productId];
  const [selections, setSelections] = useState<Record<string, string>>({});

  const categoryName = categoryNames[categoryId] || "Products";
  const isFormComplete = useMemo(() => {
    if (!product) return false;
    return Object.keys(product.specs).every((key) => selections[key]);
  }, [product, selections]);

  const handleSelection = (specKey: string, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [specKey]: value,
    }));
  };

  const handleFindStores = () => {
    if (isFormComplete) {
      navigate(`/stores/${categoryId}/${productId}`);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product not found
          </h2>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-32">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to={`/search/${categoryId}`}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
        </div>

        {/* Product Title */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-4xl">{product.icon}</span>
            {product.name}
          </h1>
          <p className="text-lg text-gray-500">Select specifications</p>
        </div>

        {/* Specifications Sections */}
        <div className="space-y-8 animate-fade-in">
          {Object.entries(product.specs).map(([specKey, spec], index) => (
            <div
              key={specKey}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              className="animate-fade-in"
            >
              <h3 className="text-base font-semibold text-gray-600 uppercase tracking-wide mb-4">
                {spec.label}
              </h3>

              <div className="flex flex-wrap gap-3">
                {spec.type === "color" ? (
                  <div className="flex gap-3 flex-wrap">
                    {spec.options.map((option: any) => (
                      <button
                        key={option.label}
                        onClick={() =>
                          handleSelection(specKey, option.value)
                        }
                        className={`relative w-12 h-12 rounded-full transition-all duration-200 border-2 ${
                          selections[specKey] === option.value
                            ? "border-primary scale-110"
                            : "border-gray-200 hover:border-primary"
                        }`}
                        style={{
                          backgroundColor: option.value,
                        }}
                        title={option.label}
                      >
                        {selections[specKey] === option.value && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-primary"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : spec.type === "capacity" ? (
                  <div className="flex gap-2 flex-wrap">
                    {spec.options.map((option: any) => (
                      <button
                        key={option.value}
                        onClick={() =>
                          handleSelection(specKey, option.value)
                        }
                        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                          selections[specKey] === option.value
                            ? "bg-gradient-primary text-white shadow-soft scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-2 flex-wrap">
                    {spec.options.map((option: string) => (
                      <button
                        key={option}
                        onClick={() =>
                          handleSelection(specKey, option)
                        }
                        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                          selections[specKey] === option
                            ? "bg-gradient-primary text-white shadow-soft scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleFindStores}
              disabled={!isFormComplete}
              className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 ${
                isFormComplete
                  ? "gradient-primary text-white shadow-soft hover:shadow-soft-lg active:scale-95"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Find Nearby Stores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
