import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../model/user'

@Injectable()
export class UserService {

  constructor(private httpClient:HttpClient) { }

  addUsers(newUser:User){
    return this.httpClient.post<User>('http://localhost:8092/UserService/api/auth',newUser);
  }
  login(user:User) :any {
    return this.httpClient.post<User>('http://localhost:8092/UserService/api/auth/login',user);
  }

  // set tocken
  setToken(token:string): void{
    localStorage.setItem("authToken",token);
  }
  // get the token
  getToken():string{
    return localStorage.getItem("authToken");
  }
  removeToken():void
{
  localStorage.removeItem("authToken");
}
}
