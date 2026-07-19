import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-950 text-white">
     <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build a Better Future?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan iaculis
            eleifend. Suspendisse placerat tempor turpis.
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded font-semibold transition-colors duration-300 text-white focus:outline-none focus:ring-4 focus:ring-orange-400"
            aria-label="Get a Quote"
          >
            Get a Quote
          </button>
        </div>

        {/* Right Content - Newsletter */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Stay Informed, Subscribe Today!
          </h3>
          <p className="text-gray-300 mb-6 max-w-md">
            Subscribe to receive inspiration, ideas, and news in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              
             
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 focus:border-orange-500 focus:outline-none text-white placeholder-gray-400 rounded-md sm:rounded-r-none"
              aria-label="Email address"
            />
            <button
              
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 font-semibold transition-colors duration-300 rounded-md sm:rounded-l-none text-white focus:outline-none focus:ring-4 focus:ring-orange-400"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* Footer Links Section */}
      <div className="py-16 border-b border-gray-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-4 relative">
                <div className="w-6 h-6 bg-white transform rotate-45 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-orange-300 transform rotate-45 rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">ProveK</h3>
                <p className="text-gray-400 text-sm">Construction Company</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis.
            </p>
          </div>

          {/* Extra Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Extra Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Building Service
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Renovation Services
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Flooring Services
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Electrical Services
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Design Services
                </a>
              </li>
            </ul>
          </div>

          {/* Address and Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Addres of Kons</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Creative District Ahmad Yani No. 456</p>
                  <p className="text-gray-300">Medan, North Sumatera</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="mailto:hola@dominantsite.com" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  hola@dominantsite.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <a href="tel:+8003374-4676" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
                  +800-3374-4676
                </a>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat : 09:00 am - 17:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Links */}
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">
              Help
            </a>
          </div>
          
          {/* Right Copyright */}
          <div className="text-gray-400">
            <span className="text-orange-500">© Kons Constructon.</span> All Right Reserved 2024
          </div>
        </div>
      </div>
    </footer>
  );
}