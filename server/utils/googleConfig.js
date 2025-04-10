const { google } = require('googleapis');
const dotenv = require('dotenv')
dotenv.config()


// Load Google Client ID and Client Secret from environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI; // Add this to your .env file

// Create OAuth2 client with the necessary credentials
exports.oauth2client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'postmessage'
    // REDIRECT_URI // Make sure this matches the one set in Google Developer Console
    // 'https://oauth2.googleapis.com/token'
);

// Add error handling to check if client ID and secret are missing
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !REDIRECT_URI) {
    console.error('Google OAuth credentials are missing or invalid');
    process.exit(1); // Exit the application if the credentials are missing
}
