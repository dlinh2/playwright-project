# 🧪 Playwright E2E Testing Project

## 📌 Overview

This project demonstrates end-to-end (E2E) testing using Playwright with the Page Object Model (POM) design pattern.

The test suite validates core user flows on the demo e-commerce website:
👉 https://demoblaze.com

---

## 🏗️ Project Structure

```
tests/
 ├── home.spec.ts        # Homepage test cases
 ├── cart.spec.ts        # Add to cart flow
 ├── cart.spec.ts        # login test case

e2e/page/
 ├── home.page.ts        # Homepage actions & locators
 ├── product.page.ts     # Product detail actions
 ├── cart.page.ts        # Cart actions
 ├── product.detail.ts   # Product detail actions

data/
 ├── productsData.ts     # Product test data
 ├── footerData.ts       # Footer content data
 ├── login.data.ts       # login data
```

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
✅ 1. Login successfully
Enter valid username & password
Click Log in
Verify:
User is logged in successfully
Username is displayed on the navbar
❌ 2. Login with empty fields
Click Log in without entering data
Verify:
Error alert is shown
❌ 3. Login with invalid credentials
Enter incorrect username or password
Click Log in
Verify:
Error message is displayed

---

## 🎯 Key Features

* ✅ Page Object Model (POM)
* ✅ Data-driven testing
* ✅ Random product selection
* ✅ End-to-end user flow validation
* ✅ Reusable and maintainable structure

---

## 🚀 How to Run Tests

```bash
npm install
npx playwright test
```

---

## 🧠 Future Enhancements

* Add login test scenarios
* Add negative test cases
* Integrate API validation
* Improve CI/CD pipeline (GitHub Actions)

---

## Test result
* Test result 02/04/2026
<img width="1074" height="958" alt="image" src="https://github.com/user-attachments/assets/b8410ade-0a08-43f0-8b41-776376d9ded9" />

