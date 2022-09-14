const router = require("express").Router();
const { Stock } = require("../../models");

// get db stock list api/stocks
router.get("/", (req, res) => {
  Stock.findAll()
    .then((dbStockData) => {
      res.json(dbStockData)
      res.render('home');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find by id api/stocks/#
router.get("/:id", (req, res) => {
  Stock.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "ticker", "shares", "cost"],
  })
    .then((dbStockData) => {
      /*
      dbStockData holds current stock data
      Use the data and call the yahoo api to get the shares and cost

      var myStock = {...dbStockData, cost, share}
      
      
      */
      if (!dbStockData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbStockData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post to stock list api/stocks
router.post("/", (req, res) => {
  Stock.create({
    name: req.body.name,
    ticker: req.body.ticker,
    shares: req.body.shares,
    cost: req.body.cost,
  })
    .then((dbStockData) => res.json(dbStockData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Put or update
router.put('/:id', (req, res) => {
  Stock.update(
    {
      shares: req.body.shares,
      cost: req.body.cost,
      user_id: req.body.user_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbStockData => {
      if (!dbStockData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbStockData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete
router.delete("/:id", (req, res) => {
  Stock.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStockData) => {
      if (!dbStockData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbStockData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
