import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import  registerFormTemplate  from '../templates/registerFormTemplate';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  registerFormTemplate:Array<any>
  button:string;
  constructor(private requestService:RequestService){};
  ngOnInit(): void {
    this.registerFormTemplate=registerFormTemplate.controls;
    this.button=registerFormTemplate.button;
  }
  registerUser(data){
    this.requestService.sendPostRequest("/register",data).subscribe((data:any)=>{
      console.log("data",data);
    },(error)=>{
      console.log("error", error);
    });
  }

}
