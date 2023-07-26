import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validaciontrabajo {

    @Expose({ name: 'servicio-id' })
    @IsNumber({},{message: ()=>{ throw {status: 406, message: `El servicio-id no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro servicio-id es obligatorio`}}})
    Servicio_Id: number;

    @Expose({ name: 'usuario-id' })
    @IsNumber({},{message: ()=>{ throw {status: 406, message: `El usuario-id no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro usuario-id es obligatorio`}}})
    Usuario_Id: number; 

    @Expose({ name: 'Valor-trabajo' })
    @IsNumber({},{message: ()=>{ throw {status: 406, message: `El Valor-trabajo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro Valor-trabajo es obligatorio`}}})
    Valor: number;

    @Expose({ name: 'observaciones-trabajo' })
    @IsString({message: ()=>{ throw {status: 406, message: `El observaciones-trabajo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro observaciones-trabajo es obligatorio`}}})
    observaciones: string;

    constructor(
        Servicio_Id:number, 
        Usuario_Id:number, 
        Valor:number,
        observaciones:string
        ) {
      this.Servicio_Id = Servicio_Id;
      this.Usuario_Id = Usuario_Id;
      this.Valor = Valor;
      this.observaciones = observaciones;
    }
}