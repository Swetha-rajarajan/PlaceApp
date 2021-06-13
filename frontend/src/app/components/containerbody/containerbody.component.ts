import { HostListener, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/app/model/job';
import { JobService } from 'src/app/services/job.service';


@Component({
  selector: 'app-containerbody',
  templateUrl: './containerbody.component.html',
  styleUrls: ['./containerbody.component.css'],
})
export class ContainerbodyComponent implements OnInit {
  li: any;
  lis = [];
  page = 2;
  bottomState = false;
  search = '';
  job : Job = new Job();
  jobsList:Array<Job> = [];
  constructor(public httpClient: HttpClient, private jobservice : JobService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.httpClient.get('https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json').subscribe((res) => {
        this.li = res;
        this.lis = this.li;
      });
    }, 0);
  }
  trackByFn(index, station) {
    return station.id;
  }
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    const bottomScroll = document.body.scrollHeight - 1000;
    if (window.pageYOffset > bottomScroll && this.bottomState === false) {
      this.bottomState = true;
      this.httpClient
        .get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?page=${this.page}`)
        .subscribe((res) => {
          this.li = res;
          if (this.li.length > 0) {
            this.lis = [...this.lis.concat(this.li)];
            this.bottomState = false;
            this.page = this.page + 1;
          } else {
            document.getElementById('loaderItems').style.opacity = '0';
          }
        });
    }
  }

  addInput() {
    console.log('hola');
  }

  addToBookmark(jobrole:string,joblocation:string,companyname:string){
    
    this.job.jobrole= jobrole;
    this.job.joblocation = joblocation;
    this.job.companyname = companyname;
    this.jobsList.push(this.job);
    

    this.jobservice.addJob(this.job)
      .subscribe(resp =>{
        console.log(resp);
        console.log("hello");
       
      },
      error =>{
        console.log(error);
      })
      this.job = new Job();
      alert("Job details added successfully");
  }
}
