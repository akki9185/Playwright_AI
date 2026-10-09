const { test: base } = require('@playwright/test');
const { ClientsPage } = require('../pages/ClientsPage');

const test = base.extend({
  clientsPage: async ({ page }, use) => {
    const clientsPage = new ClientsPage(page);
    await use(clientsPage);
  },
});

module.exports = { test, expect: base.expect };
