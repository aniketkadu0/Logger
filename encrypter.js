const Cryptr = require("cryptr");
const cryptr = new Cryptr("baby");

const host = cryptr.encrypt("srv921.hstgr.io");
const user = cryptr.encrypt("u688998899_quizr");
const password = cryptr.encrypt("Aniket1996@");
const database = cryptr.encrypt("u688998899_logs");

const decryptedString = cryptr.decrypt(encryptedString);
