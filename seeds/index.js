// const sequelize = require('../config/connection')
// const {Stock} = require('../models/')
// const fetch = require('node-fetch')
// let data = []
// async function  fetching() {
//     const response = await fetch(`https://eodhistoricaldata.com/api/exchanges-list/?api_token=632200ad41cee8.51306021&fmt=json`)
//     const fetchData = await response.json()
//     console.log(fetchData[0])
//     fetchData.forEach(stock => {
//         data.push({name: stock.Name, ticker: stock.Code })
//     })
//     Stock.bulkCreate(data)
// }

// fetching()





//632200ad41cee8.51306021