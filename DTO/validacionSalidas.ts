import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionSalidas {

    @Expose({ name: 'producto-salidas' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El producto-salidas no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro producto-salidas es obligatorio`}}})
    Producto_Id: number;
    
    @Expose({ name: 'cantidad-salidas' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El cantidad-salidas no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro cantidad-salidas es obligatorio`}}})
    Cantidad: number;

    @Expose({ name: 'valorU-salidas' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El valorU-salidas no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro valorU-salidas obligatorio`}}})
    ValorUnitario: number;

    @Expose({ name: 'observaciones-salidas' })
    @IsString({message: ()=>{ throw {status: 406, message: `El observaciones-salidas no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro observaciones-salidas es obligatorio`}}})
    Observaciones: string;

    @Expose({ name: 'activo-salidas' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El activo-salidas no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro activo-salidas es obligatorio`}}})
    Activo: number;


    constructor(
        Producto_Id:number, 
        Cantidad:number,
        ValorUnitario:number,
        Observaciones:string,
        Activo:number
        ) {
      this.Producto_Id = Producto_Id;
      this.Cantidad = Cantidad;
      this.ValorUnitario = ValorUnitario;
      this.Observaciones = Observaciones;
      this.Activo = Activo;
    }
}