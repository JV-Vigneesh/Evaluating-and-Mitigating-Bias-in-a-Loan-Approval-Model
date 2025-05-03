import React from 'react';
import Card from '../ui/Card';
import { BookOpen, AlertTriangle, PenTool as Tool, BarChart2 } from 'lucide-react';

const BiasMitigationGuide: React.FC = () => {
  const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('This resource will be available in the full version of the application.');
  };

  const resources = [
    {
      category: 'Understanding Bias',
      icon: <BookOpen size={20} className="text-blue-600" />,
      items: [
        {
          title: 'Types of Algorithmic Bias',
          description: 'Learn about different forms of bias that can appear in ML models, including selection bias, measurement bias, and aggregation bias.',
        },
        {
          title: 'Fairness Metrics Explained',
          description: 'Comprehensive guide to statistical fairness metrics like disparate impact, equal opportunity, and equalized odds.',
        }
      ]
    },
    {
      category: 'Detection Methods',
      icon: <AlertTriangle size={20} className="text-amber-600" />,
      items: [
        {
          title: 'Bias Audit Framework',
          description: 'A structured approach to auditing ML models for potential discrimination against protected groups.',
        },
        {
          title: 'Interpretability Techniques',
          description: 'Methods to understand model decisions and identify potential sources of bias in feature importance.',
        }
      ]
    },
    {
      category: 'Mitigation Techniques',
      icon: <Tool size={20} className="text-green-600" />,
      items: [
        {
          title: 'Pre-processing Methods',
          description: 'Techniques applied to training data before model training, including reweighing and disparate impact remover.',
        },
        {
          title: 'In-processing Methods',
          description: 'Approaches that modify the learning algorithm, such as adversarial debiasing and prejudice remover.',
        },
        {
          title: 'Post-processing Methods',
          description: 'Techniques that adjust model outputs after training, including reject option classification and calibrated equalized odds.',
        }
      ]
    },
    {
      category: 'Evaluation Frameworks',
      icon: <BarChart2 size={20} className="text-purple-600" />,
      items: [
        {
          title: 'Fairness-Performance Trade-offs',
          description: 'Methodologies for balancing model performance with fairness requirements in high-stakes domains.',
        },
        {
          title: 'Regulatory Compliance',
          description: 'Guidelines for ensuring ML systems comply with anti-discrimination laws and regulations.',
        }
      ]
    }
  ];

  return (
    <Card title="Bias Mitigation Resources" className="mb-8">
      <div className="space-y-8">
        {resources.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center space-x-2">
              {section.icon}
              <h3 className="text-lg font-medium text-gray-900">{section.category}</h3>
            </div>
            
            <div className="space-y-4 ml-7">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  <a 
                    href="#"
                    onClick={handleResourceClick}
                    className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BiasMitigationGuide;