import React from 'react';
import Card from '../ui/Card';
import { DisparityMetric } from '../../types';
import Tooltip from '../ui/Tooltip';
import { Info } from 'lucide-react';

interface DisparityBarChartProps {
  data: DisparityMetric;
}

const DisparityBarChart: React.FC<DisparityBarChartProps> = ({ data }) => {
  // Sort categories by approval rate
  const sortedCategories = [...data.categories].sort((a, b) => b.approvalRate - a.approvalRate);
  
  // Find max approval rate for scaling
  const maxApprovalRate = Math.max(...data.categories.map(c => c.approvalRate));
  
  // Get a human-readable attribute name
  const getAttributeName = (attr: string) => {
    return attr.charAt(0).toUpperCase() + attr.slice(1);
  };

  return (
    <Card title={`${getAttributeName(data.attribute)} Approval Rate Disparity`}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-500">Disparity Metric:</span>
            <span className="ml-2 text-lg font-semibold text-gray-900">{data.disparity.toFixed(2)}</span>
            <Tooltip content="Disparity measures the difference between the highest and lowest approval rates across groups. Lower values indicate more fairness.">
              <span className="ml-1 text-gray-400 cursor-help">
                <Info size={16} />
              </span>
            </Tooltip>
          </div>
          <div className="text-sm text-gray-500">
            <span>Total Applicants: {data.categories.reduce((sum, cat) => sum + cat.count, 0)}</span>
          </div>
        </div>

        <div className="space-y-3">
          {sortedCategories.map((category, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="font-medium text-gray-700 capitalize w-24">
                    {category.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {category.count} applicants
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {(category.approvalRate * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${
                    index === 0 ? 'bg-blue-600' : 
                    index === sortedCategories.length - 1 ? 'bg-red-500' : 'bg-teal-500'
                  }`}
                  style={{ width: `${(category.approvalRate / maxApprovalRate) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700">
          <p>
            <span className="font-semibold">🔍 Insight:</span> A disparity value above 0.10 may indicate a significant 
            difference in approval rates that warrants further investigation for potential bias.
          </p>
          <div className="flex space-x-4 mt-2">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-1"></span>
              <span>Highest rate</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
              <span>Lowest rate</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DisparityBarChart;