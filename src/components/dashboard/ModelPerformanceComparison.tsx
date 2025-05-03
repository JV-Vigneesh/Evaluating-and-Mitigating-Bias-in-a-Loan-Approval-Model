import React from 'react';
import Card from '../ui/Card';
import { ModelComparison } from '../../types';
import Tooltip from '../ui/Tooltip';
import { HelpCircle } from 'lucide-react';

interface ModelPerformanceComparisonProps {
  data: ModelComparison;
}

const ModelPerformanceComparison: React.FC<ModelPerformanceComparisonProps> = ({ data }) => {
  const metrics = [
    { label: 'Accuracy', key: 'accuracy', description: 'The proportion of correctly classified instances among all instances.' },
    { label: 'Precision', key: 'precision', description: 'The proportion of true positive predictions among all positive predictions.' },
    { label: 'Recall', key: 'recall', description: 'The proportion of true positive predictions among all actual positives.' },
    { label: 'F1 Score', key: 'f1Score', description: 'The harmonic mean of precision and recall.' },
    { label: 'AUC', key: 'auc', description: 'Area Under the ROC Curve. Higher values indicate better performance.' }
  ];

  const getPercentChange = (original: number, debiased: number) => {
    const change = ((debiased - original) / original) * 100;
    return change.toFixed(1);
  };

  return (
    <Card title="Model Performance Comparison">
      <div className="space-y-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Debiased</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {metrics.map((metric, index) => {
              const originalValue = data.original[metric.key as keyof typeof data.original];
              const debiasedValue = data.debiased[metric.key as keyof typeof data.debiased];
              const percentChange = getPercentChange(originalValue, debiasedValue);
              const isPositiveChange = parseFloat(percentChange) >= 0;

              return (
                <tr key={index}>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">{metric.label}</span>
                      <Tooltip content={metric.description}>
                        <span className="ml-1 text-gray-400 cursor-help">
                          <HelpCircle size={14} />
                        </span>
                      </Tooltip>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {originalValue.toFixed(2)}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {debiasedValue.toFixed(2)}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositiveChange ? '+' : ''}{percentChange}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700">
          <p>
            <span className="font-semibold">🔍 Insight:</span> The debiased model shows 
            {data.debiased.f1Score >= data.original.f1Score ? 
              ' improved' : ' slightly reduced'} overall performance. 
            This demonstrates that bias mitigation can {data.debiased.f1Score >= data.original.f1Score ? 
              'enhance model quality while increasing fairness.' : 
              'be achieved with minimal impact on model performance.'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ModelPerformanceComparison;