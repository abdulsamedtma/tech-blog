const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret', // Secret used to sign the session ID cookie.
  cookie: {
      maxAge: 300000, // Maximum session age in milliseconds (5 minutes in this case).
      httpOnly: true, // The cookie is only accessible via HTTP.
      secure: false, // Insecure cookie (not using HTTPS).
      sameSite: 'strict', // Cookies are only sent in a first-party context.
  },
  resave: false, // Do not save session data if not modified.
  saveUninitialized: true, // Save uninitialized (new) sessions.
  store: new SequelizeStore({
      db: sequelize // Use Sequelize to store session data in the database.
  })
};

app.use(session(sess)); // Use the session middleware to manage sessions.

// Inform Express.js on which template engine to use (Handlebars in this case).
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // Parse JSON request bodies.
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies.
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory.

app.use(routes); // Use the defined routes.

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}/`)); // Start the server.
});
