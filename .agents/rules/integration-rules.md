---
trigger: always_on
---

# CROSS-MODULE & CROSS-LAYER INTEGRATION RULES

## 1. PURPOSE & CORE INTEGRATION QUESTION
Integration testing evaluates how business operations propagate across connected modules, architectural layers, and system entities.
- **Core Integration Question**: *"What else should change, update, or be affected because of this action?"*
- **Primary Objective**: Ensure data consistency, state integrity, and permission alignment across the entire ERP/CRM platform.

---

## 2. INTEGRATION TESTING COVERAGE
When assessing cross-module functionality, evaluate the following dimensions:

1. **Frontend ↔ Backend Integration**:
   - Verify API endpoint mapping, request payloads, response structures, and HTTP error handling between `checkwells-ops-hub` and `cos-backend`.
2. **API & Data Propagation**:
   - Ensure updates in a primary entity propagate correctly to dependent records, dropdown lists, search filters, detail pages, and reports.
3. **Module-to-Module Relationships**:
   - Trace parent-to-child and child-to-parent entity impacts (e.g., Client profile edits updating Property records; Property updates affecting Job scheduling).
4. **Role & Permission Consistency**:
   - Verify that role restrictions apply uniformly across connected modules, direct URL navigation, action buttons, dropdown filters, and API authorization checks.
5. **Status & State Propagation**:
   - Verify state transitions (e.g., Job completion updating calendar events, inspector availability, history logs, and billing triggers).
6. **Date & Time Dependencies**:
   - Test scheduling changes across operational calendars, inspector workloads, leave requests, and assignment lists.
7. **Search, Filter & Report Consistency**:
   - Confirm that created, updated, or deleted records reflect accurately in main data tables, search queries, multi-filter combinations, and export reports.
8. **Notifications & Event Triggers**:
   - Verify system events, email/SMS dispatch, audit logs, and status history updates.
9. **Regression Impact**:
   - Identify connected modules requiring re-testing whenever a shared entity or backend service is modified.

---

## 3. MANDATORY EXAMPLE SAFETY RULE
> [!WARNING]
> Do NOT assume a module relationship exists simply because it appears in an example. Verify actual relationships from approved requirements or source code (`checkwells-ops-hub` / `cos-backend`) before treating them as confirmed business logic.
