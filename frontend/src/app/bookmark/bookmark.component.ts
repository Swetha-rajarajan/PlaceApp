import { Component, OnInit } from '@angular/core';
import {Job} from '../model/job';
import {JobService} from '../services/job.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  
    
  

  //jobs: Job[] = [];
  //job: Job;


  constructor(private jobservice : JobService) { }

  ngOnInit(): void {
   // this.jobs = [];
   // this.getAllJobs();
  }

  /*getAllJobs(): any{
    this.jobservice.getAllJobDetails().subscribe(
      (data) => {
        this.jobs = [];
        this.jobs = data;
      }
    )
  }


  removefrombookmark(job : Job): any{
    this.jobservice.removefromBookmark(job).subscribe(
      (data) => {
        this.jobs = this.getAllJobs().filter((existingjob) => existingjob.isbookmark === true);

      });
  }


  searchbookmarkedJodDetails(searchForm: any): any{
    console.log(searchForm.search);
    if(searchForm.search === ''){
      this.getAllJobs();
    }else{
      this.jobs = this.jobs.filter((existingjob) => existingjob.jobid === searchForm.search);
    }
  }*/

}





