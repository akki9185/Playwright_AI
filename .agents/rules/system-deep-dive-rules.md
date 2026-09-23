---
trigger: always_on
---

# SYSTEM DEEP-DIVE QA RULES

## 1. PURPOSE

Treat the application as an integrated ERP/CRM business system, not as independent UI pages.

A feature must be analyzed across:

User
→ UI
→ Frontend State
→ API
→ Backend
→ Business Logic
→ Database
→ Related Module
→ Notifications/Events
→ Reports/Lists
→ Permissions

Never assume that testing one screen completely validates a feature.

---

## 2. SYSTEM-FIRST QA APPROACH

Before testing or automating a significant feature:

1. Identify the business entity.
2. Identify the module owning the entity.
3. Identify modules consuming the entity.
4. Identify create/read/update/delete operations.
5. Identify APIs involved.
6. Identify backend services involved.
7. Identify database relationships when necessary.
8. Identify user roles.
9. Identify state transitions.
10. Identify downstream effects.
11. Identify notifications/events.
12. Identify reports/listing/filter effects.
13. Identify audit/history effects.
14. Identify regression impact.

Create a dependency map before implementing deep automation when the feature is complex.

---

## 3. BUSINESS ENTITY THINKING

Do not think only in terms of screens.

Think in terms of business entities.

Examples:

Property
Client
Landlord
Tenant
Inspector
Employee
Job
Event
Leave
Calendar
Subscription
User
Role
Pricing
Attachment
Meter
Key
Checklist
Notification

For each entity determine:

- Where is it created?
- Where is it updated?
- Where is it deleted?
- Where is it displayed?
- Which modules depend on it?
- Which users can access it?
- Which statuses can it have?
- What happens when its status changes?
- What happens when it is deleted/deactivated?
- Which APIs manipulate it?

---

## 4. MODULE DEPENDENCY ANALYSIS

For every important feature, identify upstream and downstream modules.

Example:

Client
↓
Property
↓
Job
↓
Inspector
↓
Ops Calendar
↓
Completion
↓
Reporting/History

A change in Client data may affect Property.

A Property may affect Jobs.

A Job may affect Inspector availability.

An Inspector assignment may affect Calendar availability.

Therefore, test the complete dependency chain when risk requires it.

---

## 5. CRUD IMPACT

For every major entity evaluate:

### CREATE

Verify:
- record created
- correct fields saved
- generated ID/code
- default values
- related records
- permissions
- list visibility
- search
- filters
- dependent modules

### READ

Verify:
- correct data displayed
- role-based visibility
- calculated values
- related records
- stale-data behavior
- refresh behavior

### UPDATE

Verify:
- changed value saved
- unchanged values preserved
- dependent modules updated
- audit/history behavior
- calculated values recalculated
- permissions respected

### DELETE

Verify:
- deletion permission
- confirmation
- hard delete vs soft delete
- dependent records
- references from other modules
- historical records
- search/list behavior

Never assume deletion is isolated.

---

## 6. CROSS-MODULE TESTING

For every major workflow ask:

"If I change this data here, where should I see the change?"

Examples:

Client changed
→ Property
→ Jobs
→ Reports

Inspector status changed
→ Inspector list
→ Assignment dropdown
→ Calendar
→ Job availability

Property status changed
→ Property list
→ Job workflow
→ Calendar
→ Reporting

Pricing changed
→ Client/subscription
→ Calculation
→ Billing-related views

Job status changed
→ Job Tracker
→ Calendar
→ Inspector workflow
→ Notifications
→ History

These relationships must be verified from actual application behavior before creating tests.

---

## 7. END-TO-END BUSINESS FLOW

For critical workflows, test the complete business lifecycle.

Example:

Create
→ Validate
→ Save
→ Display
→ Assign
→ Process
→ Complete
→ Update dependent module
→ Verify final state

Do not stop after clicking Save.

The final business outcome must be verified.

---

## 8. STATE TRANSITION TESTING

Treat status/state as a first-class testing dimension.

For each state identify:

- allowed transitions
- forbidden transitions
- who can transition
- required conditions
- side effects
- dependent modules
- notification behavior
- rollback behavior

Example:

Draft
→ Pending
→ Assigned
→ In Progress
→ Completed
→ Cancelled

Do not assume every state can transition directly to every other state.

---

## 9. DATA PROPAGATION

When data is changed, verify whether the change propagates correctly.

Check:

- Immediate UI
- Refresh
- Reopen
- Search
- Filter
- Related detail pages
- Related modules
- API response
- Database state when required

A test is incomplete if the UI shows the new value temporarily but persistence is incorrect.

---

## 10. STALE DATA

Test stale-data scenarios where relevant.

Examples:

1. Open record in Browser A.
2. Modify record in Browser B.
3. Return to Browser A.
4. Refresh/reopen.
5. Verify expected behavior.

Also consider:
- multiple users
- concurrent edits
- outdated forms
- deleted records
- changed permissions
- changed status

---

## 11. INTEGRATION FAILURE

Test behavior when dependencies fail.

Examples:

- API unavailable
- API timeout
- server error
- validation error
- empty response
- partial response
- invalid response
- network interruption
- dependent service failure

Expected behavior should include:
- meaningful error
- no incorrect success state
- no corrupted data
- retry behavior where supported
- correct recovery

---

## 12. API/UI CONSISTENCY

When UI behavior depends on an API:

Verify:

UI request
→ correct endpoint
→ correct parameters
→ correct authorization
→ backend processing
→ expected response
→ correct UI rendering

Do not validate only the final screen when the defect may originate in the API/business layer.

---

## 13. DATABASE / DATA INTEGRITY

When database verification is available and justified, verify:

- record creation
- update
- deletion
- relationships
- foreign keys/references
- duplicate prevention
- default values
- status
- timestamps
- calculated values

Do not rely on database validation for every UI test.

Use it for:
- critical workflows
- complex calculations
- data corruption investigation
- persistence defects
- integration failures

---

## 14. RELATIONSHIP TESTING

ERP/CRM systems contain relationships.

Examples:

Client → Properties

Property → Landlords

Property → Tenants

Property → Meters

Property → Jobs

Job → Inspector

Inspector → Employee

Employee → Leave

Job → Calendar Event

User → Role

Role → Permission

Test both:

### Parent → Child

and

### Child → Parent

Verify that changes to one entity do not create inconsistent relationships.

---

## 15. DELETE / DEACTIVATION IMPACT

Never test deletion as an isolated action.

Before deleting/deactivating an entity determine:

- What references it?
- Can existing records still use it?
- Should it disappear from dropdowns?
- Should historical records remain?
- Should assignments be removed?
- Should active workflows stop?
- Should reports change?
- Should notifications be affected?

Deletion/deactivation requires regression analysis.

---

## 16. ROLE-BASED INTEGRATION

Do not test permissions only on the current screen.

Verify permissions across the workflow.

Example:

User can create Property
→ Can they edit it?
→ Can they assign related users?
→ Can they create a Job?
→ Can they see the Property in another module?
→ Can they access it directly?
→ Can another role modify it?

Permissions must remain consistent across connected modules.

---

## 17. SEARCH / FILTER / LIST CONSISTENCY

When a record changes:

Verify it in:

- Main list
- Search
- Filters
- Sorting
- Detail page
- Related modules
- Dropdowns
- Calendar
- Reports

A record appearing correctly on the detail page but incorrectly in a list is an integration/data consistency defect.

---

## 18. NOTIFICATION / EVENT IMPACT

When an action can trigger notifications/events, investigate:

- What triggers it?
- Who receives it?
- When is it triggered?
- What data is included?
- What happens on failure?
- Is it triggered once or multiple times?
- Does cancellation reverse it?
- Does status change trigger another event?

Test duplicate and missing notifications where applicable.

---

## 19. CALCULATION / DERIVED DATA

For calculated fields:

Identify:

Input
→ Calculation
→ Stored value
→ Displayed value
→ Dependent values

Test:
- minimum
- maximum
- zero
- decimal
- negative where invalid
- rounding
- multiple combinations
- update/recalculation
- refresh persistence

Never validate only one calculation example.

---

## 20. MULTI-DATE / MULTI-RECORD WORKFLOWS

For calendars, jobs, schedules, assignments, and similar systems test:

- single date
- multiple dates
- partial completion
- cancellation
- rescheduling
- overlapping records
- conflicting assignments
- leave/holiday
- employee availability
- reassignment

Verify whether an action affects:

- one date
- all dates
- selected dates
- parent record
- child records

Never assume scope.

---

## 21. CONCURRENCY

For critical shared data, consider:

User A edits
+
User B edits

Test:
- simultaneous update
- stale update
- conflicting update
- deletion while another user edits
- assignment while another user changes availability

Verify that data is not silently overwritten.

---

## 22. AUDIT / HISTORY

For important business actions determine whether the system maintains:

- created by
- created date
- updated by
- updated date
- status history
- assignment history
- deletion history
- change history

When audit/history exists, verify it as part of the workflow.

---

## 23. INTEGRATION REGRESSION

Whenever a shared entity or service changes, identify all affected modules.

Example:

Changing Inspector logic may require regression of:

Inspector
→ Job Tracker
→ Assignment
→ Ops Calendar
→ Leave
→ Availability
→ Notifications

Do not run only the test belonging to the changed screen.

---

## 24. DEEP-DIVE OUTPUT

For complex features provide:

### Business Entity
What entity is being changed?

### Primary Module
Where does the operation originate?

### Dependencies
Which modules depend on it?

### Data Flow
UI → API → Backend → Database → Related Modules

### Business Conditions
What conditions control behavior?

### State Flow
What states and transitions exist?

### Roles
Who can perform/view the operation?

### Integration Impact
What other modules are affected?

### Risk
Critical / High / Medium / Low

### Test Coverage
What should be tested?

### Regression
Which existing functionality must be retested?

### Unknowns
What is not confirmed?

---

## 25. DEEP-DIVE STOP CONDITION

Do not claim that investigation is complete until:

[ ] Primary module identified
[ ] Business entity identified
[ ] Frontend flow investigated
[ ] API identified where applicable
[ ] Backend flow investigated where applicable
[ ] Business conditions identified
[ ] Related entities identified
[ ] Related modules identified
[ ] Role/permission impact considered
[ ] State transitions considered
[ ] Data propagation considered
[ ] Integration failure considered
[ ] Regression impact identified
[ ] Unknown behavior documented

If the feature is simple and some areas do not apply, explicitly state why.

---

## 26. GOLDEN RULE

For an ERP/CRM:

DO NOT ASK ONLY:

"Does this page work?"

ASK:

"Does this business operation work correctly across the entire system?"

A successful UI action is not proof of a successful business workflow.
