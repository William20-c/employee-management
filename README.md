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

4. Ejecuta el comando una vez configuradas las variables de entorno para generar el contendor de la base de datos y de la aplicación

   ```bash
   docker-compose up -d
   ```

5. Importa el archivo script.sql que se encuentra en la ruta:
   ```bash
   scrips_db/script.sql
   ```

6. Ingresa a la url **http://localhost:3000**

## Buenas Prácticas Usadas

En este proyecto, hemos implementado varias **buenas prácticas** y **medidas de seguridad** para asegurar que la aplicación sea robusta y esté protegida contra amenazas comunes como la **inyección SQL**. A continuación, se detallan las prácticas y medidas aplicadas.

## Buenas Prácticas Usadas

### 1. Uso de ORM (Sequelize) para la interacción con la base de datos
- **Sequelize** es un ORM (Object-Relational Mapping) que abstrae las consultas SQL y las convierte en operaciones sobre objetos JavaScript. 
- Esto ayuda a evitar la inyección SQL porque Sequelize utiliza **parámetros preparados** en lugar de concatenar directamente valores de entrada en las consultas.

**Ejemplo de consulta segura con Sequelize:**
```javascript
const usuario = await User.findOne({
  where: { correo: 'example@example.com' }
});


