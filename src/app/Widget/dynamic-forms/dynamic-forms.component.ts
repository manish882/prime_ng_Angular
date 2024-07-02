import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  @Input() formConfig: any[] = [];
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      items: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  get items(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }

  buildForm(): void {
    const formArray = this.dynamicForm.get('items') as FormArray;
    this.formConfig.forEach(field => {
      const control = new FormControl(
        '',
        field.validators ? field.validators : []
      );
      formArray.push(control);
    });
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted', this.dynamicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
