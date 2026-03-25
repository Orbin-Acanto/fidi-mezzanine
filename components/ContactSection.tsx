"use client";

import Image from "next/image";
import Script from "next/script";
import AnimatedSection from "./AnimatedSection";
import siteConfig from "@/config/siteConfig";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-16 md:py-20 bg-gray-50">
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title font-heading uppercase tracking-wide">
            <span className="relative inline-block">
              <span className="relative z-10">Contact</span>
              {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0" /> */}
            </span>{" "}
            Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              id="webform1783950000033619023"
              action="https://crm.zoho.com/crm/WebForm"
              name="WebForm1783950000033619023"
              method="POST"
              acceptCharset="UTF-8"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="xnQsjsdp"
                defaultValue="2cd3e0389f216c4d7a0cbb3ffd584ed93868db441f7d4a96059238c7c0281110"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
              <input
                type="hidden"
                name="xmIwtLD"
                defaultValue="bb5da5c2badb261277a71fb9ee3a487e95328c9cbb13b676ee5f5d5c8b62e66e57caad4b506208423ec81a410dcd5277"
              />
              <input
                type="hidden"
                name="actionType"
                defaultValue="Q3VzdG9tTW9kdWxlMw=="
              />
              <input
                type="hidden"
                name="returnURL"
                defaultValue="https://www.fidimezzanine.com/thank-you"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="NAME"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="NAME"
                    name="NAME"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="COBJ3CF4"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="COBJ3CF4"
                    name="COBJ3CF4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="COBJ3CF2"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="COBJ3CF2"
                    name="COBJ3CF2"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="COBJ3CF1"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="COBJ3CF1"
                  name="COBJ3CF1"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <input type="hidden" name="COBJ3CF8" defaultValue="index.html" />
              <input
                type="hidden"
                name="COBJ3CF9"
                defaultValue="The Mezzanine Contact Us Form"
              />

              <div
                className="g-recaptcha"
                data-sitekey="6Lf2Fh0rAAAAAK0kjryXohQZRAP83pVMmX2coJZs"
                data-theme="light"
              />

              <button type="submit" className="btn-primary w-full md:w-auto">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/gallery/32.png"
                  alt="The Mezzanine Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      {siteConfig.venue.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href={`tel:${siteConfig.venue.contact.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {siteConfig.venue.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${siteConfig.venue.contact.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {siteConfig.venue.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
