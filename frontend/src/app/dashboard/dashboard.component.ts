import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {Job} from '../model/job';
import { AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  


  constructor(){}

  ngOnInit(){
  
  }

  

  
}




