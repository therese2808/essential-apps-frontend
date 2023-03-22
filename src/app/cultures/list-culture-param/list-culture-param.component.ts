import { Component, OnInit } from '@angular/core';
import { PlantService } from '../service/plant.service';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '../model/plant.model';
import { ParamService } from 'src/app/param-culture/service/param-culture.service';
import { Param } from 'src/app/param-culture/model/Param';

@Component({
  selector: 'app-list-culture-param',
  templateUrl: './list-culture-param.component.html',
  styleUrls: ['./list-culture-param.component.css'],
})
export class ListCultureParamComponent implements OnInit {
  constructor(
    private plantService: PlantService,
    private router: ActivatedRoute,
    private paramService: ParamService
  ) {}
  param!: Param;
  ngOnInit(): void {
    this.paramService
      .getParamCultureById(this.router.snapshot.params['id'])
      .subscribe((res) => {
        this.param = res;
        console.log(this.router.snapshot.params['id']);
      });
  }
}
