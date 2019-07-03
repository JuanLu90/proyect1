const dbConn = require('../config/db');
const apiModel = {};


apiModel.list = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player',
            (err, result) => {
                console.log("Entrada correcta en: (ApiModel.list)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


apiModel.listbyid = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player WHERE PlayerId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (ApiModel.listbyid)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};

apiModel.save = (dataForm) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'INSERT INTO player set ?', [dataForm],
            (err, result) => {
                console.log("Entrada correcta en: (ApiModel.save)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};

apiModel.delete = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'DELETE FROM player WHERE PlayerId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (ApiModel.delete)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};

apiModel.update = (player, id) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        console.log(player)
        dbConn.query(
            'UPDATE player SET ? WHERE PlayerId = ?', [player, id],
            (err, result) => {
                console.log("Entrada correcta en: (ApiModel.put)");
                if (err) reject(err);
                else {
                    console.log(result);
                    resolve(result);
                }
            }
        );
    })
};

module.exports = apiModel;