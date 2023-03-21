import { Component, OnInit, ElementRef } from '@angular/core';
import { CultureService } from '../service/culture.service';
import { Plant } from '../model/culture.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private cultureService: CultureService
  ) {}
  public plantList: Plant[] = [];
  ngOnInit(): void {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);
    this.cultureService
      .listPlants()
      .subscribe((plant) => (this.plantList = plant));
    console.table(this.plantList);
  }

  delete(id: number) {
    if (confirm(`voulez-vous vraiment supprimer cette vidéo`)) {
      this.cultureService.deletePlant(id).subscribe((result) => {
        this.ngOnInit();
      });
    }
  }
}
