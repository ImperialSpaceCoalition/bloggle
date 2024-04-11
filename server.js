// Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers')

const path = require('path');

// Port
const PORT = process.env.PORT || 3001;

// Express app
const app = express();

// Set up Handlebars.js engine
const hbs = exphbs.create({});

// Session middleware
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
app.use(routes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
