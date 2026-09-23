---
trigger: always_on
---

# DATA INTEGRITY & PERSISTENCE RULES

## 1. PURPOSE
Data integrity rules ensure that all business entities remain accurate, consistent, and persistent across the CheckWells platform.

---

## 2. CRUD DATA INTEGRITY DIMENSIONS
Evaluate data integrity for every business entity across these lifecycle stages:

### CREATE
- Verify required vs optional fields, default values, generated identifiers, and unique constraint validations.
- Ensure backend validation catches duplicate records even if frontend validation is bypassed.
- Verify initial state assignments and immediate visibility in listings.

### READ
- Verify exact field rendering, role-based field masking, calculated values, and related record links.
- Test persistence after browser refresh, tab reopen, or re-authentication.

### UPDATE
- Verify that edited fields save accurately while unedited fields retain their existing values.
- Verify audit/history tracking (updated_by, updated_at) and automatic recalculations of derived fields.
- Verify propagation of updated values to dependent modules.

### DELETE / DEACTIVATE
- Distinguish between soft-delete (`deleted_at`) and hard-delete operations based on backend model definition.
- Verify foreign key handling: prevent orphaned records or verify expected cascade behavior.
- Ensure deactivated/deleted entities are excluded from active dropdowns and searches while retaining historical record accuracy where required.

---

## 3. PERSISTENCE & REFRESH TESTING
- Test persistence after browser refresh (`F5` / `Ctrl+R`), tab navigation, logout/login cycle, and session expiration.
- Verify stale-data protection when concurrent edits occur or when viewing records in multiple tabs.
