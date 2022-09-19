// import model
const Stock = require('./Stock');
const User = require('./User');

// model associations
User.hasMany(Stock, {
    foreignKey: 'user_id'
})

Stock.belongsTo(User, {
    foreignKey: 'user_id'
})

// export 
module.exports = { Stock, User };
