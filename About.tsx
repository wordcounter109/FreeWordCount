import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us - Free Word Counter";
  }, []);

  return (
    <div className="min-h-screen pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            Welcome to <strong>Free Word Counter</strong>, your go-to online utility for counting words, characters, sentences, and paragraphs accurately and instantly.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h3>
          <p className="mb-6">
            Our mission is simple: to provide a fast, reliable, and distraction-free tool for <strong>students, content creators, writers, and professionals</strong>. We understand that in the digital age, precision matters. whether you are crafting a tweet, writing a university thesis, or optimizing a blog post for SEO, knowing your exact word count is essential.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why We Created This Tool</h3>
          <p className="mb-6">
            Many word counters are cluttered with ads or require sign-ups. We wanted to build a clean, modern alternative that puts user experience first. We focused on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Speed:</strong> Instant calculations without page reloads.</li>
            <li><strong>Privacy:</strong> Ensuring that your text is processed locally and never stored on a server.</li>
            <li><strong>Accessibility:</strong> A design that works for everyone, on any device.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Who Can Benefit?</h3>
          <p className="mb-6">
            While anyone can use our tool, we tailored it specifically for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Students:</strong> Meeting strict essay length requirements.</li>
            <li><strong>Bloggers:</strong> Creating content that is neither too short nor too long for readers.</li>
            <li><strong>SEO Specialists:</strong> Optimizing meta titles and descriptions to avoid truncation in search results.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
