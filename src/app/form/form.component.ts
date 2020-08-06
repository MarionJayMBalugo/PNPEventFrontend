import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formInfo:any;
  route = this.router.url;
  @Output() formdata= new EventEmitter<string>();
  loginForm:FormGroup;
  
  constructor(private router: Router) {};
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required,Validators.maxLength(8)]),
  })
    this.getFormInfo();
  };
  loginUser() {
      console.log(this.loginForm.status);
      console.log(this.loginForm.value);
  }
  onClickSubmit(data){
    this.formdata.emit(data);
  }
  getFormInfo(){
    switch(this.route) {
      case "/register":
        this.formInfo = {
          formControlDetails:[
            {name: "name", type: "text", id:"name"},
            {name: "email", type: "email", id:"email"},
            {name: "password", type: "password", id:"password"},
            {name: "confirmPassword", type: "password", id:"confirmPassword"}
          ],
          buttonName:"register"
        };
        break;
      case "/login":
        this.formInfo = {
          formControlDetails:[
            {name: "email", type: "email", id:"email"},
            {name: "password", type: "password", id:"password"},
          ],
          buttonName:"login"
        };
        break;
      default:
        // code block
    } 
  }
 
}
