import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';


@NgModule({
  imports: [CreateRoutingModule, FormsModule, NgZorroAntdModule, CommonModule],
  declarations: [CreateComponent],
  exports: [CreateComponent]
})
export class CreateModule { }
