import React from 'react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { BiasMetric } from '../../types';
import Tooltip from '../ui/Tooltip';
import { AlertCircle } from 'lucide-react';

interface MetricsOverviewProps {
  metrics: BiasMetric[];
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({ metrics }) => {
  // Determine metric status based on threshold
  const getMetricStatus = (metric: BiasMetric) => {
    if (metric.value >= metric.threshold) {
      return 'success';
    } else if (metric.value >= metric.threshold * 0.8) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  return (
    <Card title="Bias Metrics Overview">
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-medium text-gray-700">{metric.name}</span>
                <Tooltip content={metric.description}>
                  <span className="ml-1 text-gray-400 cursor-help">
                    <AlertCircle size={16} />
                  </span>
                </Tooltip>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${
                  getMetricStatus(metric) === 'success' ? 'text-green-600' :
                  getMetricStatus(metric) === 'warning' ? 'text-amber-600' : 'text-red-600'
                }`}>
                  {metric.value.toFixed(2)}
                </span>
                <span className="text-xs text-gray-500">
                  (threshold: {metric.threshold.toFixed(2)})
                </span>
              </div>
            </div>
            <ProgressBar 
              value={metric.value * 100} 
              variant={getMetricStatus(metric)} 
              size="md"
            />
          </div>
        ))}

        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="font-medium text-gray-700 mb-2">Fairness Status</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-md p-3">
              <div className="text-sm text-gray-500">Fair Metrics</div>
              <div className="text-2xl font-semibold text-blue-700">
                {metrics.filter(m => m.value >= m.threshold).length}
              </div>
            </div>
            <div className="bg-red-50 rounded-md p-3">
              <div className="text-sm text-gray-500">Concerning Metrics</div>
              <div className="text-2xl font-semibold text-red-700">
                {metrics.filter(m => m.value < m.threshold).length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricsOverview;