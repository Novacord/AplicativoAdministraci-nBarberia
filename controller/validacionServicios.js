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
export class validacionServicios {
    constructor(Nombre, Valor, Activo) {
        this.Nombre = Nombre;
        this.Valor = Valor;
        this.Activo = Activo;
    }
}
__decorate([
    Expose({ name: 'nombre-servicio' }),
    IsString({ message: () => { throw { status: 406, message: `El nombre-servicio no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro nombre-servicio es obligatorio` }; } }),
    __metadata("design:type", String)
], validacionServicios.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'valor-servicio' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El valor-servicio no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro valor-servicio es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionServicios.prototype, "Valor", void 0);
__decorate([
    Expose({ name: 'activo-servicio' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El activo-servicio no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro activo-servicio es obligatorio` }; } }),
    __metadata("design:type", Number)
], validacionServicios.prototype, "Activo", void 0);
