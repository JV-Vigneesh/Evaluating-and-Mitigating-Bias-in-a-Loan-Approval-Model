import React from 'react';
import BiasMitigationGuide from '../components/resources/BiasMitigationGuide';
import Card from '../components/ui/Card';
import { FileText, Book, Video, Link } from 'lucide-react';

const Resources: React.FC = () => {
  const publicationList = [
    {
      title: "Fairness in Machine Learning: Lessons from Political Philosophy",
      authors: "Sorelle A. Friedler, Carlos Scheidegger, Suresh Venkatasubramanian",
      year: 2021,
      link: "#"
    },
    {
      title: "A Survey on Bias and Fairness in Machine Learning",
      authors: "Ninareh Mehrabi, Fred Morstatter, Nripsuta Saxena, Kristina Lerman, Aram Galstyan",
      year: 2022,
      link: "#"
    },
    {
      title: "Fair Lending Compliance and Machine Learning: An Implementation Guide",
      authors: "Nicholas Schmidt, Bryce Stephens",
      year: 2023,
      link: "#"
    },
    {
      title: "Algorithmic Fairness in Mortgage Lending: From Absolute Conditions to Relational Trade-offs",
      authors: "Michelle Bao, Angela Zhou, Samantha Zottola, Brian Brubach, Sarah Tarimova, et al.",
      year: 2022,
      link: "#"
    }
  ];

  const toolsList = [
    {
      name: "AIF360 - AI Fairness 360",
      description: "Comprehensive set of fairness metrics for datasets and models",
      provider: "IBM Research",
      link: "#"
    },
    {
      name: "Fairlearn",
      description: "Python package to assess and improve fairness of ML models",
      provider: "Microsoft Research",
      link: "#"
    },
    {
      name: "ML-Fairness-Gym",
      description: "Simulation framework for studying long-term effects of ML decisions",
      provider: "Google Research",
      link: "#"
    },
    {
      name: "What-If Tool",
      description: "Visual interface for exploring model behavior with minimal coding",
      provider: "Google PAIR",
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Educational Resources</h1>
        <p className="mt-1 text-gray-600">
          Learn more about bias detection and mitigation in machine learning models.
        </p>
      </div>
      
      <BiasMitigationGuide />
      
      <Card title="Recommended Publications">
        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            These academic papers and publications provide in-depth knowledge on bias in financial algorithms.
          </p>
          
          <div className="divide-y divide-gray-200">
            {publicationList.map((publication, index) => (
              <div key={index} className="py-4 flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    <a href={publication.link} className="hover:text-blue-600 transition-colors duration-200">
                      {publication.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {publication.authors} ({publication.year})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Online Courses">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Video className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Fairness in Machine Learning</h3>
                  <p className="mt-1 text-sm text-gray-600">Stanford University</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Free
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Video className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Responsible AI for Financial Services</h3>
                  <p className="mt-1 text-sm text-gray-600">Microsoft Learn</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Free
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                      Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Video className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Ethics in AI and Bias Mitigation</h3>
                  <p className="mt-1 text-sm text-gray-600">DeepLearning.AI</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Paid
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                      Certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Fairness Tools and Libraries">
          <div className="space-y-4">
            {toolsList.map((tool, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                      <Link className="h-5 w-5 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{tool.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{tool.description}</p>
                    <p className="mt-1 text-xs text-gray-500">Provider: {tool.provider}</p>
                    <div className="mt-2">
                      <a 
                        href={tool.link} 
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Visit website
                        <svg className="ml-1 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <Card title="Regulatory Guidance">
        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            Understanding the regulatory landscape is crucial for implementing fair lending practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <Book className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">ECOA & Reg B</h3>
              </div>
              <p className="text-sm text-gray-600">Equal Credit Opportunity Act and Regulation B prohibit discrimination in lending based on protected characteristics.</p>
              <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <Book className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">Fair Housing Act</h3>
              </div>
              <p className="text-sm text-gray-600">Prohibits discrimination in residential real estate-related transactions, including mortgage lending.</p>
              <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center mb-3">
                <Book className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">CFPB Guidance</h3>
              </div>
              <p className="text-sm text-gray-600">Consumer Financial Protection Bureau provides guidance on fair lending requirements for algorithmic decision-making.</p>
              <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Resources;