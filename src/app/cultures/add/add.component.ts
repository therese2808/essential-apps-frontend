import { Component, OnInit } from '@angular/core';
import { PlantService } from '../service/plant.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Plant } from '../model/plant.model';
import { Router } from '@angular/router';
import {FileUploader} from "ng2-file-upload"

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  plant = new Plant();
  uploader!: FileUploader;
  constructor(private plantService: PlantService, private router: Router) {}

  // intializeFileUploader(){
  //   this.uploader = new FileUploader({
  //     url:
  //   })
  //}

  ngOnInit(): void {
    this.plant = new Plant();
  }

  addParamCultureForm = new FormGroup({
    urlImg: new FormControl('', Validators.required),
    nom_plante: new FormControl('', Validators.required),
  });

  saveData(): void {
    this.plantService
      .addPlant(this.addParamCultureForm.value as Plant)
      .subscribe((res) => {
        console.log('vidéo créer avec succès!');
        this.router.navigateByUrl('/cultures');
      });
  }
}
