import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = '../../../assets/programmer.png';
  form: FormGroup;
  loading = false;

  constructor(private router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar) { 

    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required],
    });

  }


  ngOnInit(): void {
  }

  ingresar() {
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    //console.log(usuario);
    //console.log(password);
    
    if (usuario === "gcruzrios@hotmail.com" && password ==="1234567" ){
        this.fakeLoading();

    }else{
        //Mensaje Error
        this.error();
    }
    
  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      //this.router.navigateByUrl('/dashboard');
      this.router.navigate(['dashboard']);
      //this.loading= false;
    }, 1500)
  }

}
