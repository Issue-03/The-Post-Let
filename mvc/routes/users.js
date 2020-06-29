const express = require('express');
const router = express.Router();
// const middleware = require("./middleware/middleware");

const usersCtrl = require("../controllers/users");
// const fakeUsersCtrl = require("../controllers/fake-users");

// Register and Login
router.post("/register", usersCtrl.register);
router.post("/login", usersCtrl.login);

module.exports = router;
