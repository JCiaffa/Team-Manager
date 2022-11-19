const { Player } = require("../models/player.model");

//get all
module.exports.list = (request, response) => {
  Player.find({})
    .then((players) => {
      response.json(players);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

//get one
module.exports.getOne = (request, response) => {
  Player.findOne({ _id: request.params.id })
    .then((player) => response.json(player))
    .catch((err) => {
      response.status(400).json(err);
    });
};

//update
module.exports.update = (request, response) => {
  Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updated) => response.json(updated))
    .catch((err) => response.json(err));
};

//get one and create
module.exports.create = (request, response) => {
  const { name, position, game1, game2, game3 } = request.body;
  Player.create({
    name,
    position,
    game1,
    game2,
    game3,
  })
    .then((player) => response.json(player))
    .catch((err) => {
      response.status(400).json(err);
    });
};

//delete
module.exports.delete = (req, res) => {
  Player.findOneAndDelete({ _id: req.params.id })
    .then((deleted) => res.json(deleted))
    .catch((err) => res.status(400).json(err));
};
