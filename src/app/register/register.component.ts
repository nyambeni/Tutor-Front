import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { UserService } from './../../app/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerStudent:any = {}
  constructor(private _register: UserService) { }

  ngOnInit(): void {
  }
  registerStud(){
    this._register.registerStud(this.registerStudent).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
