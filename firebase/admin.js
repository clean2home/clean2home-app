const process = require("process");
const admin = require("firebase-admin");

const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: privateKey.replace(/\\n/g, "\n"),
  }),
});

const dbAdmin = admin.firestore();

module.exports = {
  dbAdmin,
};
