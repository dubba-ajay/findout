import { Link } from "react-router-dom";
import { ArrowRight, Zap, Smartphone, Hammer, Package, Shirt } from "lucide-react";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";

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
    gradient: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
  },
  {
    id: "electrical-plumbing",
    name: "Electrical & Plumbing",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    icon: <Package className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
  },
  {
    id: "apparel-footwear",
    name: "Apparel & Footwear",
    icon: <Shirt className="w-8 h-8 text-white" />,
    color: "text-white",
    gradient: "bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="space-y-6 animate-fade-in max-w-3xl">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-50 text-primary font-semibold rounded-full text-sm">
                ��� Smart Product Discovery
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Find Products,
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Find Stores
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-md">
              Search for any product and instantly find nearby stores with real-time availability and contact information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/categories"
                className="px-8 py-4 gradient-primary text-white font-semibold rounded-xl hover:shadow-soft-lg transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95"
              >
                Start Searching <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Stores</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Users</p>
              </div>
            </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find everything you need across our vibrant collection of product categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/search/${category.id}`}
                className="group"
              >
                <div
                  className={`${category.gradient} rounded-2xl p-8 text-center text-white shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:scale-105 animate-fade-in h-full flex flex-col items-center justify-center`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-2">
                    View Products →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FindIt?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to find products and stores in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Smart Search",
                description:
                  "Find any product with intelligent autocomplete and filters",
              },
              {
                icon: "📍",
                title: "Nearby Stores",
                description:
                  "Discover stores near you with exact distances and directions",
              },
              {
                icon: "⚡",
                title: "Real-time Updates",
                description:
                  "Get instant availability and stock information from stores",
              },
              {
                icon: "💬",
                title: "Direct Contact",
                description:
                  "Send inquiries via WhatsApp directly to store owners",
              },
              {
                icon: "🛍️",
                title: "Multiple Categories",
                description:
                  "Browse from 5+ major product categories instantly",
              },
              {
                icon: "⭐",
                title: "Curated Specs",
                description:
                  "Filter by brand, size, color, and other specifications",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-gray-100/50 hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="gradient-primary rounded-3xl p-12 sm:p-20 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Find Your Product?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of users discovering products and connecting with
            local stores
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/categories"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:shadow-soft-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Start Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">FindIt</h3>
              <p className="text-sm text-gray-600">
                Discover products and stores with ease
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/categories" className="hover:text-primary">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@findit.com" className="hover:text-primary">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 FindIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
