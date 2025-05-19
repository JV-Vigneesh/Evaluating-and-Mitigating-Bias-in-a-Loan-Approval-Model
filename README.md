# Evaluating and Mitigating Bias in a Loan Approval Model

## Project Overview

This project applies machine learning techniques to predict loan approval decisions, with a primary focus on **evaluating and mitigating bias**. The goal is to ensure fairness in loan approvals, particularly across different demographic groups such as gender.

The project uses a **Logistic Regression** model for predictions and evaluates both model performance and fairness. It incorporates **SMOTE (Synthetic Minority Over-sampling Technique)** to address class imbalance and uses fairness metrics like **True Positive Rate (TPR)** to assess equity across groups.

---

## Dataset

The dataset is from [Kaggle: Loan Approval Prediction](https://www.kaggle.com/code/kanuriviveknag/loan-approval-prediction/input). It includes financial and demographic data about loan applicants.

### Features:

- `loan_id`: Unique identifier for the loan.
- `no_of_dependents`: Number of dependents for the applicant.
- `education`: Applicant's education level.
- `self_employed`: Employment status (Yes/No).
- `income_annum`: Annual income.
- `loan_amount`: Requested loan amount.
- `loan_term`: Duration of the loan in years.
- `cibil_score`: Credit score.
- `residential_assets_value`: Value of residential assets.
- `commercial_assets_value`: Value of commercial assets.
- `luxury_assets_value`: Value of luxury assets.
- `bank_asset_value`: Value of bank assets.
- `loan_status`: Loan decision (Approved/Rejected).

---

## Methodology

### 1. Data Preprocessing
- Encoding categorical variables using Label Encoding.
- Handling missing values using column-wise mean.
- Standardizing numerical features using `StandardScaler`.

### 2. Model Building
- Trained a **Logistic Regression** model on the processed data.
- Evaluated using **Accuracy** and **Confusion Matrix**.

### 3. Fairness Evaluation
- Added a simulated **gender** column to evaluate group-based fairness.
- Measured **True Positive Rate (TPR)** and **Selection Rate** for fairness.

### 4. Bias Mitigation
- Applied **SMOTE** to balance class distribution.
- Re-evaluated the model post-mitigation for fairness improvements.

---

## Key Results

| Metric                        | Before SMOTE | After SMOTE |
|------------------------------|--------------|-------------|
| **Accuracy**                 | 91%          | 91%         |
| **True Positive Rate (F)**   | 85.9%        | 91.7%       |
| **True Positive Rate (M)**   | 86.9%        | 90.7%       |
| **Selection Rate (F)**       | 35.8%        | 40.0%       |
| **Selection Rate (M)**       | 37.5%        | 39.5%       |

The application of SMOTE helped in improving both fairness and balance in selection/approval across demographic groups.

---

## How to Run

### Requirements

- Python 3.x
- Jupyter Notebook or Google Colab
- Libraries:
  - `pandas`, `numpy`, `scikit-learn`, `imbalanced-learn`
  - `matplotlib`, `seaborn`, `fairlearn`

Install requirements:
```bash
pip install pandas numpy scikit-learn imbalanced-learn fairlearn matplotlib seaborn
