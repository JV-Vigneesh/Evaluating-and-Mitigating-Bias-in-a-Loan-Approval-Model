import React from 'react';
import Card from '../ui/Card';
import { FeatureImportance } from '../../types';
import Badge from '../ui/Badge';

interface FeatureImportanceChartProps {
  features: FeatureImportance[];
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ features }) => {
  const sortedFeatures = [...features].sort((a, b) => b.importance - a.importance);
  
  const getBiasBadgeVariant = (level: 'high' | 'medium' | 'low' | 'none') => {
    switch (level) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'info';
      case 'none': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <Card title="Feature Importance & Bias Potential">
      <div className="space-y-4">
        {sortedFeatures.map((feature, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="font-medium text-gray-700">{feature.feature}</span>
                <Badge 
                  variant={getBiasBadgeVariant(feature.potentialBias)} 
                  className="ml-2"
                >
                  {feature.potentialBias} bias
                </Badge>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {(feature.importance * 100).toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  feature.potentialBias === 'high' ? 'bg-red-500' :
                  feature.potentialBias === 'medium' ? 'bg-amber-500' :
                  feature.potentialBias === 'low' ? 'bg-teal-500' : 'bg-green-500'
                }`}
                style={{ width: `${feature.importance * 100}%` }}
              ></div>
            </div>
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700">
          <p className="mb-2">
            <span className="font-semibold">🔍 Insight:</span> Features with high importance and high bias potential 
            should be carefully examined as they may lead to discriminatory outcomes.
          </p>
          <div className="flex space-x-4 mt-2">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
              <span>High risk</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-amber-500 rounded-full mr-1"></span>
              <span>Medium risk</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-1"></span>
              <span>Low risk</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureImportanceChart;