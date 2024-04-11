const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

// Import route files
const homeRoutes = require('./controllers/homeRoutes');
const apiRoutes = require('./controllers/apiRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes');

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

// Use route files
app.use('/', homeRoutes);
app.use('/api', apiRoutes);
app.use('/dashboard', dashboardRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
