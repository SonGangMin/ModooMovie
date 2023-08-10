const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto("modoosmovie", "root", "edurootroot", {
  host: "db",
  port: "3306",
  dialect: "mysql",
});

auto.run();
