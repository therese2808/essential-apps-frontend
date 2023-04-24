import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from '../models/node';
import { User } from '../models/user';
import { NodeServiceService } from '../service/node-service.service';
import { UserServiceService } from '../service/user-service.service';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  nodes : Node[] = [];

  constructor(private nodeService: NodeServiceService, private userService: UserServiceService, private router:Router, private socketService: SocketService) { }

  ngOnInit(): void {
    this.getAll();
    
  }
  getAll(){
    this.nodeService.getNodes().subscribe({
      next : (data)=>{
        this.nodes = data;
        console.log(data);
        
      },
      error : (error)=>console.log(error),
      complete : () => console.log("I m finishing")
    })
  }
   Delete(id:string){
     this.nodeService.deleteNode(id).subscribe(
       (data) => {
        this.getAll();
        console.log(data);
        
       })
   }

}
