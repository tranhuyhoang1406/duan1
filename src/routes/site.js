const siteController = require('../app/controllers/SiteController');
const express = require('express');
const router = express.Router();

// Định nghĩa route GET cho '/search'
router.get('/search', siteController.search);

// Định nghĩa route GET cho '/'
router.get('/', siteController.home);

module.exports = router;
