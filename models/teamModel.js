const dbConn = require('../config/db');
const teamModel = {};




teamModel.list = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM team',
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.list)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


teamModel.save = (dataForm) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'INSERT INTO team set ?', [dataForm],
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.save)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


teamModel.delete = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'DELETE FROM team WHERE TeamId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.delete)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


teamModel.edit = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM team WHERE TeamId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.edit)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


teamModel.update = (newteam, idteam) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'UPDATE team set ? WHERE TeamId = ?', [newteam, idteam],
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.update)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};




teamModel.orderByName = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM team ORDER BY name;',
            (err, result) => {
                console.log("Entrada correcta en: (teamModel.orderByName)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};







module.exports = teamModel;