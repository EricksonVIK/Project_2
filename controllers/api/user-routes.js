const router = require("express").Router();
const { User, Stock } = require("../../models");

// get all users - minus password
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Stock,
        attributes: ["id", "name", "ticker", "shares", "cost"]
      },
    ],
  })
  .then((dbUserData) => {
    res.json(dbUserData)
    res.render('dashboard');
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get 1 user with stocks
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Stock,
        attributes: ["id", "name", "ticker", "shares", "cost"]
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      ((dbStockData) => {
        res.json(dbStockData)
        res.render('dashboard');
      })
      })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then(dbUserData => {
      console.log(dbUserData)
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.firstName = dbUserData.firstName;
        req.session.lastName = dbUserData.lastName;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    });  
});

// delete
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // declare session variables
      console.log('---------------- User Logged In ----------------')

      console.log(dbUserData)
      req.session.user_id = dbUserData.id;
      req.session.firstName = dbUserData.firstName;
      req.session.lastName = dbUserData.lastName;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      console.log('-------------USER LOGGED OUT?---------------')
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;