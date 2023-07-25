var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionBarberos {
    constructor(Usuario_Id, Nombre, Documento, Correo, Clave, FechaRegistro, Activo, Rol_Id) {
        this.Usuario_Id = Usuario_Id;
        this.Nombre = Nombre;
        this.Documento = Documento;
        this.Correo = Correo;
        this.Clave = Clave;
        this.FechaRegistro = FechaRegistro;
        this.Activo = Activo;
        this.Rol_Id = Rol_Id;
    }
}
__decorate([
    Expose({ name: 'id' }),
    __metadata("design:type", Number)
], validacionBarberos.prototype, "Usuario_Id", void 0);
__decorate([
    Expose({ name: 'nombre-usuario' }),
    IsString({ message: () => { throw { status: 406, message: `El nombre-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro nombre-usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionBarberos.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'documento-usuario' }),
    MinLength(8, { message: () => { throw { status: 406, message: `El documento-usuario debe tener minimo 8 caracteres` }; } }),
    MaxLength(10, { message: () => { throw { status: 406, message: `El documento-usuario debe tener maximo 10 caracteres` }; } }),
    IsString({ message: () => { throw { status: 406, message: `El documento-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro documento-usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionBarberos.prototype, "Documento", void 0);
__decorate([
    Expose({ name: 'correo-usuario' }),
    IsEmail({}, { message: () => { throw { status: 406, message: `El correo-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro correo-usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionBarberos.prototype, "Correo", void 0);
__decorate([
    Expose({ name: 'clave-usuario' }),
    IsString({ message: () => { throw { status: 406, message: `El clave-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro clave-usuario es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionBarberos.prototype, "Clave", void 0);
__decorate([
    Expose({ name: 'fecha-registro' }),
    __metadata("design:type", String)
], validacionBarberos.prototype, "FechaRegistro", void 0);
__decorate([
    Expose({ name: 'activo-usuario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El activo-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro activo-usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionBarberos.prototype, "Activo", void 0);
__decorate([
    Expose({ name: 'rol-usuario' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El rol-usuario no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro rol-usuario es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionBarberos.prototype, "Rol_Id", void 0);
