import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private requestService:RequestService){};
  ngOnInit(): void {
  }
  loginUser(data){
    this.requestService.sendPostRequest("/login",data).subscribe((data:any)=>{
      console.log("data",data);
    },(error)=>{
      console.log("error", error);
    });
  }

}
