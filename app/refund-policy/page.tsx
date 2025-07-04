import type { Metadata } from "next"
import { RotateCcw, Clock, CheckCircle, XCircle, AlertCircle, CreditCard } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Refund and Return Policy - Honey Palace",
  description: "Learn about our refund and return policy for Honey Palace products.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <RotateCcw className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund and Return Policy</h1>
            <p className="text-xl text-gray-600">We want you to be completely satisfied with your honey purchase.</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: January 1, 2024</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
                  Our Commitment
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Honey Palace, we stand behind the quality of our premium honey products. If you're not completely
                  satisfied with your purchase, we offer a comprehensive return and refund policy to ensure your peace
                  of mind.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">✓ 30-day satisfaction guarantee on all products</p>
                </div>
              </section>

              {/* Return Timeframe */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  Return Timeframe
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Standard Products</h3>
                    <p className="text-amber-700">
                      <strong>30 days</strong> from the date of delivery to initiate a return or exchange.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Bulk Orders</h3>
                    <p className="text-blue-700">
                      <strong>14 days</strong> from the date of delivery due to the perishable nature and volume.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <p className="text-yellow-800">
                      <strong>Important:</strong> Returns must be initiated within the specified timeframe. Contact us
                      immediately if you have any concerns about your order.
                    </p>
                  </div>
                </div>
              </section>

              {/* Eligible Returns */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Be Returned</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Eligible for Return
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Unopened honey jars in original packaging</li>
                      <li>Products damaged during shipping</li>
                      <li>Items that don't match the description</li>
                      <li>Wrong items sent by mistake</li>
                      <li>Defective or contaminated products</li>
                      <li>Honey gift sets in original condition</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-red-700 mb-3 flex items-center">
                      <XCircle className="w-5 h-5 mr-2" />
                      Not Eligible for Return
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Opened or partially consumed products</li>
                      <li>Products past the return timeframe</li>
                      <li>Items damaged by customer misuse</li>
                      <li>Custom or personalized honey products</li>
                      <li>Products without original packaging</li>
                      <li>Honey that has naturally crystallized</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Return Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Return Items</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Us</h3>
                      <p className="text-gray-700">
                        Email us at <strong>returns@honeypalace.com</strong> or call <strong>+1 (555) 123-4567</strong>
                        with your order number and reason for return.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Return Authorization</h3>
                      <p className="text-gray-700">
                        We'll provide you with a Return Merchandise Authorization (RMA) number and return instructions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Package and Ship</h3>
                      <p className="text-gray-700">
                        Securely package the items in original packaging and ship to our return center using the
                        provided prepaid shipping label.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-amber-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing</h3>
                      <p className="text-gray-700">
                        Once we receive your return, we'll inspect the items and process your refund or exchange within
                        3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Refund Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-amber-600 mr-3" />
                  Refund Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Refund Methods</h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Original payment method (credit card, PayPal, etc.)</li>
                      <li>Store credit for faster processing</li>
                      <li>Exchange for different products</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Processing Times</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>
                        <strong>Store Credit:</strong> Immediate upon return processing
                      </li>
                      <li>
                        <strong>Credit Card:</strong> 3-5 business days after processing
                      </li>
                      <li>
                        <strong>PayPal:</strong> 1-2 business days after processing
                      </li>
                      <li>
                        <strong>Bank Transfer:</strong> 5-7 business days after processing
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Exchanges */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchanges</h2>
                <p className="text-gray-700 mb-4">
                  We're happy to exchange products for different varieties or sizes. Exchange requests follow the same
                  process as returns, and we'll cover shipping costs for exchanges due to our error.
                </p>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">Exchange Options</h3>
                  <ul className="list-disc list-inside text-amber-700 space-y-2">
                    <li>Different honey varieties (same price range)</li>
                    <li>Different jar sizes (price difference applies)</li>
                    <li>Gift sets and bundles</li>
                    <li>Seasonal or limited edition products (subject to availability)</li>
                  </ul>
                </div>
              </section>

              {/* Damaged Items */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Damaged or Defective Items</h2>
                <p className="text-gray-700 mb-4">
                  If you receive damaged or defective products, we'll make it right immediately:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Contact us within 48 hours of delivery</li>
                  <li>Provide photos of the damaged items</li>
                  <li>We'll send a replacement or full refund</li>
                  <li>No need to return damaged items unless requested</li>
                  <li>We cover all shipping costs for replacements</li>
                </ul>
              </section>

              {/* International Returns */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Returns</h2>
                <p className="text-gray-700 mb-4">International customers can return products, but please note:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Customer is responsible for return shipping costs</li>
                  <li>Items must be declared properly for customs</li>
                  <li>Original shipping costs are non-refundable</li>
                  <li>Processing may take longer due to customs clearance</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Returns?</h2>
                <p className="text-gray-700 mb-4">
                  Our customer service team is here to help with any return or refund questions:
                </p>
                <div className="bg-amber-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <RotateCcw className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-gray-700">
                        <strong>Returns:</strong> returns@honeypalace.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-gray-700">
                        <strong>Phone:</strong> +1 (555) 123-4567 (Mon-Fri, 9AM-6PM PST)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="text-gray-700">
                        <strong>Live Chat:</strong> Available on our website during business hours
                      </span>
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
