import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

//const userXid : Usuario = {}

export class CrearUsuarioComponent implements OnInit {

 sexo: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  
  ];

  

  form: FormGroup;
  public id: string ='';
 

  constructor(private fb: FormBuilder, 
              private _usuarioService: UsuarioService,
              private router:Router, 
              private activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      sexo:['', Validators.required],

    })
  }

  ngOnInit(): void {
    
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      
    });

    if (this.id){
      this.cargarUsuario(this.id);
    }
   
  }

  cargarUsuario(id:any){
      
      const usuario: Usuario = this._usuarioService.getUsuarioId(id);
      console.log(usuario);



      this.form.value.usuario = usuario.usuario;
      this.form.value.nombre = usuario.nombre;
      this.form.value.apellido = usuario.apellido;
      this.form.value.sexo =  usuario.sexo;

    //}
  }

  agregarUsuario(){
   

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,

    }
    //console.log(user)
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])
    this._snackBar.open('Usuario fue agregado con éxito!', '', {
      duration:1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }
}
