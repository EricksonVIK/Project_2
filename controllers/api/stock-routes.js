const router = require("express").Router();
const { Stock } = require("../../models");

// get db stock list api/stocks
router.get("/", (req, res) => {
  Stock.findAll()
    .then((dbStockData) => res.json(dbStockData))
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
router.put('/:id', (req, res) => { });

// delete

module.exports = router;