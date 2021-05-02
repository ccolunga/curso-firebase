# Curso de Firebase web de Platzi

Este repositorio es el proyecto realizado durante el curso, el proyecto ya estaba creado, las configuraciones que se añadieron fueron:

### Conexión a Firebase para la autenticación

- La autenticación por correo y contraseña
- La autenticación con Facebook
- La autenticación por Google
- La autenticación por Twitter
- El cambio de contraseña con Firebase
- Verificacion de correo electrónico con Firebase

### Conexión a Firebase a Firestore para hacer guardar los post creados

- Conexión a Storage para guardar imagenes por autor
- Creación de un post con un título, autor, descripción, id unico, imagen, video y fecha.
- Listar los post en la página princial

### Hosting

Además se estableció conexión con Firebase por medio de un CLI para subir el proyecto al hosting que ofrece Firebase (proyecto deshabilitado)

### Recomendaciones para usar este proyecto

1. Al clonar este proyecto, crea una carpeta en _public > js_ con el nombre config.
1. En esa carpeta crea un archivo llamado _ConfigFirebase.js_.
1. En el archivo creado en el punto anterior, coloca tus credenciales de Firebase para hacer la conexión.
1. Para usar las notificaciones coloca tus credenciales en el archivo _notificaciones-sw.js_ ubicado en la carpeta _public_.
