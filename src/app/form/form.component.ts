import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentRoute = this.router.url;
  @Input() button:string;
  @Input() formTemplate:Array<any>;
  @Output() formDataEmitter= new EventEmitter<string>();
  formInit:FormGroup;
  constructor(private router: Router) {};
  ngOnInit(): void {
    let tempGroup={};
    this.formTemplate.forEach(element => {
      tempGroup[element.name]=new FormControl('',element.validators);
      tempGroup[element.name].setValue(element.value);
    });
    this.formInit = new FormGroup(tempGroup);
  }; 
  onClickSubmit(data){
    this.formDataEmitter.emit(data.value);
  };
  hasError(inputName){
    return this.formInit.get(inputName).invalid && (this.formInit.get(inputName).dirty || this.formInit.get(inputName).touched);
  }
  listErrors(inputName){
    console.log("errorss",this.formInit.get(inputName).errors);
  }

}
