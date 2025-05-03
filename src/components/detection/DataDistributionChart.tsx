import React from 'react';
import Card from '../ui/Card';
import { LoanApplicant, ProtectedAttribute } from '../../types';

interface DataDistributionChartProps {
  data: LoanApplicant[];
  attribute: ProtectedAttribute;
}

const DataDistributionChart: React.FC<DataDistributionChartProps> = ({ data, attribute }) => {
  // Process data to get distribution
  const getDistribution = () => {
    const counts: Record<string, { total: number; approved: number }> = {};
    
    data.forEach(applicant => {
      const value = applicant[attribute] as string;
      
      if (!counts[value]) {
        counts[value] = { total: 0, approved: 0 };
      }
      
      counts[value].total += 1;
      if (applicant.approved) {
        counts[value].approved += 1;
      }
    });
    
    return Object.entries(counts).map(([category, { total, approved }]) => ({
      category,
      total,
      approved,
      approvalRate: total > 0 ? approved / total : 0
    }));
  };
  
  const distribution = getDistribution();
  const maxTotal = Math.max(...distribution.map(item => item.total));
  
  // Calculate overall approval rate
  const overallApproved = data.filter(a => a.approved).length;
  const overallRate = data.length > 0 ? overallApproved / data.length : 0;
  
  return (
    <Card title={`Data Distribution by ${attribute.charAt(0).toUpperCase() + attribute.slice(1)}`}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500">
            <span>Total Applicants: {data.length}</span>
          </div>
          <div className="text-sm text-gray-500">
            <span>Overall Approval Rate: {(overallRate * 100).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {distribution.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 capitalize">
                  {item.category}
                </span>
                <div className="flex space-x-4">
                  <span className="text-xs text-gray-500">
                    {item.total} applicants
                  </span>
                  <span className="text-xs font-medium text-blue-600">
                    {(item.approvalRate * 100).toFixed(1)}% approved
                  </span>
                </div>
              </div>
              
              <div className="relative w-full h-8 bg-gray-200 rounded-md overflow-hidden">
                {/* Total bar */}
                <div 
                  className="absolute h-full bg-gray-300"
                  style={{ width: `${(item.total / maxTotal) * 100}%` }}
                ></div>
                
                {/* Approved bar */}
                <div 
                  className="absolute h-full bg-blue-500"
                  style={{ width: `${(item.approved / maxTotal) * 100}%` }}
                ></div>
                
                {/* Overall rate line */}
                <div 
                  className="absolute h-full w-px bg-red-500 z-10"
                  style={{ left: `${overallRate * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-gray-300 mr-1"></span>
              <span className="text-gray-600">Total applicants</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 mr-1"></span>
              <span className="text-gray-600">Approved applicants</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 mr-1"></span>
              <span className="text-gray-600">Overall approval rate</span>
            </div>
          </div>
          
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">🔍 Insight:</span> Significant differences in approval rates across {attribute} 
            categories may indicate potential bias in the model or underlying data.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DataDistributionChart;