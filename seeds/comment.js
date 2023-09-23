// Import the Comment model from the models directory
const { Comment } = require('../models');

// Define an array of comment data objects
const commentData = [
    {
        comment_text: "No way! This is amazing.",
        user_id: 2,
        post_id: 3,
    },
    {
        comment_text: "First Comment :)",
        user_id: 2,
        post_id: 5,
    },
    {
        comment_text: "Is this believable? I have my doubts.",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "Nice post! Keep it up.",
        user_id: 3,
        post_id: 5,
    },
    {
        comment_text: "Groundbreaking stuff, going to follow this post closely.",
        user_id: 3,
        post_id: 4,
    },
    {
        comment_text: "As if! I can't believe it.",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "Right, you're entitled to your own opinion.",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text: "Awesome, I'd like to know more about this topic.",
        user_id: 2,
        post_id: 1,
    }
];

// Function to seed comments by bulk creating comment data
const seedComments = () => Comment.bulkCreate(commentData);

// Export the seedComments function for use in other modules
module.exports = seedComments;
