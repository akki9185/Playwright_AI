const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ClientsPage } = require('../pages/ClientsPage');
const testConfig = require('../config/test.config');

const test = base.extend({
  clientsPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    try {
      await loginPage.login(
        testConfig.credentials.superAdmin.email,
        testConfig.credentials.superAdmin.password
      );
    } catch (e) {
      console.warn('Login attempt:', e.message);
    }
    const clientsPage = new ClientsPage(page);
    await use(clientsPage);
  },
});

module.exports = { test, expect: base.expect };
