import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  registerUser(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if(username == '') errors.push('Username can not be empty')
    if(password == '') errors.push('Password can not be empty')
    if(password != cpassword) errors.push('Confirm password did not match')

    if(errors.length == 0){
      this.auth.registerUser(username, password).subscribe(data => {
        // console.log(data);
        if(data.success){
          this.auth.setLoggedIn(true);
          this.router.navigate(['/admin'])
        }
        else{
          $('.error').html('Can not be registed');
        }
      })
    }
    else{
      let errMsg = '';
        errors.forEach(error => {
          errMsg += error + '<br>'
        });
        $('.error').html(errMsg);
    }
  }

}
