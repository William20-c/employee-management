# employee-management
RestServer API para gestionar la operación de solicitudes generadas por los empleados contiene las siguientes APIs:
1. Registro
2. Login
3. Empleados
4. Solicitudes
6. Creación de empleados y solicitudes
7. Eliminación de solicitudes y empleados

Todas las APIs requieres autenticación basica.


## Instalación
1. Clona el repositorio:

   ```bash
   git clone https://github.com/William20-c/employee-management.git
   ``` 

2. Instala las dependencias:

   ```bash
   npm install
   ```
3. Configura las variables de entorno, creando el archivo .env.

4. Ejecuta el comando una vez configuradas las variables de entorno para generar el contendor de la base de datos y del node

   ```bash
   docker-compose up -d
   ```
5. Ingresa a la url **http://localhost:3000**

**Accesos APP Employee:**
```json
   {
      "correo":"admin@example.com",
      "password":"123456"
   }
```

**Contraseña genérica:**
- Todos los empleados creados quedan con la contraseña genérica: **123456**


## Buenas Prácticas Usadas

En este proyecto, hemos implementado varias **buenas prácticas** y **medidas de seguridad** para asegurar que la aplicación sea robusta y esté protegida contra amenazas comunes como la **inyección SQL**. A continuación, se detallan las prácticas y medidas aplicadas.


### 1. Uso de ORM (Sequelize) para la interacción con la base de datos
- **Sequelize** es un ORM (Object-Relational Mapping) que abstrae las consultas SQL y las convierte en operaciones sobre objetos JavaScript. 
- Esto ayuda a evitar la inyección SQL porque Sequelize utiliza **parámetros preparados** en lugar de concatenar directamente valores de entrada en las consultas.

**Ejemplo de consulta segura con Sequelize:**
```javascript
    const usuario = await User.findOne({
        where: { correo: 'example@example.com' }
    });
```

### 2. JWT para autenticación segura 
- **JSON Web Tokens (JWT)** proporciona una **autenticación basada en tokens**, que no requiere almacenar información sensible como contraseñas en la sesión del servidor.
- **JWT se firma** con una clave secreta y puede ser validado para asegurar que las solicitudes provienen de usuarios autenticados.

### 3. Encriptación de contraseñas
- Las contraseñas de los usuarios se encriptan utilizando **bcrypt** antes de ser almacenadas en la base de datos. Esto asegura que, incluso si la base de datos es comprometida, las contraseñas no estarán expuestas.

### 4. Uso de variables de entorno
- Se utilizan **variables de entorno** para almacenar información sensible como las credenciales de la base de datos y las claves secretas de JWT, de forma que no estén expuestas en el código fuente.


## Medidas de Seguridad contra Inyección SQL

En este proyecto, hemos implementado varias **buenas prácticas** y **medidas de seguridad** para asegurar que la aplicación sea robusta y esté protegida contra amenazas comunes como la **inyección SQL**. A continuación, se detallan las prácticas y medidas aplicadas.


### 1. Uso de ORM y consultas parametrizadas
- Sequelize utiliza **consultas parametrizadas** de manera automática para prevenir la inyección SQL. Las entradas del usuario nunca se concatenan directamente en las consultas SQL.

### 2. Protección contra inyecciones SQL
- Sequelize gestiona automáticamente las consultas SQL de forma segura utilizando **consultas parametrizadas**, lo que previene que los valores de los usuarios sean tratados como código SQL.

### 3. Escapado de caracteres en consultas SQL
- Si es necesario escribir consultas SQL personalizadas en Sequelize, podemos usar **consultas parametrizadas** para garantizar que los valores de entrada no sean tratados como código SQL





