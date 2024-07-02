import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{
  formConfig: any[] = [
    { type: 'text', label: 'Name', name: 'name', validators: [Validators.required, Validators.minLength(3)] },
    { type: 'email', label: 'Email', name: 'email', validators: [Validators.required, Validators.email] },
    { type: 'number', label: 'Age', name: 'age', validators: [Validators.required, Validators.min(1)] }
  ];
  constructor(){
    
  }

  ngOnInit(): void {
    
  }
}
