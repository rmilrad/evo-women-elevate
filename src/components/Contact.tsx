
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Heart } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Heart size={18} className="text-evo-pink-dark" />
            <span className="text-sm font-medium text-gray-600">Let's Connect</span>
          </div>
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-gradient`}
          >
            Begin Your Evolution Today
          </h2>
          <p 
            className={`text-gray-700 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Ready to transform your coaching business? I'm here to guide you every step of the way.
          </p>
        </div>
        
        <div 
          className={`flex flex-col gap-8 max-w-2xl mx-auto transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Send a Message Box */}
          <div className="bg-gradient-to-br from-evo-blue-light to-white p-8 rounded-2xl border border-evo-blue-light/50 shadow-sm">
            <h3 className="font-rufina text-2xl mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 flex items-center gap-2">
                <Heart size={18} className="text-green-600" />
                <span>Thank you for reaching out! I'll get back to you soon.</span>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="elegant-input rounded-full"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="elegant-input rounded-full"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="elegant-input rounded-xl"
                  placeholder="Tell me about your coaching business..."
                  rows={5}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 shadow-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Personal Attention Box */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-rufina text-xl mb-4 text-gradient">Personal Attention</h4>
            <p className="text-gray-700 mb-6">Book a free 30-minute discovery call where we'll discuss your unique coaching business needs.</p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 border-black/90 bg-transparent hover:bg-black/5 hover:translate-y-[-2px] hover:shadow-md"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
