const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const cors = require("cors");
var cookieParser = require('cookie-parser');

const app = express();
const sequelize = require('./app/models/').sequelize;
const indexRoute = require('./app/routes/index')

const PORT = 8080;

global.sequelize = sequelize

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.use((req, res, next) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      next();
    })
    .catch(() => {
      return MISC.responses(res, {
        msg_status: 400,
        msg_success: false,
        msg_code: 'CONNECT_TO_DB_FAILED'
      });
    });
  sequelize.sync();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to mylegacy api." });
});

app.use("/", indexRoute.router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
