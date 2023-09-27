// Import required modules and data
const { User, Post } = require('../models');
const sequelize = require('../config/connection'); // Import the Sequelize connection
const userData = require('./userData.json');
const postData = require('./postData.json');


// Function to seed users
const seedUsers = async () => {
  await User.bulkCreate(userData);
};

// Function to seed posts
async function seedPosts() {
  await Post.bulkCreate(postData);
}

// Function to seed data
const seedData = async () => {
  await seedUsers();
  await seedPosts();
};

// Synchronize the Sequelize models with the database and then seed the data
sequelize.sync({ force: true }).then(() => {
  seedData().then(() => {
    process.exit(0);
  });
});
