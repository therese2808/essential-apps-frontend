import { Component, OnInit } from '@angular/core';
import { ParamCulture } from '../model/ParamCulture';
import { Plant } from 'src/app/cultures/model/culture.model';
import { ParamCultureService } from '../service/param-culture.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  plantParam = new ParamCulture();
  constructor(
    private paramCultureService: ParamCultureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.plantParam = new ParamCulture();
  }

  save(form: NgForm) {
    this.paramCultureService.addPlant(this.plantParam).subscribe((res) => {
      this.router.navigateByUrl('/cultures/params');
    });
  }
}
