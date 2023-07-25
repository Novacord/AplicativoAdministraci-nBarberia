# Aplicativo de Administración de Inventarios y Cálculo de Ganancias de Barberos

Este es un aplicativo diseñado para administrar el control de entradas y salidas de productos en un inventario, así como calcular las ganancias diarias, mensuales y anuales de una lista de barberos.

## Características

1. Gestión de inventario:

   - Registro de productos con información detallada como nombre, descripción, precio, cantidad disponible, etc.

   - Registro de entradas y salidas de productos, con el seguimiento de la fecha y la cantidad correspondiente.

   - Actualización automática de las existencias disponibles después de cada transacción.

     

2. Cálculo de ganancias de barberos:
   - Registro de barberos con información personal y datos de contacto.
   - Registro de servicios prestados por cada barbero, incluyendo el nombre del servicio y su precio.
   - Cálculo automático de las ganancias diarias, mensuales y anuales para cada barbero, teniendo en cuenta los servicios prestados.

## Tablas de la base de datos
![](./img%20db/CapturaDef.PNG)

##  Base de Datos

1. Crea la base de datos "barber":

```sql
CREATE DATABASE barber;
```

2. Usa la base de datos "barber":

```sql
USE barber;
```

3. Crea las tablas una por una y en orden:

```sql
-- Tabla Usuarios
CREATE TABLE Usuarios (
    Usuario_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar(200) NOT NULL,
    Documento varchar(50) NOT NULL,
    Correo varchar(150) NOT NULL,
    Clave varchar(50) NOT NULL,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Activo bit NOT NULL
);

-- Tabla Roles
CREATE TABLE Roles (
    Rol_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nombre varchar(80) NOT NULL,
    FechaRegistro datetime NOT NULL,
    Activo bit NOT NULL
);

-- Tabla UsuarioRoles
CREATE TABLE UsuarioRoles (
    UsuarioRol_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
    Usuario_Id int NOT NULL,
    Rol_Id int NOT NULL,
    FechaRegistro datetime NOT NULL,
    FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(Usuario_Id),
    FOREIGN KEY (Rol_Id) REFERENCES Roles(Rol_Id)
);

-- Continúa con la creación de las demás tablas...
```

# Servidor Express

el proyecto contiene una configuración básica para un servidor Express utilizando la librería `dotenv` para gestionar variables de entorno. La configuración del servidor, incluyendo el nombre del host y el puerto, se carga desde un archivo JSON y se utiliza para iniciar el servidor.

- para poder utilizar las librerías utilizada deben instalarlas con npm:

```bash
npm i
```

- Crea un archivo `.env` en el directorio raíz del proyecto y agrega el siguiente contenido:

```dotevn
MY_SERVER={"hostname": "nombre del Host", "port": 3000}
MY_CONNECTION = { "host": "localhost", "user": "root", "password": "", "database": "barber", "port": 3306}
```

- para inicializar el servidor de express:

```bash
npm run dev
```

- Crea un archivo `tsconfig.json` con el el comando:

```bash
npx tsc --init
```

- y remplace todo el contenido del archivo con esta configuración:

```json
{
  "compilerOptions": {
    "target": "es6",//Esta opción especifica la versión de ECMAScript
    "module": "ES6",//especifica el sistema de módulos que se utilizará al compilador 
    "moduleResolution": "node",//define cómo se resolverán los módulos al importarlos
    "outDir": "./controller",//especifica la carpeta de destino
    "esModuleInterop": true,//Esta opción habilita la interoperabilidad de módulos
    "experimentalDecorators": true,//Esta opción habilita el soporte para decoradores 
    "emitDecoratorMetadata": true//Esta opción habilita la generación de metadatos
  }
}
```

- para pasar el typescript a javascript es:

```bash
npm run tsc
```

# Registro de Usuarios con Roles (Barber o Administrador)

Este proyecto implementa un endpoint que permite registrar nuevos usuarios en la aplicación, asignándoles un rol específico como "Barber" o "Administrador".

## Características del Endpoint

- Método: POST
- Ruta del Endpoint: `/registrar-usuario`
- Permite el registro de nuevos usuarios en la aplicación.
- Los datos del usuario a registrar deben enviarse en el cuerpo de la solicitud en formato JSON.

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud para registrar un nuevo usuario debe tener el siguiente formato en JSON:

```json
json
{
  "nombre-usuario": "Nombre del usuario",
  "documento-usuario": "Número de documento",
  "correo-usuario": "Correo electrónico del usuario",
  "clave-usuario": "Contraseña del usuario",
  "activo-usuario": 1, // 1 para activo 0 para no activo
  "rol-usuario": 1 // 1 para Administrador, 2 para Barber"
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que el usuario ha sido registrado correctamente.

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- 

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

