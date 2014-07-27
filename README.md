# API REST - ayreMovil

a [Sails](http://sailsjs.org) application (nodejs, mysql)

Servicios web de prueba para prototipo de aplicacion movil del modulo academico de Admisiones (Universidad Del Magdalena)

El modelo es simple solo 4 tablas en torno a los estudiantes, no se tienen en cuenta la distincion de personas-usuarios, simultaniedad, post-grados, entre otras cosas.

uso:

GET  /estudiante           -> obtiene todos los registros

GET  /estudiante/:id?      -> obtiene un registro especico con la id

POST /estudiante           -> Crea un nuevo registro

PUT  /estudiante/:id       -> Actualiza el registro especificado con la id

DELETE /estudiante/:id     -> Elimina un registro dada una id



Tambien se puede manipular atravez de querys de la siguiente manera:
GET      /estudiante    

GET      /estudiante/:id

POST     /estudiante/create?param1=valor&param2=valor

PUT      /estudiante/update/:id?param1=valor&param2=valor

DELETE   /estudiante/destroy/:id


los modelos son: programa, estudiante, materia, matricula_academica
