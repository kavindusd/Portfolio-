const express = require('express');
const router = express.Router();
const { submitMessage } = require('../controllers/contactController');
const { getMessages } = require('../controllers/contactController');
const {protect} = require('../middleware/authMiddleware');

//define the routes
router.route('/').post(submitMessage);

router.route('/messages').get(protect, getMessages); // add authintication middleware here

module.exports = router;