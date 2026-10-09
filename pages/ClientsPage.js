class ClientsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Accordion Triggers
    this.basicDetailsAccordion = page.getByRole('button', { name: 'Basic Details' });
    this.branchesAccordion = page.getByRole('button', { name: 'Branches' }).first();
    this.propertyManagersAccordion = page.getByRole('button', { name: 'Property Managers' }).first();
    this.keyPickupLocationsAccordion = page.getByRole('button', { name: 'Key Pickup Locations' });
    this.contactsAccordion = page.getByRole('button', { name: 'Other Contacts' });
    this.billingInvoicingAccordion = page.getByRole('button', { name: 'Pricing' });
    this.notificationsAccordion = page.getByRole('button', { name: 'Automated Communications' });
    this.preferencesAccordion = page.getByRole('button', { name: 'Service Preference' });
    this.attachmentsAccordion = page.getByRole('button', { name: 'Attachments' });
    this.opsQaAssignmentAccordion = page.getByRole('button', { name: 'Ops and QA Assignment' });
    this.workflowTemplatesAccordion = page.getByRole('button', { name: 'Workflow Templates' });

    // Basic Details Controls
    this.categorySelect = page.locator('div:has(> label:text("Category"))').getByRole('combobox');
    this.companyNameInput = page.locator('input[name="company"]');
    this.landlordFirstNameInput = page.locator('input[name="landlord_first_name"]');
    this.landlordLastNameInput = page.locator('input[name="landlord_last_name"]');
    this.keyDecisionMakerInput = page.locator('input[name="preferences.key_decision_maker"]');
    this.keyDecisionTitleInput = page.locator('input[name="preferences.key_decision_title"]');
    this.billingAddressInput = page.locator('input[placeholder*="Start typing address" i]');
    this.postcodeInput = page.locator('input[name="post_code"]');
    this.emergencyNotesTextarea = page.locator('textarea[name="emergency_notes"]');
    this.safetyAlarmsToggle = page.locator('#is_carry_safety_alarms');
    this.clientFlagSelect = page.locator('[name="client_status_flag"]');
    this.flagNoteButton = page.locator('button:has(svg.lucide-message-square)');

    // Branches Section
    this.addBranchButton = page.getByRole('button', { name: 'Add Branch' });
    this.branchNameInput = page.locator('input[name="branch_name"]');
    this.branchAddressInput = page.locator('input[name="branch_address"]');
    this.branchPostcodeInput = page.locator('input[name="branch_postcode"]');

    // Property Managers Section
    this.addPropertyManagerButton = page.getByRole('button', { name: 'Add Manager' });
    this.pmRoleInput = page.locator('input[name="role"]');
    this.pmNameInput = page.locator('input[name="name"]');
    this.pmEmailInput = page.locator('input[name="email"]');
    this.pmPhoneInput = page.locator('input[name="office_phone"]');

    // Key Pickup Locations Section
    this.selectKeyPickupDropdown = page.locator('button:has-text("Select pickup locations")');
    this.keyPickupTable = page.locator('table').filter({ hasText: 'Pickup Location' });

    // Global Actions
    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.modalSaveButton = page.locator('div[role="dialog"]').getByRole('button', { name: 'Save' });
  }

  async navigate() {
    await this.page.goto('/clients/new');
    await this.page.waitForLoadState('networkidle');
  }

  async expandAccordion(accordionLocator) {
    if (await accordionLocator.isVisible()) {
      await accordionLocator.scrollIntoViewIfNeeded();
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
