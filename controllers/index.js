// Import necessary modules and route files
const router = require('express').Router();
const apiRoutes = require('./api'); // This includes API routes
const homeRoutes = require('./home-routes.js'); // This includes routes for the homepage
const dashboardRoutes = require('./dashboard-routes.js'); // This includes routes for the user dashboard

// Use the imported route modules
router.use('/api', apiRoutes); // All API routes will be prefixed with '/api'
router.use('/', homeRoutes); // All routes for the homepage will be at the root '/'
router.use('/dashboard', dashboardRoutes); // All routes for the user dashboard will be prefixed with '/dashboard'

// Handle 404 - Page not found
router.use((req, res) => {
    res.status(404).end(); // If no route matches, return a 404 status
});

// Export the router for use in your Express application
module.exports = router;
