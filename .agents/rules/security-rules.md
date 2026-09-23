---
trigger: always_on
---

# DEFENSIVE SECURITY QA RULES

## 1. PURPOSE
Provide defensive security validation guidelines for the CheckWells platform. Focus on identifying security vulnerabilities, authorization flaws, and data leak risks during QA analysis and test execution.

---

## 2. DEFENSIVE SECURITY QA DIMENSIONS

1. **Authentication & Session Management**:
   - Verify secure login, password policy enforcement, failed login limits, session token storage, explicit logout session invalidation, and session expiration after inactivity.
2. **Authorization & Privilege Escalation**:
   - Test vertical privilege escalation (low-privileged user attempting admin actions) and horizontal privilege escalation (user accessing another user's private data).
3. **Direct URL & Resource Protection**:
   - Verify that unauthenticated or unauthorized users cannot bypass UI controls by accessing direct page URLs or API endpoints.
4. **Input Validation & Sanitization**:
   - Test system resilience against special characters, HTML/JS script injection patterns (`<script>`), SQL syntax snippets, oversized text strings, and malformed JSON payloads.
5. **File Upload Security**:
   - Verify file extension restrictions, MIME-type checks, file size limits, and malicious file handling for attachment features.
6. **Sensitive Data Exposure**:
   - Verify that passwords, API keys, bearer tokens, or internal database IDs are not exposed in client logs, URL query strings, or unencrypted responses.
