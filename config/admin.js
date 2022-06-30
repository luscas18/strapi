module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e6bf19ddec50cd71896f033ae632eda'),
  },
});
