
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Check if all form fields are filled
  useEffect(() => {
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && message.trim() !== '');
  }, [name, email, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "All fields are required",
        description: "Please fill in all the fields before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using Formspree with the provided endpoint
      const response = await fetch('https://formspree.io/f/xyzekwvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form after submission
        setName('');
        setEmail('');
        setMessage('');
        
        // Reset isSubmitted after a delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-white to-evo-neutral-light">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Heart size={18} className="text-evo-pink" />
            <span className="text-sm font-medium text-evo-text">Let's Connect</span>
          </div>
          <h2 
            className={`headline-lg mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} text-evo-text`}
          >
            Begin Your Evolution Today
          </h2>
          <p 
            className={`text-evo-text transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Ready to transform your coaching business? I'm here to guide you every step of the way.
          </p>
        </div>
        
        <div 
          className={`flex flex-col gap-8 max-w-2xl mx-auto transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Send a Message Box - White background */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-rufina text-2xl mb-6 text-evo-text">Send a Message</h3>
            
            {isSubmitted ? (
              <Alert className="mb-6 bg-green-50 border-green-200 text-green-700">
                <Heart className="h-4 w-4 text-green-600" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Thank you for reaching out! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            ) : null}
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-evo-text mb-2 text-sm">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-evo-text mb-2 text-sm">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-evo-text mb-2 text-sm">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl w-full"
                  placeholder="Tell me about your coaching business..."
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className={`${isFormValid ? 'bg-evo-pink text-white border-evo-pink' : 'bg-white text-evo-pink border-evo-pink'} 
                  px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-evo-pink hover:text-white 
                  hover:translate-y-[-2px] hover:shadow-md w-full flex items-center justify-center gap-2 shadow-sm border-2`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Personal Attention Box - Blue to white gradient */}
          <div className="bg-gradient-to-br from-evo-blue-light via-[#E6F0FC] to-white p-8 rounded-2xl border border-evo-blue-light/30 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-evo-blue opacity-10 blur-[50px] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-evo-blue-light opacity-10 blur-[50px] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <h4 className="font-rufina text-xl mb-4 text-evo-text relative z-10">Personal Attention</h4>
            <p className="text-evo-text mb-6 relative z-10">Book a free 30-minute discovery call where we'll discuss your unique coaching business needs.</p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 border-evo-blue/80 bg-white/50 hover:bg-white hover:translate-y-[-2px] hover:shadow-md text-evo-text relative z-10"
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
