---
trigger: always_on
---

# PLAYWRIGHT LOCATOR STRATEGY RULES

## 1. PURPOSE
Define locator strategies to build resilient, maintainable Playwright test automation for the CheckWells frontend application.

---

## 2. LOCATOR HIERARCHY & SELECTION PRIORITY
Inspect the frontend DOM in `/var/www/html/Playwright_AI/checkwells-ops-hub` and select locators according to this priority:

1. **Explicit Test IDs (Highest Priority)**:
   - Use `page.getByTestId('element-id')` or `[data-testid="element-id"]` when available.
2. **Semantic & Accessibility Role**:
   - Use `page.getByRole('button', { name: 'Submit' })`, `page.getByRole('heading')`, etc.
3. **User-Facing Labels & Placeholders**:
   - Use `page.getByLabel('Email Address')`, `page.getByPlaceholder('Enter property name')`.
4. **Exact Text Content**:
   - Use `page.getByText('Property Created Successfully', { exact: true })`.
5. **Scoped CSS Selectors**:
   - Use stable component-scoped CSS attributes (e.g., `form.login-form input[name="username"]`).

---

## 3. STRICT ANTI-PATTERNS & FORBIDDEN SELECTORS
- **NO Invented Locators**: Never write locators based on assumptions without inspecting `checkwells-ops-hub` source files.
- **NO Brittle XPath / DOM Paths**: Avoid full XPaths like `/html/body/div[2]/div[3]/form/button`.
- **NO Dynamic Auto-Generated CSS Classes**: Avoid hashed framework class names (e.g., `.css-1x9a8b`, `.sc-bdVaJa`).
- **Reuse Existing Page Objects**: Search `pages/` and existing automation components before declaring new locators.
