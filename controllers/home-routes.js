// Import necessary modules and models
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

// GET the homepage with all posts and their associated comments
router.get('/', (req, res) => {
    // Find all posts, including associated comments and usernames
    Post.findAll({
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
        // Render the homepage view with the posts and indicate if the user is logged in
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET the login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect them to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // Otherwise, render the login page
    res.render('login');
});

// GET the signup page
router.get('/signup', (req, res) => {
    // Render the signup page
    res.render('signup');
});

// GET a single post by its ID and its associated comments
router.get('/post/:id', (req, res) => {
    // Find a post by its ID, including associated user, comments, and usernames
    Post.findOne({
        where: {
            id: req.params.id
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // Convert the retrieved data to a plain object for rendering
        const post = dbPostData.get({ plain: true });
        // Render the single-post view with the post data and indicate if the user is logged in
        res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a specific post and its associated comments for further actions
router.get('/posts-comments/:id', (req, res) => {
    // Find a post by its ID, including associated user, comments, and usernames
    Post.findOne({
        where: {
            id: req.params.id
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // Convert the retrieved data to a plain object for rendering
        const post = dbPostData.get({ plain: true });
        // Render the posts-comments view with the post data and indicate if the user is logged in
        res.render('posts-comments', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Export the router for use in other parts of the application
module.exports = router;
