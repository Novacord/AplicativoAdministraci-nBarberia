import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';
export class validacionPrestamos {

    @Expose({ name: 'usuario-prestamo' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El usuario-prestamo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro usuario-prestamo es obligatorio`}}})
    Usuario_Id: number;
    
    @Expose({ name: 'producto-prestamo' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El producto-prestamo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro producto-prestamo es obligatorio`}}})
    Producto_Id: number;

    @Expose({ name: 'cantidad-prestamo' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El cantidad-prestamo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro cantidad-prestamo obligatorio`}}})
    Cantidad: number;

    @Expose({ name: 'activo-prestamo' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El activo-prestamo no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro activo-prestamo es obligatorio`}}})
    Activo: number;


    constructor(
        Usuario_Id:number,
        Producto_Id:number, 
        Cantidad:number,
        Activo:number
        ) {
      this.Usuario_Id = Usuario_Id;
      this.Producto_Id = Producto_Id;
      this.Cantidad = Cantidad;
      this.Activo = Activo;
    }
}