# PROJECT CONTEXT - CHECKWELLS OPERATIONS PLATFORM

## 1. SYSTEM OVERVIEW
CheckWells is an enterprise ERP/CRM-style property management, inspection, and operations platform.
- **Architectural Paradigm**: Interconnected business platform with multi-role access control, state machine workflows, cross-module dependencies, and backend automation.
- **QA Focus**: Evaluate features through end-to-end business operations, data propagation, role-based security, state transitions, and system integration.

---

## 2. MANDATORY INVESTIGATION RULE FOR EXAMPLES
> [!IMPORTANT]
> Workflow diagrams and module relationships in framework documentation are investigation guidance only. They are NOT confirmed business rules or system relationships. Verify relationships from the current codebase (`checkwells-ops-hub` / `cos-backend`) or approved requirements before using them in test cases, defect analysis, or automation.

---

## 3. SYSTEM ENTITY GUIDANCE [INVESTIGATION EXAMPLE]
```text
[INVESTIGATION EXAMPLE - UNCONFIRMED ENTITY FLOW]
Client Account → Property → Job / Inspection Request → Inspector → Ops Calendar → Report / History
```

### CORE SYSTEM DIMENSIONS
- **Business Entities**: Clients, Properties, Jobs, Inspectors, Schedules, Reports, Invoices, Roles, Permissions.
- **State Machines**: Draft → Pending → Assigned → In Progress → Completed → Cancelled.
- **Data Propagation**: Parent entity changes reflecting across child records, listings, filters, and reports.
