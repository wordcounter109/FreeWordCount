import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Free Word Counter";
  }, []);

  return (
    <div className="min-h-screen pt-12 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            At Free Word Counter, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Free Word Counter and how we use it.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Data Collection & Text Processing</h3>
          <p className="mb-4">
            <strong>We do not store your text.</strong> When you paste or type content into our Word Counter tool, all calculations are performed locally within your web browser using JavaScript. Your text data is never sent to our servers, never stored in a database, and never viewed by our team. Once you close the tab or clear the input, the text is gone forever from our interface.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Cookies</h3>
          <p className="mb-4">
            Like any other website, Free Word Counter uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Log Files</h3>
          <p className="mb-4">
            Free Word Counter follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Third Party Privacy Policies</h3>
          <p className="mb-4">
            Free Word Counter's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Consent</h3>
          <p className="mb-4">
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
