const teamController = {};

teamController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM team', (err, manasport) => {
            res.render('team', {
                data:manasport
            });
        });
    });
};


teamController.save = (req, res)=> {
    const dataForm = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO team set ?', [dataForm], (err, manasport) => {
            res.redirect('/team');
        });
    });
};


teamController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM team WHERE TeamId = ?', [id], (err, player) => {
        res.redirect('/team');
        });
    });
};


teamController.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query ('SELECT * FROM team WHERE TeamId = ?', [id], (err, team) => {
            res.render('editteam', {
                data:team[0]
            });
        });
    });
};


teamController.update=(req, res)=>{
    const id=req.params.id;
    //aqui recibo los nuevos datos
    const newteam = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE team set ? WHERE TeamId = ?', [newteam, id], (err, rows) =>{
            res.redirect('/team')
        });
    });
};



teamController.orderByName = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM team ORDER BY name;', (err, manasport) => {
            res.render('team', {
                data:manasport
            });
        });
    });
};




module.exports = teamController;