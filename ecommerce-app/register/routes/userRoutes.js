const router = require('express').Router();
const { registerUser, loginUser } = require('../controller/userController.js');

try {
    router.post('/register', registerUser);

    router.post('/login', loginUser);
} catch (err) {
    console.log(err);
}



module.exports = router;