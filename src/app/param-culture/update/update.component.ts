import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParamService } from '../service/param-culture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Param } from '../model/Param';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  plantParam!: Param;
  editParamPlantForm = new FormGroup({
    type: new FormControl(),
    nom_plante: new FormControl(),
    temps_croissance: new FormControl(),
    niv_phosphore: new FormControl(),
    niv_ph: new FormControl(),
    niv_azote: new FormControl(),
    niv_potasium: new FormControl(),
    taux_humidite: new FormControl(),
  });

  constructor(
    private paramService: ParamService,
    private routeActivated: ActivatedRoute,
    private route: Router
  ) {}
  paramCulture!: Param;
  ngOnInit(): void {
    this.paramService
      .getParamCultureById(this.routeActivated.snapshot.params['id'])
      .subscribe((res) => {
        this.paramCulture = res;
        this.editParamPlantForm.patchValue(res);
      });
  }

  saveData() {
    this.paramService
      .updateParamPlant(
        this.routeActivated.snapshot.params['id'],
        this.editParamPlantForm.value as Param
      )
      .subscribe((res) => this.route.navigateByUrl('/cultures/params'));
  }
}
