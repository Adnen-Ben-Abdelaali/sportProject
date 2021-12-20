import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilderLogin : FormBuilder , private routerLogin:Router) { }

  ngOnInit() 
  {

    this.loginForm=this.formBuilderLogin.group({
      userEmail:['',[Validators.email,Validators.required]],
      userPassword:['',[Validators.minLength(8),Validators.required]]
      })
  }

  onClickLogin(formValueUserLogin:any)
  {
    let users=JSON.parse(localStorage.getItem("users")||"[]");
    let idUser=JSON.parse(localStorage.getItem("idUser")||"1");
    formValueUserLogin.id=idUser;
    users.push(formValueUserLogin);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("idUser",idUser+1);
    this.routerLogin.navigate(['']);
  }
  
}
