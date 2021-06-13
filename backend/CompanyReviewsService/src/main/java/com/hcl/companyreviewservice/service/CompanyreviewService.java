package com.hcl.companyreviewservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.companyreviewservice.exception.ReviewNotFoundException;
import com.hcl.companyreviewservice.model.Companyreview;

@Service
public interface CompanyreviewService {
    //interface for companyreviewservice
	public List<Companyreview> getAllReviews();
	public boolean addReview(Companyreview companyreview);
	public boolean deleteReview(String companyId) throws ReviewNotFoundException;
	
}

