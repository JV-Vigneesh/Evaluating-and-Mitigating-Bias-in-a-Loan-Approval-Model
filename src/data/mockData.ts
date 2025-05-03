import { LoanApplicant, BiasMetric, FeatureImportance, MitigationStrategy, DisparityMetric, ModelComparison } from '../types';

// Generate mock applicants
export const generateMockApplicants = (count: number): LoanApplicant[] => {
  const applicants: LoanApplicant[] = [];
  
  const genders = ['male', 'female', 'non-binary', 'other'] as const;
  const races = ['white', 'black', 'hispanic', 'asian', 'other'] as const;
  
  // Bias factors (for demonstration)
  const approvalBias = {
    race: {
      white: 0.85,
      black: 0.65,
      hispanic: 0.70,
      asian: 0.80,
      other: 0.75
    },
    gender: {
      male: 0.80,
      female: 0.72,
      'non-binary': 0.70,
      other: 0.70
    }
  };

  for (let i = 0; i < count; i++) {
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const race = races[Math.floor(Math.random() * races.length)];
    
    const age = Math.floor(Math.random() * 60) + 18;
    const income = Math.floor(Math.random() * 150000) + 20000;
    const creditScore = Math.floor(Math.random() * 300) + 500;
    const debtToIncome = (Math.random() * 0.5) + 0.1;
    const loanAmount = Math.floor(Math.random() * 500000) + 50000;
    const loanTerm = [15, 30][Math.floor(Math.random() * 2)];
    
    // Calculate risk score (lower is better)
    const riskScore = (
      (800 - creditScore) * 0.4 + 
      (debtToIncome * 100) * 0.3 + 
      (loanAmount / income) * 0.3
    );
    
    // Add some demographic bias for demonstration
    const genderFactor = approvalBias.gender[gender];
    const raceFactor = approvalBias.race[race];
    const biasAdjustedRisk = riskScore * (2 - (genderFactor + raceFactor) / 2);
    
    // Determine approval (lower risk score = higher chance of approval)
    const approved = biasAdjustedRisk < 70;
    
    applicants.push({
      id: `LOAN-${i.toString().padStart(5, '0')}`,
      age,
      gender,
      race,
      income,
      creditScore,
      debtToIncome,
      loanAmount,
      loanTerm,
      approved,
      riskScore: Math.round(riskScore)
    });
  }
  
  return applicants;
};

export const mockApplicants = generateMockApplicants(500);

// Generate bias metrics
export const biasMetrics: BiasMetric[] = [
  {
    name: 'Disparate Impact (Race)',
    value: 0.76,
    threshold: 0.8,
    description: 'Ratio of approval rates between minority and majority groups. Values below 0.8 may indicate disparate impact.'
  },
  {
    name: 'Statistical Parity (Gender)',
    value: 0.82,
    threshold: 0.8,
    description: 'Difference in approval rates across gender groups. Values closer to 1 indicate better parity.'
  },
  {
    name: 'Equal Opportunity',
    value: 0.72,
    threshold: 0.8,
    description: 'Equality of true positive rates across protected groups.'
  },
  {
    name: 'Predictive Parity',
    value: 0.85,
    threshold: 0.8,
    description: 'Equality of positive predictive values across protected groups.'
  },
  {
    name: 'Conditional Demographic Disparity',
    value: 0.65,
    threshold: 0.7,
    description: 'Measures demographic disparity conditioned on legitimate risk factors.'
  }
];

// Feature importance with bias potential
export const featureImportance: FeatureImportance[] = [
  { feature: 'Credit Score', importance: 0.35, potentialBias: 'medium' },
  { feature: 'Income', importance: 0.20, potentialBias: 'medium' },
  { feature: 'Debt-to-Income Ratio', importance: 0.18, potentialBias: 'low' },
  { feature: 'Loan Amount', importance: 0.12, potentialBias: 'low' },
  { feature: 'Age', importance: 0.08, potentialBias: 'high' },
  { feature: 'Zip Code', importance: 0.07, potentialBias: 'high' }
];

// Mitigation strategies
export const mitigationStrategies: MitigationStrategy[] = [
  {
    id: 'strategy-1',
    name: 'Preprocessing: Reweighing',
    description: 'Assigns weights to training examples to ensure fair representation across protected groups.',
    impact: 'medium',
    implementationComplexity: 'medium',
    selectedForSimulation: true
  },
  {
    id: 'strategy-2',
    name: 'Inprocessing: Adversarial Debiasing',
    description: 'Uses adversarial techniques during model training to reduce correlation between predictions and protected attributes.',
    impact: 'high',
    implementationComplexity: 'high',
    selectedForSimulation: false
  },
  {
    id: 'strategy-3',
    name: 'Postprocessing: Threshold Optimization',
    description: 'Adjusts decision thresholds for different groups to equalize error rates.',
    impact: 'medium',
    implementationComplexity: 'low',
    selectedForSimulation: true
  },
  {
    id: 'strategy-4',
    name: 'Feature Selection: Remove Biased Proxies',
    description: 'Identifies and removes features that may serve as proxies for protected attributes.',
    impact: 'medium',
    implementationComplexity: 'medium',
    selectedForSimulation: false
  },
  {
    id: 'strategy-5',
    name: 'Data Augmentation',
    description: 'Generates synthetic data to balance representation across protected groups.',
    impact: 'low',
    implementationComplexity: 'medium',
    selectedForSimulation: false
  }
];

// Disparity metrics
export const disparityMetrics: DisparityMetric[] = [
  {
    attribute: 'gender',
    disparity: 0.12,
    categories: [
      { category: 'male', approvalRate: 0.75, count: 240 },
      { category: 'female', approvalRate: 0.66, count: 220 },
      { category: 'non-binary', approvalRate: 0.63, count: 30 },
      { category: 'other', approvalRate: 0.64, count: 10 }
    ]
  },
  {
    attribute: 'race',
    disparity: 0.24,
    categories: [
      { category: 'white', approvalRate: 0.82, count: 260 },
      { category: 'black', approvalRate: 0.62, count: 80 },
      { category: 'hispanic', approvalRate: 0.68, count: 70 },
      { category: 'asian', approvalRate: 0.76, count: 60 },
      { category: 'other', approvalRate: 0.70, count: 30 }
    ]
  },
  {
    attribute: 'age',
    disparity: 0.18,
    categories: [
      { category: '18-30', approvalRate: 0.62, count: 120 },
      { category: '31-45', approvalRate: 0.72, count: 180 },
      { category: '46-60', approvalRate: 0.78, count: 150 },
      { category: '60+', approvalRate: 0.64, count: 50 }
    ]
  }
];

// Model comparison data
export const modelComparison: ModelComparison = {
  original: {
    accuracy: 0.78,
    precision: 0.75,
    recall: 0.72,
    f1Score: 0.73,
    auc: 0.82
  },
  debiased: {
    accuracy: 0.76,
    precision: 0.73,
    recall: 0.75,
    f1Score: 0.74,
    auc: 0.83
  }
};