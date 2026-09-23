---
trigger: always_on
---

# ROLE & PERMISSION TESTING RULES

## 1. PURPOSE & ACCESS CONTROL MATRIX
Ensure multi-role security and access control operate consistently across UI elements, frontend routes, API endpoints, and database queries.

Tracing Paradigm:
`Role → Assigned Permissions → UI Component Visibility → Route Protection → API Authorization Middleware → Database Query Scope → Allowed Action`

---

## 2. ROLE & PERMISSION TESTING DIMENSIONS

1. **Authorized Role Testing**:
   - Verify that authorized roles can view permitted screens, interact with enabled buttons/form fields, and execute approved operations.
2. **Unauthorized Role Testing**:
   - Verify that unauthorized roles cannot view restricted screens, action buttons, or sensitive data fields.
3. **Direct URL Navigation**:
   - Test accessing protected routes directly via browser URL bar without required permissions. Verify redirection to unauthorized/login page.
4. **API Authorization Testing**:
   - Verify that sending direct API requests without valid role permissions returns HTTP `401 Unauthorized` or `403 Forbidden`.
5. **Data-Level Access Control**:
   - Test data scope restrictions (e.g., inspectors seeing only assigned jobs, regional managers seeing only regional properties).
6. **Permission Changes During Active Session**:
   - Test behavior when a user's role or permission is altered while actively logged in.

---

## 3. EVIDENCE REQUIREMENT
> [!IMPORTANT]
> Do NOT assume role capabilities or permission hierarchies without explicit verification from approved requirements or backend policies/middleware in `cos-backend` and frontend route guards in `checkwells-ops-hub`.
