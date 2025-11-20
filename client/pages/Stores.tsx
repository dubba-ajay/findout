import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StoreCard from "@/components/StoreCard";

const categoryNames: Record<string, string> = {
  "home-kitchen": "Home & Kitchen",
  "hardware-tools": "Hardware & Tools",
  "electrical-plumbing": "Electrical & Plumbing",
  "mobile-accessories": "Mobile Accessories",
  "apparel-footwear": "Apparel & Footwear",
};

const mockStores = [
  {
    id: "store-1",
    name: "Home Mart Electronics",
    distance: "0.5 km",
    address: "123 Main Street, Downtown Market, Mumbai",
    phone: "+91 8765432100",
  },
  {
    id: "store-2",
    name: "Kitchen World Store",
    distance: "1.2 km",
    address: "456 Business Park, Shopping Complex, Mumbai",
    phone: "+91 8765432101",
  },
  {
    id: "store-3",
    name: "Premium Appliances",
    distance: "1.8 km",
    address: "789 Central Avenue, Retail Hub, Mumbai",
    phone: "+91 8765432102",
  },
  {
    id: "store-4",
    name: "Quality Stores",
    distance: "2.1 km",
    address: "321 Market Street, Trade Center, Mumbai",
    phone: "+91 8765432103",
  },
  {
    id: "store-5",
    name: "Express Store",
    distance: "2.5 km",
    address: "654 Commercial Road, Business District, Mumbai",
    phone: "+91 8765432104",
  },
  {
    id: "store-6",
    name: "Best Deals Store",
    distance: "3.2 km",
    address: "987 Industrial Area, Shopping Zone, Mumbai",
    phone: "+91 8765432105",
  },
];

export default function Stores() {
  const { categoryId = "", productId = "" } = useParams<{
    categoryId: string;
    productId: string;
  }>();

  const categoryName = categoryNames[categoryId] || "Products";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to={`/specifications/${categoryId}/${productId}`}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Nearby Stores
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Showing stores that have {categoryName.toLowerCase()} items in stock
        </p>

        {/* Stores Grid */}
        <div className="space-y-4 pb-8 animate-fade-in">
          {mockStores.map((store, index) => (
            <div
              key={store.id}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              className="animate-fade-in"
            >
              <StoreCard
                id={store.id}
                name={store.name}
                distance={store.distance}
                address={store.address}
                phone={store.phone}
                categoryId={categoryId}
                productId={productId}
              />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center py-8">
          <p className="text-sm text-gray-400">
            All stores verified and in stock as of today
          </p>
        </div>
      </div>
    </div>
  );
}
