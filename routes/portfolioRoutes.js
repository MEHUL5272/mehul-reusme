const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/', portfolioController.getHomePage);
router.get('/download-resume', portfolioController.downloadResume);
router.post('/api/contact', portfolioController.submitContact);

module.exports = router;
