import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DiseaseModel } from 'src/app/models/diseases.model';

@Component({
  selector: 'app-check-diseases',
  templateUrl: './check-diseases.component.html',
  styleUrls: ['./check-diseases.component.css']
})
export class CheckDiseasesComponent implements OnInit {


  ngOnInit(): void {
  }

  fileToUpload: File ;

  constructor(private http: HttpClient) { }

  selectedFile!: File
  disease:DiseaseModel

  
  files: File[] = [];
  onChangeFile(event:any):void{
    this.files.push(...event.addedFiles);
        const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }

    this.http.post("http://localhost:8000/entities", formData).subscribe(res=>console.log(res))
    
  }

  // onSelect(event:any) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);

  //   const formData = new FormData();

  //   for (var i = 0; i < this.files.length; i++) { 
  //     formData.append("file[]", this.files[i]);
  //   }

  //   this.http.post("http://localhost:8000/entities", formData).subscribe(res=>console.log(res))
  // }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}

  upload():void{
    const formData = new FormData();
    
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("files[]", this.files[i]);
    }
   
    this.http.post("http://localhost:8000/entities", formData).subscribe(res=>console.log(res))
    console.log("hello world!");
  }
}
