import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParamCultureService } from '../service/param-culture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamCulture } from '../model/ParamCulture';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  plantParam!: ParamCulture;
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
    private paramCultureService: ParamCultureService,
    private routeActivated: ActivatedRoute,
    private route: Router
  ) {}
  paramCulture!: ParamCulture;
  ngOnInit(): void {
    this.paramCultureService
      .getParamCultureById(this.routeActivated.snapshot.params['id'])
      .subscribe((res) => {
        this.paramCulture = res;
        this.editParamPlantForm.patchValue(res);
      });
  }

  saveData() {
    this.paramCultureService
      .updateParamPlant(
        this.routeActivated.snapshot.params['id'],
        this.editParamPlantForm.value as ParamCulture
      )
      .subscribe((res) => this.route.navigateByUrl('/cultures/params'));
  }
}
