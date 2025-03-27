import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const Contact = () => {
  const { translate } = useLanguage();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Function to reload the form
  const reloadForm = () => {
    if (formContainerRef.current) {
      // Clear the container
      formContainerRef.current.innerHTML = '';
      
      // Add the iframe and scripts again
      setupDubsadoForm();
      
      // Reset the submitted state
      setIsSubmitted(false);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      reloadForm();
    }, 5000);
  };

  // Function to set up the Dubsado form
  const setupDubsadoForm = () => {
    if (!formContainerRef.current) return;
    
    // Clear the container
    formContainerRef.current.innerHTML = '';
    
    // Add custom CSS to style the iframe content
    const style = document.createElement('style');
    style.textContent = `
      .dubsado-form-container iframe {
        border-radius: 0.75rem;
        border: none;
        width: 1px;
        min-width: 100%;
        height: auto;
      }
      
      .dubsado-form-container {
        position: relative;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    
    // Create script element for iframe-resizer
    const resizerScript = document.createElement('script');
    resizerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js';
    resizerScript.async = true;
    
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = 'https://hello.dubsado.com/public/form/view/67ca4246267bef003ac70268';
    iframe.frameBorder = '0';
    iframe.style.width = '1px';
    iframe.style.minWidth = '100%';
    iframe.id = 'dubsado-form';
    
    // Create initialization script
    const initScript = document.createElement('script');
    initScript.textContent = `
      setTimeout(function(){
        if (window.iFrameResize) {
          iFrameResize({
            checkOrigin: false, 
            heightCalculationMethod: "taggedElement",
            scrolling: false,
            sizeWidth: false,
            maxHeight: 2000,
            onMessage: function(messageData) {
              // Check if the message indicates form submission
              if (messageData.message && 
                  (messageData.message.type === 'form-submit' || 
                   messageData.message.includes && messageData.message.includes('form-submit') ||
                   messageData.message.includes && messageData.message.includes('success') ||
                   messageData.message.includes && messageData.message.includes('submitted'))) {
                // Call the form submission handler
                window.handleDubsadoFormSubmit && window.handleDubsadoFormSubmit();
              }
            },
            onInit: function(iframe) {
              // Try to access iframe content when it's loaded
              iframe.onload = function() {
                try {
                  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                  if (iframeDoc) {
                    // Add CSS to style form elements
                    var styleEl = document.createElement('style');
                    styleEl.textContent = \`
                      /* Round corners of inputs */
                      input[type="text"], 
                      input[type="email"], 
                      input[type="tel"], 
                      textarea, 
                      select {
                        border-radius: 1rem !important;
                        padding: 0.75rem 1rem !important;
                      }
                      
                      /* Remove any scrolling */
                      html, body {
                        overflow: visible !important;
                        height: auto !important;
                        min-height: 100% !important;
                      }
                      
                      /* Style the submit button */
                      button[type="submit"], 
                      input[type="submit"], 
                      .submit-button, 
                      .form-submit, 
                      [type="submit"],
                      form button:last-child,
                      form .button:last-child,
                      form .btn:last-child,
                      .dubsado-form-submit,
                      .dubsado-submit-button {
                        border-radius: 9999px !important;
                        background-color: #ff6b6b !important;
                        color: white !important;
                        padding: 0.75rem 1.5rem !important;
                        font-weight: 500 !important;
                        transition: all 0.3s ease !important;
                        border: 2px solid #ff6b6b !important;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
                      }
                      
                      /* Hover state for submit button */
                      button[type="submit"]:hover, 
                      input[type="submit"]:hover, 
                      .submit-button:hover, 
                      .form-submit:hover, 
                      [type="submit"]:hover,
                      form button:last-child:hover,
                      form .button:last-child:hover,
                      form .btn:last-child:hover,
                      .dubsado-form-submit:hover,
                      .dubsado-submit-button:hover {
                        transform: translateY(-2px) !important;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                      }
                    \`;
                    iframeDoc.head.appendChild(styleEl);
                    
                    // Add event listeners to detect form submission
                    var forms = iframeDoc.querySelectorAll('form');
                    forms.forEach(function(form) {
                      form.addEventListener('submit', function() {
                        // Notify the parent window
                        window.parent.postMessage({ type: 'form-submit', message: 'Form submitted' }, '*');
                      });
                    });
                    
                    // Add event listeners to submit buttons
                    var submitButtons = iframeDoc.querySelectorAll('button[type="submit"], input[type="submit"], .submit-button, .form-submit, [type="submit"]');
                    submitButtons.forEach(function(button) {
                      button.addEventListener('click', function() {
                        // Notify the parent window
                        window.parent.postMessage({ type: 'form-submit', message: 'Form submitted' }, '*');
                      });
                    });
                  }
                } catch (e) {
                  console.log('Could not access iframe content: ' + e);
                }
              };
            }
          }, '#dubsado-form');
        }
      }, 30);
    `;
    
    // Append elements to the container
    formContainerRef.current.appendChild(resizerScript);
    formContainerRef.current.appendChild(iframe);
    formContainerRef.current.appendChild(initScript);
  };

  // Set up the form when the component mounts or when isSubmitted changes
  useEffect(() => {
    // Define the global handler function for form submission
    window.handleDubsadoFormSubmit = handleFormSubmit;
    
    // Set up the form
    setupDubsadoForm();
    
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
    
    // Cleanup
    return () => {
      // Remove any added styles
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent?.includes('dubsado-form-container')) {
          style.remove();
        }
      });
      
      // Remove the global handler
      delete window.handleDubsadoFormSubmit;
      
      // Remove event listener
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Heart size={18} className="text-evo-pink" />
            <span className="text-sm font-medium text-evo-text">{translate('letsConnect')}</span>
          </div>
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            {translate('beginYourEvolution')}
          </h2>
          <p 
            className={`text-evo-text transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            {translate('readyToTransform')}
          </p>
        </div>
        
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Send a Message Box - White background */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-rufina text-2xl mb-6 text-evo-text">{translate('sendAMessage')}</h3>
            
            {isSubmitted ? (
              <Alert className="mb-6 bg-green-50 border-green-200 text-green-700">
                <Heart className="h-4 w-4 text-green-600" />
                <AlertTitle>{translate('success')}</AlertTitle>
                <AlertDescription>
                  {translate('thankYouForReaching')}
                </AlertDescription>
              </Alert>
            ) : null}
            
            {/* Dubsado Form */}
            <div className="space-y-6">
              {/* Form container */}
              <div
                ref={formContainerRef}
                className={`dubsado-form-container ${isSubmitted ? 'hidden' : 'block'}`}
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the global handler type
declare global {
  interface Window {
    handleDubsadoFormSubmit?: () => void;
    iFrameResize?: (options: any, target: HTMLIFrameElement) => void;
  }
}

export default Contact;
