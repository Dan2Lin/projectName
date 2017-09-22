import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
       username: ['adss'],
       mobile: [''],
       passwordGroup: fb.group({
         password: [''],
         confirmPass: ['']
      })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('~~~~~~~');
    console.log(this.formModel.value);
  }

}
