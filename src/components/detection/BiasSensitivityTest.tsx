import React, { useState } from 'react';
import Card from '../ui/Card';
import Tooltip from '../ui/Tooltip';
import { Info } from 'lucide-react';

const BiasSensitivityTest: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(0.8);
  const [weight, setWeight] = useState<number>(0.5);
  
  // Mock bias sensitivity test results
  const getSensitivityResults = (threshold: number, weight: number) => {
    // These would normally be calculated from actual model results
    // Here we're just simulating different thresholds and weights affecting the results
    
    const baseGenderGap = 0.15;
    const baseRaceGap = 0.20;
    
    // Adjust gaps based on threshold (higher threshold = stricter fairness requirement)
    const thresholdEffect = (0.8 - threshold) * 0.5;
    
    // Adjust gaps based on feature weights (higher weight for protected attributes = less disparate impact)
    const weightEffect = (weight - 0.5) * 0.4;
    
    return {
      genderDisparity: Math.max(0, baseGenderGap + thresholdEffect - weightEffect).toFixed(2),
      raceDisparity: Math.max(0, baseRaceGap + thresholdEffect - weightEffect).toFixed(2),
      ageDisparity: Math.max(0, 0.10 + thresholdEffect - weightEffect).toFixed(2),
      zipDisparity: Math.max(0, 0.25 + thresholdEffect - weightEffect).toFixed(2),
      fairnessScore: Math.min(100, Math.max(0, 65 - (thresholdEffect * 100) + (weightEffect * 100))).toFixed(0),
    };
  };
  
  const results = getSensitivityResults(threshold, weight);
  
  const getFairnessRating = (score: number) => {
    if (score >= 80) return { label: 'Good', color: 'text-green-600' };
    if (score >= 60) return { label: 'Fair', color: 'text-amber-600' };
    return { label: 'Poor', color: 'text-red-600' };
  };
  
  const fairnessRating = getFairnessRating(parseInt(results.fairnessScore));
  
  return (
    <Card title="Bias Sensitivity Analysis">
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Adjust the parameters below to see how different fairness thresholds and feature weights 
          impact the model's bias metrics.
        </p>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Fairness Threshold
                <Tooltip content="Higher values enforce stricter fairness requirements. Range: 0.6 (more relaxed) to 0.9 (more strict).">
                  <span className="ml-1 text-gray-400 cursor-help">
                    <Info size={14} />
                  </span>
                </Tooltip>
              </label>
              <span className="text-sm text-gray-500">{threshold.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.6"
              max="0.9"
              step="0.01"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>More relaxed</span>
              <span>More strict</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Protected Attribute Weight
                <Tooltip content="Higher values reduce the influence of protected attributes in the model's decisions. Range: 0.1 (low weight) to 0.9 (high weight).">
                  <span className="ml-1 text-gray-400 cursor-help">
                    <Info size={14} />
                  </span>
                </Tooltip>
              </label>
              <span className="text-sm text-gray-500">{weight.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.01"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Less influence</span>
              <span>More influence</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-gray-900">Sensitivity Results</h4>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Fairness Rating:</span>
              <span className={`text-sm font-semibold ${fairnessRating.color}`}>{fairnessRating.label}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="text-sm text-gray-500">Gender Disparity</div>
                <div className="text-lg font-semibold text-gray-900">{results.genderDisparity}</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="text-sm text-gray-500">Race Disparity</div>
                <div className="text-lg font-semibold text-gray-900">{results.raceDisparity}</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="text-sm text-gray-500">Age Disparity</div>
                <div className="text-lg font-semibold text-gray-900">{results.ageDisparity}</div>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <div className="text-sm text-gray-500">Zip Code Disparity</div>
                <div className="text-lg font-semibold text-gray-900">{results.zipDisparity}</div>
              </div>
            </div>
            
            <div className="pt-3 flex justify-between items-center">
              <div className="text-sm font-medium text-gray-700">Overall Fairness Score</div>
              <div className="text-xl font-bold text-blue-700">{results.fairnessScore}/100</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700">
          <p>
            <span className="font-semibold">🔍 Insight:</span> Adjusting these parameters shows the tradeoff between 
            fairness constraints and model behavior. Finding the right balance is key to creating an ethical and 
            effective loan approval system.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BiasSensitivityTest;