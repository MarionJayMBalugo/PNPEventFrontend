import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
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
      tempGroup[element.name]=new FormControl();
      tempGroup[element.name].setValue(element.value);
    });
    this.formInit = new FormGroup(tempGroup);
  }; 
  onClickSubmit(data){
    this.formDataEmitter.emit(data.value);
  };
}
