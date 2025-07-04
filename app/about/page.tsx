import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Award, Users, Leaf, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Story: From Hive to Home</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              For over 25 years, Honey Palace has been dedicated to bringing you the purest, most delicious honey
              straight from nature's heart to your table.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that honey is more than just a sweetener – it's nature's perfect gift. Our mission is to
                preserve the ancient art of beekeeping while supporting local communities and delivering the highest
                quality honey to families worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every jar of Honey Palace honey represents our commitment to purity, sustainability, and the well-being
                of both our customers and the environment.
              </p>
              <Link href="/products">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Explore Our Products
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Beekeeper working with hives"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-amber-50 dark:bg-amber-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do at Honey Palace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                description: "We support eco-friendly beekeeping practices that protect our environment",
              },
              {
                icon: Heart,
                title: "Purity",
                description: "100% pure honey with no additives, preservatives, or artificial ingredients",
              },
              {
                icon: Users,
                title: "Community",
                description: "Supporting local beekeepers and their families across the country",
              },
              {
                icon: Award,
                title: "Quality",
                description: "Rigorous testing and quality control ensure the finest honey reaches you",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">A timeline of our growth and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "1998",
                  title: "The Beginning",
                  description:
                    "Founded by the Johnson family with just 5 local beekeepers and a dream to share pure honey.",
                },
                {
                  year: "2005",
                  title: "Expansion",
                  description:
                    "Grew to partner with 25 beekeepers across three states, introducing our first specialty honey varieties.",
                },
                {
                  year: "2012",
                  title: "Certification",
                  description: "Achieved organic certification and launched our premium Manuka honey collection.",
                },
                {
                  year: "2018",
                  title: "Innovation",
                  description:
                    "Introduced sustainable packaging and launched our online platform for nationwide shipping.",
                },
                {
                  year: "2024",
                  title: "Today",
                  description:
                    "Proud to work with 50+ beekeepers and serve thousands of customers nationwide with premium honey.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-24 h-24 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Partner Beekeepers" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "25", label: "Years of Experience" },
              { number: "100%", label: "Pure & Natural" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-amber-600">{stat.number}</div>
                <div className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Experience Pure Honey?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Honey Palace for their premium honey needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
