import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturesRoutingModule } from './cultures-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    CulturesRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class CulturesModule {}
