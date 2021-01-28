import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl="http://localhost:1000/users";
  constructor(private http:HttpClient) { }

  public getUser(){

    return this.http.get<any>( this.userUrl);

  }

}
