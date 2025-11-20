import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useOrders } from "@/context/OrderContext";

export default function Cart() {
  const { getConfirmedOrders, getPendingOrders } = useOrders();

  const confirmedOrders = getConfirmedOrders();
  const pendingOrders = getPendingOrders();

  const subtotal = confirmedOrders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Online Orders</h1>
        </div>

        {confirmedOrders.length > 0 || pendingOrders.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Orders List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Pending Orders Section */}
              {pendingOrders.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    Pending Confirmation ({pendingOrders.length})
                  </h2>
                  <div className="space-y-4">
                    {pendingOrders.map((order) => (
                      <div
                        key={order.orderId}
                        className="bg-white rounded-2xl shadow-soft p-4 flex gap-4 border-l-4 border-yellow-500"
                      >
                        <div className="relative h-24 w-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={order.image}
                            alt={order.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {order.productName}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            From: <span className="font-semibold">{order.storeName}</span>
                          </p>
                          <p className="text-sm text-yellow-600 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Waiting for store confirmation...
                          </p>
                          <p className="text-2xl font-bold text-primary mt-2">
                            ₹{order.price}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">Order ID</p>
                          <p className="text-sm font-mono text-gray-600">{order.orderId}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirmed Orders Section */}
              {confirmedOrders.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Confirmed Orders ({confirmedOrders.length})
                  </h2>
                  <div className="space-y-4">
                    {confirmedOrders.map((order) => (
                      <div
                        key={order.orderId}
                        className="bg-white rounded-2xl shadow-soft p-4 flex gap-4 border-l-4 border-green-500"
                      >
                        <div className="relative h-24 w-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={order.image}
                            alt={order.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {order.productName}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            From: <span className="font-semibold">{order.storeName}</span>
                          </p>
                          <p className="text-sm text-green-600 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Order Confirmed
                          </p>
                          <p className="text-2xl font-bold text-primary mt-2">
                            ₹{order.price}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">Order ID</p>
                          <p className="text-sm font-mono text-gray-600">{order.orderId}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            {confirmedOrders.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-20">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (10%)</span>
                      <span>₹{Math.round(tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-primary">₹{Math.round(total)}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all duration-200">
                    Proceed to Payment
                  </button>

                  <Link
                    to="/"
                    className="w-full mt-3 py-3 border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-center block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">
              No online orders yet. Place an order to see it here!
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
