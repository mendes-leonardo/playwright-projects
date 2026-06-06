# Swag Labs Testing with Page Object Model

Automated end-to-end tests for [SauceDemo](https://www.saucedemo.com) (Swag Labs) using **Playwright** and the **Page Object Model (POM)** pattern.

## 🚀 Tech Stack

- [Playwright](https://playwright.dev) — Test runner and browser automation
- JavaScript (CommonJS) — Test implementation
- Page Object Model — Design pattern for maintainable test code

## 📁 Project Structure

```
├── pages/
│   └── LoginPage.js          # Page object for the login page
├── tests/
│   └── login.spec.js         # Login test scenarios
├── test-data/
│   └── users.json            # Test user credentials
├── playwright.config.js      # Playwright configuration
└── package.json              # Dependencies and scripts
```

## 📋 Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- npm

## 🔧 Installation

```bash
npm install
```

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (see the browser):

```bash
npx playwright test --headed
```

Run tests with the HTML reporter:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

## 🧪 Test Coverage

| Test | Description |
|---|---|
| `login.spec.js` | Valid login with `standard_user` credentials |

### Test Data

Valid credentials are stored in `test-data/users.json`:
- **Username:** `standard_user`
- **Password:** `secret_sauce`

## ⚙️ Configuration

- **Base URL:** `https://www.saucedemo.com`
- **Browser:** Chromium (default)
- **Screenshots:** Captured on every test
- **Traces:** Collected on first retry
- **CI-ready:** Retries (2), single worker, and `test.only` prevention when `CI` environment variable is set

## 📊 Reports

Playwright generates an HTML report after each run:

```bash
npx playwright show-report
```

## 📄 License

ISC
