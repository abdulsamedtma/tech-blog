// Import required dependencies and modules
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Define an asynchronous function for seeding the database
const seedDatabase = async () => {
    // Synchronize the Sequelize models with the database and force a reset
    await sequelize.sync({ force: true });

    // Bulk insert user data with individual hooks and returning data
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Bulk insert post data
    await Post.bulkCreate(postData);

    // Bulk insert comment data
    await Comment.bulkCreate(commentData);

    // Exit the Node.js process with a status code of 0 to indicate successful completion
    process.exit(0);
};

// Execute the seedDatabase function to start the seeding process
seedDatabase();
