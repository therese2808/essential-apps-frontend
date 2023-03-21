import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { SensorComponent } from './sensor.component';

const routes: Routes = [
 { path: '', component: SensorComponent },
  {path: 'add', component: AddComponent}, 
 { path: 'edit/:id', component: EditComponent} ,
 { path: 'read/:id', component: ReadComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
