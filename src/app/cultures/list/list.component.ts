import { Component, OnInit, ElementRef } from '@angular/core';
import { PlantService } from '../service/plant.service';
import { Plant } from '../model/plant.model';
import { DiseaseModel } from 'src/app/models/diseases.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private palntService: PlantService,
    private http:HttpClient
  ) {}
  public plantList: Plant[] = [];
  //plant!: Plant;
  ngOnInit(): void {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);
    this.palntService.listPlants().subscribe((plant) => {
      this.plantList = plant;
      console.table(this.plantList);
      //console.log(this.plantList.values);
    });
  }

  delete(id: number) {
    if (confirm(`voulez-vous vraiment supprimer cette vidéo`)) {
      this.palntService.deletePlant(id).subscribe((result) => {
        this.ngOnInit();
      });
    }
  }

  showId(id: number) {
    console.log(id);
  }

  selectedFile!: File
  disease:DiseaseModel

  
  onChangeFile(event:any):void{
    this.selectedFile = <File>event.target.files[0];
  }

 
  upload():void{
    const formData = new FormData();
    formData.append('files', this.selectedFile, this.selectedFile.name);
    this.http.post("http://localhost:8000/entities", formData).subscribe(res=>console.log(res))
  }

}
