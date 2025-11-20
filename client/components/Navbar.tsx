import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLocation as useRouterLocation, useNavigate as useRouterNavigate } from "react-router-dom";
import { Menu, X, LogOut, Search, MessageCircle, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useOrders } from "@/context/OrderContext";

interface NavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const Navbar = ({ isAuthenticated = false, onLogout }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMessages, setShowMessages] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getPendingOrders } = useOrders();

  const cartCount = getPendingOrders().length;

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results with query parameter
      navigate(`/search/all?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleMessagesClick = () => {
    setShowMessages(!showMessages);
  };

  return (
    <nav className="glass sticky top-0 z-40 border-b border-gray-100/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-lg font-bold text-white">🔍</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">FindIt</h1>
              <p className="text-xs text-gray-500">Product Discovery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                />
                <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </form>

            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/about")
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/contact")
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Messages & Cart Icons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Messages Icon */}
            <button
              onClick={handleMessagesClick}
              className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              title="Messages"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive("/login")
                      ? "text-primary bg-blue-50"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                    isActive("/signup")
                      ? "bg-gradient-primary text-white"
                      : "bg-primary text-white hover:shadow-soft"
                  )}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3 animate-slide-up">
            <button
              onClick={() => {
                handleMessagesClick();
              }}
              className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Messages</span>
            </button>

            <Link
              to="/cart"
              className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLogout?.();
                }}
                className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-center transition-all hover:shadow-soft"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
