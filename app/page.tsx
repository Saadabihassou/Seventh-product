"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Star, Calendar, BookOpen, Heart, CheckCircle, Menu, X } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function DigitalPlannerLanding() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content:
        "This digital planner has completely transformed how I organize my creative projects. The aesthetic is so beautiful!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Chen",
      role: "Student",
      content:
        "I love the handwritten feel combined with digital convenience. Perfect for my study schedule and goals!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Maria Rodriguez",
      role: "Small Business Owner",
      content: "The warm colors and cozy design make planning feel like self-care. Highly recommend!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$12",
      period: "one-time",
      description: "Perfect for beginners",
      features: [
        "Monthly & Weekly Layouts",
        "Goal Setting Pages",
        "Habit Tracker",
        "Basic Stickers Pack",
        "PDF Format",
      ],
      popular: false,
    },
    {
      name: "Complete",
      price: "$24",
      period: "one-time",
      description: "Most popular choice",
      features: [
        "Everything in Starter",
        "Daily Planning Pages",
        "Meal Planning Section",
        "Budget Tracker",
        "Premium Stickers Pack",
        "Multiple Color Themes",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$39",
      period: "one-time",
      description: "For planning enthusiasts",
      features: [
        "Everything in Complete",
        "Project Planning Pages",
        "Reading & Fitness Trackers",
        "Gratitude Journal",
        "Exclusive Handwritten Fonts",
        "Lifetime Updates",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950 transition-colors duration-300">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-200 dark:border-orange-800"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            <span
              className="text-2xl font-bold text-orange-800 dark:text-orange-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              CozyPlanner
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Pricing
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-orange-200 dark:border-orange-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Pricing
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 lg:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Plan with
                <span
                  className="block text-orange-600 dark:text-orange-400"
                  style={{ fontFamily: "Dancing Script, cursive" }}
                >
                  Love & Joy
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Transform your daily routine into a beautiful, mindful practice with our cozy digital planner. Designed
                with warm aesthetics and thoughtful layouts.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                  Start Planning Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3 text-lg"
                >
                  View Preview
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Digital Planner Preview"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-orange-800 dark:to-yellow-800 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
        className="py-20 bg-white/50 dark:bg-gray-900/50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Everything You Need to
              <span
                className="block text-orange-600 dark:text-orange-400"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Stay Organized
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our digital planner combines beautiful design with practical functionality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Monthly & Weekly Views",
                description: "Beautiful layouts that help you see the big picture and daily details",
              },
              {
                icon: Heart,
                title: "Habit Tracking",
                description: "Build positive habits with our cozy and encouraging tracker designs",
              },
              {
                icon: Star,
                title: "Goal Setting",
                description: "Turn your dreams into actionable plans with our guided goal pages",
              },
              {
                icon: BookOpen,
                title: "Journal Pages",
                description: "Reflect and grow with beautifully designed journaling templates",
              },
              {
                icon: CheckCircle,
                title: "Task Management",
                description: "Stay on top of your to-dos with satisfying checkboxes and layouts",
              },
              {
                icon: Heart,
                title: "Self-Care Tracking",
                description: "Prioritize your wellbeing with dedicated self-care planning pages",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-100">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Preview Gallery */}
      <motion.section initial="initial" whileInView="whileInView" variants={staggerContainer} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sneak Peek
              <span
                className="block text-orange-600 dark:text-orange-400"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Inside Your Planner
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div key={item} variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="relative group cursor-pointer">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Preview ${item}`}
                    alt={`Planner Preview ${item}`}
                    width={300}
                    height={400}
                    className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Preview {item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
        className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What Our
              <span
                className="block text-orange-600 dark:text-orange-400"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Happy Planners Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-orange-200 dark:border-orange-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        id="pricing"
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Choose Your
              <span
                className="block text-orange-600 dark:text-orange-400"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              One-time purchase, lifetime access. No subscriptions, just pure planning joy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full relative ${tier.popular ? "border-orange-500 dark:border-orange-400 shadow-xl scale-105" : "border-orange-200 dark:border-orange-700"} bg-white dark:bg-gray-800`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-800 dark:text-gray-100">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">{tier.price}</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{tier.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${tier.popular ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-orange-100 hover:bg-orange-200 text-orange-800 dark:bg-orange-900 dark:hover:bg-orange-800 dark:text-orange-200"}`}
                      size="lg"
                    >
                      Get {tier.name}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-800 dark:to-yellow-800"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ready to Transform Your
            <span className="block" style={{ fontFamily: "Dancing Script, cursive" }}>
              Planning Experience?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of happy planners who've discovered the joy of organized, mindful living.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold">
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-900 dark:bg-black text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                  CozyPlanner
                </span>
              </div>
              <p className="text-gray-400">Beautiful digital planning for a more organized and mindful life.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Refunds
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CozyPlanner. Made with ❤️ for organized souls.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
