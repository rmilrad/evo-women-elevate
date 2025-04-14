import React, { useEffect, useState } from 'react';
import nazaImage from '/imgs/assets/naza_standing.png';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart } from 'lucide-react';

const ConAlma_ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Function to handle form submission
  const handleFormSubmit = () => {
    setIsSubmitted(true);
    
    // Track form submission in Umami Analytics
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('form_submission', {
        form: 'conalma_contact_form',
        page: 'conalma_page'
      });
    }
    
    toast({
      title: "¡Formulario enviado con éxito!",
      description: "Gracias por tu interés. Me pondré en contacto contigo pronto.",
      variant: "default",
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  useEffect(() => {
    // Create and append the iframe resizer script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the iframe resizer after script is loaded
    script.onload = () => {
      setTimeout(() => {
        const w = window as any;
        if (w.iFrameResize) {
          w.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement"
          });
        }
      }, 30);
    };

    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Dubsado and indicates form submission
      if ((event.origin.includes('dubsado.com') || event.origin === window.location.origin) &&
          event.data &&
          (event.data.type === 'form-submit' ||
           (typeof event.data === 'string' &&
            (event.data.includes('form-submit') ||
             event.data.includes('success') ||
             event.data.includes('submitted'))))) {
        handleFormSubmit();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <section id="signup-form" className="section-padding bg-white relative">
      <div className="absolute left-0 top-0 w-full md:w-1/3 h-full opacity-5 -z-10">
        <img
          src={nazaImage}
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
      
      <div className="container-custom py-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline-md text-evo-text mb-4 text-center">
            Inscríbete ahora
          </h2>
          
          <p className="text-lg text-evo-text/80 mb-10 text-center">
            Lo único que tienes que hacer es dejar tus datos aquí abajo, te contactaré con los siguientes pasos y antes de tu pago, me aseguraré que eres un buen fit para Creando con Alma. 💐
          </p>
          
          <div className="w-full bg-white rounded-2xl shadow-md p-4 md:p-6 elegant-shadow">
            {isSubmitted ? (
              <Alert className="mb-6 bg-green-50 border-green-200 text-green-700">
                <Heart className="h-4 w-4 text-green-600" />
                <AlertTitle>¡Éxito!</AlertTitle>
                <AlertDescription>
                  Gracias por tu interés. Me pondré en contacto contigo pronto.
                </AlertDescription>
              </Alert>
            ) : null}
            
            <iframe
              src="https://hello.dubsado.com/public/form/view/67fc46f363d1d5003a53f5b2"
              frameBorder="0"
              style={{ width: '1px', minWidth: '100%' }}
              title="Formulario de inscripción"
              data-umami-event="ConAlma Form View"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConAlma_ContactForm;