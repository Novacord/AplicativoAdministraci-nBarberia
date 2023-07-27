import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionServicios {

    @Expose({ name: 'nombre-servicio' })
    @IsString({message: ()=>{ throw {status: 406, message: `El nombre-servicio no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro nombre-servicio es obligatorio`}}})
    Nombre: string;
    
    @Expose({ name: 'valor-servicio' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El valor-servicio no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro valor-servicio es obligatorio`}}})
    Valor: number;

    @Expose({ name: 'activo-servicio' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El activo-servicio no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro activo-servicio es obligatorio`}}})
    Activo: number;


    constructor(
        Nombre:string, 
        Valor:number,
        Activo:number
        ) {
      this.Nombre = Nombre;
      this.Valor = Valor;
      this.Activo = Activo;
    }
}