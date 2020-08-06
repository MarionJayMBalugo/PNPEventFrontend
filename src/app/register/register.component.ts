import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  constructor(private requestService:RequestService){};
  ngOnInit(): void {
  }
  registerUser(data){

    this.requestService.sendPostRequest("/register",data).subscribe((data:any)=>{
      console.log("data",data);
    },(error)=>{
      console.log("error", error);
    });
  }

}
