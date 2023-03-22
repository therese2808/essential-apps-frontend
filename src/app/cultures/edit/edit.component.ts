import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlantService } from '../service/plant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../model/plant.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editCulture = new FormGroup({
    urlImg: new FormControl(),
    nom_plante: new FormControl(),
  });

  constructor(
    private plantService: PlantService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  plant!: Plant;
  ngOnInit(): void {
    this.plantService
      .getPlantById(this.router.snapshot.params['id'])
      .subscribe((res) => {
        this.plant = res;
        this.editCulture.patchValue(res);
      });
  }

  saveData() {
    this.plantService
      .updatePlant(
        this.router.snapshot.params['id'],
        this.editCulture.value as Plant
      )
      .subscribe((res) => this.route.navigateByUrl('/cultures'));
  }
}
