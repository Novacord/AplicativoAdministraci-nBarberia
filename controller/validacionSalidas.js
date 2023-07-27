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
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class validacionSalidas {
    constructor(Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo) {
        this.Producto_Id = Producto_Id;
        this.Cantidad = Cantidad;
        this.ValorUnitario = ValorUnitario;
        this.Observaciones = Observaciones;
        this.Activo = Activo;
    }
}
__decorate([
    Expose({ name: 'producto-salidas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El producto-salidas no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro producto-salidas es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionSalidas.prototype, "Producto_Id", void 0);
__decorate([
    Expose({ name: 'cantidad-salidas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El cantidad-salidas no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro cantidad-salidas es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionSalidas.prototype, "Cantidad", void 0);
__decorate([
    Expose({ name: 'valorU-salidas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El valorU-salidas no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro valorU-salidas obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionSalidas.prototype, "ValorUnitario", void 0);
__decorate([
    Expose({ name: 'observaciones-salidas' }),
    IsString({ message: () => { throw { status: 406, message: `El observaciones-salidas no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro observaciones-salidas es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionSalidas.prototype, "Observaciones", void 0);
__decorate([
    Expose({ name: 'activo-salidas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El activo-salidas no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro activo-salidas es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionSalidas.prototype, "Activo", void 0);
