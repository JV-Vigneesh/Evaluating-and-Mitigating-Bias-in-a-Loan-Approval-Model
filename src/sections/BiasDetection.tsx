import React, { useState } from 'react';
import Tabs from '../components/ui/Tabs';
import Card from '../components/ui/Card';
import DataDistributionChart from '../components/detection/DataDistributionChart';
import BiasSensitivityTest from '../components/detection/BiasSensitivityTest';
import { Activity, Users, Filter } from 'lucide-react';
import { mockApplicants } from '../data/mockData';
import { TabItem, ProtectedAttribute } from '../types';

const BiasDetection: React.FC = () => {
  const [selectedAttribute, setSelectedAttribute] = useState<ProtectedAttribute>('gender');
  
  const distributionTabs: TabItem[] = [
    { id: 'gender', label: 'Gender', icon: <Users size={16} /> },
    { id: 'race', label: 'Race', icon: <Users size={16} /> },
    { id: 'age', label: 'Age', icon: <Activity size={16} /> },
  ];
  
  const handleAttributeChange = (tabId: string) => {
    setSelectedAttribute(tabId as ProtectedAttribute);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bias Detection</h1>
        <p className="mt-1 text-gray-600">
          Tools and visualizations to help identify and quantify bias in the loan approval model.
        </p>
      </div>
      
      <Card title="Data Distribution Analysis">
        <Tabs tabs={distributionTabs} onChange={handleAttributeChange} />
        <div className="mt-6">
          <DataDistributionChart 
            data={mockApplicants} 
            attribute={selectedAttribute} 
          />
        </div>
      </Card>
      
      <BiasSensitivityTest />
      
      <Card title="Disparate Impact Analysis">
        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            Disparate impact analysis compares the outcomes for different groups to identify disproportionate effects.
            Below are the disparate impact ratios for key protected attributes in the loan approval model.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Filter size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">Gender</h3>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">0.88</div>
              <div className="text-sm text-gray-500">Female to male approval ratio</div>
              <div className="mt-3 text-sm">
                <span className="text-amber-600 font-medium">Borderline</span> - Close to the 0.8 threshold
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Filter size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">Race</h3>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">0.76</div>
              <div className="text-sm text-gray-500">Minority to white approval ratio</div>
              <div className="mt-3 text-sm">
                <span className="text-red-600 font-medium">Concerning</span> - Below the 0.8 threshold
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Filter size={18} className="text-blue-600 mr-2" />
                <h3 className="font-medium text-gray-900">Age</h3>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">0.82</div>
              <div className="text-sm text-gray-500">Younger to older approval ratio</div>
              <div className="mt-3 text-sm">
                <span className="text-green-600 font-medium">Acceptable</span> - Above the 0.8 threshold
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h3 className="font-medium text-amber-800 mb-2">Understanding Disparate Impact</h3>
            <p className="text-sm text-amber-700 mb-3">
              The 80% rule (or 0.8 threshold) is a guideline used by regulatory agencies to identify disparate impact. 
              Ratios below 0.8 may indicate that the model has a disproportionately negative effect on protected groups.
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-amber-700">0.0</div>
              <div className="flex-1 mx-2 h-2 bg-gray-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full w-1/5 border-r border-amber-700"></div>
                <div className="absolute top-3 left-[20%] text-xs text-amber-700 -translate-x-1/2">0.2</div>
                <div className="absolute top-0 left-[20%] h-full w-1/5 border-r border-amber-700"></div>
                <div className="absolute top-3 left-[40%] text-xs text-amber-700 -translate-x-1/2">0.4</div>
                <div className="absolute top-0 left-[40%] h-full w-1/5 border-r border-amber-700"></div>
                <div className="absolute top-3 left-[60%] text-xs text-amber-700 -translate-x-1/2">0.6</div>
                <div className="absolute top-0 left-[60%] h-full w-1/5 border-r border-amber-700"></div>
                <div className="absolute top-3 left-[80%] text-xs text-amber-800 font-bold -translate-x-1/2">0.8</div>
                <div className="absolute top-0 left-[80%] h-full w-1/5 border-r-2 border-amber-600"></div>
                <div className="absolute top-3 left-full text-xs text-amber-700 -translate-x-1/2">1.0</div>
              </div>
              <div className="text-xs text-amber-700">1.0</div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-amber-700">
              <div>High disparate impact</div>
              <div>Threshold</div>
              <div>Low disparate impact</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BiasDetection;