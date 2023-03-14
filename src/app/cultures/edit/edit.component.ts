import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CultureService } from '../service/culture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../model/culture.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  editCulture = new FormGroup({
    type: new FormControl(),
    nom_plant: new FormControl(),
  });

  constructor(
    private cultureService: CultureService,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  plant!: Plant;
  ngOnInit(): void {
    this.cultureService
      .getPlantById(this.router.snapshot.params['id'])
      .subscribe((res) => {
        this.plant = res;
        console.log(res);
      });
  }

  saveData() {
    this.cultureService
      .updatePlant(
        this.router.snapshot.params['id'],
        this.editCulture.value as Plant
      )
      .subscribe((res) => this.route.navigateByUrl('/cultures'));
  }
}
