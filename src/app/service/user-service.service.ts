import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl:string = "http://localhost:8085/api/v1/users";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl,this.httpOptions)
  }
  getUserById(id:string){
    return this.http.get<User>(this.apiUrl+'/'+id)
  }
  addUser(user:User){
    return this.http.post(this.apiUrl,User)
  }
  updateUser(id:string,user:User){
    return this.http.put(this.apiUrl+'/'+id,User)
  }
  deleteUser(id:string){
    return this.http.delete(this.apiUrl+'/'+id)
  }
}
