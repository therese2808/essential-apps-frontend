import { Component, OnInit } from '@angular/core';
import { ParamService } from '../service/param-culture.service';
import { Param } from '../model/Param';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  paramsCultureList: Param[] = [];
  constructor(private paramService: ParamService) {}

  ngOnInit(): void {
    this.paramService
      .listParamsCulture()
      .subscribe((res) => (this.paramsCultureList = res));
  }

  public delete(id: number) {
    console.log(`clicked !`);
    if (confirm('Do you want to delete this culture paramter')) {
      this.paramService
        .deleteParamCulture(id)
        .subscribe((res) => this.ngOnInit());
    }
  }
}
