# SYSTEM-WIDE TEST STRATEGY & TEST DESIGN STANDARD

## 1. PURPOSE & ARCHITECTURAL ROLE
Framework owner for requirement traceability, exhaustive test design rules, missing-case prevention, and intelligent test execution across all system modules.
- **Role**: Universal System Test Strategy & QA Standard
- **Referenced By**: [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md), [regression-analysis.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/skills/regression-analysis.md)

---

## 2. STANDARD TEST CASE ARCHITECTURE & FORMAT
Every module test suite must adhere to uniform structure:
- **Test Case ID**: `TC-[MODULE]-[SUBMODULE/SECTION]-[NUMBER]` (e.g., `TC-CLI-PM-001`, `TC-ORD-LIST-005`)
- **Title**: Action-oriented description (`Verify [field/action] with [condition]`)
- **Pre-conditions**: Required system state, active user role, base configurations
- **Test Steps**: Sequential, unambiguous user actions
- **Expected Results**: Exact UI/data state, database update, toast notification, boundary behavior
- **Traceability Source**: Code path / PRD section verified

---

## 3. COMPREHENSIVE TEST COVERAGE CHECKLIST (MISSING-CASE PREVENTION)
To ensure zero missing test cases, every feature/module audit must evaluate all 8 coverage dimensions:

### 3.1 Field-Level & Input Validation
- [ ] **Mandatory vs Optional**: Verify clear error message on submitting empty mandatory fields vs successful save with empty optional fields.
- [ ] **Boundary & Character Limits**: Min length, max length, numeric limits, decimal precision.
- [ ] **Format Validation**: Email format, phone number pattern, postal codes, currency formatting.
- [ ] **Special Characters & Security**: Handling of quotes, accented chars, HTML tags, SQL/XSS payloads.
- [ ] **Sanitization**: Leading/trailing whitespace auto-trimming, auto-capitalization where specified.

### 3.2 Dynamic Dropdowns & Selectors
- [ ] **Data Source Verification**: Verify dropdown options pull correctly from linked parent entities, Global Settings, or branch master tables.
- [ ] **Default Selection**: Verify initial selected state (e.g., "-- Select --", default branch, inherited setting).
- [ ] **Dynamic Filtering**: Dependent dropdowns filter correctly based on parent selection.
- [ ] **Empty State**: Proper handling when linked dropdown data source returns zero records.

### 3.3 Modals, Drawers & Child Entities
- [ ] **Modal Lifecycle**: Open modal, close without save, backdrop click, Escape key behavior.
- [ ] **State Reset**: Reopening modal resets form inputs to initial clean state.
- [ ] **Child Accordions & Sub-sections**: Validation and persistence of sub-sections (e.g., Notes, Preferences, Dynamic Tabs).
- [ ] **Duplicate Prevention**: Attempting to add duplicate child items within a parent form.

### 3.4 Data Persistence & Table Verification (Post-Save / Update)
- [ ] **Post-Save Table Verification**: Created record reflects immediately in listing grid with accurate column values.
- [ ] **Post-Update Table Verification**: Modified fields update correctly in grid without requiring full page refresh.
- [ ] **Detail View Verification**: Re-opening saved entity reflects exact persisted values.
- [ ] **Audit Metadata**: Created By, Created Date, Updated By timestamps updated accurately.

### 3.5 Inheritance & Default Configuration Logic
- [ ] **Global Setting Inheritance**: Verify defaults auto-populate from system-level settings when creating new entities.
- [ ] **Override Inheritance**: Modifying entity-level values correctly overrides global defaults without mutating global settings.
- [ ] **Category / Type Switching**: Changing entity category/type clears or re-populates dependent configuration sections appropriately.

### 3.6 Common vs Type-Specific Preferences
- [ ] **Common Preference Accordions**: Verify common configurations (Invoicing, Commission, General Rules) apply universally.
- [ ] **Type-Specific Accordions**: Verify specialized sub-accordions dynamically show/hide based on selected Service Type or Entity Subtype.
- [ ] **Toggle Dependencies**: Enabler toggles correctly enable/disable linked dependent fields.

### 3.7 Role & Authorization Controls
- [ ] **Role-Based Visibility**: Verify action buttons (Create, Edit, Delete) hide or disable for restricted roles.
- [ ] **Field-Level Permissions**: Read-only access displays disabled inputs without submit capability.
- [ ] **Direct URL / API Guard**: Accessing restricted routes or endpoints returns 403 Forbidden.

### 3.8 Resilience & State Recovery
- [ ] **Validation Feedback**: Inline red borders and explicit error summary under affected inputs.
- [ ] **Toast Notifications**: Green success / Red error toast feedback on operations.
- [ ] **Network / Backend Failure**: UI handles API timeout or 500 error gracefully without breaking layout.

---

## 4. REQUIREMENT & TEST TRACEABILITY MODEL

### Traceability Chain:
`Business Requirement / Code Rules → Module / Workflow → Source Evidence → Test Scenario → Test Case → Execution → Defect`

### Evidentiary Classification:
1. **[CONFIRMED]**: Verified against source code in `checkwells-ops-hub` / `cos-backend` or PRD.
2. **[ASSUMPTION]**: Logical QA inference awaiting engineering confirmation.
3. **[UNKNOWN]**: Feature requirement or edge-case missing code backing.

---

## 5. INTELLIGENT TEST EXECUTION STRATEGY BY CHANGE TYPE

| Change Type | Recommended Test Execution Scope |
| :--- | :--- |
| **NEW FEATURE** | Full coverage checklist (3.1 - 3.8) + integration + regression |
| **BUG FIX** | Defect reproduction + targeted fix verification + impacted sub-module regression |
| **UI / COMPONENT CHANGE**| Responsive rendering + component state + cross-browser + affected selector regression |
| **BACKEND LOGIC CHANGE** | Data persistence (3.4) + default inheritance (3.5) + validation + API regression |
| **ROLE / PERMISSION** | Positive/negative authorization + field disabled states + endpoint protection |
| **DATA / CONFIG CHANGE** | Global setting propagation + override logic + boundary validation |
