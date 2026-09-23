# SKILL: ANALYZE FAILURE & EVIDENCE STANDARDS

## 1. PURPOSE
Procedure for analyzing test execution failures, classifying defects, and gathering proportional reproduction evidence.

---

## 2. DEFECT CLASSIFICATION REFERENCE
Refer to [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md) for official defect classifications (Confirmed Bug, Suspected Bug, Requirement Gap, Requirement Ambiguity, Environment Issue, Test Data Issue, etc.).

---

## 3. EVIDENCE & REPRODUCTION STANDARDS
When documenting or investigating actionable defects, capture proportional evidence across these fields:

### Standard Defect Evidence Fields:
- **Environment**: Target environment (Staging, QA, Dev).
- **URL / Route**: Exact URL or app path where defect occurred.
- **Module / Page**: Affected system module and page component.
- **User Role**: Active logged-in user role executing the test.
- **Preconditions**: Required system state before step execution.
- **Test Data**: Exact inputs, entity IDs, or test user credentials used.
- **Reproduction Steps**: Clear, numbered, step-by-step reproduction path.
- **Expected Result**: Specification or business rule behavior.
- **Actual Result**: Observed failure behavior.
- **Reproducibility**: Frequency (Always, Intermittent, Single Occurence).
- **Visual Evidence**: Screenshots or WebP video recordings when UI issues occur.
- **Console & Network Evidence**: Browser console errors and API request/response payloads when network/JS errors occur.
- **Source Code Evidence**: Confirmed file, component, or backend service line references from `checkwells-ops-hub` / `cos-backend`.
- **Severity & Priority**: Critical/High/Medium/Low assessment.
- **Traceability Links**: Related Test Case ID, Requirement ID, or Workflow.

> [!NOTE]
> Evidence must be proportional to issue complexity. Do not collect excessive technical evidence for simple cosmetic bugs; do not omit network/log evidence required to reproduce backend/API failures.
