# TEST STRATEGY & TRACEABILITY GUIDE

## 1. PURPOSE & ARCHITECTURAL ROLE
This document is the primary framework owner for Requirement/Test Traceability and Intelligent Test Execution Strategy.
- **Role**: Primary Test Strategy & Traceability Guide
- **Referenced By**: [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md), [regression-analysis.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/skills/regression-analysis.md)

---

## 2. REQUIREMENT & TEST TRACEABILITY MODEL
Traceability ensures that every business requirement maps to test coverage and execution results without unverified assumptions.

### Traceability Chain:
`Requirement / Business Rule → Module / Workflow → Evidence / Source → Test Scenario → Test Case → Execution → Defect`

### Traceability Rules:
1. **No Invented Requirements**: Never introduce unconfirmed business requirements.
2. **Evidentiary Levels**:
   - **[CONFIRMED]**: Verified directly from approved specifications or source code in `checkwells-ops-hub` / `cos-backend`.
   - **[ASSUMPTION]**: Logical QA inference not yet verified in code.
   - **[UNKNOWN]**: Requirement missing or unverified.
3. **Missing Coverage Analysis**: Identify requirements or workflows lacking test cases.
4. **Orphan Test Case Identification**: Flag test cases that do not map to any requirement or verified risk.
5. **QA-Risk Test Support**: Support legitimate risk-based test cases (e.g., edge-case inputs, security boundaries) that do not map directly to formal PRD requirements.

---

## 3. INTELLIGENT TEST EXECUTION STRATEGY BY CHANGE TYPE
Select the optimal test execution scope based on the nature of the application change:

> [!IMPORTANT]
> The execution scopes below are TEST STRATEGIES ONLY. They are NOT confirmed CheckWells business rules. Choose the smallest sufficient test scope providing appropriate risk coverage, and escalate to broader regression when risk requires.

| Change Type | Recommended Test Execution Scope |
| :--- | :--- |
| **NEW FEATURE** | Functional + negative + boundary + validation + role/permission + security + UI/responsive + integration + regression |
| **BUG FIX** | Reproduce original defect + verify fix + affected-area regression + dependency regression |
| **UI CHANGE** | UI rendering + layout + responsive + browser compatibility + functional regression (when shared components/selectors are affected) |
| **BACKEND LOGIC CHANGE** | Functional + validation + data integrity + integration + error handling + authorization/security + relevant UI regression |
| **ROLE/PERMISSION CHANGE**| Positive authorization + negative authorization + role matrix + privilege escalation + affected workflow regression |
| **CROSS-MODULE CHANGE** | Direct feature + dependent modules + end-to-end workflow + impacted module regression |
| **DATA/CONFIG CHANGE** | Valid data + invalid data + boundary + existing data persistence + new data integrity + regression |
