const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Route for displaying the user's dashboard
router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ["id", "title", "content", "created_at"],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
            {
                model: User,
                attributes: ["username"],
            },
        ],
    })
    .then((postData) => {
        // Retrieve post data and render the dashboard template with posts
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", { 
            posts, 
            loggedIn: true 
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route for displaying the edit post page
router.get("/edit/:id", withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: User,
                attributes: ["username"],
            },
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"],
                },
            },
        ],
    })
    .then((postData) => {
        if (!postData) {
            // Handle the case where no post with the given id is found
            res.status(404).json({ message: "No post found with this id" });
            return;
        }

        // Retrieve post data and render the edit-post template with the post
        const post = postData.get({ plain: true });
        res.render("edit-post", { 
            post, 
            loggedIn: true 
        });
    })
    .catch((err) => { res.status(500).json(err); });
});

// Route for displaying the new post page
router.get("/new", withAuth, (req, res) => {
    res.render("new-post");
});

module.exports = router;
