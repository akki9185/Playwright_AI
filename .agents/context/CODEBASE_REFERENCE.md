# CODEBASE REFERENCE

## 1. PURPOSE

This file is the authoritative codebase reference for the CheckWells QA and Playwright automation project.

Use the actual application source code to understand:

- UI behavior
- Business logic
- API behavior
- Validation
- Authentication
- Authorization
- Roles and permissions
- Data flow
- Database interaction
- State transitions
- Module relationships
- Integrations
- Defects
- Regression impact
- Playwright locators
- Existing automation

Do not invent application behavior when the source code can be inspected.

Do not assume that a UI condition represents the complete business rule.

---

## 2. AUTHORITATIVE CODEBASE PATHS

### FRONTEND

Path:

`/var/www/html/Playwright_AI/checkwells-ops-hub`

This is the primary frontend/web application repository.

Use it to investigate:

- Pages
- Routes
- Components
- Forms
- Fields
- Buttons
- Dropdowns
- Tables
- Modals
- Navigation
- Client-side validation
- Frontend state
- UI conditions
- UI permissions/visibility
- API calls
- API response handling
- Loading states
- Error handling
- Empty states
- Responsive behavior
- User interactions
- Playwright locators
- Existing frontend automation

---

### BACKEND

Path:

`/var/www/html/Playwright_AI/cos-backend`

This is the primary backend/API repository.

Use it to investigate:

- API endpoints
- Routes
- Controllers
- Services
- Business logic
- Validation
- Authentication
- Authorization
- Middleware
- Database operations
- Models
- Queries
- Relationships
- Data filtering
- State transitions
- Calculations
- Backend integrations
- Error handling
- Response structure

---

## 3. REPOSITORY RESPONSIBILITY

Use this mental model:

```text
USER
  ↓
FRONTEND
  ↓
UI COMPONENT
  ↓
FRONTEND STATE
  ↓
API REQUEST
  ↓
BACKEND
  ↓
BUSINESS LOGIC
  ↓
DATABASE
  ↓
BACKEND RESPONSE
  ↓
FRONTEND STATE
  ↓
UI

---

## 4. INVESTIGATION CLASSIFICATION & CROSS-REFERENCES

### EVIDENCE CLASSIFICATION RULES
Every finding from codebase investigation MUST be explicitly categorized as:
- **[CONFIRMED]**: Verified directly from source code files in `checkwells-ops-hub` or `cos-backend`.
- **[ASSUMPTION]**: Logical QA inference not yet verified in code.
- **[UNKNOWN]**: Cannot be determined from available code or documentation.

Never invent filenames, function names, API endpoints, database schemas, business rules, or permissions.

### CROSS-FRAMEWORK REFERENCES
- **QA Methodology**: Refer to [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md).
- **Deep System Investigation**: Refer to [system-deep-dive-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/system-deep-dive-rules.md).
- **Cross-Module Integration**: Refer to [integration-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/integration-rules.md).
- **Automation & Locators**: Refer to [playwright-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/playwright-rules.md) and [locator-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/locator-rules.md).

