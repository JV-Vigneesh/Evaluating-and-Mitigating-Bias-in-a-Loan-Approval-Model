import React from 'react';
import Card from '../ui/Card';
import { SimulationResult, MitigationStrategy } from '../../types';

interface SimulationResultsProps {
  results: SimulationResult[];
  strategies: MitigationStrategy[];
}

const SimulationResults: React.FC<SimulationResultsProps> = ({ results, strategies }) => {
  // Find strategy name from ID
  const getStrategyName = (strategyId: string) => {
    const strategy = strategies.find(s => s.id === strategyId);
    return strategy ? strategy.name : 'Unknown Strategy';
  };

  // Calculate percentage reduction in disparity
  const getDisparityReduction = (original: number, mitigated: number) => {
    return ((original - mitigated) / original * 100).toFixed(1);
  };

  return (
    <Card title="Simulation Results">
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Results from applying the selected mitigation strategies to the model.
        </p>

        {results.length > 0 ? (
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Disparity</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitigated Disparity</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reduction</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Impact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="font-medium text-gray-900">
                          {getStrategyName(result.strategyId)}
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                        {result.originalDisparity.toFixed(2)}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                        {result.mitigatedDisparity.toFixed(2)}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-green-600">
                          -{getDisparityReduction(result.originalDisparity, result.mitigatedDisparity)}%
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${
                          result.performanceImpact > 0 
                            ? 'text-green-600' 
                            : result.performanceImpact > -0.03 
                              ? 'text-amber-600' 
                              : 'text-red-600'
                        }`}>
                          {result.performanceImpact > 0 ? '+' : ''}
                          {(result.performanceImpact * 100).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Key Insights</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex">
                  <span className="text-green-500 mr-2">✓</span>
                  Threshold optimization shows the highest disparity reduction with minimal performance impact.
                </li>
                <li className="flex">
                  <span className="text-amber-500 mr-2">!</span>
                  Reweighing provides balanced results but may require additional validation.
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">i</span>
                  Consider combining strategies for optimal results based on your fairness-performance tradeoff preferences.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500">No simulation results yet. Select strategies and run the simulation.</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SimulationResults;