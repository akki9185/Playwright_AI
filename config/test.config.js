module.exports = {
  baseUrl: process.env.BASE_URL || 'https://checkwells.iihdev.com',
  credentials: {
    superAdmin: {
      email: process.env.SUPER_ADMIN_EMAIL || 'chris.cole@checkwells.com',
      password: process.env.SUPER_ADMIN_PASSWORD || 'Cos@123',
    },
  },
};
