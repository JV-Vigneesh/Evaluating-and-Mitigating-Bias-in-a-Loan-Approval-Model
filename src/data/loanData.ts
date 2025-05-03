import { LoanApplicant } from '../types';
import Papa from 'papaparse';

// Update this path to match your CSV file name
const LOAN_DATA_PATH = '/your-dataset.csv';

export const loadLoanData = async (): Promise<LoanApplicant[]> => {
  try {
    const response = await fetch(LOAN_DATA_PATH);
    const csvData = await response.text();
    
    const { data } = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true
    });
    
    // Map your CSV columns to the application's data structure
    const loanApplicationData: LoanApplicant[] = data.map((row: any, index: number) => ({
      id: `LOAN-${index.toString().padStart(5, '0')}`,
      age: parseInt(row.age),
      gender: row.gender.toLowerCase(),
      race: row.race.toLowerCase(),
      income: parseFloat(row.income),
      creditScore: parseInt(row.credit_score),
      debtToIncome: parseFloat(row.debt_to_income || '0'),
      loanAmount: parseFloat(row.loan_amount),
      loanTerm: parseInt(row.loan_term || '30'),
      approved: row.approved === 'true' || row.approved === '1' || row.approved === 'yes',
      riskScore: calculateRiskScore(row)
    }));

    return loanApplicationData;
  } catch (error) {
    console.error('Error loading loan data:', error);
    return [];
  }
};

const calculateRiskScore = (data: any): number => {
  // Customize this calculation based on your dataset
  let score = 50;
  
  // Lower score is better
  if (data.credit_score) {
    score -= (parseInt(data.credit_score) / 850) * 30;
  }
  
  if (data.debt_to_income) {
    score += parseFloat(data.debt_to_income) * 20;
  }
  
  if (data.loan_amount && data.income) {
    score += (parseFloat(data.loan_amount) / parseFloat(data.income)) * 20;
  }
  
  return Math.min(100, Math.max(0, score));
};