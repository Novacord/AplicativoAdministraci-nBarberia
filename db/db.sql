CREATE DATABASE barber;
use barber;
CREATE TABLE Usuarios(
	Usuario_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre varchar(200) NOT NULL,
	Documento varchar(50) NOT NULL,
	Correo varchar(150) NOT NULL,
	Clave varchar(50) NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL
);

CREATE TABLE Roles(
	Rol_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre varchar(80) NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL
);


CREATE TABLE UsuarioRoles(
	UsuarioRol_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Usuario_Id int NOT NULL,
	Rol_Id int NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(Usuario_Id),
	FOREIGN KEY (Rol_Id) REFERENCES Roles(Rol_Id)
);


CREATE TABLE servicios(	
    Servicio_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre varchar(500) NOT NULL,
	Valor int NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL
);

CREATE TABLE Trabajos(
	Trabajo_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Servicio_Id INTEGER NOT NULL,
	Usuario_Id INTEGER NOT NULL,
	Valor INT NOT NULL,
	Observaciones varchar(2000) NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    	FOREIGN KEY (Servicio_Id) REFERENCES servicios(Servicio_Id),
    	FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(Usuario_Id)
);


CREATE TABLE Productos(
    Producto_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nombre varchar(200) NOT NULL,
    ValorVenta int NOT NULL,
	InventarioBase int NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL
);


CREATE TABLE Entradas(
	Entrada_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Producto_Id int NOT NULL,
	Cantidad int NOT NULL,
	ValorUnitario int NOT NULL,
	Observaciones nvarchar(2000) NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL,
	FOREIGN KEY (Producto_Id) REFERENCES Productos(Producto_Id)
);

CREATE TABLE Salidas(
	Salida_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Producto_Id int NOT NULL,
	Cantidad int NOT NULL,
	ValorUnitario int NOT NULL,
	Observaciones nvarchar(2000),
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL,
    FOREIGN KEY (Producto_Id) REFERENCES Productos(Producto_Id)
);



CREATE TABLE UsuarioProductos(	
    UsuarioProducto_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	Usuario_Id int NOT NULL,
	Producto_Id int NOT NULL,
	Cantidad int NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL,
	FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(Usuario_Id),
	FOREIGN KEY (Producto_Id) REFERENCES Productos(Producto_Id)
);

CREATE TABLE PagoUsuarioProducto(	
    PagoUsuarioProducto_Id INTEGER PRIMARY KEY AUTO_INCREMENT,
	UsuarioProducto_Id int NOT NULL,	
	Cantidad int NOT NULL,
	ValorUnitario int NOT NULL,
	ValorTotal int NOT NULL,
	FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Activo bit NOT NULL,
	FOREIGN KEY (UsuarioProducto_Id) REFERENCES UsuarioProductos(UsuarioProducto_Id)
);






