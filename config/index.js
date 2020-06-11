module.exports = {
  master_locale: {
    // master locale of the stack
    name: 'English - United States',
    code: 'en-us'
  },
  // Credentials
  email: '',   // (optional)
  password: '', // (optional)
  // Stack API KEY
  // Don't hard-code credentials: instead, source from environment variables.
  source_stack: process.env.CONTENTSTACK_STACK_API_KEY,
  access_token: process.env.CONTENTSTACK_STACK_ACCESS_TOKEN,
  management_token: process.env.CONTENTSTACK_STACK_MANAGEMENT_TOKEN,
  // Path where the exported data will be stored (relative path)
  data: './contents'
};