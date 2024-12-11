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
4. Ejecuta el comando una vez configuradas las variables de entorno para generar el contendor de la base d e datos y de la aplicación
   ```bash
   docker-compose up -d
   ```
5. Importa el archivo script.sql
   ```bash
   script.sql
   ```
6. Ingresa a la url http://localhost:3000

