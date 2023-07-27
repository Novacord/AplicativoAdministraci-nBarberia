import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionEntradas {

    @Expose({ name: 'producto-entrada' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El producto-entrada no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro producto-entrada es obligatorio`}}})
    Producto_Id: number;
    
    @Expose({ name: 'cantidad-entrada' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El cantidad-entrada no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro cantidad-entrada es obligatorio`}}})
    Cantidad: number;

    @Expose({ name: 'valorU-entrada' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El valorU-entrada no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro valorU-entrada obligatorio`}}})
    ValorUnitario: number;

    @Expose({ name: 'observaciones-entrada' })
    @IsString({message: ()=>{ throw {status: 406, message: `El observaciones-entrada no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro observaciones-entrada es obligatorio`}}})
    Observaciones: string;

    @Expose({ name: 'activo-entrada' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El activo-entrada no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro activo-entrada es obligatorio`}}})
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