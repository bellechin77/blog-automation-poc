# Blog Automation Proof of Concept (PoC)

This Proof of Concept (PoC) demonstrates how to use Playwright with TypeScript to automate testing for a blog application, using Medium.com as the test platform.

## Features Covered
- Searching for articles
- Opening articles
- Posting comments
- Verifying that comments are displayed correctly
- Debugging with screenshots and error logs
- Using Playwright's Page Object Model (POM) for better test structure

## Project Structure
```
blog-automation-poc/
│── src/
│   ├── pageObjects/
│   │   ├── MediumPage.ts  # Page Object Model for Medium
│   ├── tests/
│   │   ├── mediumTests.spec.ts  # Test cases
│── playwright.config.ts  # Playwright configuration file
│── browserConfig.ts  # Browser/device configurations
│── package.json  # Project dependencies and scripts
│── tsconfig.json  # TypeScript configuration
│── README.md  # Project documentation
```

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Playwright](https://playwright.dev/)
- [Visual Studio Code](https://code.visualstudio.com/) (optional, but recommended)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/bellechin77/blog-automation-poc.git
cd blog-automation-poc
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

### 4. Run Tests
#### Run all tests in headless mode:
```bash
npm test
```

#### Run tests with UI debugging:
```bash
npx playwright test --headed
```

#### Run tests in debug mode:
```bash
npx playwright test --debug
```

## Configuration Details

### Playwright Config (`playwright.config.ts`)
- **Retries:** Retries failed tests up to 2 times
- **Screenshots:** Captured on failure
- **HTML Reports:** Generated for test runs
- **Browsers:** Chrome, Firefox, WebKit (Safari)

### Browser Config (`browserConfig.ts`)
Defines different devices and browser setups for cross-browser testing.

## Test Implementation Details

### Page Object (`src/pageObjects/MediumPage.ts`)
- Handles interactions with Medium’s search, articles, and comments sections.

### Tests (`src/tests/mediumTests.spec.ts`)
- Uses Playwright’s test fixtures and hooks (`beforeEach`, `afterEach`)
- Includes assertions with auto-retrying

## Debugging & Logs
- **Screenshots and videos** are saved on test failures
- **Playwright trace viewer** can be used for debugging:
  ```bash
  npx playwright show-trace trace.zip
  ```

## Contributions
Feel free to fork this repository and submit pull requests with improvements or additional tests.

## License
This project is licensed under the MIT License.

