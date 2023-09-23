// Import necessary modules and middleware
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET user's dashboard with their posts and associated comments
router.get('/', withAuth, (req, res) => {
    // Find all posts belonging to the currently authenticated user, including associated comments and usernames
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // Map the retrieved data to plain objects for rendering
        const posts = dbPostData.map(post => post.get({ plain: true }));
        // Render the dashboard view with the posts and indicate that the user is logged in
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET the page to edit a specific post
router.get('/edit/:id', withAuth, (req, res) => {
    // Find a post by its ID, including associated user, comments, and usernames
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // Convert the retrieved data to a plain object for rendering
        const post = dbPostData.get({ plain: true });
        // Render the edit-post view with the post data and indicate that the user is logged in
        res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET the page to create a new post
router.get('/new', (req, res) => {
    // Render the new-post view for creating a new post
    res.render('new-post');
});

// Export the router for use in other parts of the application
module.exports = router;
