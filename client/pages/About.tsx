import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About FindIt
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Connecting customers with products and stores, making shopping easier than ever before.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At FindIt, we believe that shopping should be simple, fast, and transparent. We're
              dedicated to connecting customers with the products they need and the stores that can
              provide them.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our platform eliminates the frustration of searching for products across multiple stores
              by providing real-time availability information and direct communication channels with
              store owners.
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white font-semibold rounded-xl hover:shadow-soft-lg transition-all"
            >
              Start Exploring
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-12 border border-gray-200">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Discovery</h3>
                <p className="text-gray-600 mt-2">
                  Find exactly what you're looking for in seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Customer First",
                description:
                  "Everything we do is designed with the customer's needs in mind. Your satisfaction is our priority.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "Transparency",
                description:
                  "We believe in honest, transparent information. Real-time stock status and accurate store details.",
              },
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Community",
                description:
                  "We support local stores and businesses while building a strong community of shoppers.",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Innovation",
                description:
                  "Continuously improving our platform to provide better shopping experiences.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-gray-100/50 hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2023", title: "Founded", description: "FindIt was born with a vision to simplify product discovery" },
              { year: "2024", title: "Growth", description: "Expanded to 500+ stores and 50,000+ users" },
              { year: "2025", title: "Innovation", description: "Launched AI-powered recommendations and advanced filters" },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-primary text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="pt-2 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "500+", label: "Stores" },
            { number: "10K+", label: "Products" },
            { number: "50K+", label: "Active Users" },
            { number: "4.8★", label: "Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-gray-100/50 text-center hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gradient-primary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of a growing community of smart shoppers who discover products
            and connect with local stores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/categories"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-soft-lg transition-all"
            >
              Start Exploring
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
