class ClientsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Accordion Triggers
    this.basicDetailsAccordion = page.getByRole('button', { name: /Basic Details/i });
    this.branchesAccordion = page.getByRole('button', { name: /Branches/i });
    this.propertyManagersAccordion = page.getByRole('button', { name: /Property Managers/i });
    this.keyPickupLocationsAccordion = page.getByRole('button', { name: /Key Pickup Locations/i });
    this.contactsAccordion = page.getByRole('button', { name: /Contacts/i });
    this.billingInvoicingAccordion = page.getByRole('button', { name: /Billing & Invoicing/i });
    this.notificationsAccordion = page.getByRole('button', { name: /Notifications & Email Preferences/i });
    this.preferencesAccordion = page.getByRole('button', { name: /Preferences/i });
    this.attachmentsAccordion = page.getByRole('button', { name: /Attachments/i });
    this.opsQaAssignmentAccordion = page.getByRole('button', { name: /Ops and QA Assignment/i });
    this.workflowTemplatesAccordion = page.getByRole('button', { name: /Workflow Templates/i });

    // Basic Details Controls
    this.categorySelect = page.locator('button:has-text("Category"), [name="category"]').first();
    this.companyNameInput = page.locator('input[placeholder*="company name" i], [name="company_name"]');
    this.landlordFirstNameInput = page.locator('input[placeholder*="landlord first name" i], [name="landlord_first_name"]');
    this.landlordLastNameInput = page.locator('input[placeholder*="landlord last name" i], [name="landlord_last_name"]');
    this.keyDecisionMakerInput = page.locator('input[name="key_decision_maker"]');
    this.keyDecisionTitleInput = page.locator('input[name="key_decision_maker_title"]');
    this.billingAddressInput = page.locator('input[placeholder*="billing address" i], [name="address"]');
    this.postcodeInput = page.locator('input[name="post_code"]');
    this.emergencyNotesTextarea = page.locator('textarea[name="emergency_notes"]');
    this.safetyAlarmsToggle = page.locator('button[role="switch"]').first();
    this.clientFlagSelect = page.locator('[name="client_status_flag"]');
    this.flagNoteButton = page.locator('button:has(svg.lucide-message-square)');

    // Branches Section
    this.addBranchButton = page.getByRole('button', { name: /Add Branch/i });
    this.branchNameInput = page.locator('input[name="branch_name"]');
    this.branchAddressInput = page.locator('input[name="branch_address"]');
    this.branchPostcodeInput = page.locator('input[name="branch_postcode"]');

    // Property Managers Section
    this.addPropertyManagerButton = page.getByRole('button', { name: /Add Property Manager/i });
    this.pmRoleInput = page.locator('input[name="role"]');
    this.pmNameInput = page.locator('input[name="name"]');
    this.pmEmailInput = page.locator('input[name="email"]');
    this.pmPhoneInput = page.locator('input[name="office_phone"]');

    // Key Pickup Locations Section
    this.selectKeyPickupDropdown = page.locator('button:has-text("Select pickup locations")');
    this.keyPickupTable = page.locator('table').filter({ hasText: /Pickup Location/i });

    // Global Actions
    this.saveButton = page.getByRole('button', { name: /^Save$/i });
    this.cancelButton = page.getByRole('button', { name: /Cancel/i });
    this.modalSaveButton = page.locator('div[role="dialog"]').getByRole('button', { name: /Save|Confirm/i });
  }

  async navigate() {
    await this.page.goto('/clients/new');
    await this.page.waitForLoadState('networkidle');
  }

  async expandAccordion(accordionLocator) {
    if (await accordionLocator.isVisible()) {
      const isExpanded = await accordionLocator.getAttribute('aria-expanded');
      if (isExpanded !== 'true') {
        await accordionLocator.click();
      }
    }
  }

  async selectCategory(categoryLabel) {
    await this.expandAccordion(this.basicDetailsAccordion);
    await this.categorySelect.click();
    await this.page.getByRole('option', { name: categoryLabel, exact: true }).click();
  }

  async fillCompanyName(name) {
    await this.companyNameInput.fill(name);
  }

  async fillLandlordName(firstName, lastName) {
    if (firstName) await this.landlordFirstNameInput.fill(firstName);
    if (lastName) await this.landlordLastNameInput.fill(lastName);
  }

  async fillKeyDecisionMaker(name, title) {
    if (name) await this.keyDecisionMakerInput.fill(name);
    if (title) await this.keyDecisionTitleInput.fill(title);
  }

  async fillBillingAddress(address) {
    await this.billingAddressInput.fill(address);
  }

  async fillEmergencyNotes(notes) {
    await this.emergencyNotesTextarea.fill(notes);
  }

  async saveClient() {
    await this.saveButton.click();
  }
}

module.exports = { ClientsPage };
