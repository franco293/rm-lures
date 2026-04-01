'use client';

import { useState } from 'react';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaTimes,
} from 'react-icons/fa';
import { getWhatsAppUrl } from '@/lib/utils';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-ocean-600 to-ocean-700 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-ocean-300"
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaComment className="text-2xl" />
        )}
      </button>

      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 animate-scale-in">
          <h3 className="font-bold text-ocean-900 mb-3">Get in Touch</h3>
          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">WhatsApp</div>
                <div className="text-xs text-gray-500">Instant response</div>
              </div>
            </a>

            <a
              href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
              className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaPhone className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Call Now</div>
                <div className="text-xs text-gray-500">Talk to the guide</div>
              </div>
            </a>

            <a
              href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
              className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors group"
            >
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-xs text-gray-500">Detailed inquiry</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}