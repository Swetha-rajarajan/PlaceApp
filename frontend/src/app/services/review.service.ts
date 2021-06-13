import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companyreview } from '../model/companyreview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor( private httpClient:HttpClient){}

  getReviews(): Observable<Array<Companyreview>> {
    return this.httpClient.get<Array<Companyreview>>('http://localhost:8092/CompanyReviewsService/api/v1/companyreview/getreviews');

  }

  addReview(companyreview: Companyreview): Observable<Companyreview> {
    return this.httpClient.post<Companyreview>('http://localhost:8092/CompanyReviewsService/api/v1/companyreview/addreview',companyreview);
  
  }
}
