package com.hcl.companyreviewservice.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Document for Mongodb
@Document
public class Companyreview {
	
	@Id
	private String companyId;
	private String companyName;
	private String review;
	private String reviewerName;

	//Constructor Using fields
	public Companyreview(String companyId, String companyName, String review, String reviewerName) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.review = review;
		this.reviewerName = reviewerName;
	}
	
	//Non-parameterized constructors
	public Companyreview() {
		super();
		
	}

	//getters and setters
	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getReviewerName() {
		return reviewerName;
	}

	public void setReviewerName(String reviewerName) {
		this.reviewerName = reviewerName;
	}

	
}
