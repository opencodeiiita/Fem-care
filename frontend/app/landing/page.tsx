"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Logo } from "../../components/ui/Logo";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Powered PCOS Insights",
      description: "Advanced machine learning algorithms analyze your symptoms, cycles, and lifestyle patterns to provide personalized insights and predictions.",
      color: "#E76F8A"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Personalized Wellness Plans",
      description: "Receive tailored nutrition, exercise, and lifestyle recommendations based on your unique health profile and goals.",
      color: "#7C6ED5"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Your health data is protected with end-to-end encryption, HIPAA compliance, and zero-knowledge architecture.",
      color: "#4FB6B0"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF9FB] text-[#1E1E2F] relative overflow-hidden">
      {/* Sophisticated background using FEM-CARE colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E76F8A]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#7C6ED5]/8 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#4FB6B0]/8 rounded-full blur-2xl"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E76F8A]/3 via-transparent to-[#7C6ED5]/3 opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo size="md" />

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#5A5A6A] hover:text-[#E76F8A] font-medium transition-colors duration-200 font-inter">Features</a>
            <a href="#about" className="text-[#5A5A6A] hover:text-[#E76F8A] font-medium transition-colors duration-200 font-inter">About</a>
            <a href="#contact" className="text-[#5A5A6A] hover:text-[#E76F8A] font-medium transition-colors duration-200 font-inter">Contact</a>
          </div>

          <Link href="/login">
            <Button size="md" className="transform hover:-translate-y-0.5">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-6 py-20 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#E76F8A]/10 border border-[#E76F8A]/20 mb-8">
            <svg className="w-4 h-4 mr-2 text-[#E76F8A]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-semibold text-[#E76F8A] font-inter">
              Trusted by 50,000+ Women Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 font-poppins">
            <span className="text-[#1E1E2F]">Revolutionizing</span>
            <br />
            <span className="bg-gradient-to-r from-[#E76F8A] via-[#E76F8A] to-[#7C6ED5] bg-clip-text text-transparent">
              Women's Health
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#5A5A6A] max-w-3xl mx-auto mb-12 leading-relaxed font-inter">
            Experience the future of personalized healthcare with AI-driven insights,
            comprehensive PCOS management, and holistic wellness solutions designed
            specifically for women.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/login">
              <Button size="lg" className="transform hover:-translate-y-1 shadow-2xl shadow-[#E76F8A]/25">
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>

            <Button variant="outline" size="lg" className="transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E76F8A] mb-2 font-poppins">50K+</div>
              <div className="text-sm text-[#5A5A6A] font-medium font-inter">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7C6ED5] mb-2 font-poppins">98%</div>
              <div className="text-sm text-[#5A5A6A] font-medium font-inter">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#4FB6B0] mb-2 font-poppins">24/7</div>
              <div className="text-sm text-[#5A5A6A] font-medium font-inter">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#1E1E2F] mb-6 font-poppins">
            Why Choose <span className="text-[#E76F8A]">FEM-CARE</span>?
          </h2>
          <p className="text-xl text-[#5A5A6A] max-w-3xl mx-auto font-inter">
            Advanced AI technology meets compassionate care to provide personalized health insights and comprehensive wellness solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              hover
              className={`p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E2F] mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-[#5A5A6A] leading-relaxed font-inter">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
        <Card className="p-12 text-center bg-gradient-to-r from-[#E76F8A] to-[#7C6ED5] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-5xl font-bold mb-6 font-poppins">
              Ready to Transform Your Health?
            </h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-inter">
              Join thousands of women who have taken control of their wellness journey with FEM-CARE's AI-powered insights.
            </p>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-[#E76F8A] border-white hover:bg-gray-50 transform hover:-translate-y-1 shadow-2xl"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 max-w-7xl mx-auto border-t border-gray-200/50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo size="md" className="mb-6 md:mb-0" />

          <div className="flex flex-wrap justify-center gap-8 text-[#5A5A6A]">
            <a href="#" className="hover:text-[#E76F8A] transition-colors duration-200 font-medium font-inter">Privacy Policy</a>
            <a href="#" className="hover:text-[#E76F8A] transition-colors duration-200 font-medium font-inter">Terms of Service</a>
            <a href="#" className="hover:text-[#E76F8A] transition-colors duration-200 font-medium font-inter">HIPAA Compliance</a>
            <a href="#" className="hover:text-[#E76F8A] transition-colors duration-200 font-medium font-inter">Contact Support</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200/50 text-center text-[#5A5A6A]">
          <p className="font-inter">&copy; 2024 FEM-CARE. All rights reserved. Empowering women's health through technology.</p>
        </div>
      </footer>
    </main>
  );
}