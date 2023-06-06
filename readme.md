# Desafío: "Like Me II"

## Descripción

Este proyecto es parte de un desafío en la carrera de Desarrollo Web Full Stack, en el que se requiere que el servidor interactúe con una base de datos PostgreSQL para guardar, consultar, actualizar y eliminar los posts.

### Características

- El servidor ha sido desarrollado utilizando Node.js y proporciona las siguientes rutas para interactuar con la base de datos PostgreSQL: GET, POST, PUT y DELETE.
- El servidor se ejecuta en el puerto localhost:3000.
- Versión de Node: v18.16.0.

### Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```
$ npm install
```

### Dependencias

- express ^4.18.2
- nodemon ^2.0.22
- cors ^2.8.5
- dotenv ^16.1.3
- pg ^8.11.0

### Iniciar el servidor

Para iniciar el servidor, ejecuta el siguiente comando:

```
$ npm run dev
```

### Endpoints

El proyecto proporciona los siguientes endpoints:

- GET /posts
- POST /posts
- PUT /posts/like/:id
- DELETE /posts/:id

### Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests.

### Contacto

Si tienes alguna pregunta o sugerencia, puedes contactarme a través de mi dirección de correo electrónico: [cristian.ramirez.cl@gmail.com](mailto:cristian.ramirez.cl@gmail.com).
