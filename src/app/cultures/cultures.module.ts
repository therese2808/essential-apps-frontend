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
import { CheckDiseasesComponent } from './check-diseases/check-diseases.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, ListCultureParamComponent, CheckDiseasesComponent],
  imports: [
    CommonModule,
    CulturesRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
})
export class CulturesModule {}
