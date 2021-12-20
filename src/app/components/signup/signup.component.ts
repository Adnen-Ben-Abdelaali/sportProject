import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{

  SignUpUserForm: FormGroup;
  constructor(private formBuilderUser:FormBuilder, private routerSignUp:Router) { }

  ngOnInit()
  {
      this.SignUpUserForm=this.formBuilderUser.group({
      userFirstName:['',[Validators.minLength(3),Validators.required]],
      userLastName:['',[Validators.minLength(5),Validators.required]],
      userTel:['',[Validators.minLength(8),Validators.required]],
      userEmail:['',[Validators.email,Validators.required]],
      userPassword:['',[Validators.minLength(8),Validators.required]],
      confirmPwd:['',[Validators.minLength(8),Validators.required]]
      });

  }

  userSignUp(formValueUserSignUp:any)
  {
    let users=JSON.parse(localStorage.getItem("users")||"[]");
    let idUser=JSON.parse(localStorage.getItem("idUser")||"1");
    formValueUserSignUp.id=idUser;
    users.push(formValueUserSignUp);
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("idUser",idUser+1);
    this.routerSignUp.navigate(['login']);

  }

}
