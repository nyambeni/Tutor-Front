import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl="http://localhost:4000/students";
  Studenturl = "http://localhost:4000/register"
  deleteUrl = "http://localhost:4000"
  constructor(private http:HttpClient) { }

  public getStud(){

    return this.http.get<any>( this.userUrl);

  }
  
  registerStud(students:any){
    return this.http.post<any>(this.Studenturl,students)

  }
  public deleteStud(studentno){

    return this.http.delete<any>( this.deleteUrl+'/'+studentno)
  }
}
