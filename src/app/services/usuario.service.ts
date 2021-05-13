import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'gcruzrios', nombre: 'Greivin', apellido: 'Cruz Rios', sexo: 'Masculino'},
    {usuario: 'mperez', nombre: 'Mario', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'jsolano', nombre: 'Julio', apellido: 'Solano', sexo: 'Masculino'},
    {usuario: 'jpiedra', nombre: 'Julieta', apellido: 'Piedra', sexo: 'Femenino'},
    {usuario: 'gcruzrios', nombre: 'Greivin', apellido: 'Cruz Rios', sexo: 'Masculino'},
    {usuario: 'mperez', nombre: 'Mario', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'jsolano', nombre: 'Julio', apellido: 'Solano', sexo: 'Masculino'},
    {usuario: 'jpiedra', nombre: 'Julieta', apellido: 'Piedra', sexo: 'Femenino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  getUsuarioId(index:number){
    //Si fuera por Id
    //return this.listUsuarios.find(x => x.id === id);
    return this.listUsuarios[index];
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
