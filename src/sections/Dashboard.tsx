import React from 'react';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import FeatureImportanceChart from '../components/dashboard/FeatureImportanceChart';
import DisparityBarChart from '../components/dashboard/DisparityBarChart';
import ModelPerformanceComparison from '../components/dashboard/ModelPerformanceComparison';
import { biasMetrics, featureImportance, disparityMetrics, modelComparison, mockApplicants } from '../data/mockData';
import Card from '../components/ui/Card';

const Dashboard: React.FC = () => {
  // Calculate actual statistics from mock data
  const totalApplications = mockApplicants.length;
  const approvedApplications = mockApplicants.filter(app => app.approved).length;
  const approvalRate = (approvedApplications / totalApplications) * 100;
  const avgLoanAmount = mockApplicants.reduce((sum, app) => sum + app.loanAmount, 0) / totalApplications;
  const avgRiskScore = mockApplicants.reduce((sum, app) => sum + app.riskScore, 0) / totalApplications;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Model Bias Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Overview of key metrics, disparities, and performance indicators for your loan approval model.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricsOverview metrics={biasMetrics} />
        <FeatureImportanceChart features={featureImportance} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DisparityBarChart data={disparityMetrics[0]} />
        <DisparityBarChart data={disparityMetrics[1]} />
      </div>
      
      <ModelPerformanceComparison data={modelComparison} />
      
      <Card title="Dataset Overview">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600">Total Applications</div>
              <div className="text-2xl font-bold text-blue-900">{totalApplications}</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600">Approval Rate</div>
              <div className="text-2xl font-bold text-green-900">
                {approvalRate.toFixed(1)}%
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600">Avg Loan Amount</div>
              <div className="text-2xl font-bold text-purple-900">
                ${Math.round(avgLoanAmount).toLocaleString()}
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-sm text-amber-600">Avg Risk Score</div>
              <div className="text-2xl font-bold text-amber-900">
                {Math.round(avgRiskScore)}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;