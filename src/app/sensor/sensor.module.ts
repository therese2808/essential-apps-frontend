import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { SensorComponent } from './sensor.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SensorComponent,
    AddComponent,
    EditComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SensorRoutingModule
  ]
})
export class SensorModule { }
