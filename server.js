
const express = require('express');

const routes = require('./controllers');

const sequelize = require('./config/connection');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Secret secrets',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const exphbs = require('express-handlebars');
const hbs = exphbs.create({    
  // Specify helpers which are only registered on this instance.
  // helpers: {
  //     foo() { return 'FOO!'; },
  //     bar() { return 'BAR!'; }
  // }
});

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

// handlebar
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// session
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// express.static -- middleware takes all content in folder and serve as static assets
app.use(express.static(path.join(__dirname, "public")));
// turn on connection to db and server
// sync means that this is a sequalize taking the models and connecting them to associated database tables.
// force: true is the same as MySQL DROP TABLE IF EXISTS ... Used when a model has been changed
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});
