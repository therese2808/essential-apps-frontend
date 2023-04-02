import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Node } from 'src/app/models/node';
import { User } from 'src/app/models/user';
import { NodeServiceService } from 'src/app/service/node-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  node=new Node();
  users:User[] =[];
  constructor(private nodeService: NodeServiceService, private userService: UserServiceService, private router:Router,private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById(this.routeActivated.snapshot.params['id']);
    this.getAll();
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
getById(id:string) {
   this.nodeService.getNodeById(id).subscribe(
    data=>{
      this.node=data;
      console.log(data)
  });
}
edit(){
  this.nodeService.updateNode(this.routeActivated.snapshot.params['id'],this.node)
    .subscribe( 
      { next : ()=>this.router.navigateByUrl('/sensor')}
      )
}
}
