import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId !: string
  userName !: string

  constructor() { }

  ngOnInit(): void {
  }

  displayUserDetails(values: any) {
    console.log(values);
  }

}
