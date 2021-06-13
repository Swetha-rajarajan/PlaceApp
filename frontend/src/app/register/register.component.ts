import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User = new User();
  userList:Array<User> = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({

   
    email: new FormControl('', [Validators.required && Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required && Validators.minLength(6)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobileNumber:  new FormControl('', [Validators.required && Validators.maxLength(10) && Validators.minLength(10)]),
    ConfimPassword : new FormControl('', [Validators.required && Validators.minLength(6)])
   
  })

  getUserNameErrorMsg() {
    if (this.registerForm.get('username').invalid && (this.registerForm.get('username').dirty || this.registerForm.get('username').touched)) {
      return "Enter the Username Properly"
    }
    else {
      return "";
    }
  }
  getEmailErrorMsg(){
    if(this.registerForm.get('email').invalid && this.registerForm.get('email').dirty){
      return "Enter the email address correctly"
    }
    else{
      return "";
    }
  }
  getPasswordErrorMsg(){
    if(this.registerForm.get('password').invalid&&this.registerForm.get('password').dirty){
      return "Enter the correct password"
    }
    else{
      return "";
    }
  }
  getFirstNameErrorMsg(){
    if(this.registerForm.get('firstname').invalid&&this.registerForm.get('firstname').dirty){
      return "Enter the Firstname Properly"
    }
    else{
      return "";
    }
  }

  getLastNameErrorMsg(){
    if(this.registerForm.get('lastname').invalid&&this.registerForm.get('lastname').dirty){
      return "Enter the LastName Properly"
    }
    else{
      return "";
    }
  }
  getMobileNumberErrorMsg(){
    if(this.registerForm.get('mobileNumber').invalid&&this.registerForm.get('mobileNumber').dirty){
      return "Enter the Mobile Number Properly"
    }
    else{
      return "";
    }
  }
  
  getConfirmPasswordErrorMsg(){
    if(this.registerForm.get('ConfimPassword').valid){
      if(this.registerForm.get('password').value == this.registerForm.get('ConfimPassword').value){
        return "";
      }
      else{
        return "Password does not matched";
      }
    }
    else{
      return "";
    }
    
  }


  register() {
    if (this.registerForm.valid) {
      const data : User= {'username' : this.registerForm.value.username,
                    'password' : this.registerForm.value.password,
                    'email': this.registerForm.value.email,
                    'firstName':this.registerForm.value.firstname,
                    'lastName':this.registerForm.value.lastname,
                    'mobileNumber':this.registerForm.value.mobileNumber};
      console.log(this.user.email);
      this.userList.push(this.user);
      this.userService.addUsers(data)
        .subscribe(resp => {
          console.log(resp);
          alert("Registered User Succesfully");
        },
        error => {
          console.log(error);
        })
        this.user = new User();
      
    }
    else {
      alert("Entered Detailes are not correct")
    }
  }



}
