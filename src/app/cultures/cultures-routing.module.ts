import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListCultureParamComponent } from './list-culture-param/list-culture-param.component';

const routes: Routes = [
  { path: '', component: ListComponent },

  { path: 'new-plant', component: AddComponent },
  { path: 'edit-plant/:id', component: EditComponent },
  { path: 'plant-details/:id', component: ListCultureParamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturesRoutingModule {}
