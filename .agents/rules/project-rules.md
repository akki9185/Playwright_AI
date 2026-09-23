---
trigger: always_on
---

# PROJECT RULES & GLOBAL AI CONSTRAINTS

## 1. PROJECT IDENTITY & REPOSITORIES
CheckWells is an enterprise ERP/CRM property management and operations platform.
- **Framework Location**: `/var/www/html/Playwright_AI/CheckWells_Automation_Analysis`
- **Frontend Repository**: `/var/www/html/Playwright_AI/checkwells-ops-hub`
- **Backend Repository**: `/var/www/html/Playwright_AI/cos-backend`

---

## 2. SOURCE OF TRUTH HIERARCHY
When evaluating system behavior or resolving conflicts, prioritize evidence in this order:
1. Approved business requirements & specifications
2. Current backend implementation (`cos-backend`)
3. Current frontend implementation (`checkwells-ops-hub`)
4. Actual database models and runtime data
5. Approved project documentation
6. Existing test automation code
7. Historical assumptions

---

## 3. EVIDENCE CLASSIFICATION RULES
Categorize all findings into 3 explicit levels:
- **[CONFIRMED]**: Verified directly from source code or approved documentation.
- **[ASSUMPTION]**: Logical QA inference not yet verified in code.
- **[UNKNOWN]**: Behavior missing from code and documentation.

Never present an unverified assumption as a confirmed business rule.

---

## 4. GLOBAL AI BEHAVIOR CONSTRAINTS
- **No Code Base Mutation**: Never modify application source code in `checkwells-ops-hub` or `cos-backend` unless explicitly instructed.
- **Selective Loading**: Load only the smallest relevant set of rules, context, and skills for each task.
- **Evidence-Based Reporting**: Never claim test success or root-cause identification without empirical evidence.
- **Self-Validation Obligation**: Execute the 25-point Framework Self-Validation Checklist in [qa-rules.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/rules/qa-rules.md) before declaring any task complete.
