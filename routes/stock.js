var express = require("express");
var router = express.Router();
const yahooFinance = require("yahoo-finance2").default;
const alpha = require('alphavantage')({ key: 'M2E1UFZ2BT3WBRDU' });

/* GET users listing. */
router.get("/get-price", async function (req, res, next) {
  const ticker = req.query.ticker;

//   const quote = await yahooFinance.quote(ticker);
//   const { regularMarketPrice, currency } = quote;

//   let data = {
//     ticker: ticker,
//     price: regularMarketPrice,
//   };
// alpha.data.intraday(ticker).then((data) => {
//     console.log(data);
//   });
  alpha.technical.sma(ticker, 'daily', 60, 'close').then((data) => {
    console.log(data);
  });
//   res.send(data).status(200);
});

router.get("/get-info", async function (req, res, next) {
    const ticker = req.query.ticker;
    const queryOptions = { modules: ['financialData'] }; // defaults
    const result = await yahooFinance.quoteSummary(ticker, queryOptions);
    console.log(JSON.stringify(result))
    res.send("Nice").status(200);

})


module.exports = router;
