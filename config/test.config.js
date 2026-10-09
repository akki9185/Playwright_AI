module.exports = {
  baseUrl: process.env.BASE_URL || 'http://localhost:8001',
  credentials: {
    superAdmin: {
      email: process.env.SUPER_ADMIN_EMAIL || 'chris.cole@checkwells.com',
      password: process.env.SUPER_ADMIN_PASSWORD || 'Cos@123',
    },
  },
};
