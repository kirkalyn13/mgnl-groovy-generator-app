import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Magnolia Groovy Generator</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to the Magnolia Groovy Generator, a RAG-powered CMS script generator designed to help you create powerful Groovy scripts for Magnolia content management systems.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What is this tool?</h2>
            <p className="text-gray-700 leading-relaxed">
              This application leverages advanced AI to generate Groovy scripts tailored for Magnolia CMS operations. Simply describe what you need, and our intelligent system will craft the appropriate script for you.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>RAG-powered script generation for accurate, context-aware results</li>
              <li>Intuitive query interface for natural language input</li>
              <li>Real-time script generation with loading indicators</li>
              <li>Clean, copyable output ready for deployment</li>
              <li>API documentation access for advanced users</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed">
              Navigate to the home page to start generating your first Groovy script. Simply enter your query and let our AI assistant craft the perfect solution for your Magnolia CMS needs.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Support & Documentation</h2>
            <p className="text-gray-700 leading-relaxed">
              For API documentation and advanced usage, visit the API Docs link in the header. Need help? Check out our documentation or contact our support team.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
