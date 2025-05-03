import React, { useState } from 'react';
import MitigationStrategies from '../components/mitigation/MitigationStrategies';
import SimulationResults from '../components/mitigation/SimulationResults';
import { mitigationStrategies } from '../data/mockData';
import { SimulationResult } from '../types';

const BiasMitigation: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  
  // Mock simulation results
  const simulationResults: SimulationResult[] = [
    {
      strategyId: 'strategy-1',
      originalDisparity: 0.24,
      mitigatedDisparity: 0.16,
      performanceImpact: -0.01
    },
    {
      strategyId: 'strategy-3',
      originalDisparity: 0.24,
      mitigatedDisparity: 0.12,
      performanceImpact: -0.02
    }
  ];
  
  const handleSimulate = () => {
    setShowResults(true);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bias Mitigation</h1>
        <p className="mt-1 text-gray-600">
          Applied techniques to mitigate bias in the loan approval model.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MitigationStrategies 
          strategies={mitigationStrategies} 
          onSimulate={handleSimulate}
        />
        {showResults && (
          <SimulationResults 
            results={simulationResults} 
            strategies={mitigationStrategies}
          />
        )}
      </div>
    </div>
  );
};

export default BiasMitigation