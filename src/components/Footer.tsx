
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/amplai-logo.jpeg" 
              alt="AmplAI Logo" 
              className="h-14 mb-6 transform scale-[2] opacity-90"
            />
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering enterprises with AI-driven supply chain intelligence and operations research solutions. 
              Transform your operations with our digital project manager.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                hello@amplai.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                +1 (323) 886-9777
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AmplAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
