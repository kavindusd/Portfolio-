const express = require('express');
const router = express.Router();
const { getProjects, createProject} = require('../controllers/projectControllers');
const {protect} = require('../middleware/authMiddleware');


//define route to fetch all projects
router.route('/').get(getProjects);
router.route('/').post(protect, createProject); // authmiddleware use when posting new projects

//import router make it globally use
module.exports = router;