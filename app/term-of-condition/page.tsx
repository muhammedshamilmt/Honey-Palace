import type { Metadata } from "next"
import { FileText, Scale, ShoppingCart, CreditCard, Truck, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Honey Palace",
  description: "Terms and conditions for using Honey Palace services and making purchases.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">Please read these terms carefully before using our services.</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: January 1, 2024</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Scale className="w-6 h-6 text-amber-600 mr-3" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Honey Palace website and services, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </section>

              {/* Use of Website */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Website</h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Use</h3>
                <p className="text-gray-700 mb-4">
                  You may use our website for lawful purposes only. You agree to use the website in a manner consistent
                  with any and all applicable laws and regulations.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Transmitting harmful or malicious code</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with the proper functioning of the website</li>
                  <li>Impersonating another person or entity</li>
                  <li>Collecting user information without consent</li>
                </ul>
              </section>

              {/* Products and Orders */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShoppingCart className="w-6 h-6 text-amber-600 mr-3" />
                  Products and Orders
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Information</h3>
                <p className="text-gray-700 mb-4">
                  We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant
                  that product descriptions or other content is accurate, complete, reliable, current, or error-free.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Order Acceptance</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Order confirmation does not guarantee product availability</li>
                  <li>Prices are subject to change without notice</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Requirement</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years old to place an order. By placing an order, you represent that you are
                  at least 18 years of age.
                </p>
              </section>

              {/* Payment Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-amber-600 mr-3" />
                  Payment Terms
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Payment is due at the time of order placement</li>
                  <li>We accept major credit cards, PayPal, and other approved payment methods</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>You are responsible for any applicable taxes</li>
                  <li>Payment processing is handled by secure third-party providers</li>
                  <li>Failed payments may result in order cancellation</li>
                </ul>
              </section>

              {/* Shipping and Delivery */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Truck className="w-6 h-6 text-amber-600 mr-3" />
                  Shipping and Delivery
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Shipping Policy</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Shipping costs are calculated at checkout</li>
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>Risk of loss passes to you upon delivery</li>
                  <li>We are not responsible for shipping delays beyond our control</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">International Shipping</h3>
                <p className="text-gray-700 mb-4">
                  International customers are responsible for customs duties, taxes, and any additional fees. Delivery
                  times may vary based on customs processing.
                </p>
              </section>

              {/* Returns and Refunds */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  Please refer to our separate Refund and Return Policy for detailed information about returns,
                  exchanges, and refunds. This policy is incorporated by reference into these Terms of Service.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of
                  Honey Palace or its content suppliers and is protected by copyright and other intellectual property
                  laws.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>You may not reproduce, distribute, or create derivative works</li>
                  <li>Limited license granted for personal, non-commercial use</li>
                  <li>Trademarks and logos are protected intellectual property</li>
                </ul>
              </section>

              {/* Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mr-3" />
                  Disclaimers and Limitations
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Warranty Disclaimer</h3>
                <p className="text-gray-700 mb-4">
                  Our products and services are provided "as is" without any warranty, express or implied. We disclaim
                  all warranties, including but not limited to merchantability, fitness for a particular purpose, and
                  non-infringement.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  In no event shall Honey Palace be liable for any indirect, incidental, special, consequential, or
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
                <p className="text-gray-700">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  website, to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or
                  liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be interpreted and governed by the laws of the State of California, without regard
                  to its conflict of law provisions. Any disputes shall be resolved in the courts of California.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-amber-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-gray-700">legal@honeypalace.com</span>
                    </div>
                    <div className="flex items-center">
                      <Scale className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
