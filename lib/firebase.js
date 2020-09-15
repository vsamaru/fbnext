import admin from 'firebase-admin';

try {
  admin.initializeApp({
  project_id: "vsamaru",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDsk90zliTSwJY4\nPg5/jGWZAbpXvofnyV/OYgboqO+AfuInfEdTJNoSv+z9kH/9AkRV0qtNxxnAYqYL\nVxEbjNTAJD6GZTwDOC7XsKgTY9JbQ0EhC/5aKWDMJDKTf7w3Zl0F8R93elTQhVAi\njPBSxVOxtc65W7Yu8xQyES9/9SmlEhtpPQKnlGgdhxKub1W0pPGJQT9xLPsg3EdE\nMliuQrh4lxryZBbsmzIhG1oc27LkvnwXrYHn9rwPyXqqFz1a40WMUlTW407lhezY\nMF1Q51GMs2qDO9ROYNFI9+7G3hQpoVQeu9qGZkE6gMytRy5CTIAACwCGesrBs8Ib\nXuxH5ZbVAgMBAAECggEAOVDmk8+xuqyliFlCjnTPjYcNZCI5T3bqgvgdZ+M76UP0\nWzAhIJvqSIYert0CISRaNXe9gHG3A7TyuQceUjAnwChXzJw8sqP7N07pnY7+4RT1\nc8Hx3NqvBK5VYYZeLYbbjSu6nanx3/YYcNJ4C/maOhEL1T0Ksau7LhkbSrM1JHQ8\nDlOf2g6y5yykQ6kPPJNqrgi25zfDg9q32qG3g433Wdc+lxkVoPJLpMtL0nqf1zi1\nYrx2a+lg4CI4wItdaO1Y2gJ2NMzzA3oDISEXI6DrPPO990zJK5oD0W+G/0qedkkF\nDL1HM56fLOvgndYTGPiZa0Tj1N+AqDsGmh6DAzc1iQKBgQD8dBbpdpGu26ZFOFz+\nRvZisZiiSjZmJAzS51C7bPsnppHFLLmXMIuQquMpY9ohMq8jCrj3M9o/JRPmip7r\npK61hm5ixRu1L78sIQpyE5OJ6n6nHh2z1kodhw3LWpu+Ek1fNeVX7jE5EudiQMDe\nAWrfOnQCbQMVqzFqI9thmbfz6QKBgQDv5q3r27Ce+HPQmKmq2ggBXLmc3fqY0Jzp\nvPAnsUFkXSJcp74Z4khFIHoyYQGxZW8Gcb9u+kx7aLwR7YrrA69prBp2cdbS3zuT\nYPZLc4AQdtKs1HTTY9S4JM8GNvEfrEEPFdtNv5hNNrGamsl96Nh2uHwX66oPQtxx\nVZhINoAUDQKBgFCM/g6KDZvca+YkQM/FdrIw9oG56jeXAxx8QC89a7nQFSzzw1fx\nXmbPj+HSAXScRnOI5VHDEr0ZKItj6adIiZJUDX6oY9nhHT+IX1vc0TOtRbIvEs0h\n784SHJ2pEI6KKnPZr47p6nzKglfAT4nGrAIEFaX8gIJ2eDLktAglUyOZAoGAU80D\n4gjq6I0nf61kTz88XqVyXR6ZhDoTJf8O8P6VNibmcvFRkZ8e2a7foKuMONiS8PBZ\nC745az6Ju8V7ql6uLr6ku81GWoEKQZA0WOTuzlGDhEXuzUzpKK4K90PH9OVqEIf1\nBHKyE/7QCY6aZfYpb0dAaeazkAMuGBTrTgZjtR0CgYEAiNixor81CyrD5/Oq8YXn\n9YrWh0LXQjS1zJ2VYcpc642aZvb2vy9731aF78Nyx2q4lBm4ZHBhzvk20oWqOm8s\nR7+CBMz/M4mk2O2k1kD+5yYp6seqgoHqgFVQWsAl3Dnf89TqETi3hM+13N1N05rx\nq7l75OlHdKqYDGFdayw3kRU=\n-----END PRIVATE KEY-----\n",
  client_email: "vsamaru@appspot.gserviceaccount.com"
    }),
    databaseURL: "https://vsamaru.firebaseio.com"
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
