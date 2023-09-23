// Import the Post model from the models directory
const { Post } = require('../models');

// Sample data for seeding the database with posts
const postData = [
    {
        // Post title: Ethereum Price Surge
        title: "Ethereum Price Surge",
        content: "In this post, we explore the sudden surge in the value of Ethereum, a popular cryptocurrency. Ethereum experienced an impressive 8% increase, reaching $2,587, though it still remained 40% below its all-time high of over $4,300 earlier in the month. This surge also had a positive impact on Bitcoin's value, which rose by 3.7% to $36,977. The trading activity was relatively calm due to holidays in London and the U.S., making it an interesting development in the world of digital currencies.",
        user_id: 1
    },
    {
        // Post title: npm 7 Release Highlights
        title: "npm 7 Release Highlights",
        content: "This post delves into the release highlights of npm 7, the latest version of the Node Package Manager. npm 7 has recently been added to the npm registry and is now the default version accessible via 'npm install --global npm.' One of its standout features is the introduction of 'Workspaces,' which addresses a highly requested functionality by allowing users to manage multiple packages within a single top-level root package. This release marks a significant step forward for the JavaScript development ecosystem.",
        user_id: 2
    },
    {
        // Post title: Enhanced Safety Features for Chrome Extensions
        title: "Enhanced Safety Features for Chrome Extensions",
        content: "Google is rolling out enhanced safety features for Chrome extensions to improve user security. These features build upon the existing Enhanced Safe Browsing feature, introduced last year, which offers improved warnings against phishing sites. To be considered trustworthy, Chrome extensions must now adhere to Google's Developer Program Policies. The post discusses how these safety measures aim to protect users while browsing the web using Chrome.",
        user_id: 2
    },
    {
        // Post title: The Role of Autonomous Robots in Warfare
        title: "The Role of Autonomous Robots in Warfare",
        content: "This thought-provoking post explores the evolving role of autonomous robots in modern warfare. Elke Schwarz, a senior lecturer in political theory at Queen Mary University London and affiliated with the International Committee for Robot Arms Control, emphasizes the need to move beyond political debates about definitions. Instead, she calls for a focus on understanding the specific functionality of autonomous systems used in warfare. The post raises crucial questions about the ethical and strategic implications of these technologies.",
        user_id: 5
    },
    {
        // Post title: Google's Privacy Initiative for Android Apps
        title: "Google's Privacy Initiative for Android Apps",
        content: "Google is implementing changes to enhance user privacy for those who opt out of personalized ads within Android apps. The post details these privacy initiatives, including alterations to how unique device identifiers (known as 'Advertising IDs') are managed. After a user opts out of personalized ads, Google will replace their 'Advertising ID' with a 'string of zeros.' This initiative represents a significant step towards improving user privacy in the Android app ecosystem.",
        user_id: 4
    }
]

// Function to seed posts by bulk creating post data
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function for use in other modules
module.exports = seedPosts;
