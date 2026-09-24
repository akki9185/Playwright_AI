# SKILL: GENERATE TEST CASE

## 1. PURPOSE
Procedure for generating senior-level, production-ready manual test cases with complete UI self-observation and system-wide coverage validation.

## 2. INSTRUCTIONS
1. Refer to [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md), [TEST_STRATEGY.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md), and [test-data-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/test-data-rules.md).
2. **Exhaustive System-Wide Checklist**: Must evaluate all 8 dimensions from `TEST_STRATEGY.md` Section 3:
   - Field-Level & Input Validation (mandatory, boundaries, formats, sanitization)
   - Dynamic Dropdowns & Data Sources (master data bindings, default items, dependent filters)
   - Modals, Drawers & Child Entities (lifecycle, state reset, child accordions)
   - Data Persistence & Post-Save Table Verification (grid update, detail view re-fetch)
   - Inheritance & Default Configuration (global defaults, entity overrides, category switching)
   - Common vs Type-Specific Preferences (universal vs service-specific accordions, toggles)
   - Role & Authorization Controls (visible controls, disabled inputs, endpoint security)
   - Resilience & State Recovery (inline visual errors, toast messages, API timeouts)
3. Format output strictly as Jira-style markdown table:
   | Test case ID | Module name | Accordion Section | Test scenario | Test Case Desciption | Pre Conditions | Steps to Execute | Test data | Expected Result | Actual Result |
4. Keep Test Scenario short (2–3 words).
5. Use unique email pattern: `ankitqa.iihglobal+[5 random characters]@gmail.com`.
6. Default Actual Result to `Not Executed`.
