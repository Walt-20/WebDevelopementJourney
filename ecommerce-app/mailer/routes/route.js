const router = require('express').Router();

const { contact } = require('../controller/appController.js')

/** HTTP request */
router.post('/contact', contact);

module.exports = router;