---
trigger: always_on
---

# TEST DATA STRATEGY & RULES

## 1. PURPOSE
Establish test data generation standards, safety protocols, and formatting rules for manual testing and automated test execution.

---

## 2. TEST DATA GUIDELINES

1. **Realistic & Relevant Data**:
   - Use domain-specific test data reflecting real property management scenarios (valid address formats, realistic dates, proper currency values).
2. **Unique Email Generation Pattern**:
   - For creating unique user accounts or email fields, use the exact specified format:
     `ankitqa.iihglobal+[5 random characters]@gmail.com`
3. **Data Categories**:
   - **Positive Data**: Valid inputs satisfying all business validations.
   - **Negative Data**: Invalid formats, out-of-range values, missing required fields.
   - **Boundary Data**: Exact minimum, maximum, and threshold values.
   - **Role-Specific Users**: Pre-configured test accounts for each role.
4. **Environment Safety & Secret Protection**:
   - **NEVER** expose real production passwords, API keys, access tokens, database credentials, or secret keys in test files or output.
5. **Test Data Cleanup & Isolation**:
   - Automated test scripts must clean up created data or use isolated test records to prevent test pollution.
