import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';
import { FormComponent } from './component/form/form.component';


@NgModule({
  imports: [CreateRoutingModule, FormsModule, NgZorroAntdModule, CommonModule, ReactiveFormsModule],
  declarations: [CreateComponent, FormComponent],
  exports: [CreateComponent]
})
export class CreateModule { }
