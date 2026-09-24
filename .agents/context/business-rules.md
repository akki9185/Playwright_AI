# SYSTEM-WIDE BUSINESS RULES & VALIDATION STANDARDS

## 1. PURPOSE
Defines core business rules, validation constraints, default inheritance rules, and permissions across all CheckWells application modules.

---

## 2. CORE BUSINESS RULES BY CATEGORY

### 2.1 Entity Categories & Dynamic Layouts
- **Agent vs Landlord Behavior**: Agent clients support Property Managers, sub-branches, and agent-specific pricing matrices. Landlord clients hide Property Manager sections.
- **Client Type Switches**: Changing Client Type/Category re-initializes pricing matrices and resets dependent preferences to system default baseline.

### 2.2 Default Inheritance & Overrides
- **Global Settings Baseline**: New client profiles inherit default inspection preferences, compliance requirements, invoicing terms, and pricing matrices from Global Settings.
- **Client-Level Override**: Custom values entered at the Client level override Global Settings for that specific client without mutating global defaults.

### 2.3 Master Data Dependencies & Dynamic Dropdowns
- **Office / Branch Links**: Working Office dropdown options in Property Manager modal are dynamically bound to active Master Branches.
- **Service Types & Add-Ons**: Service tabs and add-on pricing options pull dynamically from Master Services configuration.

### 2.4 Data Persistence & Audit Rules
- **Post-Save Persistence**: Every form submit must update table grids immediately without full page reload.
- **Form Reset on Reopen**: Closing drawers/modals without saving discards transient state; reopening must present a clean/persisted state.
- **Role Control**: Field controls (Create, Edit, Delete) enforce role-based access; unauthorized users see read-only view or disabled inputs.

---

## 3. COMPLIANCE & TEST COVERAGE OBLIGATION
All test scenario designs must cross-check these business rules against the 8-point checklist in [TEST_STRATEGY.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md).
