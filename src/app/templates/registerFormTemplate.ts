import { Validators } from '@angular/forms';
const registerFormTemplate={
  controls:[{name: "name", type: "text", id:"name",validators:Validators.required},
  {name: "email", type: "email", id:"email" ,validators:[Validators.required,Validators.email]},
  {name: "password", type: "password", id:"password", value:"123456789",validators:[Validators.required,Validators.minLength(8)]},
  {name: "confirmPassword", type: "password", id:"confirmPassword",value:"123456789",validators:Validators.required}
],
button:"register",
};
export default registerFormTemplate;