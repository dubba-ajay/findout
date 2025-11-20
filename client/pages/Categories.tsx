import { Smartphone, Hammer, Zap, Package, Shirt } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import Navbar from "@/components/Navbar";

const categories = [
  {
    id: "home-kitchen",
    name: "Home & Kitchen",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "gradient-primary",
  },
  {
    id: "hardware-tools",
    name: "Hardware & Tools",
    icon: <Hammer className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-orange-500",
  },
  {
    id: "electrical-plumbing",
    name: "Electrical & Plumbing",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-yellow-500",
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    icon: <Package className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-green-500",
  },
  {
    id: "apparel-footwear",
    name: "Apparel & Footwear",
    icon: <Shirt className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-pink-500",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Find Your Product
          </h1>
          <p className="text-lg sm:text-xl text-gray-500">
            Choose a category to begin
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-4 sm:space-y-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${categories.indexOf(category) * 50}ms`,
              }}
            >
              <CategoryCard
                id={category.id}
                name={category.name}
                icon={category.icon}
                color={category.color}
                gradient={category.gradient}
              />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            Browse products and find nearby stores instantly
          </p>
        </div>
      </div>
    </div>
  );
}
