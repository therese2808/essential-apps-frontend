import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturesRoutingModule } from './cultures-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CulturesRoutingModule
  ]
})
export class CulturesModule { }
