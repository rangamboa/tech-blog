// This application requires the following packages:
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

// Set up Handlebars.js engine with a custom helper
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'secretblog',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, '../views'));
app.engine('handlebars', hbs.engine);

// app.engine('handlebars', exphbs({
//   layoutsDir: __dirname + '/views/layouts',
//   }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('----- Now listening. -----'));
});
