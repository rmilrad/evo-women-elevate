
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, Map } from 'lucide-react';

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

  const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
    <div className="flex items-start gap-4">
      <div className="bg-evo-pink bg-opacity-10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );

  return (
    <section id="contact" ref={ref} className="section-padding bg-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Get In Touch
          </h2>
          <p 
            className={`text-gray-700 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Ready to evolve your coaching business? Let's start a conversation.
          </p>
        </div>
        
        <div 
          className={`grid md:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="font-rufina text-2xl mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-evo-pink focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-evo-pink focus:border-transparent transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-evo-pink focus:border-transparent transition-all"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
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
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-rufina text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail size={20} className="text-evo-pink-dark" />}
                  title="Email"
                  content="hello@evocoaching.com"
                />
                
                <ContactInfo 
                  icon={<Phone size={20} className="text-evo-pink-dark" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                />
                
                <ContactInfo 
                  icon={<Map size={20} className="text-evo-pink-dark" />}
                  title="Location"
                  content="Remote - Working Globally"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-evo-blue-light p-8 rounded-2xl">
              <h4 className="font-rufina text-xl mb-4">Ready to Evolve?</h4>
              <p className="text-gray-700 mb-6">Book a free 30-minute discovery call to discuss your coaching business needs.</p>
              <a href="#" className="btn-primary inline-flex">Schedule a Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
