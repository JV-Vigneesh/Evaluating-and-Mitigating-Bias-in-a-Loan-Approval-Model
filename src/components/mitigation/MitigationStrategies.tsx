import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { MitigationStrategy } from '../../types';

interface MitigationStrategiesProps {
  strategies: MitigationStrategy[];
  onSimulate: () => void;
}

const MitigationStrategies: React.FC<MitigationStrategiesProps> = ({ strategies, onSimulate }) => {
  const getImpactBadge = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high': return 'success';
      case 'medium': return 'info';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <Card title="Bias Mitigation Strategies">
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          The following strategies have been applied to mitigate bias in the loan approval model.
        </p>
        
        <div className="space-y-4">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="border rounded-lg p-4 bg-white"
            >
              <div>
                <h3 className="font-medium text-gray-900">{strategy.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{strategy.description}</p>
                <div className="mt-2 flex space-x-2">
                  <Badge variant={getImpactBadge(strategy.impact)}>
                    Impact: {strategy.impact}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button 
            onClick={onSimulate}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            View Results
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MitigationStrategies;