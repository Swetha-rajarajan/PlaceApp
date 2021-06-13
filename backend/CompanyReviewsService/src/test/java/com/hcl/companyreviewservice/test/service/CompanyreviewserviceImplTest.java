package com.hcl.companyreviewservice.test.service;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hcl.companyreviewservice.exception.ReviewNotFoundException;
import com.hcl.companyreviewservice.model.Companyreview;
import com.hcl.companyreviewservice.repository.CompanyreviewRepository;
import com.hcl.companyreviewservice.service.CompanyreviewServiceImpl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;


public class CompanyreviewserviceImplTest {

	@MockBean
	private Companyreview companyreview;
	@Mock
	private CompanyreviewRepository companyreviewRepository;
	@InjectMocks
	private CompanyreviewServiceImpl companyreviewServiceImpl;
	private List<Companyreview>reviewList = null;
	
	@BeforeEach
    public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		companyreview = new Companyreview();
		companyreview.setCompanyId("b101");
		companyreview.setCompanyName("Microsoft");
		companyreview.setReview("Excellent");
		companyreview.setReviewerName("John");
		
		reviewList = new ArrayList<>();
		reviewList.add(companyreview);

	}
	
	 @Test
	    public void addReviewSuccess() {
	        when(companyreviewRepository.insert((companyreview))).thenReturn(companyreview);
	        boolean status = companyreviewServiceImpl.addReview(companyreview);
	        assertEquals(true, status);
	    }
 
	 @Test
	    public void deleteReviewSuccess() throws ReviewNotFoundException {
	        boolean flag = companyreviewServiceImpl.deleteReview("a101");
	        assertEquals(true, flag);
	    }
	 
	 
	 



}
