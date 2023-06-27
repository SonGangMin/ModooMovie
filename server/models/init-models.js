var DataTypes = require("sequelize").DataTypes;
var _boardcomments = require("./boardcomments");
var _boards = require("./boards");
var _cinemas = require("./cinemas");
var _events = require("./events");
var _moviereviews = require("./moviereviews");
var _regions = require("./regions");
var _tickets = require("./tickets");
var _users = require("./users");

function initModels(sequelize) {
  var boardcomments = _boardcomments(sequelize, DataTypes);
  var boards = _boards(sequelize, DataTypes);
  var cinemas = _cinemas(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var moviereviews = _moviereviews(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cinemas.belongsTo(regions, { as: "grade_region", foreignKey: "grade"});
  regions.hasMany(cinemas, { as: "cinemas", foreignKey: "grade"});

  return {
    boardcomments,
    boards,
    cinemas,
    events,
    moviereviews,
    regions,
    tickets,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
