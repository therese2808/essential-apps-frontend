import { Component, OnInit } from '@angular/core';
import { CultureService } from '../service/culture.service';
import { NgForm } from '@angular/forms';
import { Plant } from '../model/culture.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  plant = new Plant();
  constructor(private cultureService: CultureService, private router: Router) {}

  ngOnInit(): void {
    this.plant = new Plant();
  }

  save(form: NgForm): void {
    this.cultureService.addPlant(this.plant).subscribe((res) => {
      console.log('vidéo créer avec succès!');
      this.router.navigateByUrl('/cultures');
    });
  }
}
