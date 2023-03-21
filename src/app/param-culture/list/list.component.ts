import { Component, OnInit } from '@angular/core';
import { ParamCultureService } from '../service/param-culture.service';
import { ParamCulture } from '../model/ParamCulture';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  paramsCultureList: ParamCulture[] = [];
  constructor(private paramCultureService: ParamCultureService) {}

  ngOnInit(): void {
    this.paramCultureService
      .listParamsCulture()
      .subscribe((res) => (this.paramsCultureList = res));
  }

  public delete(id: number) {
    console.log(`clicked !`);
    if (confirm('Do you want to delete this culture paramter')) {
      this.paramCultureService
        .deleteParamCulture(id)
        .subscribe((res) => this.ngOnInit());
    }
  }
}
