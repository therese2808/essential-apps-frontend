import { Component, OnInit, ElementRef } from '@angular/core';
import { PlantService } from '../service/plant.service';
import { Plant } from '../model/plant.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private palntService: PlantService
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
}
