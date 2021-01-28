import { Component, OnInit } from '@angular/core';
import { UserService } from './../../app/user.service';


@Component({
  selector: 'app-table',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  users:any=[];
  constructor(private myService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
     this.myService.getUser().subscribe((data:any) => this.users=data);

  }

}