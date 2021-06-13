package com.hcl.companyreviewservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.companyreviewservice.exception.ReviewNotFoundException;
import com.hcl.companyreviewservice.model.Companyreview;
import com.hcl.companyreviewservice.service.CompanyreviewService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/companyreview")
public class CompanyreviewController {
	
	@Autowired
	CompanyreviewService companyreviewService;

	//Method to get all reviews
	@GetMapping("/getreviews")
	public ResponseEntity<?> getAllReviews(){
		return new ResponseEntity<>(companyreviewService.getAllReviews(),HttpStatus.OK);
	}
	
	//Method to add review
	@PostMapping("/addreview")
	public ResponseEntity<?> addReview(
			@RequestBody Companyreview companyreview){
		companyreviewService.addReview(companyreview);
		if(companyreview!=null) {
			return new ResponseEntity<>("New Review added",HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<>("New Review not added",HttpStatus.CONFLICT);
		}
	}

	//Method to delete review
	@DeleteMapping("deletereview/{companyId}") 
	public ResponseEntity<?> deleteReview(
			@PathVariable("companyId") String companyId){
		try {
			if(companyreviewService.deleteReview(companyId)) {
				return new ResponseEntity<>("Review deleted successfully",HttpStatus.OK);
			}
		}catch(ReviewNotFoundException e) {
			e.printStackTrace();
			return new ResponseEntity<>("Review not found",HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>("Review not found",HttpStatus.NOT_FOUND);
	}
	
}