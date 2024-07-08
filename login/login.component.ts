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


  login(){
    alert("Login Clicked")
  }

  accessEmail(event:any){

    this.email=event.target.value
    console.log(this.email);
    
  }

  accessPassword(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }
}


