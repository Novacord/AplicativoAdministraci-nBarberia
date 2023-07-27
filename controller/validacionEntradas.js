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
export class validacionEntradas {
    constructor(Producto_Id, Cantidad, ValorUnitario, Observaciones, Activo) {
        this.Producto_Id = Producto_Id;
        this.Cantidad = Cantidad;
        this.ValorUnitario = ValorUnitario;
        this.Observaciones = Observaciones;
        this.Activo = Activo;
    }
}
__decorate([
    Expose({ name: 'producto-entrada' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El producto-entrada no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro producto-entrada es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionEntradas.prototype, "Producto_Id", void 0);
__decorate([
    Expose({ name: 'cantidad-entrada' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El cantidad-entrada no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro cantidad-entrada es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionEntradas.prototype, "Cantidad", void 0);
__decorate([
    Expose({ name: 'valorU-entrada' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El valorU-entrada no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro valorU-entrada obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionEntradas.prototype, "ValorUnitario", void 0);
__decorate([
    Expose({ name: 'observaciones-entrada' }),
    IsString({ message: () => { throw { status: 406, message: `El observaciones-entrada no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro observaciones-entrada es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionEntradas.prototype, "Observaciones", void 0);
__decorate([
    Expose({ name: 'activo-entrada' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El activo-entrada no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro activo-entrada es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionEntradas.prototype, "Activo", void 0);
