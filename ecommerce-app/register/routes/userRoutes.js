const router = require('express').Router();
const { registerUser } = require('../controller/userController.js');

try {
    router.post('/register', registerUser);
} catch (err) {
    console.log(err);
}



module.exports = router;