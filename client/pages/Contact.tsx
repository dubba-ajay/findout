import { Mail, Phone, MapPin, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team anytime.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Mail className="w-8 h-8 text-primary" />,
              title: "Email",
              description: "Send us an email anytime",
              contact: "support@findit.com",
              href: "mailto:support@findit.com",
            },
            {
              icon: <Phone className="w-8 h-8 text-primary" />,
              title: "Phone",
              description: "Call us during business hours",
              contact: "+1 (800) 123-4567",
              href: "tel:+18001234567",
            },
            {
              icon: <MapPin className="w-8 h-8 text-primary" />,
              title: "Office",
              description: "Visit us in person",
              contact: "123 Commerce Street",
              href: "#",
            },
          ].map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="glass rounded-2xl p-8 border border-gray-100/50 hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{method.description}</p>
              <p className="text-primary font-semibold">{method.contact}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass rounded-3xl p-8 sm:p-12 border border-gray-100/50 shadow-soft animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank you for reaching out!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We've received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className="w-full py-3 gradient-primary text-white font-semibold rounded-xl hover:shadow-soft-lg transition-all duration-200 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <MessageSquare className="w-5 h-5" />}
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How long does it take to get a response?",
                answer:
                  "We typically respond to inquiries within 24 hours during business hours.",
              },
              {
                question: "Do you offer customer support?",
                answer:
                  "Yes, our support team is available via email, phone, and our contact form.",
              },
              {
                question: "Can stores join FindIt?",
                answer:
                  "Absolutely! We're always looking for new stores to join our network. Contact us for partnership details.",
              },
              {
                question: "Is there a mobile app?",
                answer:
                  "We're currently developing a mobile app. Sign up on our website to be notified of the launch!",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="glass rounded-xl p-6 border border-gray-100/50 hover:shadow-soft transition-all group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white/50 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for product tips and updates
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 gradient-primary text-white font-semibold rounded-xl hover:shadow-soft-lg transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
