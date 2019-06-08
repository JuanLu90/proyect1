const playerController = {};

playerController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};


playerController.save = (req, res)=> {
    const dataForm = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO player set ?', [dataForm], (err, manasport) => {
            res.redirect('/player');
        });
    });
};


playerController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM player WHERE PlayerId = ?', [id], (err, player) => {
        res.redirect('/player');
        });
    });
};


playerController.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query ('SELECT * FROM player WHERE PlayerId = ?', [id], (err, player) => {
            res.render('editplayer', {
                data:player[0]
            });
        });
    });
};


playerController.update=(req, res)=>{
    const id=req.params.id;
    //aqui recibo los nuevos datos
    const newplayer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE player set ? WHERE PlayerId = ?', [newplayer, id], (err, rows) =>{
            res.redirect('/player')
        });
    });
};


playerController.orderByGoals = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player ORDER BY goals DESC;', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};


playerController.orderByName = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player ORDER BY name;', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};


playerController.orderBySurname = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player ORDER BY surname', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};



playerController.orderByAge = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player ORDER BY age;', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};


playerController.orderByPosition = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM player ORDER BY position;', (err, manasport) => {
            res.render('player', {
                data:manasport
            });
        });
    });
};



module.exports = playerController;