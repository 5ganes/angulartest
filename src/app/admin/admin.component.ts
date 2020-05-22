import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loggedInUsername

  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.getLoggedInUser().subscribe(data => {
      console.log(data)
      this.loggedInUsername = data.username
    })
  }

  logout(){
    this.auth.logoutUser().subscribe(data => {
      this.auth.setLoggedIn(false)
      this.router.navigate(['login'])
    })
  }

}
