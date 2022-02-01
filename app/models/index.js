const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.productimage = require("../models/productimage.model.js")(sequelize, Sequelize);
db.wishlist = require("../models/wishlist.model.js")(sequelize, Sequelize);

//db.wishlist.belongsTo(db.product, { foreignKey: 'product_id', targetKey: 'id' });
db.wishlist.belongsTo(db.product, { foreignKey: 'product_id', targetKey: 'id' });
db.product.hasMany(db.wishlist, { foreignKey: 'product_id', targetKey: 'id' });

module.exports = db;