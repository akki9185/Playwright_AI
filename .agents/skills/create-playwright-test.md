# SKILL: CREATE PLAYWRIGHT TEST

## 1. PURPOSE
Procedure for generating Playwright test automation scripts and Page Object classes.

## 2. INSTRUCTIONS
1. Refer to [playwright-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/playwright-rules.md), [locator-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/locator-rules.md), and [CODEBASE_REFERENCE.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/CODEBASE_REFERENCE.md).
2. Store Page Objects in `pages/`, test scripts in `tests/`, and fixtures in `fixtures/`.
3. Use web-first assertions (`expect(locator).toBeVisible()`). Never use `page.waitForTimeout()`.
4. Validate business outcomes and data persistence, not merely UI clicks.
