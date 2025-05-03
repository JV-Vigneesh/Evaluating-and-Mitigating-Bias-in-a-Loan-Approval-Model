import React from 'react';
import Card from '../components/ui/Card';
import ModelPerformanceComparison from '../components/dashboard/ModelPerformanceComparison';
import { modelComparison, disparityMetrics } from '../data/mockData';

const ModelComparison: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Model Comparison</h1>
        <p className="mt-1 text-gray-600">
          Compare the performance and fairness metrics between the original and debiased models.
        </p>
      </div>
      
      <ModelPerformanceComparison data={modelComparison} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Original Model Disparities">
          <div className="space-y-6">
            <div className="space-y-4">
              {disparityMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-gray-900 capitalize">{metric.attribute}</h3>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Disparity:</span>
                    <span className="font-medium text-gray-900">{metric.disparity.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        metric.disparity > 0.2 ? 'bg-red-500' : 
                        metric.disparity > 0.1 ? 'bg-amber-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(100, metric.disparity * 200)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Max approval rate: {Math.max(...metric.categories.map(c => c.approvalRate)).toFixed(2)}
                    {' · '}
                    Min approval rate: {Math.min(...metric.categories.map(c => c.approvalRate)).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-red-50 rounded-md border border-red-100">
              <p className="text-sm text-red-700">
                <strong>Key Issue:</strong> Significant disparity (0.24) in approval rates across racial groups.
              </p>
            </div>
          </div>
        </Card>
        
        <Card title="Debiased Model Disparities">
          <div className="space-y-6">
            <div className="space-y-4">
              {disparityMetrics.map((metric, index) => {
                // Simulating reduced disparities in the debiased model (30-50% improvement)
                const reducedDisparity = metric.disparity * (Math.random() * 0.2 + 0.5);
                
                return (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-gray-900 capitalize">{metric.attribute}</h3>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Disparity:</span>
                      <span className="font-medium text-gray-900">{reducedDisparity.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          reducedDisparity > 0.2 ? 'bg-red-500' : 
                          reducedDisparity > 0.1 ? 'bg-amber-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(100, reducedDisparity * 200)}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-600 font-medium">
                        ↓ {(100 - (reducedDisparity / metric.disparity) * 100).toFixed(0)}% reduction
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-3 bg-green-50 rounded-md border border-green-100">
              <p className="text-sm text-green-700">
                <strong>Improvement:</strong> Disparities reduced across all attributes while maintaining comparable model performance.
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      <Card title="Decision Distribution Comparison">
        <div className="space-y-6">
          <p className="text-sm text-gray-600 mb-4">
            This comparison shows how loan approval decisions are distributed across different demographic groups
            in both the original and debiased models.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Original Model</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Gender Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[45%] bg-blue-500" title="Male: 45%"></div>
                    <div className="w-[38%] bg-purple-500" title="Female: 38%"></div>
                    <div className="w-[17%] bg-gray-500" title="Other: 17%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[45%]">Male: 45%</div>
                    <div className="w-[38%]">Female: 38%</div>
                    <div className="w-[17%]">Other: 17%</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Race Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[58%] bg-blue-500" title="White: 58%"></div>
                    <div className="w-[16%] bg-green-500" title="Asian: 16%"></div>
                    <div className="w-[14%] bg-yellow-500" title="Hispanic: 14%"></div>
                    <div className="w-[12%] bg-red-500" title="Black: 12%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[58%]">White: 58%</div>
                    <div className="w-[16%]">Asian: 16%</div>
                    <div className="w-[14%]">Hisp: 14%</div>
                    <div className="w-[12%]">Black: 12%</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Age Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[22%] bg-blue-500" title="18-30: 22%"></div>
                    <div className="w-[34%] bg-green-500" title="31-45: 34%"></div>
                    <div className="w-[28%] bg-yellow-500" title="46-60: 28%"></div>
                    <div className="w-[16%] bg-red-500" title="60+: 16%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[22%]">18-30: 22%</div>
                    <div className="w-[34%]">31-45: 34%</div>
                    <div className="w-[28%]">46-60: 28%</div>
                    <div className="w-[16%]">60+: 16%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Debiased Model</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Gender Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[42%] bg-blue-500" title="Male: 42%"></div>
                    <div className="w-[41%] bg-purple-500" title="Female: 41%"></div>
                    <div className="w-[17%] bg-gray-500" title="Other: 17%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[42%]">Male: 42%</div>
                    <div className="w-[41%]">Female: 41%</div>
                    <div className="w-[17%]">Other: 17%</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Race Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[50%] bg-blue-500" title="White: 50%"></div>
                    <div className="w-[16%] bg-green-500" title="Asian: 16%"></div>
                    <div className="w-[17%] bg-yellow-500" title="Hispanic: 17%"></div>
                    <div className="w-[17%] bg-red-500" title="Black: 17%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[50%]">White: 50%</div>
                    <div className="w-[16%]">Asian: 16%</div>
                    <div className="w-[17%]">Hisp: 17%</div>
                    <div className="w-[17%]">Black: 17%</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Age Distribution</h4>
                  <div className="flex h-8 rounded-md overflow-hidden">
                    <div className="w-[25%] bg-blue-500" title="18-30: 25%"></div>
                    <div className="w-[32%] bg-green-500" title="31-45: 32%"></div>
                    <div className="w-[25%] bg-yellow-500" title="46-60: 25%"></div>
                    <div className="w-[18%] bg-red-500" title="60+: 18%"></div>
                  </div>
                  <div className="flex text-xs mt-1">
                    <div className="w-[25%]">18-30: 25%</div>
                    <div className="w-[32%]">31-45: 32%</div>
                    <div className="w-[25%]">46-60: 25%</div>
                    <div className="w-[18%]">60+: 18%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Key Observations</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex">
                <span className="text-blue-500 mr-2">•</span>
                The debiased model shows more balanced approval rates across gender and race groups
              </li>
              <li className="flex">
                <span className="text-blue-500 mr-2">•</span>
                Approval rates for female applicants increased by approximately 3%
              </li>
              <li className="flex">
                <span className="text-blue-500 mr-2">•</span>
                Approval disparities between racial groups decreased from 24% to 11%
              </li>
              <li className="flex">
                <span className="text-blue-500 mr-2">•</span>
                Age distribution became more balanced, with a slight increase in younger and older applicant approvals
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModelComparison;