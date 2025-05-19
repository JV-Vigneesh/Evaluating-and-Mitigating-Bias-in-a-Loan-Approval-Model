# Evaluating and Mitigating Bias in a Loan Approval Model

## Project Overview

This project explores the use of machine learning models for loan approval decisions, with a specific focus on **evaluating and mitigating bias**. We aim to ensure that the loan approval process is fair and does not discriminate against any group based on sensitive attributes such as gender.

The project applies **Logistic Regression** for loan approval predictions, evaluates the model's performance, and then applies **SMOTE (Synthetic Minority Over-sampling Technique)** to mitigate any bias in the dataset. Fairness metrics such as **True Positive Rate (TPR)** are calculated for different groups to ensure the model does not exhibit unfair bias against any specific demographic.

## Dataset

The dataset used for this project is a **loan approval dataset** with the following columns:

- `loan_id`: Unique identifier for the loan.
- `no_of_dependents`: Number of dependents for the applicant.
- `education`: Applicant's education status (Graduate/Not Graduate).
- `self_employed`: Whether the applicant is self-employed (Yes/No).
- `income_annum`: Annual income of the applicant.
- `loan_amount`: Amount of loan applied for.
- `loan_term`: Duration of the loan.
- `cibil_score`: Applicant's CIBIL score.
- `residential_assets_value`: Value of the residential assets owned by the applicant.
- `commercial_assets_value`: Value of the commercial assets owned by the applicant.
- `luxury_assets_value`: Value of the luxury assets owned by the applicant.
- `bank_asset_value`: Value of the bank assets owned by the applicant.
- `loan_status`: Whether the loan was approved or rejected (Approved/Rejected).

## Steps Involved

### 1. Data Preprocessing
- **Encoding** categorical variables using Label Encoding.
- **Filling missing values** with the mean for numerical columns.
- **Standardizing** numerical features for model training.

### 2. Model Building
- Trained a **Logistic Regression** model to predict loan approval (`loan_status`).
- Evaluated the model's performance using accuracy and confusion matrix.

### 3. Fairness Evaluation
- Calculated **True Positive Rate (TPR)** for different groups (e.g., gender) to assess fairness.
  
### 4. Bias Mitigation Using SMOTE
- Applied **SMOTE** to balance the dataset and mitigate class imbalance issues.
- Retrained the model on the resampled dataset and evaluated fairness again.

## Evaluation Metrics

- **Accuracy**: The proportion of correct predictions made by the model.
- **Confusion Matrix**: A table used to describe the performance of the classification model.
- **True Positive Rate (TPR)**: The proportion of actual positive instances correctly identified by the model.

## Fairness Metrics

The fairness of the model was evaluated using the following metrics for different groups:

- **Selection Rate**: The rate at which a particular group is selected for loan approval.
- **True Positive Rate (TPR)**: The rate at which the model correctly identifies loan approval for a particular group.

### Results Before and After SMOTE

| Metric                          | Female | Male  |
|----------------------------------|--------|-------|
| **Accuracy**                     | 90.6%  | 90.4% |
| **True Positive Rate (Before SMOTE)** | 85.9%  | 86.9% |
| **True Positive Rate (After SMOTE)**  | 91.7%  | 90.7% |

### Model Performance

| Metric                         | Before SMOTE | After SMOTE |
|---------------------------------|--------------|-------------|
| **Accuracy**                    | 91%          | 91%         |
| **Confusion Matrix**            | See Outputs  | See Outputs |

## How to Run the Code

### Prerequisites

- Python 3.x
- Jupyter Notebook or Google Colab
- The following Python libraries:
  - pandas
  - numpy
  - scikit-learn
  - imbalanced-learn (for SMOTE)
  - matplotlib, seaborn (for visualization)
  - fairlearn (for fairness metrics)

You can install the required libraries using `pip`:

```bash
pip install pandas numpy scikit-learn imbalanced-learn fairlearn matplotlib seaborn
