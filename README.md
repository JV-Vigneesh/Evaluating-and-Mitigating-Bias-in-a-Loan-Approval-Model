# Evaluating and Mitigating Bias in a Loan Approval Model

## Overview
This project addresses ethical considerations in machine learning by analyzing a loan approval model for biases that could lead to unfair or discriminatory outcomes. Using a Kaggle dataset (`loan_data.csv`), we train a logistic regression model to predict loan approvals and evaluate bias with respect to `Gender`, `Married`, and `Property_Area` using fairness metrics (Disparate Impact, Equal Opportunity Difference, Average Odds Difference). We apply three mitigation techniques—reweighting, adversarial debiasing, and post-processing—to improve fairness, achieving a Disparate Impact ratio closer to 1 (e.g., from ~0.83 to ~0.95 for `Gender`). The project ensures ethical soundness through transparency (SHAP feature importance), robustness (cross-validation), and ethical discussion aligned with regulations like the Equal Credit Opportunity Act (ECOA).

## Dataset
- **Source**: Kaggle (`loan_data.csv`)
- **Features**: `Gender`, `Married`, `Dependents`, `Education`, `Self_Employed`, `ApplicantIncome`, `CoapplicantIncome`, `LoanAmount`, `Loan_Amount_Term`, `Credit_History`, `Property_Area`, `Loan_Status` (target)
- **Limitations**: Lacks `Race` or `Ethnicity`, limiting bias analysis scope

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/JV-Vigneesh/Evaluating-and-Mitigating-Bias-in-a-Loan-Approval-Model.git
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Jupyter notebook:
   ```bash
   jupyter notebook Loan_Approval_Bias_Evaluation.ipynb
   ```

## Requirements
See `requirements.txt` for dependencies, including:
- `aif360`
- `scikit-learn`
- `pandas`
- `numpy`
- `matplotlib`
- `seaborn`
- `shap`
- `tensorflow`

## Results
- **Baseline Model**: Accuracy ~0.80, Disparate Impact ~0.83 for `Gender`
- **Post-Mitigation**: Disparate Impact improved to ~0.95, accuracy ~0.78
- **Fairness Metrics**: Evaluated Disparate Impact, Equal Opportunity Difference, and Average Odds Difference for `Gender`, `Married`, and `Property_Area`
- **Mitigation**: Reweighting, adversarial debiasing, and post-processing reduced bias effectively
- **Ethical Soundness**: Addressed via transparency (SHAP), ethical discussion, and regulatory alignment

## Limitations
- Dataset lacks `Race` or `Ethnicity`
- Small dataset size (~600 rows)
- Limited to logistic regression; ensemble models could enhance performance

## Future Work
- Use richer datasets (e.g., HMDA) with `Race` and `Ethnicity`
- Experiment with additional models (e.g., Random Forest, XGBoost)
- Incorporate stakeholder-defined fairness thresholds

## References
- AIF360: https://aif360.mybluemix.net/
- Equal Credit Opportunity Act: https://www.justice.gov/crt/equal-credit-opportunity-act-0
- SHAP: https://shap.readthedocs.io/
