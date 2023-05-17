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
import { Moisture } from 'src/app/models/moisture';
import { Light } from 'src/app/models/light';
import { Dht11 } from 'src/app/models/dht11';
import { Fire } from 'src/app/models/fire';
import { Water } from 'src/app/models/water';

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
  node:any
  constructor(private nodeService: NodeServiceService, private tempService: TempService,
    private moistureService: MoistureService, private lightService: LightService,
    private waterService: WaterService, private dht11Service: Dht11Service, 
    private fireService: FireService, private userService: UserServiceService, 
    private router:Router,private routeActivated: ActivatedRoute ,private socket: Socket) { 
      
      }

  ngOnInit(): void {
    //this.node= this.nodeService.getsocket();
    //console.log(this.node);
    
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
  //this.node = this.nodeService.getNodeById(id);
  //console.log(this.node);
  
//     this.socket.emit('NodeSocket',this.nodes)
     this.nodeService.getNodeById(id).subscribe(
      data=>{
        this.value=data;
        this.user=this.getByIdUser(this.value.user);
        this.temp= this.getByIdTemp(this.value.temp.slice(-1));
        this.light=  this.getByIdLigth(this.value.light.slice(-1));
        this.water=  this.getByIdWater(this.value.water.slice(-1));
        this.fire=  this.getByIdFire(this.value.fire.slice(-1));
        this.dht11= this.getByIdDht11(this.value.dht11.slice(-1));
        this.moisture=  this.getByIdMoisture(this.value.moisture.slice(-1));
  console.log(this.getByIdFire(this.value.fire.slice(-1)));
       
       
   }
);
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
