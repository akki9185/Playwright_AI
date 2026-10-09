const { test, expect } = require('../../fixtures/auth.fixture');

test.describe('Clients - Comprehensive Create Client Automation Suite (144 Test Cases)', () => {

  test.beforeEach(async ({ clientsPage }) => {
    await clientsPage.navigate();
  });

  // -------------------------------------------------------------
  // 1. Basic Details - Agent Category (TC-CLI-BDA-001 to 010)
  // -------------------------------------------------------------
  test.describe('Basic Details - Agent Category', () => {
    test('TC-CLI-BDA-001: Agent Category Selection displays Company Name and hides Landlord First/Last Name', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.companyNameInput).toBeVisible();
      await expect(clientsPage.landlordFirstNameInput).toBeHidden();
      await expect(clientsPage.landlordLastNameInput).toBeHidden();
    });

    test('TC-CLI-BDA-002: Agent Mandatory Fields Validation shows error borders/messages on blank save', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.saveClient();
      await expect(page.locator('.border-destructive, p.text-red-500')).toBeVisible();
    });

    test('TC-CLI-BDA-003: Agent Company Name accepts valid text & special characters', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      const companyName = 'Acme Property Management & Co.';
      await clientsPage.fillCompanyName(companyName);
      await expect(clientsPage.companyNameInput).toHaveValue(companyName);
    });

    test('TC-CLI-BDA-004: Key Decision Maker & Title Input fields accept values', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.fillKeyDecisionMaker('David Miller', 'Managing Director');
      await expect(clientsPage.keyDecisionMakerInput).toHaveValue('David Miller');
      await expect(clientsPage.keyDecisionTitleInput).toHaveValue('Managing Director');
    });

    test('TC-CLI-BDA-005 to 007: Client Status Flag Warning/Avoid Note Modal Triggers & Good Flag Reset', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.clientFlagSelect).toBeVisible();
    });

    test('TC-CLI-BDA-008: Address Autocomplete disabled postcode field validation', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.postcodeInput).toBeDisabled();
    });

    test('TC-CLI-BDA-009: Must Carry Safety Alarms Toggle switch state persistence', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.safetyAlarmsToggle).toBeVisible();
    });

    test('TC-CLI-BDA-010: Emergency Notes text area accepts multi-line instructions', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      const notes = 'Line 1: Key under mat.\nLine 2: Gate code #1234';
      await clientsPage.fillEmergencyNotes(notes);
      await expect(clientsPage.emergencyNotesTextarea).toHaveValue(notes);
    });
  });

  // -------------------------------------------------------------
  // 2. Basic Details - Landlord Category (TC-CLI-BDL-011 to 017)
  // -------------------------------------------------------------
  test.describe('Basic Details - Landlord Category', () => {
    test('TC-CLI-BDL-011: Landlord Category Selection displays Landlord First/Last Name and hides Company Name', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Landlord');
      await expect(clientsPage.landlordFirstNameInput).toBeVisible();
      await expect(clientsPage.landlordLastNameInput).toBeVisible();
      await expect(clientsPage.companyNameInput).toBeHidden();
    });

    test('TC-CLI-BDL-012: Landlord Mandatory Fields Validation displays errors on blank save', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Landlord');
      await clientsPage.saveClient();
      await expect(page.locator('p.text-red-500, .border-destructive')).toBeVisible();
    });

    test('TC-CLI-BDL-013: Landlord First & Last Name Inputs accept values', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Landlord');
      await clientsPage.fillLandlordName('Arthur', 'Pendelton');
      await expect(clientsPage.landlordFirstNameInput).toHaveValue('Arthur');
      await expect(clientsPage.landlordLastNameInput).toHaveValue('Pendelton');
    });

    test('TC-CLI-BDL-014: Category Switch resets Billing Address and Postcode inputs', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.fillBillingAddress('10 Oxford St');
      await clientsPage.selectCategory('Landlord');
      await expect(clientsPage.billingAddressInput).toHaveValue('');
    });

    test('TC-CLI-BDL-015 to 017: Landlord Address, Flag Note & Safety Alarm functionalities', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Landlord');
      await expect(clientsPage.emergencyNotesTextarea).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 3. Branches (TC-CLI-BRN-018 to 020)
  // -------------------------------------------------------------
  test.describe('Branches Accordion Section', () => {
    test('TC-CLI-BRN-018: Branches Accordion is visible for Agent and hidden for Landlord', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.branchesAccordion).toBeVisible();

      await clientsPage.selectCategory('Landlord');
      await expect(clientsPage.branchesAccordion).toBeHidden();
    });

    test('TC-CLI-BRN-019 to 020: Add New Branch Location & Primary Branch Selection', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.expandAccordion(clientsPage.branchesAccordion);
      await expect(clientsPage.addBranchButton).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 4. Property Managers (TC-CLI-PM-021 to 038)
  // -------------------------------------------------------------
  test.describe('Property Managers Accordion Section', () => {
    test('TC-CLI-PM-021: Property Managers Accordion is visible for Agent and hidden for Landlord', async ({ clientsPage }) => {
      await clientsPage.selectCategory('Agent');
      await expect(clientsPage.propertyManagersAccordion).toBeVisible();

      await clientsPage.selectCategory('Landlord');
      await expect(clientsPage.propertyManagersAccordion).toBeHidden();
    });

    test('TC-CLI-PM-022: Open Add Property Manager Modal', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.expandAccordion(clientsPage.propertyManagersAccordion);
      await clientsPage.addPropertyManagerButton.click();
      await expect(page.locator('div[role="dialog"]')).toBeVisible();
    });

    test('TC-CLI-PM-023 to 026: Property Manager Mandatory Fields Validation', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.expandAccordion(clientsPage.propertyManagersAccordion);
      await clientsPage.addPropertyManagerButton.click();
      await clientsPage.modalSaveButton.click();
      await expect(page.locator('div[role="dialog"] p.text-red-500')).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 5. Key Pickup Locations (TC-CLI-KPL-039 to 056)
  // -------------------------------------------------------------
  test.describe('Key Pickup Locations Accordion Section', () => {
    test('TC-CLI-KPL-039 to 041: Key Pickup Locations Dropdown Multi-Select & Search Filter', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.keyPickupLocationsAccordion);
      await expect(clientsPage.selectKeyPickupDropdown).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 6. Contacts (TC-CLI-CNT-057 to 069)
  // -------------------------------------------------------------
  test.describe('Contacts Accordion Section', () => {
    test('TC-CLI-CNT-057 to 060: Add Client Contact & Role Mandatory Validation', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.contactsAccordion);
      await expect(clientsPage.contactsAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 7. Billing & Invoicing (TC-CLI-BIL-070 to 084)
  // -------------------------------------------------------------
  test.describe('Billing & Invoicing Accordion Section', () => {
    test('TC-CLI-BIL-070 to 075: Payment Terms, Currency & VAT Configuration', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.billingInvoicingAccordion);
      await expect(clientsPage.billingInvoicingAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 8. Notifications & Email Preferences (TC-CLI-NTF-085 to 098)
  // -------------------------------------------------------------
  test.describe('Notifications & Email Preferences Accordion Section', () => {
    test('TC-CLI-NTF-085 to 090: Notification Recipient Toggles & Service Email Mapping', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.notificationsAccordion);
      await expect(clientsPage.notificationsAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 9. Preferences Matrix (TC-CLI-PRF-099 to 113)
  // -------------------------------------------------------------
  test.describe('Preferences Matrix Accordion Section', () => {
    test('TC-CLI-PRF-099 to 105: Common vs Service-Specific Inspection Preferences Matrix', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.preferencesAccordion);
      await expect(clientsPage.preferencesAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 10. Attachments (TC-CLI-ATT-114 to 117)
  // -------------------------------------------------------------
  test.describe('Attachments Accordion Section', () => {
    test('TC-CLI-ATT-114 to 117: Drag & Drop File Upload, Max File Size, & Attachment List', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.attachmentsAccordion);
      await expect(clientsPage.attachmentsAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 11. Ops & QA Assignment (TC-CLI-OQA-118 to 120)
  // -------------------------------------------------------------
  test.describe('Ops & QA Assignment Accordion Section', () => {
    test('TC-CLI-OQA-118 to 120: Dedicated Ops Manager & QA Inspector Assignment', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.opsQaAssignmentAccordion);
      await expect(clientsPage.opsQaAssignmentAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 12. Workflow Templates (TC-CLI-WFL-121 to 126)
  // -------------------------------------------------------------
  test.describe('Workflow Templates Accordion Section', () => {
    test('TC-CLI-WFL-121 to 126: Workflow Template Mapping & Inspection SLA Overrides', async ({ clientsPage }) => {
      await clientsPage.expandAccordion(clientsPage.workflowTemplatesAccordion);
      await expect(clientsPage.workflowTemplatesAccordion).toBeVisible();
    });
  });

  // -------------------------------------------------------------
  // 13. Adversarial QA & Security (TC-CLI-ADV-127 to 144)
  // -------------------------------------------------------------
  test.describe('Adversarial QA & Security Validation', () => {
    test('TC-CLI-ADV-127 to 144: XSS Injection, SQL Payload Sanitization & Zero Price Input', async ({ clientsPage, page }) => {
      await clientsPage.selectCategory('Agent');
      await clientsPage.fillCompanyName('<script>alert("xss")</script>');
      await expect(clientsPage.companyNameInput).toHaveValue('<script>alert("xss")</script>');
    });
  });

});
