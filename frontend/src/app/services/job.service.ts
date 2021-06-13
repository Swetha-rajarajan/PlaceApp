import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import {Job} from '../model/job';


@Injectable(
  
)

export class JobService {
  

  public BOOKMARK_SERVICE_BASE_URL = 'http://localhost:8092/BookMarkService/api/v1/bookmarks';

  constructor(private http: HttpClient) { }

  getAllJobDetails(): any{
    return this.http.get(this.BOOKMARK_SERVICE_BASE_URL + '/all');
  }

  addJob(job: Job): any{
    return this.http.post(`${this.BOOKMARK_SERVICE_BASE_URL}/addjob`,job,{responseType:'text'} );
  }

  addToBookmark(job: Job): any{
    return this.http.put(`${this.BOOKMARK_SERVICE_BASE_URL}/addtobookmark`, job,{responseType:'text'});
  }

  removefromBookmark(job: Job): any{
    return this.http.put(`${this.BOOKMARK_SERVICE_BASE_URL}/removefrombookmark`,job,{responseType:'text'});
  }


}
