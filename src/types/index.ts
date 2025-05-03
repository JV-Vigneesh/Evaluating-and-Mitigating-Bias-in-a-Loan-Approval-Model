// Define shared types for the application

export interface LoanApplicant {
  id: string;
  age: number;
  gender: 'male' | 'female' | 'non-binary' | 'other';
  race: 'white' | 'black' | 'hispanic' | 'asian' | 'other';
  income: number;
  creditScore: number;
  debtToIncome: number;
  loanAmount: number;
  loanTerm: number;
  approved: boolean;
  riskScore: number;
}

export interface BiasMetric {
  name: string;
  value: number;
  threshold: number;
  description: string;
}

export interface ModelPerformance {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  auc: number;
}

export interface ModelComparison {
  original: ModelPerformance;
  debiased: ModelPerformance;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  potentialBias: 'high' | 'medium' | 'low' | 'none';
}

export interface MitigationStrategy {
  id: string;
  name: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  implementationComplexity: 'high' | 'medium' | 'low';
  selectedForSimulation: boolean;
}

export interface SimulationResult {
  strategyId: string;
  originalDisparity: number;
  mitigatedDisparity: number;
  performanceImpact: number;
}

export type ProtectedAttribute = 'gender' | 'race' | 'age';

export interface DisparityMetric {
  attribute: ProtectedAttribute;
  disparity: number;
  categories: {
    category: string;
    approvalRate: number;
    count: number;
  }[];
}

export interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}