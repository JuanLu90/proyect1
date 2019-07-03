const apiModel = require('../models/apiModel');
const apiController = {};


apiController.list = (req, res) => {
    apiModel.list(req, res)
        .then(player => {
            console.log("ALL OK: (playerController.list)")
            res.send(player);
        })
        .catch(err => {
            res.send("error playerController.list");
        });
}

apiController.listbyid = (req, res) => {
    const id = req.params.PlayerId;
    apiModel.listbyid(id)
        .then(player => {
            console.log("ALL OK: (playerController.listbyid)")
            res.send(player);
        })
        .catch(err => {
            res.send("error playerController.listbyid");
        });
}

apiController.save = (req, res) => {
    const data = req.body;
    apiModel.save(data)
        .then(player => {
            console.log("ALL OK: (playerController.save)");
            res.redirect('/player');
        })
        .catch(err => {
            res.send("error playerController.save");
        });
}

apiController.delete = (req, res) => {
    const id = req.params.PlayerId;
    apiModel.delete(id)
        .then(player => {
            console.log("ALL OK: (playerController.delete)");
            res.redirect('/player');
        })
        .catch(err => {
            res.send("error playerController.delete");
        });
}

apiController.update = (req, res) => {
    const id = req.params.PlayerId;
    const player = req.body;
    console.log(player);
    console.log(id);
    apiModel.update(player,id)
        .then( () => {
            console.log("ALL OK: (playerController.put)");
            res.send();
        })
        .catch(err => {
            res.send("error playerController.put");
        });
}


module.exports = apiController;