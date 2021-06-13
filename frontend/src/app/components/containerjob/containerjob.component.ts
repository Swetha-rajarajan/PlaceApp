import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-containerjob',
  templateUrl: './containerjob.component.html',
  styleUrls: ['./containerjob.component.css'],
})
export class ContainerjobComponent implements OnInit {
  li: any;
  lis = {
    title: '',
    company: '',
    company_logo: '',
    company_url: '',
    created_at: '',
    description: '',
    how_to_apply: '',
    id: '',
    location: '',
    type: '',
    url: '',
  };
  private routeSub: Subscription;
  constructor(public httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      setTimeout(() => {
        this.httpClient
          .get(
            `https://api.allorigins.win/raw?url=https://jobs.github.com/positions/${params['id']}.json`
          )
          .subscribe((res) => {
            this.li = res;
            this.lis = this.li;
            document.getElementById(
              'CompanyDescId'
            ).innerHTML = this.lis.description;
          });
      }, 0);
    });
  }
}
