import { Validators } from '@angular/forms';
const loginFormTemplate ={
  controls:[
  {name: "email", type: "email", id:"email", validators:[Validators.required,Validators.email]},
  {name: "password", type: "password", id:"password",validators:[Validators.required,Validators.minLength(8)]},
  ],
  button:"login",  
};
export default loginFormTemplate;