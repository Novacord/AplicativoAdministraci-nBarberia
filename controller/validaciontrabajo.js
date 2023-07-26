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
export class validaciontrabajo {
    constructor(Servicio_Id, Usuario_Id, Valor, observaciones) {
        this.Servicio_Id = Servicio_Id;
        this.Usuario_Id = Usuario_Id;
        this.Valor = Valor;
        this.observaciones = observaciones;
    }
}
__decorate([
    Expose({ name: 'servicio-id' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El servicio-id no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro servicio-id es obligatorio` }; } }),
    __metadata("design:type", Number)
], validaciontrabajo.prototype, "Servicio_Id", void 0);
__decorate([
    Expose({ name: 'usuario-id' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El usuario-id no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro usuario-id es obligatorio` }; } }),
    __metadata("design:type", Number)
], validaciontrabajo.prototype, "Usuario_Id", void 0);
__decorate([
    Expose({ name: 'Valor-trabajo' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El Valor-trabajo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro Valor-trabajo es obligatorio` }; } }),
    __metadata("design:type", Number)
], validaciontrabajo.prototype, "Valor", void 0);
__decorate([
    Expose({ name: 'observaciones-trabajo' }),
    IsString({ message: () => { throw { status: 406, message: `El observaciones-trabajo no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro observaciones-trabajo es obligatorio` }; } }),
    __metadata("design:type", String)
], validaciontrabajo.prototype, "observaciones", void 0);
