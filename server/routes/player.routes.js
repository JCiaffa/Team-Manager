const PlayerController = require("../controllers/player.controller");

module.exports = function (app) {
  app.get("/api/players/", PlayerController.list);
  app.get("/api/players/:id", PlayerController.getOne);
  app.put("/api/players/:id", PlayerController.update);
  app.delete("/api/list/:id", PlayerController.delete);
  app.post("/api/players/create", PlayerController.create);
};
