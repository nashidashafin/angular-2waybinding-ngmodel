import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data:string='welcome to login page...'
  secondData="Enter your Password"
  email:any=""
  psw:any=""


  login(mail:any,password:any){  //this argyment can anything, not exactly what we pass from template rendering variable
    this.email =mail.value
    this.psw=password.value
    alert(`you email is ${this.email} and password is ${this.psw}`)
  }

  
}


