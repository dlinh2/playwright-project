# 🧪 Playwright E2E Testing Project

## 📌 Overview

This project demonstrates end-to-end (E2E) testing using Playwright with the Page Object Model (POM) design pattern.

The test suite validates core user flows on the demo e-commerce website:
👉 https://demoblaze.com

---
## 🧱 Tech Stack
* Playwright
* Cucumber (BDD)
* TypeScript
* Node.js
---

## 🏗️ Project Structure

```
.
├── e2e/
│   ├── data/                # Test data (static input)
│   │   ├── footer.data.ts
│   │   ├── login.data.ts
│   │   └── products.data.ts
│   │
│   ├── fixtures/            # Custom Playwright fixtures
│   │   └── pages.fixture.ts
│   │
│   ├── page/                # Page Object Models (POM)
│   │   ├── home.page.ts
│   │   ├── login.page.ts
│   │   ├── cart.page.ts
│   │   └── product.detail.ts
│   │
│   ├── tests/
│   │   ├── features/        # Gherkin feature files
│   │   │   ├── home.feature
│   │   │   ├── login.feature
│   │   │   └── cart.feature
│   │   │
│   │   └── steps/           # Step definitions
│   │       ├── home.steps.ts
│   │       ├── login.steps.ts
│   │       └── cart.steps.ts
│
├── tests/                   # Playwright test (non-BDD)
│   ├── home.spec.ts
│   ├── login.spec.ts
│   └── cart.spec.ts
│
├── .features-gen/           # Auto-generated specs from features
├── playwright.config.ts     # Playwright configuration
├── bdd.config.ts            # BDD configuration
├── test-results/            # Raw test results
├── playwright-report/       # HTML reports
└── README.md
```

---

## 🎯 Test Architecture

This project combines:

### 1. Page Object Model (POM)

* Encapsulates UI logic
* Improves maintainability

### 2. BDD (Behavior Driven Development)

* Feature files written in Gherkin
* Easy to understand for non-technical stakeholders

### 3. Data-driven testing

* Test data stored in `/data`
* Reusable across test cases

---

## ▶️ Installation

```bash
git clone https://github.com/lin8822/playwright-project.git
cd playwright-project
npm install
npx playwright install
```

---

## ▶️ Running Tests

### ✅ Run Playwright tests

```bash
npx playwright test
```

---

### ✅ Run specific test

```bash
npx playwright test tests/login.spec.ts
```

---

### ✅ Run by tag (BDD)

```bash
npx playwright test --grep "@regression"
```

---

## 🧩 BDD Concepts Used

### 🏷️ Tags

Used to group and filter tests:

```gherkin
@regression
Scenario: Successful login
```

Run:

```bash
npx playwright test --grep "@regression"
```

---

### 🔁 Hooks (Setup & Teardown)

```ts
Before(async function () {
  // setup browser
});

After(async function () {
  // cleanup
});
```

---

### 📊 Data Tables

```gherkin
Given I login with users:
  | username | password |
  | user1    | pass1    |
```

---

## 🔐 Authentication Strategy

Supports auth reuse using Playwright `storageState`:

* Login once
* Save session
* Reuse across tests

Benefits:

* Faster execution
* Less flaky tests

---

## 📊 Reports

After running tests:

```bash
npx playwright show-report
```

Report location:

```bash
playwright-report/index.html
```

---



## 🐞 Debugging

### UI Mode

```bash
npx playwright test --ui
```

---

### Headed Mode

```bash
npx playwright test --headed
```

---

### Trace Viewer

```bash
npx playwright show-trace trace.zip
```

---

## 🧪 Test Scenarios

### 1. 🏠 Homepage Tests (`home.spec.ts`)

**Objective:** Verify that the homepage loads correctly and displays required elements.

**Test cases:**

* ✅ Verify homepage is accessible
* ✅ Verify product categories are displayed (Phones, Laptops, Monitors)
* ✅ Verify product list (name & price)
* ✅ Verify footer content:

  * About Us
  * Contact information
  * Address, phone, email

---

### 2. 🛒 Cart Flow Tests (`cart.spec.ts`)

**Objective:** Validate the complete user journey from selecting a product to viewing it in the cart.

**Test flow:**

1. **Select product**

   * Click on a product from homepage
   * Verify navigation to product detail page (`/prod.html`)

2. **Verify product details**

   * Product name
   * Price
   * Description

3. **Add to cart**

   * Click "Add to cart"
   * Handle confirmation alert

4. **Navigate to cart**

   * Click "Cart"
   * Verify URL (`/cart.html`)

5. **Verify product in cart**

   * Product name
   * Product price

---
## 3. 🔐 Login Tests (login.spec.ts)

**Objective:**  Validate user authentication functionality.

**🧪 Test Scenarios**
1. **Login successfully ✅**
   * Enter valid username & password
   * Click Log in
   * Verify:
     * User is logged in successfully
     * Username is displayed on the navbar

2. **Login with empty fields ❌**
   * Click Log in without entering data
   * Verify:
     *Error alert is shown
     
3. **Login with invalid credentials ❌**
   * Enter incorrect username or password
   * Click Log in
   * Verify:
     * Error message is displayed

---

## 🎯 Key Features

* ✅ Page Object Model (POM)
* ✅ Data-driven testing
* ✅ Random product selection
* ✅ End-to-end user flow validation
* ✅ Reusable and maintainable structure
---

## 🧩 BDD Approach

This project uses Behavior-Driven Development (BDD) with Gherkin syntax to describe user behaviors in a readable format.
---
## 🧪 Sample BDD Test Scenarios

Below are example feature files written using Gherkin syntax.

---

### 🔐 Login Feature

```gherkin
Feature: Login

  Scenario Outline: Login with "<type>" credentials
    Given the user is on the homepage
    When the user opens login modal
    And the user logs in with username "<username>" and password "<password>"
    Then the login result should be "<message>"

  Examples:
    | type                          | username  | password | message                                  |
    | valid                         | tun       | admin    | Welcome tun                              |
    | empty username                |           | admin    | Please fill out Username and Password    |
    | empty password                | tun       |          | Please fill out Username and Password    |
    | empty username and password   |           |          | Please fill out Username and Password    |
    | invalid username              | sdhf1@434 | admin    | User does not exist.                     |
    | invalid password              | tun       | wrong    | Wrong password.                          |
```

---

### 🏠 Home / Dashboard Feature

```gherkin
Feature: Home

  Scenario: View Home
    Given the user is on the homepage
    Then the user should see homepage content

  Scenario: View header logo and store name
    Given the user is on the homepage
    Then the user should see header logo and store name
```

---

### 🛒 Cart Feature

```gherkin
Feature: Add product to cart

  Background:
    Given the user is on the homepage

  Scenario: Add a random product to cart
    When the user selects a random product
    And the user adds the product to cart
    And the user navigates to cart
    Then the cart should contain the selected product
```

---

## 💡 Notes

* The Login feature uses **Scenario Outline** to test multiple credential combinations.
* The Cart feature uses **Background** to avoid repeating setup steps.
* These scenarios represent real user flows and help ensure application stability.


## 🚀 Future Enhancements

To further improve the scalability, reliability, and maintainability of this automation framework, the following enhancements are planned:

---

### 🔐 Expand Authentication Test Coverage

* Add more comprehensive login scenarios:

  * Different user roles (e.g., admin, standard user)
  * Session handling (remember me, session timeout)
  * Logout and re-login flows
* Improve validation of authentication flows across the application

---

### ❌ Strengthen Negative Test Coverage

* Extend test coverage for edge and error cases:

  * Invalid credentials (wrong username/password)
  * Empty or missing input fields
  * Boundary values and invalid formats
* Ensure proper error handling and user feedback is validated

---

### 🔗 Integrate API Validation

* Combine UI and API testing for better validation:

  * Verify API responses during UI actions (e.g., login, add to cart)
  * Use Playwright APIRequest for backend validation
* Enable faster and more reliable tests by validating business logic at API level

---

### ⚙️ Enhance CI/CD Pipeline (GitHub Actions)

* Improve automation pipeline using GitHub Actions:

  * Run tests automatically on pull requests and code pushes
  * Separate pipelines for:

    * `@smoke` (quick checks)
    * `@regression` (full test suite)
* Add test reporting and failure notifications
* Optimize execution time with parallel test runs

---

### 🏷️ Tag-based Test Strategy

* Standardize tag usage across test suites:

  * `@smoke` → critical flows
  * `@regression` → full coverage
  * `@auth` → authenticated scenarios
  * `@wip` → work in progress
* Enable flexible and selective test execution

---

### 🧩 Implement Hooks for Test Lifecycle Management

* Utilize Cucumber Hooks (`@Before`, `@After`) to:

  * Centralize setup and teardown logic
  * Manage browser and test context efficiently
  * Capture screenshots or logs on failures
* Improve maintainability and reduce code duplication

---

### ⚡ Optimize Authentication with storageState

* Implement auth reuse using Playwright `storageState`:

  * Perform login once and reuse session across tests
* Reduce test execution time and increase stability
* Minimize dependency on UI login flows

---

### 🧪 Future Extensions

* Visual testing (UI comparison)
* Multi-environment support (dev, staging, production)
* Test data management improvements
* Advanced reporting (Allure, dashboards)

---

These enhancements aim to align the framework with real-world automation standards and support long-term scalability.


---

## Test result
* Test result 02/04/2026
<img width="1074" height="958" alt="image" src="https://github.com/user-attachments/assets/b8410ade-0a08-43f0-8b41-776376d9ded9" />
* Test result 03/04/2026
<img width="1010" height="947" alt="image" src="https://github.com/user-attachments/assets/a3abfb22-3281-4b21-bba4-9d4cb13bebd6" />
* Test result 06/04/2026
  https://dlinh2.github.io/playwright-project/

---

## 📊 Generate Allure Report
# Generate Allure report
  npx allure generate ./allure-results --clean
# Open Allure report
  npx allure open



