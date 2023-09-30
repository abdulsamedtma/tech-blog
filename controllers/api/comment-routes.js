// Import necessary modules and dependencies
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all comments
router.get('/', (req, res) => {
    // Find all comments in the database
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Route to get a comment by its ID
router.get('/:id', (req, res) => {
    // Find a specific comment by its ID
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to create a new comment, requires authentication
router.post('/', withAuth, (req, res) => {
    // Check if there's an active user session
    if (req.session) {
        // Create a new comment using data from the request body
        Comment.create({
           
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// Export the router module
module.exports = router;
