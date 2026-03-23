'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface FloorPlan {
  id: string;
  name: string;
  description: string;
  capacity: {
    seated?: number;
    standing?: number;
  };
  dimensions: string;
  image: string;
  features: string[];
}

const floorPlans: FloorPlan[] = [
  {
    id: 'main-space',
    name: 'Main Space',
    description: 'Our largest and most versatile space, perfect for receptions, presentations, and large gatherings.',
    capacity: {
      seated: 120,
      standing: 200,
    },
    dimensions: '3,500 sq ft',
    image: 'https://placehold.co/1200x800/1a1a1a/d2b371?text=Main+Space+Floor+Plan',
    features: [
      'Floor-to-ceiling windows',
      'Built-in AV system',
      'Flexible seating arrangements',
      'Adjacent bar area',
      'Natural lighting',
    ],
  },
  {
    id: 'conference-area',
    name: 'Conference Area',
    description: 'Professional meeting space ideal for corporate gatherings, workshops, and presentations.',
    capacity: {
      seated: 40,
      standing: 60,
    },
    dimensions: '1,200 sq ft',
    image: 'https://placehold.co/1200x800/1a1a1a/d2b371?text=Conference+Area+Floor+Plan',
    features: [
      'Presentation equipment',
      'Whiteboard walls',
      'Conference table setup',
      'High-speed WiFi',
      'Privacy dividers available',
    ],
  },
  {
    id: 'reading-room',
    name: 'Reading Room',
    description: 'Intimate space perfect for breakout sessions, cocktail hours, or small gatherings.',
    capacity: {
      seated: 30,
      standing: 50,
    },
    dimensions: '800 sq ft',
    image: 'https://placehold.co/1200x800/1a1a1a/d2b371?text=Reading+Room+Floor+Plan',
    features: [
      'Cozy lounge seating',
      'Ambient lighting',
      'Book-lined walls',
      'Quiet atmosphere',
      'Connected to main space',
    ],
  },
  {
    id: 'full-buyout',
    name: 'Full Venue Buyout',
    description: 'Rent the entire venue for maximum flexibility and exclusive use of all spaces.',
    capacity: {
      seated: 150,
      standing: 300,
    },
    dimensions: '6,300 sq ft',
    image: 'https://placehold.co/1200x800/1a1a1a/d2b371?text=Full+Venue+Floor+Plan',
    features: [
      'All four spaces included',
      'Multiple bar stations',
      'Complete venue exclusivity',
      'Multiple room configurations',
      'Full production capabilities',
    ],
  },
];

export default function FloorPlansContent() {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan>(floorPlans[0]);

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Floor</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" />
            </span>{' '}
            Plans
          </h1>
          <p className="text-xl text-gray-600">
            Explore our versatile spaces and find the perfect layout for your event
          </p>
        </AnimatedSection>

        {/* Floor Plan Selector */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`px-6 py-3 text-sm font-medium tracking-wide transition-all ${
                  selectedPlan.id === plan.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Selected Floor Plan Details */}
        <motion.div
          key={selectedPlan.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Floor Plan Image */}
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              <Image
                src={selectedPlan.image}
                alt={`${selectedPlan.name} Floor Plan`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-serif mb-4">{selectedPlan.name}</h2>
                <p className="text-lg text-gray-600">{selectedPlan.description}</p>
              </div>

              {/* Capacity */}
              <div className="grid grid-cols-2 gap-4">
                {selectedPlan.capacity.seated && (
                  <div className="bg-gray-50 p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {selectedPlan.capacity.seated}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Seated Capacity
                    </div>
                  </div>
                )}
                {selectedPlan.capacity.standing && (
                  <div className="bg-gray-50 p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {selectedPlan.capacity.standing}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      Standing Capacity
                    </div>
                  </div>
                )}
              </div>

              {/* Dimensions */}
              <div className="bg-gray-50 p-6">
                <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  Dimensions
                </div>
                <div className="text-2xl font-bold text-gray-900">{selectedPlan.dimensions}</div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="space-y-3">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a href="/#contact" className="btn-primary inline-block">
                  Request a Tour
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <AnimatedSection className="mt-20 bg-gray-50 p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif mb-6 text-center">Planning Your Event</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Setup Options</h4>
              <ul className="space-y-2 text-sm">
                <li>• Theater-style seating</li>
                <li>• Banquet rounds</li>
                <li>• Cocktail reception</li>
                <li>• Classroom setup</li>
                <li>• Custom configurations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
              <ul className="space-y-2 text-sm">
                <li>• Tables and chairs</li>
                <li>• Basic AV equipment</li>
                <li>• WiFi access</li>
                <li>• Event coordination</li>
                <li>• Setup and breakdown</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
