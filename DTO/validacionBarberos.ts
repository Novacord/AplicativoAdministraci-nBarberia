import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionBarberos {

    @Expose({ name: 'id' })
    Usuario_Id: number;

    @Expose({ name: 'nombre-usuario' })
    @IsString({message: ()=>{ throw {status: 406, message: `El nombre-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro nombre-usuario es obligatorio`}}})
    Nombre: string; 

    @Expose({ name: 'documento-usuario' })
    @MinLength(8,{message: ()=>{ throw {status: 406, message: `El documento-usuario debe tener minimo 8 caracteres`}}})
    @MaxLength(10,{message: ()=>{ throw {status: 406, message: `El documento-usuario debe tener maximo 10 caracteres`}}})
    @IsString({message: ()=>{ throw {status: 406, message: `El documento-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro documento-usuario es obligatorio`}}})
    Documento: string;

    @Expose({ name: 'correo-usuario' })
    @IsEmail({}, {message: ()=>{ throw {status: 406, message: `El correo-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro correo-usuario es obligatorio`}}})
    Correo: string;

    @Expose({ name: 'clave-usuario' })
    @IsString({message: ()=>{ throw {status: 406, message: `El clave-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro clave-usuario es obligatorio`}}})
    Clave: string;

    @Expose({ name: 'fecha-registro' })
    FechaRegistro: string;

    @Expose({ name: 'activo-usuario' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El activo-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro activo-usuario es obligatorio`}}})
    Activo: number;


    @Expose({ name: 'rol-usuario' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El rol-usuario no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro rol-usuario es obligatorio`}}})
    Rol_Id: number;

    constructor(
        Usuario_Id:number, 
        Nombre:string, 
        Documento:string,
        Correo:string, 
        Clave:string, 
        FechaRegistro:string, 
        Activo:number, 
        Rol_Id:number
        ) {
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