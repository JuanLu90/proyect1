const teamModel = require('../models/teamModel');
const teamController = {};


teamController.list = (req, res) => {
    teamModel.list(req, res)
        .then(team => {
            console.log("ALL OK: (teamController.list)")
            res.render('team', {
                data:team
            });
        })
        .catch(err => {
            res.send("error teamController.list");
        });
}


teamController.save = (req, res) => {;
    const data = req.body;
    teamModel.save(data)
        .then(team => {
            console.log("ALL OK: (teamController.save)");
            res.redirect('/team');
        })
        .catch(err => {
            res.send("error teamController.save");
        });
}


teamController.delete = (req, res) => {
    const id = req.params.id;
    teamModel.delete(id)
        .then(team => {
            console.log("ALL OK: (teamController.delete)");
            res.redirect('/team');
        })
        .catch(err => {
            res.send("error teamController.delete");
        });
}


teamController.edit = (req, res) => {
    const id = req.params.id;
    teamModel.edit(id, res)
        .then(team => {
            console.log("ALL OK: (teamController.edit)")
            res.render('editteam', {
                data:team[0]
            });
        })
        .catch(err => {
            res.send("error teamController.edit");
        });
}


teamController.update = (req, res) => {
    const idteam = req.params.id;
    const newteam = req.body;
    console.log("entraaaaa")
    teamModel.update(newteam, idteam)
        .then(result => {
            console.log("ALL OK: (teamController.update)");
            res.redirect('/team');
        })
        .catch(err => {
            res.send("error teamController.update");
        });
}


teamController.orderByName = (req, res) => {
    teamModel.orderByName(req, res)
        .then(team => {
            console.log("ALL OK: (teamController.orderByName)")
            res.render('team', {
                data:team
            });
        })
        .catch(err => {
            res.send("error teamController.orderByName");
        });
}

// teamController.list = (req, res) => {
//     req.getConnection((err, conn) => {
//         conn.query('SELECT * FROM team', (err, manasport) => {
//             res.render('team', {
//                 data:manasport
//             });
//         });
//     });
// };


// teamController.save = (req, res)=> {
//     const dataForm = req.body;
//     req.getConnection((err, conn)=>{
//         conn.query('INSERT INTO team set ?', [dataForm], (err, manasport) => {
//             res.redirect('/team');
//         });
//     });
// };


// teamController.delete = (req, res) => {
//     const id = req.params.id;
//     req.getConnection((err, conn) => {
//         conn.query('DELETE FROM team WHERE TeamId = ?', [id], (err, team) => {
//         res.redirect('/team');
//         });
//     });
// };


// teamController.edit = (req, res) => {
//     const id = req.params.id;
//     req.getConnection((err, conn) => {
//         conn.query ('SELECT * FROM team WHERE TeamId = ?', [id], (err, team) => {
//             res.render('editteam', {
//                 data:team[0]
//             });
//         });
//     });
// };


// teamController.update=(req, res)=>{
//     const id=req.params.id;
//     //aqui recibo los nuevos datos
//     const newteam = req.body;
//     req.getConnection((err, conn) => {
//         conn.query('UPDATE team set ? WHERE TeamId = ?', [newteam, id], (err, rows) =>{
//             res.redirect('/team')
//         });
//     });
// };



// teamController.orderByName = (req, res) => {
//     req.getConnection((err, conn) => {
//         conn.query('SELECT * FROM team ORDER BY name;', (err, manasport) => {
//             res.render('team', {
//                 data:manasport
//             });
//         });
//     });
// };




module.exports = teamController;