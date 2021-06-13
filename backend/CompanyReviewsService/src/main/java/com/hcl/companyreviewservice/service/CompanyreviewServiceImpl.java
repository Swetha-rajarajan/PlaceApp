package com.hcl.companyreviewservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.hcl.companyreviewservice.exception.ReviewNotFoundException;
import com.hcl.companyreviewservice.model.Companyreview;
import com.hcl.companyreviewservice.repository.CompanyreviewRepository;

@Service
public class CompanyreviewServiceImpl implements CompanyreviewService{
	@Autowired
	CompanyreviewRepository companyreviewRepository;
	//service impl to get all reviews
	@Override
	public List<Companyreview> getAllReviews() {
		return companyreviewRepository.findAll();
	}

	//service impl to add reviews
	@Override
	public boolean addReview(@RequestBody Companyreview companyreview) {
		companyreviewRepository.save(companyreview);
		return true;
	}
	
	//service impl to delete review
	@Override
	public boolean deleteReview(String companyId) throws ReviewNotFoundException{
		try {
			companyreviewRepository.deleteById(companyId);
			return true;
		}catch(Exception e) {
			throw new ReviewNotFoundException("ReviewNotFoundException");
		}
		
	}
}

