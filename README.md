# Tech Blog CMS

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Setting Up the Database](#setting-up-the-database)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

Tech Blog CMS is a fully-fledged Content Management System designed exclusively for tech enthusiasts and developers. It provides a platform where developers can write, share, and discuss technical concepts, recent advancements, and new technologies. With a user-friendly interface and robust features, this CMS-style blog site enables developers to engage in meaningful discussions, publish articles, and stay up-to-date with the tech world.

## Key Features

- **User Authentication:** Create a secure account and log in to access all site features.
- **Homepage:** View a dynamic feed of tech-related articles and blog posts.
- **Dashboard:** Manage your published articles and write new posts.
- **Comments:** Engage with the community by leaving comments on blog posts.
- **Session Management:** Stay logged in and enjoy a seamless browsing experience.
- **Responsive Design:** Access the site from any device or screen size.
- **Deployment:** The application is deployed and accessible on Heroku.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Handlebars.js
- **Backend:** Node.js, Express.js
- **Database:** MySQL, Sequelize ORM
- **Authentication:** express-session
- **Deployment:** Heroku

## Getting Started

## Installation

To run this application locally, you will need to install the following Node.js packages using npm. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your system.

## Setting Up the Database
1. Create a .env file in the project's root directory and configure your database connection:
```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

```
Replace your_database_name, your_database_user, and your_database_password with your actual database credentials.

2. Set up the database schema by running the following command:

```bash
   npm run setupdb
   ```
   This will create the required tables in your MySQL database.

 3. Run the application:
 
 ```bash
 npm start
 ```
**Access**: Access the website through your web browser at `http://localhost:3001` or the specified port.
   [Click Here to access deployed site on Heroku](https://tech-blogpost-3a2bb1ffc243.herokuapp.com)

## Usage

1. Homepage: Visit the homepage to explore a curated feed of tech-related articles and blog posts.

2. Sign Up: Create an account to start publishing your articles and joining discussions.

4. Log In: Log in to access your dashboard, manage posts, and leave comments.

5. Dashboard: From your dashboard, you can create new articles, edit existing ones, or delete posts.

6. Comments: Engage with the community by commenting on posts and sharing your insights.

7. Log Out: Safely log out of your account when you're done.
   
## License

This project is licensed under the [MIT License](LICENSE). See the [License](LICENSE) file for more details.

## Acknowledgments

Special thanks to our TA for taking the time to help explain how to use handlebars which is a popular templating engine for building dynamic web pages and rendering HTML templates in web applications. It works by allowing you to define HTML templates with placeholders (variables) and logic that can be dynamically filled in with data to produce the final HTML output.

## Contribution

We welcome contributions from the community to enhance and expand the Tech Blog CMS Application. To contribute:

1. Fork the repository and create a dedicated branch for your changes.

2. Implement your improvements, ensuring that existing tests pass.

3. Document your changes and update any relevant documentation as necessary.

4. Submit a pull request, clearly explaining your modifications and their benefits.

5. Your contribution will undergo review, and upon approval, it will be merged into the main codebase.


## Questions

Have additional questions? Click the links below to reach us through our GitHub account or Email address.

- [Link to Github URL](https://github.com/abdulsamedtma/tech-blog)
- [Connect with Abdul via Email](mailto:abdulsamedtma@gmail.com)
- [Click to view deployed site on Heroku](https://tech-blogpost-3a2bb1ffc243.herokuapp.com)


"Embrace the digital frontier, where every line of code is an opportunity and every bug is a challenge waiting to be conquered. Welcome to the world of tech, where innovation knows no bounds. Let's write the future, one keystroke at a time! 🚀👩‍💻👨‍💻"



                  This Tech Blog App was created with ❤️ by Abdul. ✨  Every day is a learning day!  ✨
