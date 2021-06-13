import { Component, OnInit } from '@angular/core';
import {Job} from '../model/job';
import {JobService} from '../services/job.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[] = [];
  job: Job = new Job();

  private updateSubscription: Subscription;
  constructor(private jobservice : JobService) {
    

   }

  ngOnInit(): void {
    this.getAllJobs();
  }


  getAllJobs(): any {
    this.jobservice.getAllJobDetails().subscribe(
      (data) => {
        this.jobs = data;
      }
    );
  }



 /* searchBookmarkedJobs(searchForm: any): any {
    console.log(searchForm.search);
    if (searchForm.search === ''){
      this.getAllJobs();
    }else{
      this.jobs = this.jobs.filter((existingjob) => existingjob.jobid === searchForm.search);
    }
  }
*/


  

  /*addJob(jobForm: any): void {

    console.log(jobForm.jobid);
    this.job.jobid = jobForm.jobid;
    this.job.jobrole = jobForm.jobrole;
    this.job.joblocation = jobForm.joblocation;
    this.jobservice.addJob(this.job).subscribe(
      data => {
        this.getAllJobs();
      }
      )
  }*/

  removefrombookmark(job : Job): any{
    this.jobservice.removefromBookmark(job).subscribe(
      data => {
           this.getAllJobs();
      });
  }

  searchbookmarkedJodDetails(searchForm: any): any{
    console.log(searchForm.search);
    if(searchForm.search === ''){
      this.getAllJobs();
    }else{
      this.jobs = this.jobs.filter((existingjob) => existingjob.joblocation === searchForm.search);
    }
  }






}



