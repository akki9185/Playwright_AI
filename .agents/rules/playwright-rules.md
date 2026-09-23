---
trigger: always_on
---

# PLAYWRIGHT AUTOMATION RULES

## 1. AUTOMATION ARCHITECTURE & POM
All Playwright test automation must follow Page Object Model (POM) design patterns.
- **Page Objects**: Store page elements and interaction methods in `pages/` (e.g., `LoginPage.js`, `DashboardPage.js`).
- **Fixtures**: Centralize setup, authentication, and test context in `fixtures/` (e.g., `auth.fixture.js`).
- **Utilities**: Store API helpers, database clients, file parsers, and common functions in `utils/`.
- **Test Scripts**: Place test files in `tests/` structured by module (`auth/`, `properties/`, `clients/`, `jobs/`).

---

## 2. CODEBASE REPOSITORY USAGE
- **Frontend Codebase**: Inspect `/var/www/html/Playwright_AI/checkwells-ops-hub` for DOM structure, components, state, and route handlers.
- **Backend Codebase**: Inspect `/var/www/html/Playwright_AI/cos-backend` when writing API fixtures, investigating endpoint contracts, or verifying database state.

---

## 3. CORE AUTOMATION RULES
1. **Business Behavior Validation**: Automation must validate true business outcomes and data persistence, not merely button clicks.
2. **Stable Locators**: Follow [locator-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/locator-rules.md). Never invent locators without code inspection.
3. **Web-First Assertions**: Use Playwright's auto-retrying assertions (e.g., `await expect(page.getByTestId('status')).toHaveText('Completed')`).
4. **No Arbitrary Waits**: **STRICTLY PROHIBITED**: `page.waitForTimeout(5000)`. Rely on Playwright's built-in wait mechanisms and web-first assertions.
5. **Test Isolation**: Each test must be independently executable. Use fixtures for clean setup and cleanup.
6. **Reuse Existing Code**: Search existing Page Objects, fixtures, and helper methods before creating new classes.
7. **No Codebase Mutation**: **NEVER** modify application source code in `checkwells-ops-hub` or `cos-backend` to make a failing test pass.

---

## 4. FAILURE ANALYSIS & REPORTING
When an automated test fails:
- Determine whether failure is an **Application Bug**, **Automation Script Issue**, **Test Data Flake**, or **Environment Failure**.
- Inspect trace files, screenshots, and console logs.
- Never disable failing tests or remove assertions to mask bugs.
