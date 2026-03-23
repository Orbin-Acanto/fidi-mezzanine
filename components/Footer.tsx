'use client';

import siteConfig from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>&copy; {currentYear} All Rights Reserved by {siteConfig.venue.name}</p>
          {/* Uncomment if you want to add links */}
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
