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
   
3. registra Usuarios,productos,entradas y salidas de un inventario, los prestamos de procutos a un usuarios y lo trabajos realizados de un usuario.

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

## Tener en cuenta

si quieres probar el aplicativo con datos inserte  los datos en el archivo llamado datas en la carpeta llamada db.

# Iniciar el proyecto

el proyecto contiene una configuración básica para un servidor Express utilizando la librería `dotenv` para gestionar variables de entorno. La configuración del servidor, incluyendo el nombre del host y el puerto, se carga desde un archivo JSON y se utiliza para iniciar el servidor.

- para poder utilizar las librerías utilizada deben instalarlas con npm:

```bash
npm i
```

- Crea un archivo `.env` en el directorio raíz del proyecto y agrega el siguiente contenido:

```dotevn
MY_SERVER={"hostname": "nombre del Host", "port": 3000}
MY_CONNECTION = { "host": "localhost", "user": "root", "password": "", "database": "barber", "port": 3306}
JWT_PRIVATE_KEY = "codigo del token que quiera"
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

- para pasar el typescript a JavaScript es:

```bash
npm run tsc
```

# Registro de Usuarios con Roles (Barber o Administrador)

Este proyecto implementa un endpoint que permite registrar nuevos usuarios en la aplicación, asignándoles un rol específico como "Barber" o "Administrador".

## Características del Endpoint

- Métodos: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/registrar-usuario`
- Permite el registro de nuevos usuarios en la aplicación.
- Los datos del usuario a registrar deben enviarse en el cuerpo de la solicitud en formato JSON.

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud para registrar un nuevo usuario debe tener el siguiente formato en JSON:

```json

{
  "nombre-usuario": "Nombre del usuario",
  "documento-usuario": "Número de documento",
  "correo-usuario": "Correo electrónico del usuario",
  "clave-usuario": "Contraseña del usuario",
  "activo-usuario": 1, // 1 para activo 0 para no activo
  "rol-usuario": 1 // 1 Administrador, 2 Secretaria, 3 Barbero"
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

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/registrar-usuario/1
```

donde le 1 es el id, :id.

## token de usuario

Al crear un usuario se generara un token que debe usar para cualquier consulta de cualquier endpoint que requiera, al crear un usuario le aparesera el token asi:

```json
{
"message": "registro exitoso", 			          			     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqc29uIjp7Ik5vbWJyZSI6Ikpvc2UxMjMiLCJEb2N1bWVudG8iOiIxMDk3MDk0NDE1IiwiQ29ycmVvIjoiam9zZUBnbWFpbC5jb20iLCJDbGF2ZSI6InB1dG9lbHF1ZWxvbGVhIiwiQWN0aXZvIjoxLCJSb2xfSWQiOjF9LCJpYXQiOjE2OTA0ODc4MzcsImV4cCI6MTY5MDU3NDIzN30.n03zBb3GkD6-Wh4sA4ltLsVT9Bd19-LUEBAuLrIIUFs"  
}
```

solo durara 24 horas el token.

## Tener en cuenta

para utilizar el token y probarlo en la extencion thunder client colocar en headers Authorization y de seguida el token

# Ganancias del barbero y el administrador

Este proyecto implementa un endpoint que permite calcular la ganancia de lo que gano el barbero y el administrador diaria, mensual y anual teniendo en cuenta que el barbero gana el 60% y el administrador gana el 40%

## Características del Endpoint

- Método: GET
- Ruta del Endpoint: `/ganancias`
- Permite listar la ganancia diaria, mensual y anualmente.

## Obtener ganancia por año

para obtener la ganancia por año debemos hacer una petición `/ganancias/year` mandando un parámetro year con el año que queremos saber cuanto gano con la siguiente estructura como ejemplo:

```http
http://HostName:port/ganancias/year?year=2023
```

## Obtener ganancia por mes

para obtener la ganancia por mes debemos hacer una petición `/ganancias/month` mandando dos parámetro year con el año y month con el mes que queremos saber cuanto gano con la siguiente estructura como ejemplo:

```http
http://HostName:port/ganancias/month?year=2023&month=6
```

## Obtener ganancia por día

para obtener la ganancia por mes debemos hacer una petición `/ganancias/day` mandando un parámetro date con la fecha exacta del día que queremos saber cuanto gano con la siguiente estructura como ejemplo:

```http
http://HostName:port/registrar-usuario/day?date=2023-06-03
```

## Respuestas del Endpoint

todos los datos listados esta en un json mostrara el id del usuario, el nombre del barbero, total que recaudo, cuanto gana el barbero y cuanto gana el administrador un ejemplo: 

```json
  {
    "Usuario_Id": 4,
    "Barber": "HECTOR JAVIER VILLEGAS CORREA",
    "ValorTotal": "47000",
    "Barbero": 28200,
    "Administrador": 18800
  }
```

# Registro de Trabajos

El endpoint permite registrar los trabajos realizados en una barbería. Cada trabajo está asociado a un barbero y un servicio específico.

## Características del Endpoint

- Método: POST,DELETE
- Ruta del Endpoint: `/ganancias`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

jsonCopy code

```json
{  
 "servicio-id": 1,  
 "usuario-id": 5,  
 "Valor-trabajo": 12000,  
 "observaciones-trabajo": "Corte de Pelo" 
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que el trabajo ha sido registrado correctamente.

```
Registro exitosamente
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple, ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## DELETE del endpoint

para hacer DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/ganancias/1
```

donde le 1 es el id, :id.

# Registro de Servicios

El endpoint permite registrar los Servicios realizados en una barbería.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/servicios`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

jsonCopy code

```json
{
  "nombre-servicio": "Nombre del Servicio",
  "valor-servicio": 1500,
  "activo-servicio": 1
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que el Servicios ha sido registrado correctamente.

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple, ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/servicios/1
```

donde le 1 es el id, :id.



# Entradas Productos

El endpoint permite registrar las entradas realizados en el inventario de una barberia.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/entradas-inventario`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

```json
{
  "producto-entrada": 123,        // El ID del producto asociado a la entrada (reemplaza 123 con un valor válido).
  "cantidad-entrada": 5,             // La cantidad de productos en la entrada (reemplaza 5 con un valor válido).
  "valorU-entrada": 1000,     // El valor unitario del producto (reemplaza 1000 con un valor válido).
  "observaciones-entrada": "Nueva entrada de prueba.",   // Observaciones sobre la entrada (opcional).
  "activo-entrada": 1             // Indica si la entrada está activa o no (1 o 0).
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que la Entrada ha sido registrado correctamente.

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple, ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/entradas-inventario/1
```

donde le 1 es el id, :id.



# Salidas Productos

El endpoint permite registrar las Salidas realizados en el inventario de una barberia.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/salidas-inventario`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

```json
{
  "producto-salidas": 123,        // El ID del producto asociado a la salida (reemplaza 123 con un valor válido).
  "cantidad-salidas": 5,             // La cantidad de productos en la salida (reemplaza 5 con un valor válido).
  "valorU-salidas": 1000,     // El valor unitario del producto (reemplaza 1000 con un valor válido).
  "observaciones-salidas": "Nueva entrada de prueba.",   // Observaciones sobre la salida (opcional).
  "activo-salidas": 1             // Indica si la salida está activa o no (1 o 0).
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que la salida ha sido registrado correctamente.

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple, ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/salidas-inventario/1
```

donde le 1 es el id, :id.



# Prestamos Productos

El endpoint permite registrar los Prestamos realizados en el inventario de una barberia.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/prestamo-usuario`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

```json
{
  "usuario-prestamo": 456,        // El ID del usuario asociado a la relación (reemplaza 456 con un valor válido).
  "producto-prestamo": 789,       // El ID del producto asociado a la relación (reemplaza 789 con un valor válido).
  "cantidad-prestamo": 3,            // La cantidad de productos en la relación (reemplaza 3 con un valor válido).
  "activo-prestamo": 1           // Indica si la relación está activa o no (1 o 0).
}
```

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

- **Éxito (Código de Estado 200)**: Si el registro es exitoso, el servidor responderá con un mensaje indicando que el Prestamo ha sido registrado correctamente.

```
registro exitoso
```

- **Error de Solicitud (Código de Estado 406)**: es que unos de los parámetros no cumple con el formato requerido y mostrara o el numero de caracteres no cumple, ejemplo:

```
El "nombre del parametro" no cumple con el formato
```

- **Error de Solicitud (Código de Estado 422)**: es que unos de los parámetros no esta y es obligatorio ponerlo un ejemplo:

```
El parametro "nombre del parametro" es obligatorio
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/prestamo-usuario/1
```

donde le 1 es el id, :id.



# Lista del inventario

El endpoint permite listar el inventario donde muestra las entradas del producto, las salidas del producto, si algún usuario como un barbero saco un producto y cuantos quedan en el inventario.

## Características del Endpoint

- Método: GET
- Ruta del Endpoint: `/inventario`
- permite listar el inventario

## Respuestas del Endpoint

El endpoint proporcionará las siguientes respuestas:

```json
  {
    "Producto": "BODY SPLASH",//nombre del producto
    "Entradas": "60",//cuantos entraron
    "Salidas": "0",//cuantos salieron
    "Usuario": "1",//cuantos salieron por un usuario
    "Inventario": "59"//y cuantos quedan en total en el inventario
  }
```



# Registro de productos

El endpoint permite registrar los productos realizados en el inventario de una barberia.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/productos`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

```json
{
  "Nombre": "Producto de prueba",   // El nombre del producto (reemplaza "Producto de prueba" con el nombre deseado).
  "ValorVenta": 1000,               // El valor de venta del producto (reemplaza 1000 con el valor deseado).
  "InventarioBase": 50,             // El inventario base del producto (reemplaza 50 con el valor deseado).
  "Activo": 1                   // Indica si el producto está activo o no (1 o 0).
}
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/productos/1
```

donde le 1 es el id, :id.



# Registro de PagoProductoUsuarios

El endpoint permite registrar los Pagos de Productos de un Usuarios realizados en el inventario de una barberia.

## Características del Endpoint

- Método: POST,GET,PUT,DELETE
- Ruta del Endpoint: `/PagoProductoUsuarios`

## Estructura del Cuerpo de la Solicitud

El cuerpo de la solicitud debe tener el siguiente formato en JSON:

```json
{
  "UsuarioProducto_Id": 123,   // El ID del UsuarioProducto asociado al pago (reemplaza 123 con un valor válido).
  "Cantidad": 5,               // La cantidad del producto en el pago (reemplaza 5 con un valor válido).
  "ValorUnitario": 1000,       // El valor unitario del producto en el pago (reemplaza 1000 con un valor válido).
  "ValorTotal": 5000,          // El valor total del pago (reemplaza 5000 con un valor válido).
  "Activo": 1              // Indica si el pago está activo o no (1 o 0).
}
```

## PUT y DELETE del endpoint

para hacer el PUT y el DELETE debe colocar el id como parámetro de la petición http ejemplo:

```http
http://HostName:port/PagoProductoUsuarios/1
```

donde le 1 es el id, :id.

