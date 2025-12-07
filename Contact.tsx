import React, { useEffect, useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us - Free Word Counter";
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    // For this static tool, we just show a success message.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-12 pb-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600">Have a question, suggestion, or found a bug? We'd love to hear from you.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-brand-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-dark">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-brand-secondary underline hover:text-brand-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-primary text-gray-900 font-bold py-3 rounded-lg hover:bg-[#b0e00f] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
