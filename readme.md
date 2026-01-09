# SauceDemo Automation Testing with Playwright

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![CI](https://github.com/rizqihilman/Portfolio-rizqihilman-saucedemo/actions/workflows/playwright.yml/badge.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

Automation testing project menggunakan **Playwright + TypeScript** dengan pendekatan **Page Object Model (POM)** dan **CI/CD GitHub Actions**.  
Project ini dibuat sebagai **portfolio QA Automation Engineer**.

## Tech Stack
- **Playwright**
- **TypeScript**
- **Page Object Model (POM)**
- **GitHub Actions (CI/CD)**
- **Allure Report**

## Test Coverage
### Authentication
- Login berhasil (standard_user)
- Validasi login gagal (locked_out_user, invalid credential)

### Inventory
- Sorting produk (A–Z, Z–A, Price Low–High)
- Add product ke cart

### Cart
- Verifikasi item di cart
- Lanjut ke checkout

### Checkout (End-to-End)
- Checkout produk sampai selesai
- Verifikasi checkout success

## Project Structure

```text
sauce-demo-playwright/
├─ .github/
│  └─ workflows/
│     └─ playwright.yml  # CI Pipeline
│─ allure-results
├─ pages/
│  ├─ login.page.ts
│  ├─ inventory.page.ts
│  ├─ cart.page.ts
│  └─ checkout.page.ts
├─ tests/
│  ├─ login/
│  ├─ inventory/
│  └─ checkout/
├─ playwright.config.ts
├─ package.json
└─ README.md

```

## How to Run Locally
1. Install dependencies
- npm install
2. Install Playwright browsers
- npx playwright install
3. Run all tests
- npx playwright test
4. Open HTML Report
- npx playwright show-report

### Test Tagging
Project ini menggunakan tagging untuk grouping test:

| Tag           | Deskripsi           |
| ------------- | ------------------- |
| `@smoke`      | Critical path       |
| `@regression` | Full regression     |
| `@e2e`        | End-to-end scenario |
| `@checkout`   | Checkout module     |

Contoh menjalankan test tertentu:
- npx playwright test --grep @e2e

### CI/CD Pipeline
Automation dijalankan otomatis menggunakan GitHub Actions pada:
- Push ke branch main
- Pull Request ke main

CI menjalankan:
- Install dependencies
- Install browser
- Run Playwright tests
- Generate HTML report (artifact)

### Why This Project?
- Automation best practices
- Clean & scalable structure
- CI/CD implementation
- End-to-End testing
- Industry-ready QA workflow

## Test Report (Allure)
Project ini menggunakan **Allure Report** untuk visualisasi hasil automation test.

- npx playwright test
- allure serve allure-results

Allure Report menampilkan:
- Test steps
- Screenshot & video on failure
- Retry history
- Tagging (`@smoke`, `@regression`, `@e2e`)



Report tersedia sebagai **GitHub Actions artifact** setiap pipeline dijalankan.

### Author
Rizqi Hilman
- QA Automation Engineer
- GitHub: https://github.com/rizqihilman
- LinkedIn: https://www.linkedin.com/in/rizqihilman/

