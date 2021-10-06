const { Sequelize } = require("sequelize");
const {
  sequelize_username,
  sequelize_database,
  sequelize_dialect,
  sequelize_host,
  sequelize_password,
} = require("../config/index");

const sequelize = new Sequelize("devs", "postgres", "ppp", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established with DB");
  } catch (err) {
    console.error("Unable to connect to DB");
  }
})();

module.exports = sequelize;
