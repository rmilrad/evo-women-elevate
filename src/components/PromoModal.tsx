import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefits = [
    "5 sesiones personalizadas, 1 por semana",
    "Material teórico y ejercicios prácticos",
    "Sistema de contenido claro y funcional",
    "Estrategia personalizada para tu marca"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden animate-scale-in">
        {/* Decorative top bar */}
        <div className="h-2 bg-gradient-to-r from-evo-pink to-evo-pink/70"></div>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-rufina font-bold text-evo-text mb-2">
              ¡Oferta Especial!
            </h3>
            <div className="flex items-center justify-center gap-3 my-6">
              <span className="text-evo-text/60 line-through text-xl">$200</span>
              <span className="text-evo-pink text-5xl font-bold">$60</span>
            </div>
            
            <p className="text-evo-text/80 mb-6 max-w-sm mx-auto">
              Convierte tu propósito en un imán para crear contenido para tu marca personal con nuestro programa:
            </p>
            
            <div className="bg-evo-pink/5 rounded-xl p-4 mb-6">
              <h4 className="font-rufina font-bold text-evo-pink text-xl mb-4">
                Creando con Alma
              </h4>
              
              <ul className="text-left space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-evo-pink shrink-0 mt-0.5" size={18} />
                    <span className="text-evo-text/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              to="/conalma"
              className="bg-evo-pink text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-evo-pink/90 hover:shadow-lg text-base inline-block"
              onClick={(e) => {
                // Track the click event in Google Analytics
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'modal_click', {
                    'event_category': 'engagement',
                    'event_label': 'ConAlma Promo Modal'
                  });
                }
                onClose();
              }}
            >
              Descubre más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;