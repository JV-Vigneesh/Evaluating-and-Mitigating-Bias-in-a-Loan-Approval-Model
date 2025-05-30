# 🔍 Evaluating and Mitigating Bias in a Loan Approval Model

This project analyzes and mitigates potential biases in a machine learning model used for predicting loan approvals. It focuses on evaluating the ethical implications of automated decision-making systems and improving fairness across sensitive attributes — particularly **gender**.

---

## 🧠 Project Overview

Loan approval decisions made using machine learning models can unintentionally encode social biases, leading to unfair outcomes. This project addresses these challenges by:

- Building and evaluating a baseline model.
- Detecting bias using fairness metrics (e.g., demographic parity, equalized odds).
- Applying **SMOTE** to address class imbalance.
- Reassessing fairness after mitigation.

---

## 📁 Dataset

- **Source**: [Kaggle - Loan Prediction Dataset](https://www.kaggle.com/code/kanuriviveknag/loan-approval-prediction/input)
- **Features** include:
  - Demographics: `Gender`, `Married`, `Dependents`, `Education`
  - Financials: `ApplicantIncome`, `CoapplicantIncome`, `LoanAmount`
  - Credit info: `Credit_History`, `Loan_Amount_Term`, `Property_Area`
- **Target**: `Loan_Status` (Approved = 1, Not Approved = 0)

---

## ⚙️ Technologies Used

- **Python 3**
- **scikit-learn**
- **imbalanced-learn** (for SMOTE)
- **fairlearn** (for fairness metrics)
- **pandas**, **seaborn**, **matplotlib** for data handling and visualization

---

## 🚀 Project Workflow

### 1. 📊 Data Preprocessing
- Handle missing values and encode categorical features.
- Normalize numerical features.

### 2. 📈 Baseline Model (Logistic Regression)
- Evaluate accuracy and confusion matrix.
- Assess fairness by gender using:
  - **Demographic Parity Difference**
  - **Equalized Odds Difference**
  - **True Positive Rate**
  - **Selection Rate**

### 3. 💉 Mitigation via SMOTE
- Handle class imbalance using **Synthetic Minority Oversampling Technique**.
- Retrain and evaluate the model post-mitigation.

---

## 📊 Results Summary

| Metric                   | Before SMOTE | After SMOTE |
|--------------------------|--------------|-------------|
| **Accuracy**             | 0.79         | 0.78        |
| **Demographic Parity Diff.** | High    | Reduced     |
| **Equalized Odds Diff.**     | High    | Reduced     |

- **Key Finding**: While accuracy slightly decreased after applying SMOTE, **fairness improved** with reduced demographic and equalized odds disparities.

---

## 🔎 Visualizations

- Confusion matrices before and after SMOTE.
- Feature importance from logistic regression.
- Group-based fairness comparisons (e.g., TPR, accuracy, selection rate) before and after mitigation.

---

## ✅ Key Takeaways

- Machine learning models can show unfair outcomes even with high accuracy.
- Fairness evaluation should be **explicit**, not assumed.
- SMOTE helped address class imbalance and indirectly improved fairness.
- Using tools like **Fairlearn** is essential for building ethical ML models.

---

## 🚧 Limitations & Future Work

- Explore **fairness-specific models** like `ExponentiatedGradient` or `GridSearch` from Fairlearn.
- Evaluate additional sensitive attributes (e.g., marital status, education).
- Combine multiple bias mitigation strategies (e.g., reweighting, adversarial debiasing).
- Develop a **Streamlit dashboard** for real-time fairness visualization.

---

## 🧑‍💻 Author

**JV Vigneesh**  
M.Tech - Applied Machine Learning  

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
