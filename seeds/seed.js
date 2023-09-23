
// Import seed functions for users, posts, and comments
const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

// Import the Sequelize connection
const sequelize = require('../config/connection');

// Define a function to seed the database
const seedAll = async () => {
    // Synchronize the Sequelize models with the database and force a refresh
    await sequelize.sync({ force: true });

    // Seed users, posts, and comments data
    await seedUsers();
    await seedPosts();
    await seedComments();

    // Exit the process after seeding is complete
    process.exit(0);
};

// Call the seedAll function to start the seeding process
seedAll();


