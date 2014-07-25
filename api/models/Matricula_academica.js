
module.exports = {

  attributes: {
  	materia: {
  		model: 'materia'
  	},
  	codigo: 'int',
  	periodo: 'string',
  	estado: {
  		type: 'string',
  		enum: ['Aprobada', 'Reprobada', 'EnCurso']
  	},
  	seg1: 'int',
  	seg2: 'int',
  	seg3: 'int',
  	hab: 'int',
  	docente: 'string',
  	horario: 'array'
  }
};

