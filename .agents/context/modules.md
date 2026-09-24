# SYSTEM MODULES & TEST COVERAGE MAPPING

## 1. PURPOSE
Defines all functional modules within the CheckWells system and maps each module to mandatory test coverage standards established in [TEST_STRATEGY.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md).

---

## 2. CORE MODULE DIRECTORY

### 2.1 Clients Module (`/clients`)
- **Sub-modules / Accordions**:
  - Basic Details (Agent vs Landlord)
  - Property Managers (Agent only - Modal, Working Office, Notes, Preferences)
  - Pricing (Default inheritance, Category switches, Service Tabs, Imports, Add-ons, One-off charges)
  - Service Preference (Common preferences, Service Type specific preferences, Invoicing, Commission, Check Out keys)
- **Mandatory Coverage Standards**: [TEST_STRATEGY.md Section 3](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md#3-comprehensive-test-coverage-checklist-missing-case-prevention)

### 2.2 Properties Module (`/properties`)
- **Sub-modules / Accordions**:
  - Property Details (Address, Type, Bedrooms, Furnishing)
  - Linked Client / Landlord / Agent
  - Keys & Access Instructions
  - Special Instructions & Compliance Requirements

### 2.3 Orders / Jobs Module (`/jobs` or `/orders`)
- **Sub-modules / Workflows**:
  - Order Creation & Service Selection
  - Inspector Assignment & Scheduling
  - Report Upload & Quality Check
  - Invoicing & Job Completion

### 2.4 Master Data & Global Settings (`/settings`)
- **Sub-modules**:
  - Master Services & Pricing Matrix
  - Branches & Working Offices
  - System Users & Role Permissions
  - Default Inspection / Compliance Preferences

---

## 3. AUDIT RULE FOR NEW / EXISTING MODULES
When generating or reviewing test cases for ANY module above:
1. Every module MUST apply the 8 system-wide coverage dimensions from [TEST_STRATEGY.md](file:///var/www/html/Playwright_AI/CheckWells_Automation_Analysis/.agents/context/TEST_STRATEGY.md).
2. Never skip negative, boundary, inheritance, modal state, or post-save table verification cases.
