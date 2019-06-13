
const playerModel = require('../models/playerModel');
const playerController = {};


playerController.list = (req, res) => {
    playerModel.list(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.list)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.list");
        });
}


playerController.save = (req, res) => {;
    const data = req.body;
    playerModel.save(data)
        .then(player => {
            console.log("ALL OK: (playerController.save)");
            res.redirect('/player');
        })
        .catch(err => {
            res.send("error playerController.save");
        });
}


playerController.delete = (req, res) => {
    const id = req.params.id;
    playerModel.delete(id)
        .then(player => {
            console.log("ALL OK: (playerController.delete)");
            res.redirect('/player');
        })
        .catch(err => {
            res.send("error playerController.delete");
        });
}


playerController.edit = (req, res) => {
    const id = req.params.id;
    playerModel.edit(id, res)
        .then(player => {
            console.log("ALL OK: (playerController.edit)")
            res.render('editplayer', {
                data:player[0]
            });
        })
        .catch(err => {
            res.send("error playerController.edit");
        });
}


playerController.update = (req, res) => {
    const idPlayer = req.params.id;
    const newplayer = req.body;
    console.log("entraaaaa")
    playerModel.update(newplayer, idPlayer)
        .then(result => {
            console.log("ALL OK: (playerController.update)");
            res.redirect('/player');
        })
        .catch(err => {
            res.send("error playerController.update");
        });
}


playerController.orderByGoals = (req, res) => {
    playerModel.orderByGoals(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderByGoals)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderByGoals");
        });
}


playerController.orderByName = (req, res) => {
    playerModel.orderByName(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderByName)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderByName");
        });
}


playerController.orderBySurname = (req, res) => {
    playerModel.orderBySurname(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderBySurname)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderBySurname");
        });
}


playerController.orderByAge = (req, res) => {
    playerModel.orderByAge(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderByAge)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderByAge");
        });
}


playerController.orderByPosition = (req, res) => {
    playerModel.orderByPosition(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderByPosition)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderByPosition");
        });
}


playerController.orderByTeam = (req, res) => {
    playerModel.orderByTeam(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.orderByTeam)")
            res.render('player', {
                data:player
            });
        })
        .catch(err => {
            res.send("error playerController.orderByTeam");
        });
}



module.exports = playerController;