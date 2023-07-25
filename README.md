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

# Servidor Express

el proyecto contiene una configuración básica para un servidor Express utilizando la librería `dotenv` para gestionar variables de entorno. La configuración del servidor, incluyendo el nombre del host y el puerto, se carga desde un archivo JSON y se utiliza para iniciar el servidor.

- para poder utilizar las librerías utilizada deben instalarlas con npm:

```bash
npm i
```

- Crea un archivo `.env` en el directorio raíz del proyecto y agrega el siguiente contenido:

```dotevn
MY_SERVER={"hostname": "localhost", "port": 3000}
```

- para inicializar el servidor de express:

```bash
npm run dev
```
