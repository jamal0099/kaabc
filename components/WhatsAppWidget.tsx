"use client";

import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  const chatMessage = "Hello! I'm interested in your construction services.";
  
  const handleWhatsAppChat = () => {
    const url = `https://wa.me/${"971506640388"}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppCall = () => {
    const url = `https://wa.me/${"971506640388"}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold text-gray-900 mb-3">Contact us via WhatsApp</h3>
          
          <button
            onClick={handleWhatsAppChat}
            className="w-full flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg mb-2 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat with us</span>
          </button>
          
          <button
            onClick={handleWhatsAppCall}
            className="w-full flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Call us</span>
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="WhatsApp Contact"
      >
        {isOpen ? (
          <span className="text-xl">×</span>
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}