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
import { IsDefined, IsNumber } from 'class-validator';
export class validacionPrestamos {
    constructor(Usuario_Id, Producto_Id, Cantidad, Activo) {
        this.Usuario_Id = Usuario_Id;
        this.Producto_Id = Producto_Id;
        this.Cantidad = Cantidad;
        this.Activo = Activo;
    }
}
__decorate([
    Expose({ name: 'usuario-prestamo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El usuario-prestamo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro usuario-prestamo es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionPrestamos.prototype, "Usuario_Id", void 0);
__decorate([
    Expose({ name: 'producto-prestamo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El producto-prestamo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro producto-prestamo es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionPrestamos.prototype, "Producto_Id", void 0);
__decorate([
    Expose({ name: 'cantidad-prestamo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El cantidad-prestamo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro cantidad-prestamo obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionPrestamos.prototype, "Cantidad", void 0);
__decorate([
    Expose({ name: 'activo-prestamo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El activo-prestamo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro activo-prestamo es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionPrestamos.prototype, "Activo", void 0);
