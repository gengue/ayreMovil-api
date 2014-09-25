var bcrypt = require('bcrypt');

module.exports = {
	login: function(req, res){
		var codigo = req.body.codigo;
		var password = req.body.password;
		var mensaje = "";

		Estudiante.findOne({where: {"codigo": codigo}}, function(err, estudiante){
			console.log(estudiante);	
			if (err){
				mensaje = "Error en la BD";
				return res.json(500, { msg: mensaje });
			}

			if(estudiante === undefined || estudiante === null ){
				mensaje = "El codigo no existe!";
				return res.json(404, { msg: mensaje });
			}

			bcrypt.hash(password, 10, function(err, hash) {
				if (err) return false;
				console.log(hash);
				password = hash;
			});

			bcrypt.compare(password, estudiante.password, function (err, match) {
				if(match){
					mensaje = "true";
				}else{
					mensaje = "false";
				}
				return res.json({ msg: mensaje });
			});
			
		});
	}
};

