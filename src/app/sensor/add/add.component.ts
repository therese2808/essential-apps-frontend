import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from 'src/app/models/node';
import { User } from 'src/app/models/user';
import { NodeServiceService } from 'src/app/service/node-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  node:Node= new Node();
  users:User[] =[];
  constructor(private nodeService: NodeServiceService, private userService: UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.userService.getUsers().subscribe({
      next : (data)=>{
        this.users = data;
        console.log(data);
        
      },
      error : (error)=>console.log(error),
      complete : () => console.log("I m finishing")
    })
  }
  ajouter(){
    this.nodeService.addNode(this.node).subscribe({
      next : ()=>this.router.navigateByUrl('/sensor')
    })}

}
