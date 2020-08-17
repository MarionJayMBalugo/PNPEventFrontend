import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import loginFormTemplate from '../templates/loginFormTemplate';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormTemplate:Array<any>;
  button:string;
  constructor(private requestService:RequestService){};
  ngOnInit(): void {
    this.loginFormTemplate=loginFormTemplate.controls;
    this.button=loginFormTemplate.button;
  }
  loginUser(data){
    this.requestService.sendPostRequest("/login",data).subscribe((data:any)=>{
      console.log("data",data);
    },(error)=>{
      console.log("error", error);
    });
  }

}
