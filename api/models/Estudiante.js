
module.exports = {

  autoPK: false,

  attributes: {  	
  	codigo: {
  		type: 'int',
  		unique: true,
  		primaryKey: true,
  		required: true
  	},
  	identificacion: {
  	 	type: 'int',
  	 	unique: true
  	 },
  	nombres: 'string',
  	apellidos: 'string',
  	fechaNacimiento: 'date',
  	email: {
			type: 'string',
			email: true
		},
	password: {
		type: 'string',
		required: true
	},
  	foto: 'string',
  	sexo: {
  		type: 'string',
  		enum: ['F', 'M']
  	},
  	sufIngles: 'boolean',
  	prePractica: 'boolean',
  	biblioteca: 'boolean',
  	cartera: 'boolean',
  	clinica: 'boolean',
  	laboratorios: 'boolean',
    periodo: 'string',
  	estado: {
  		type: 'string',
  		enum: ['Antiguo', 'Nuevo', 'Graduado'],
  		defaultsTo: 'Nuevo'
  	},
  	programa: {
  		model: 'programa'
  	},
    toJSON: function() { /* este metodo evita que la contraseña llegue al cliente */
		var obj = this.toObject();
		delete obj.password;
		return obj;
	}
  },
  /* Los siguientes metodos guardan la conseña encriptada al crear y actualizar */
  beforeCreate: function(values, next) {
		hashPassword(values, next);
  },
  beforeUpdate: function(values, next) {
		if(values.password) hashPassword(values, next);
		else next();
  }  
};

var bcrypt = require('bcrypt');
/*  metodo para encriptar contraseña */
function hashPassword(values, next) {
	bcrypt.hash(values.password, 10, function(err, hash) {
		if (err) return next(err);

		values.password = hash;
		next();
	});
}