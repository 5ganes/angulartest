import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.auth.setLoggedIn(true);
    this.auth.isLoggedIn().subscribe(data => {
      if(data.success){
        this.router.navigate(['admin'])
      }
    })
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.auth.validateUser(username, password).subscribe(data => {
      if(data.success){
        this.auth.setLoggedIn(true);
        this.router.navigate(['/admin'])
      }
      else{
        // alert(data.message)
        $('.error').html('Invalid Credentials');
        $('.text').css('border', '1px solid red')
      }
    })

    // console.log(username, password)

  }

}
