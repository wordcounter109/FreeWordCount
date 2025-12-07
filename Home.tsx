import React, { useEffect } from 'react';
import HeroBackground from '../components/HeroBackground';
import WordCounter from '../components/WordCounter';
import { PenTool, GraduationCap, Search, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Free Word Counter & Character Counter Tool for Students, Bloggers, Writers & SEO Users";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-24 pb-48 px-6 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Free Word Counter & <br/><span className="text-brand-primary">Character Counter Online</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Instantly count words, characters, sentences, and paragraphs. The perfect tool for <span className="text-brand-primary font-medium">students</span>, <span className="text-brand-primary font-medium">bloggers</span>, <span className="text-brand-primary font-medium">writers</span>, and <span className="text-brand-primary font-medium">SEO users</span>.
          </p>
        </div>
      </section>

      {/* Main Tool Area - Negative Margin to overlap Hero */}
      <section className="px-6 pb-12">
        <WordCounter />
      </section>

      {/* SEO Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Students */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-primary/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">For Students</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're writing a college essay, a research paper, or a simple homework assignment, sticking to the word limit is crucial. Our <strong>Word Counter for students</strong> helps you ensure your assignment meets the professor's requirements without being too short or too verbose.
              </p>
            </div>

            {/* Bloggers/Writers */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-primary/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                <PenTool size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">For Bloggers & Writers</h2>
              <p className="text-gray-600 leading-relaxed">
                Professional <strong>bloggers and writers</strong> know that readability and article length matter. Use our tool to draft posts that are engaging and fit standard publishing guidelines. Monitor character counts for social media posts like Twitter/X to ensure your message isn't cut off.
              </p>
            </div>

            {/* SEO Users */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-brand-primary/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                <Search size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">For SEO Users</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>SEO users</strong> rely on content length to compete in SERPs. Long-form content often ranks better, but meta titles and descriptions have strict character limits. Our tool provides precise character counts (with and without spaces) to optimize your on-page SEO perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Use Our Free Word Counter?</h2>
          
          <div className="space-y-6">
            <FeatureItem title="Instant & Real-Time" desc="No need to click a button. Counts update automatically as you type or paste text." />
            <FeatureItem title="100% Secure & Private" desc="We do not store your text. All processing happens in your browser. Your content never leaves your device." />
            <FeatureItem title="Completely Free" desc="No subscriptions, no hidden fees, and no limits. Use it as much as you need." />
            <FeatureItem title="Multi-Platform Support" desc="Works seamlessly on Desktops, Tablets, and Mobile phones (iOS & Android)." />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 flex-shrink-0 text-brand-primary">
      <CheckCircle size={24} fill="#2d2d2d" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export default Home;
