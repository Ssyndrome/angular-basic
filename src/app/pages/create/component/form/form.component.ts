import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash';
import citiesData from './city-data.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  validateForm!: FormGroup;
  hobbyOptions = ['riding', 'cats'];
  cityOptions = [];

  addIsLeaf(data): void {
    if (_.isEmpty(data.children)) {
      return { ...data, isLeaf: true };
    } else {
      return { ...data, children: _.map(data.children, child => this.addIsLeaf(child)) };
    }
  }

  submitForm(): void {
    _.map(this.validateForm.controls, control => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initConfiguration();
    this.validateForm = this.fb.group({
      id: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      hobbies: [[]],
      city: [null, Validators.required],
      skills: new FormArray([
        new FormGroup({
          name: new FormControl('Java'),
          level: new FormControl(0)
        }),
        new FormGroup({
          name: new FormControl('C'),
          level: new FormControl(0)
        }),
        new FormGroup({
          name: new FormControl('C#'),
          level: new FormControl(0)
        }),
        new FormGroup({
          name: new FormControl('React'),
          level: new FormControl(0)
        }),
        new FormGroup({
          name: new FormControl('Angular'),
          level: new FormControl(0)
        }),
      ]),
    });
  }

  private initConfiguration(): void {
    this.cityOptions = _.map(citiesData, country => this.addIsLeaf(country));
    console.log(this.cityOptions);
  }

  get skills(): FormArray {
    return this.validateForm.get('skills') as FormArray;
  }
}
