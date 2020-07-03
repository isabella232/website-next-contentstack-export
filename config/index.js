if (!process.env.hasOwnProperty('CONTENTSTACK_EMAIL')) {
  console.warn('Missing Contentstack environment variable: CONTENTSTACK_EMAIL. OK if using keys and tokens');
}

if (!process.env.hasOwnProperty('CONTENTSTACK_PASSWORD')) {
  console.warn('Missing Contentstack environment variable: CONTENTSTACK_PASSWORD. OK if using keys and tokens');
}

if (!process.env.hasOwnProperty('CONTENTSTACK_STACK_API_KEY')) {
  console.log('Missing Contentstack environment variable: CONTENTSTACK_STACK_API_KEY');
  process.exit(1);
}

if (!process.env.hasOwnProperty('CONTENTSTACK_STACK_DELIVERY_TOKEN')) {
  console.log('Missing Contentstack environment variable: CONTENTSTACK_STACK_DELIVERY_TOKEN');
  process.exit(1);
}

module.exports = {
  master_locale: {
    // master locale of the stack
    name: 'English - United States',
    code: 'en-us'
  },
  // Credentials
  email: process.env.CONTENTSTACK_EMAIL,   // (optional)
  password: process.env.CONTENTSTACK_PASSWORD, // (optional)
  // Stack API KEY
  source_stack: process.env.CONTENTSTACK_STACK_API_KEY,             // mandatory
  // access_token: process.env.CONTENTSTACK_STACK_DELIVERY_TOKEN, // (deprecated)
  access_token: process.env.CONTENTSTACK_STACK_DELIVERY_TOKEN,
  // We're only reading data from ContentStack, so `management_token` is not required
  // management_token: process.env.CONTENTSTACK_STACK_MANAGEMENT_TOKEN,
  // Path where the exported data will be stored (relative path)
  data: './contents'
};