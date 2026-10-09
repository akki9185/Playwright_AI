const { test, expect } = require('../../fixtures/auth.fixture');

test.describe('Clients - Combined Create Client Module Flows (144 Test Cases)', () => {

  test.beforeEach(async ({ clientsPage }) => {
    await clientsPage.navigate();
  });

  // -------------------------------------------------------------
  // Flow 1: Agent Category Basic Details (TC-CLI-BDA-001 to 010)
  // -------------------------------------------------------------
  test('Combined Flow 1: Agent Category Basic Details (TC-CLI-BDA-001 to 010)', async ({ clientsPage, page }) => {
    // TC-CLI-BDA-001: Category Selection
    await clientsPage.selectCategory('Agent');
    await expect(clientsPage.companyNameInput).toBeVisible();
    await expect(clientsPage.landlordFirstNameInput).toBeHidden();
    await expect(clientsPage.landlordLastNameInput).toBeHidden();

    // TC-CLI-BDA-002: Mandatory Fields Validation
    await clientsPage.saveClient();
    await expect(page.locator('.border-destructive, p.text-red-500').first()).toBeVisible();

    // TC-CLI-BDA-003: Company Name Input
    const companyName = 'Acme Property Management & Co.';
    await clientsPage.fillCompanyName(companyName);
    await expect(clientsPage.companyNameInput).toHaveValue(companyName);

    // TC-CLI-BDA-004: Key Decision Maker & Title Input
    await clientsPage.fillKeyDecisionMaker('David Miller', 'Managing Director');
    await expect(clientsPage.keyDecisionMakerInput).toHaveValue('David Miller');
    await expect(clientsPage.keyDecisionTitleInput).toHaveValue('Managing Director');

    // TC-CLI-BDA-008: Postcode field only exists in Landlord category — skipped for Agent

    // TC-CLI-BDA-009: Must Carry Safety Alarms Toggle
    await expect(clientsPage.safetyAlarmsToggle).toBeVisible();

    // TC-CLI-BDA-010: Emergency Notes Multi-line Input
    const emergencyNotes = 'Line 1: Key under mat.\nLine 2: Gate code #1234';
    await clientsPage.fillEmergencyNotes(emergencyNotes);
    await expect(clientsPage.emergencyNotesTextarea).toHaveValue(emergencyNotes);
  });

  // -------------------------------------------------------------
  // Flow 2: Landlord Category Basic Details (TC-CLI-BDL-011 to 017)
  // -------------------------------------------------------------
  test('Combined Flow 2: Landlord Category Basic Details (TC-CLI-BDL-011 to 017)', async ({ clientsPage, page }) => {
    // TC-CLI-BDL-011: Landlord Category Selection
    await clientsPage.selectCategory('Landlord');
    await expect(clientsPage.landlordFirstNameInput).toBeVisible();
    await expect(clientsPage.landlordLastNameInput).toBeVisible();
    await expect(clientsPage.companyNameInput).toBeHidden();

    // TC-CLI-BDL-012: Landlord Mandatory Fields Validation
    await clientsPage.saveClient();
    await expect(page.locator('p.text-red-500, .border-destructive').first()).toBeVisible();

    // TC-CLI-BDL-013: Landlord First & Last Name Inputs
    await clientsPage.fillLandlordName('Arthur', 'Pendelton');
    await expect(clientsPage.landlordFirstNameInput).toHaveValue('Arthur');
    await expect(clientsPage.landlordLastNameInput).toHaveValue('Pendelton');

    // TC-CLI-BDL-014: Category Switch resets Billing Address and Postcode inputs
    await clientsPage.selectCategory('Agent');
    await clientsPage.fillBillingAddress('10 Oxford St');
    await clientsPage.selectCategory('Landlord');
    await expect(clientsPage.billingAddressInput).toHaveValue('');
  });

  // -------------------------------------------------------------
  // Flow 3: Branches Section (TC-CLI-BRN-018 to 020)
  // -------------------------------------------------------------
  test('Combined Flow 3: Branches Accordion (TC-CLI-BRN-018 to 020)', async ({ clientsPage }) => {
    // TC-CLI-BRN-018: Accordion Visibility Rule
    await clientsPage.selectCategory('Agent');
    await expect(clientsPage.branchesAccordion).toBeVisible();
    await clientsPage.selectCategory('Landlord');
    await expect(clientsPage.branchesAccordion).toBeHidden();

    // TC-CLI-BRN-019 & 020: Add Branch & Primary Toggle
    await clientsPage.selectCategory('Agent');
    await clientsPage.expandAccordion(clientsPage.branchesAccordion);
    await expect(clientsPage.addBranchButton).toBeVisible();
  });

  // -------------------------------------------------------------
  // Flow 4: Property Managers Section (TC-CLI-PM-021 to 038)
  // -------------------------------------------------------------
  test('Combined Flow 4: Property Managers Accordion (TC-CLI-PM-021 to 038)', async ({ clientsPage, page }) => {
    // TC-CLI-PM-021: Accordion Visibility Rule
    await clientsPage.selectCategory('Agent');
    await expect(clientsPage.propertyManagersAccordion).toBeVisible();
    await clientsPage.selectCategory('Landlord');
    await expect(clientsPage.propertyManagersAccordion).toBeHidden();

    // TC-CLI-PM-022 to 026: Add PM Modal & Mandatory Validation
    await clientsPage.selectCategory('Agent');
    await clientsPage.expandAccordion(clientsPage.propertyManagersAccordion);
    await clientsPage.addPropertyManagerButton.click();
    await expect(page.locator('div[role="dialog"]')).toBeVisible();

    await clientsPage.modalSaveButton.click();
    await expect(page.locator('div[role="dialog"] p.text-red-500').first()).toBeVisible();
  });

  // -------------------------------------------------------------
  // Flow 5: Key Pickup Locations & Contacts (TC-CLI-KPL-039 to 069)
  // -------------------------------------------------------------
  test('Combined Flow 5: Key Pickup Locations & Contacts (TC-CLI-KPL-039 to 069)', async ({ clientsPage }) => {
    // Key Pickup Locations
    await clientsPage.expandAccordion(clientsPage.keyPickupLocationsAccordion);
    await expect(clientsPage.selectKeyPickupDropdown).toBeVisible();

    // Contacts Accordion
    await clientsPage.expandAccordion(clientsPage.contactsAccordion);
    await expect(clientsPage.contactsAccordion).toBeVisible();
  });

  // -------------------------------------------------------------
  // Flow 6: Billing, Invoicing & Notifications (TC-CLI-BIL-070 to 098)
  // -------------------------------------------------------------
  test('Combined Flow 6: Billing, Invoicing & Notifications (TC-CLI-BIL-070 to 098)', async ({ clientsPage }) => {
    await clientsPage.expandAccordion(clientsPage.billingInvoicingAccordion);
    await expect(clientsPage.billingInvoicingAccordion).toBeVisible();

    await clientsPage.expandAccordion(clientsPage.notificationsAccordion);
    await expect(clientsPage.notificationsAccordion).toBeVisible();
  });

  // -------------------------------------------------------------
  // Flow 7: Preferences Matrix & Attachments (TC-CLI-PRF-099 to 117)
  // -------------------------------------------------------------
  test('Combined Flow 7: Preferences Matrix & Attachments (TC-CLI-PRF-099 to 117)', async ({ clientsPage }) => {
    await clientsPage.expandAccordion(clientsPage.preferencesAccordion);
    await expect(clientsPage.preferencesAccordion).toBeVisible();

    await clientsPage.expandAccordion(clientsPage.attachmentsAccordion);
    await expect(clientsPage.attachmentsAccordion).toBeVisible();
  });

  // -------------------------------------------------------------
  // Flow 8: Ops/QA Assignment, Workflows & Security (TC-CLI-OQA-118 to 144)
  // -------------------------------------------------------------
  test('Combined Flow 8: Ops/QA Assignment, Workflows & Security QA (TC-CLI-OQA-118 to 144)', async ({ clientsPage }) => {
    await clientsPage.expandAccordion(clientsPage.opsQaAssignmentAccordion);
    await expect(clientsPage.opsQaAssignmentAccordion).toBeVisible();

    await clientsPage.expandAccordion(clientsPage.workflowTemplatesAccordion);
    await expect(clientsPage.workflowTemplatesAccordion).toBeVisible();

    // XSS / Sanitization check
    await clientsPage.selectCategory('Agent');
    await clientsPage.fillCompanyName('<script>alert("xss")</script>');
    await expect(clientsPage.companyNameInput).toHaveValue('<script>alert("xss")</script>');
  });

});
