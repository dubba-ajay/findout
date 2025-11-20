import { useParams, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MapPin, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import { allProducts, searchProducts } from "@/data/products";

const categoryNames: Record<string, string> = {
  "home-kitchen": "Home & Kitchen",
  "hardware-tools": "Hardware & Tools",
  "electrical-plumbing": "Electrical & Plumbing",
  "mobile-accessories": "Mobile Accessories",
  "apparel-footwear": "Apparel & Footwear",
  "all": "All Products",
};

// Store names by category
const storesByCategory: Record<string, Array<{ name: string; distance: string; phone: string }>> = {
  "home-kitchen": [
    { name: "Electronics Plus Store", distance: "0.5 km", phone: "+91-9876543210" },
    { name: "Home Appliances Hub", distance: "1.2 km", phone: "+91-9876543211" },
    { name: "Kitchen World", distance: "0.8 km", phone: "+91-9876543220" },
    { name: "Household Essentials", distance: "1.5 km", phone: "+91-9876543221" },
    { name: "Premium Kitchen Store", distance: "0.3 km", phone: "+91-9876543222" },
  ],
  "hardware-tools": [
    { name: "Hardware World", distance: "0.8 km", phone: "+91-9876543212" },
    { name: "Tools & Equipment Store", distance: "1.5 km", phone: "+91-9876543213" },
    { name: "Pro Hardware Center", distance: "1.0 km", phone: "+91-9876543223" },
    { name: "Industrial Supplies", distance: "2.0 km", phone: "+91-9876543224" },
    { name: "Builder's Paradise", distance: "0.6 km", phone: "+91-9876543225" },
  ],
  "electrical-plumbing": [
    { name: "Electrical Supplies", distance: "0.3 km", phone: "+91-9876543214" },
    { name: "Lighting Center", distance: "2.0 km", phone: "+91-9876543215" },
    { name: "Electrical Shop", distance: "0.7 km", phone: "+91-9876543226" },
    { name: "Plumbing Pro", distance: "1.3 km", phone: "+91-9876543227" },
    { name: "Electric Mart", distance: "0.9 km", phone: "+91-9876543228" },
  ],
  "mobile-accessories": [
    { name: "Mobile Accessories Mall", distance: "0.6 km", phone: "+91-9876543216" },
    { name: "Phone Hub", distance: "1.1 km", phone: "+91-9876543217" },
    { name: "Mobile Store", distance: "0.4 km", phone: "+91-9876543229" },
    { name: "Gadget Gallery", distance: "1.8 km", phone: "+91-9876543230" },
    { name: "Phone Paradise", distance: "0.5 km", phone: "+91-9876543231" },
  ],
  "apparel-footwear": [
    { name: "Shoe World", distance: "0.9 km", phone: "+91-9876543218" },
    { name: "Sports Store", distance: "1.3 km", phone: "+91-9876543219" },
    { name: "Fashion Hub", distance: "0.6 km", phone: "+91-9876543232" },
    { name: "Shoe Paradise", distance: "1.1 km", phone: "+91-9876543233" },
    { name: "Style Center", distance: "0.8 km", phone: "+91-9876543234" },
  ],
};

const getStoresForProduct = (productId: string) => {
  const category = productId.split("-").slice(0, -1).join("-");
  const stores = storesByCategory[category] || [];
  return stores.map((store, idx) => ({
    id: `${productId}-store-${idx}`,
    ...store,
  }));
};

export default function Search() {
  const { categoryId = "" } = useParams<{ categoryId: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedSpecializations, setSelectedSpecializations] = useState<Record<string, string>>({});
  const [showStores, setShowStores] = useState(false);
  const [contactingStore, setContactingStore] = useState<string | null>(null);

  let filteredProducts = allProducts;

  if (searchQuery) {
    filteredProducts = searchProducts(searchQuery);
  } else if (categoryId && categoryId !== "all") {
    filteredProducts = allProducts.filter((p) => p.category === categoryId);
  }

  const selectedProduct = selectedProductId
    ? allProducts.find((p) => p.id === selectedProductId)
    : null;

  const stores = selectedProductId ? getStoresForProduct(selectedProductId) : [];

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setSelectedSpecializations({});
    setShowStores(false);
  };

  const handleSpecializationChange = (specName: string, value: string) => {
    setSelectedSpecializations((prev) => ({
      ...prev,
      [specName]: value,
    }));
  };

  const allSpecializationsSelected = selectedProduct?.specializations.every(
    (spec) => selectedSpecializations[spec.name]
  );

  const handleContactStore = (storeId: string) => {
    setContactingStore(storeId);
    setTimeout(() => {
      alert("Message sent to store! They will confirm availability for your selected specifications.");
      setContactingStore(null);
    }, 500);
  };

  const handleBackFromStores = () => {
    setShowStores(false);
    setSelectedSpecializations({});
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : categoryNames[categoryId] || "Products"}
          </h1>
        </div>

        {showStores && selectedProduct ? (
          // Stores View
          <div className="space-y-8">
            {/* Selected Product & Specializations Summary */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600">
                    {Object.entries(selectedSpecializations).map(([key, value]) => `${key}: ${value}`).join(" | ")}
                  </p>
                </div>
                <button
                  onClick={handleBackFromStores}
                  className="px-4 py-2 border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Stores List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Available in {stores.length} stores
              </h3>

              {stores.length > 0 ? (
                <div className="space-y-4">
                  {stores.map((store) => (
                    <div
                      key={store.id}
                      className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-soft-lg transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {store.name}
                          </h4>
                          <div className="flex flex-col gap-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{store.distance}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              <a
                                href={`tel:${store.phone}`}
                                className="text-sm hover:text-primary"
                              >
                                {store.phone}
                              </a>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleContactStore(store.id)}
                          disabled={contactingStore === store.id}
                          className="px-6 py-2 gradient-primary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                          <MessageSquare className="w-4 h-4" />
                          {contactingStore === store.id ? "Sending..." : "Message Store"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No stores found with this product.</p>
              )}
            </div>
          </div>
        ) : selectedProduct ? (
          // Specializations Selection View
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl">
            <div className="mb-8">
              <button
                onClick={() => setSelectedProductId(null)}
                className="flex items-center gap-2 text-primary hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600">
                {categoryNames[selectedProduct.category]}
              </p>
            </div>

            {/* Specializations Selection */}
            <div className="space-y-8">
              {selectedProduct.specializations.map((specialization, idx) => (
                <div key={idx}>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    {specialization.name}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {specialization.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSpecializationChange(specialization.name, option)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          selectedSpecializations[specialization.name] === option
                            ? "gradient-primary text-white shadow-soft"
                            : "border-2 border-gray-200 text-gray-900 hover:border-primary"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={() => setShowStores(true)}
              disabled={!allSpecializationsSelected}
              className="w-full mt-8 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {allSpecializationsSelected ? "View Available Stores" : "Select all options to continue"}
            </button>
          </div>
        ) : filteredProducts.length > 0 ? (
          // Products List View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelectProduct(product.id)}
                className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group text-left"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 capitalize">
                    {categoryNames[product.category]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      Select Options
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">
              No products found matching your search.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
