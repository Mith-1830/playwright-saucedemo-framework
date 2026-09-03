# 🎭 Playwright Automation Framework

## 📌 Overview

This project is an end-to-end test automation framework built using **Playwright with TypeScript**.

The framework is designed using real-world automation practices including **Page Object Model (POM), reusable fixtures, test data management, constants, enums, utility classes, Smoke and Regression testing, cross-browser execution, test reporting, Git/GitHub workflow, and CI/CD integration**.

The project is continuously used for practical learning and implementation of modern **UI and API automation testing** practices.

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- JavaScript
- Node.js
- Git
- GitHub
- GitHub Actions
- Jenkins
- Allure Report
- Playwright HTML Report

---

## 🏗️ Framework Architecture

The framework follows the **Page Object Model (POM)** design pattern.

Page-specific locators and actions are maintained separately from test cases to improve:

- Reusability
- Maintainability
- Readability
- Scalability

The framework also uses:

- Fixtures
- Constants
- Enums
- Utility / Helper classes
- External test data
- Environment variables
- Smoke and Regression tags

---

## 📂 Project Structure

```text
Playwright_Learning/
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── ...
│
├── tests/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── fixtures/
│
├── utils/
│
├── constants/
│
├── test-data/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
