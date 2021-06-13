import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  isToken = false;


  constructor(private userService: UserService, private router: Router) {
   
   }

  ngOnInit(): void {
  }

  isTokenPresent(): any {
    if (this.userService.getToken() != null) {
      return this.isToken = true;
    }
    return false;
  }
  logOut(): void {
    this.userService.removeToken();
    this.router.navigateByUrl("/login-component");
  }

  

 



  

}
