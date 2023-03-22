import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturesRoutingModule } from './cultures-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListCultureParamComponent } from './list-culture-param/list-culture-param.component';

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, ListCultureParamComponent],
  imports: [
    CommonModule,
    CulturesRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class CulturesModule {}
