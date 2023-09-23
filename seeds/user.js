// Import the User model from the models directory
const { User } = require('../models');

// Revised sample user data for database seeding
const userData = [
    {
        // User with username 'john_doe'
        username: "john_doe",
        email: "john.doe@example.com",
        password: "securepassword123"
    },
    {
        // User with username 'jane_smith'
        username: "jane_smith",
        email: "jane.smith@example.com",
        password: "strongpass456"
    },
    {
        // User with username 'alex_jones'
        username: "alex_jones",
        email: "alex.jones@example.com",
        password: "secret321pass"
    },
    {
        // User with username 'susan_wilson'
        username: "susan_wilson",
        email: "susan.wilson@example.com",
        password: "password789"
    },
    {
        // User with username 'chris_parker'
        username: "chris_parker",
        email: "chris.parker@example.com",
        password: "mypassword123"
    }
]

// Function to seed users by bulk creating user data
const seedUsers = () => User.bulkCreate(userData);

// Export the seedUsers function for use in other modules
module.exports = seedUsers;

