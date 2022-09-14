const express = require('express');

const controllers = require('./controllers');

const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({    
  // Specify helpers which are only registered on this instance.
  helpers: {
      foo() { return 'FOO!'; },
      bar() { return 'BAR!'; }
  }
});

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const path = require('path');

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

// express.static -- middleware takes all content in folder and serve as static assets
app.use(express.static(path.join(__dirname, "public")));
// // // express handlebars
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// turn on connection to db and server
// sync means that this is a sequalize taking the models and connecting them to associated database tables.
// force: true is the same as MySQL DROP TABLE IF EXISTS ... Used when a model has been changed
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});
