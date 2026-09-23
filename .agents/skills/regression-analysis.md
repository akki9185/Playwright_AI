# SKILL: REGRESSION ANALYSIS & IMPACT ASSESSMENT

## 1. PURPOSE
Procedure for assessing system-wide change impact, identifying regression areas, and selecting appropriate regression test execution scope.

---

## 2. INSTRUCTIONS
1. Refer to [system-deep-dive-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/system-deep-dive-rules.md) for Change Impact Analysis rules.
2. Refer to [TEST_STRATEGY.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md) for Intelligent Test Execution Scope selection by change type (New Feature, Bug Fix, UI Change, Backend Change, Role/Permission Change, Cross-Module Change, Data/Config Change).
3. Answer the core integration question: *"What else should change or be affected because of this action?"*
4. Identify primary modified module, downstream consuming modules, shared components, and database models.
5. Compile list of affected UI workflows, API endpoints, and existing Playwright tests in `tests/` requiring re-execution.
