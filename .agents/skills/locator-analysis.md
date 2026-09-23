# SKILL: LOCATOR ANALYSIS

## 1. PURPOSE
Procedure for analyzing DOM structures and extracting resilient Playwright locators.

## 2. INSTRUCTIONS
1. Refer to [locator-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/locator-rules.md) and inspect `/var/www/html/Playwright_AI/checkwells-ops-hub`.
2. Follow priority order: `getByTestId` → `getByRole` → `getByLabel` → `getByText` → Scoped CSS.
3. Reject full XPaths and dynamic hashed CSS classes.
4. Check existing Page Objects in `pages/` before defining new locators.
