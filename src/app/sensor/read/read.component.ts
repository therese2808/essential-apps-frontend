import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Node } from 'src/app/models/node';
import { MoistureService } from 'src/app/service/moisture.service';
import { NodeServiceService } from 'src/app/service/node-service.service';
import { NpkService } from 'src/app/service/npk.service';
import { SocketService } from 'src/app/service/socket.service';
import { TempService } from 'src/app/service/temp.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  value:any;
  user:any;
  temp:any;
  moisture:any;
  npk:any;
  constructor(private nodeService: NodeServiceService, private tempService: TempService, private moistureService: MoistureService, private npkService: NpkService, private userService: UserServiceService, private router:Router,private routeActivated: ActivatedRoute, private socketService: SocketService) { }

  ngOnInit(): void {
    this.getById(this.routeActivated.snapshot.params['id']);    
    this.socketService.setupSocketConnection();
  }
  getById(id:string) {
    this.nodeService.getNodeById(id).subscribe(
     data=>{
       this.value=data;
       this.getByIdUser(this.value.user.slice(-1));
       this.getByIdTemp(this.value.temp.slice(-1));
       this.getByIdNpk(this.value.npk.slice(-1));
       this.getByIdMoisture(this.value.moisture.slice(-1));
       console.log(data);
       
   });
 }
 getByIdUser(id:string) {
  this.userService.getUserById(id).subscribe(
   data=>{
     this.user=data;    
 });
}
getByIdTemp(id:string) {
  this.tempService.getTempById(id).subscribe(
   data=>{
     this.temp=data;  
       
 });
}
getByIdNpk(id:string) {
  this.npkService.getNpkById(id).subscribe(
   data=>{
     this.npk=data;    
 });
}
getByIdMoisture(id:string) {
  this.moistureService.getMoistureById(id).subscribe(
   data=>{
     this.moisture=data;    
 });
}
  ngOnDestroy() {
    this.socketService.disconnect();
  }

}
