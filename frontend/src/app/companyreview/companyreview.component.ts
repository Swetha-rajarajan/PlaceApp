import { Component, OnInit } from '@angular/core';
import { Companyreview } from '../model/companyreview';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-companyreview',
  templateUrl: './companyreview.component.html',
  styleUrls: ['./companyreview.component.css']
})
export class CompanyreviewComponent implements OnInit {
  searchCompany: any;
  

  errMessage : string;
  companyreview : Companyreview = new Companyreview();
  reviewlist : Array<Companyreview> = [];
  
  constructor(private reviewService : ReviewService) { }
  ngOnInit() : void {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews()
      .subscribe(resp => {
        if(resp){
          console.log(resp);
          this.reviewlist= resp;
        }
        else{
          this.errMessage='Unable to retrieve reviewlist'
        }
      },
        error => {
          this.errMessage = 'Http failure response for http://localhost:8080/api/v1/companyreview/getreviews: 404 Not Found';
        });
  }
  addReview() {
    if (!this.companyreview.companyName|| !this.companyreview.review || !this.companyreview.reviewerName ) {
      this.errMessage = 'Companyname, Review and Reviewername are required fields';
      return;
    }

    this.reviewService.addReview(this.companyreview).subscribe(response => {
      if (response) {
        this.reviewlist.push(this.companyreview);
        this.companyreview = new Companyreview();
      } else {
        this.errMessage = 'We are unable to add the selected review.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:8080/api/v1/companyreview/addreview: 404 Not Found';
    });
  } 
  
}