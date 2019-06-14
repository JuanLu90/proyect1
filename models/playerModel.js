const dbConn = require('../config/db');
const playerModel = {};




playerModel.list = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.list)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.save = (dataForm) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'INSERT INTO player set ?', [dataForm],
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.save)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.delete = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'DELETE FROM player WHERE PlayerId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.delete)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.edit = id => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player WHERE PlayerId = ?', [id],
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.edit)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.update = (newPlayer, idPlayer) => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'UPDATE player set ? WHERE PlayerId = ?', [newPlayer, idPlayer],
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.update)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderByGoals = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY goals DESC;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderByGoals)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderByName = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY name;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderByName)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderBySurname = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY surname;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderBySurname)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderByAge = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY age;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderByAge)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderByPosition = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY position;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderByPosition)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};


playerModel.orderByTeam = () => {
    return new Promise((resolve, reject) => {
        // if(!validate(data)) reject("Invalid data")
        dbConn.query(
            'SELECT * FROM player ORDER BY TeamId;',
            (err, result) => {
                console.log("Entrada correcta en: (playerModel.orderByTeam)");
                if (err) reject(err);
                else {
                    resolve(result);
                }
            }
        );
    })
};






module.exports = playerModel;