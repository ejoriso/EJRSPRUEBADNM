import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('ormerino',Validators.required),
    password : new FormControl('pruebaDnm',Validators.required)
  })

  ngOnInit(): void {}

  onLogin(form: {usuario: string, password: string}){
    if(form.usuario === 'ormerino' && form.password === 'pruebaDnm') {
      // Redirigir al usuario a pantalla principal.
    } else {
      // Mostrar un error.
    }
  }

}
