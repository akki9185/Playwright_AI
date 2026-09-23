# SKILL: GENERATE TEST CASE

## 1. PURPOSE
Procedure for generating senior-level, production-ready manual test cases with complete UI self-observation.

## 2. INSTRUCTIONS
1. Refer to [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md) and [test-data-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/test-data-rules.md).
2. **Self-Observe Complete Page**: Inspect full UI page layout. Generate coverage for all fields, category variations (Agent vs Landlord), dropdown conditions, toggle switch states (ON/OFF), multi-select controls, modal popups, and accordion sections.
3. Format output strictly as a Jira-style markdown table:
   | Test case ID | Module name | Accordion Section | Test scenario | Test Case Desciption | Pre Conditions | Steps to Execute | Test data | Expected Result | Actual Result |
4. Keep Test Scenario short (2–3 words).
5. Use unique email pattern: `ankitqa.iihglobal+[5 random characters]@gmail.com`.
6. Default Actual Result to `Not Executed`.
