import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthData{
  success : boolean,
  message : string
}

interface registerResponse{
  success : boolean
}

interface userResponse{
  username : string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http : HttpClient) { }

  setLoggedIn(value){
    this.loggedInStatus = value
  }

  get getLoggedInStatus(){
    return this.loggedInStatus
  }
  
  isLoggedIn(){
    return this.http.get<AuthData>('/api/isloggedin.php')
    // return this.isLoggedIn
  }

  validateUser(username, password){
    // post user detail to the api server and return user detail if user exists
    return this.http.post<AuthData>('/api/auth.php', { username, password })
  }

  registerUser(username, password){
    return this.http.post<registerResponse>('/api/register.php', {username, password})
  }

  getLoggedInUser(){
    return this.http.get<userResponse>('/api/getuserdetail.php')
  }

  logoutUser(){
    return this.http.get<AuthData>('/api/logout.php')
  }

}
