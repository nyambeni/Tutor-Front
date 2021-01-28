import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _registerUrl = "http://localhost:1000/register"
  constructor(private http:HttpClient) { }

  registerUser(user){
   return this.http.post<any>(this._registerUrl, user)
  }
}
