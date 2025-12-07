import React, { useEffect } from 'react';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    document.title = "Disclaimer - Free Word Counter";
  }, []);

  return (
    <div className="min-h-screen pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Disclaimer</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            The information provided by Free Word Counter ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Educational and Informational Use</h3>
          <p className="mb-4">
            This tool is designed to assist students, writers, and professionals in counting words and characters. While we strive for accuracy, different platforms (like Google Docs, Microsoft Word, or Social Media sites) may have slightly different algorithms for counting words or characters. Therefore, <strong>we are not liable</strong> for any discrepancies between our count and the count on other platforms.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">No Professional Advice</h3>
          <p className="mb-4">
             The Site does not contain professional legal or educational advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Limitation of Liability</h3>
          <p className="mb-4">
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
