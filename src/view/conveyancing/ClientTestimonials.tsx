"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai Marina",
      rating: 5,
      text: "Modac Real Estate handled our property transaction flawlessly. Their conveyancing team was professional, efficient, and made the entire process stress-free.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Sarah Johnson",
      location: "Downtown Dubai",
      rating: 5,
      text: "The legal documentation and compliance process was handled expertly. I couldn't have asked for better service during my property purchase.",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Mohammed Hassan",
      location: "Business Bay",
      rating: 5,
      text: "From contract review to final settlement, Modac's conveyancing service was outstanding. Highly recommended for any property transaction.",
      image: "/placeholder-user.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their conveyancing experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience seamless conveyancing?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            Start Your Transaction
          </button>
        </div>
      </div>
    </section>
  );
}
