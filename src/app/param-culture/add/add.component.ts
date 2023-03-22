import { Component, OnInit } from '@angular/core';
import { Param } from '../model/Param';
import { Plant } from 'src/app/cultures/model/plant.model';
import { ParamService } from '../service/param-culture.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  plantParam = new Param();
  constructor(
    private paramCultureService: ParamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.plantParam = new Param();
  }

  save(form: NgForm) {
    this.paramCultureService.addPlant(this.plantParam).subscribe((res) => {
      this.router.navigateByUrl('/cultures/params');
    });
  }
}
