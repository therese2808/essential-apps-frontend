import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Node } from 'src/app/models/node';
import { MoistureService } from 'src/app/service/moisture.service';
import { NodeServiceService } from 'src/app/service/node-service.service';
import { LightService } from 'src/app/service/lightService';
import { WaterService } from 'src/app/service/waterService';
import { FireService } from 'src/app/service/fireService';
import { Dht11Service } from 'src/app/service/dht11Service';
import { SocketService } from 'src/app/service/socket.service';
import { TempService } from 'src/app/service/temp.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  test:any
  nodes :Node[]=[]
  value:any;
  user:any;
  temp:any;
  moisture:any;
  light:any;
  dht11:any;
  fire:any;
  water:any
  constructor(private nodeService: NodeServiceService, private tempService: TempService,
    private moistureService: MoistureService, private lightService: LightService,
    private waterService: WaterService, private dht11Service: Dht11Service, 
    private fireService: FireService, private userService: UserServiceService, 
    private router:Router,private routeActivated: ActivatedRoute ,private socket: Socket) { 
      
      }

  ngOnInit(): void {
    this.getById(this.routeActivated.snapshot.params['id']); 
  }
  onChange(change:Node){
    const index = this.nodes.findIndex((node)=>{
      node===change
    })
    console.log(index);
     
  }
  onCreate(node:Node){

  }
  getById(id:string) {
    this.socket.emit('NodeSocket',this.nodes)
    this.nodeService.getNodeById(id).subscribe(
     data=>{
       this.value=data;
       this.getByIdUser(this.value.user.slice(-1));
       this.getByIdTemp(this.value.temp.slice(-1));
       this.getByIdLigth(this.value.ligth.slice(-1));
       this.getByIdWater(this.value.water.slice(-1));
       this.getByIdFire(this.value.fire.slice(-1));
       this.getByIdDht11(this.value.dht11.slice(-1));
       this.getByIdMoisture(this.value.moisture.slice(-1));
      //  console.log(data);
       
       
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
getByIdLigth(id:string) {
  this.lightService.getLightById(id).subscribe(
   data=>{
     this.light=data;    
 });
}
getByIdDht11(id:string) {
  this.dht11Service.getDht11ById(id).subscribe(
   data=>{
     this.dht11=data;    
 });
}
getByIdWater(id:string) {
  this.waterService.getWaterById(id).subscribe(
   data=>{
     this.water=data;    
 });
}
getByIdFire(id:string) {
  this.fireService.getFireById(id).subscribe(
   data=>{
     this.fire=data;    
 });
}
getByIdMoisture(id:string) {
  this.moistureService.getMoistureById(id).subscribe(
   data=>{
     this.moisture=data;    
 });
}
  ngOnDestroy() {
    
  }

}
