// Import necessary modules and dependencies
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Route to get all users (excluding the password attribute)
router.get('/', async (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to get a user by their ID (excluding the password attribute)
router.get('/:id', async (req, res) => {
    User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'content', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            },
            {
                model: Post,
                attributes: ['title'],
            }
        ]
    })
    .then(userData => {
        if (!userData) {
            // Handle the case where no user is found with the given ID and return a 404 status code
            res.status(404).json({
                message: 'No user found with this id'
            });
            return;
        }
        // Send the JSON response with the user data
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to create a new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        // Create a user session upon successful user creation
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            // Send the JSON response with the user data
            res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to log in a user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(userData => {
        if (!userData) {
            // Handle the case where no user is found with the given username and return a 400 status code
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }
        // Check if the provided password matches the user's stored password
        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            // Handle the case where the password is incorrect and return a 400 status code
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        // Create a user session upon successful login
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            // Send the JSON response indicating successful login
            res.json({
                user: userData,
                message: 'You are now logged in!'
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to log out a user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        // Destroy the user session upon logout
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Route to update a user by their ID
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            // Handle the case where no user is found with the given ID and return a 404 status code
            res.status(404).json({
                message: 'No user found with this id'
            });
            return;
        }
        // Send the JSON response with the updated user data
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Route to delete a user by their ID
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            // Handle the case where no user is found with the given ID and return a 404 status code
            res.status(404).json({
                message: 'No user found with this id'
            });
            return;
        }
        // Send the JSON response indicating successful user deletion
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Export the router object so it can be used in other files
module.exports = router;





