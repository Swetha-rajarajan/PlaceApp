import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:boolean;
  user:User = new User();
  constructor(private route: ActivatedRoute, private router: Router, private userService:UserService) {
    this.isloggedin = true;
   }
   isloggedin:boolean;

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required && Validators.minLength(6)])
    
  })

  getUserNameErrorMsg() {
    if (this.loginForm.get('username').invalid && (this.loginForm.get('username').dirty || this.loginForm.get('username').touched)) {
      return "Enter the Username Properly"
    }
    else {
      return "";
    }
  }
  getPasswordErrorMsg(){
    if(this.loginForm.get('password').invalid&&this.loginForm.get('password').dirty){
      return "Enter the correct password"
    }
    else{
      return "";
    }
  }


  login(){
    if (this.loginForm.valid) {
            this.user.username = this.loginForm.value.username;
            this.user.password = this.loginForm.value.password;
            console.log(this.user)
            this.userService.login(this.user).subscribe(
              data => {
                console.log(data);
                console.log(data.status);
                if(data.status == undefined){
                  this.isloggedin=true;
                  // localStorage.setItem('userLoggedin',data.token);
                  this.userService.setToken(data.token);
                  this.router.navigate(['/dashboard-component']);
                  alert("Login User Succesfully")
                }
                else{
                  localStorage.setItem('userLoggedin','');
                  this.router.navigateByUrl("/login-component");
                }
              }
            );
    }
    else {
      alert("Entered Detailes are not correct")
    }

  }

}
