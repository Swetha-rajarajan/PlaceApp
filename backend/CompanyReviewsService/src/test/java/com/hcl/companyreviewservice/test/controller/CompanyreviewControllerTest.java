package com.hcl.companyreviewservice.test.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcl.companyreviewservice.controller.CompanyreviewController;
import com.hcl.companyreviewservice.model.Companyreview;
import com.hcl.companyreviewservice.repository.CompanyreviewRepository;
import com.hcl.companyreviewservice.service.CompanyreviewService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class CompanyreviewControllerTest {
	
	 	@Autowired
	    private MockMvc mockMvc;
	 	private Companyreview companyreview;

	    @MockBean
	    private CompanyreviewService companyreviewService;

	    @InjectMocks
	    private CompanyreviewController companyreviewController;
		private List<Companyreview>reviewList; 
	    @Autowired
	    private CompanyreviewRepository companyreviewRepository;

	    @BeforeEach
	    public void setUp()
	    {
	    	MockitoAnnotations.initMocks(this);
	        mockMvc = MockMvcBuilders.standaloneSetup(companyreviewController).build();
	        companyreview = new Companyreview();
	        companyreview.setCompanyId("b101");
			companyreview.setCompanyName("Microsoft");
			companyreview.setReview("Excellent");
			companyreview.setReviewerName("John");
			
			reviewList = new ArrayList<>();
			reviewList.add(companyreview);


	    }

	    @Test
	    public void addReviewSuccess() throws Exception
	    {
	        when(companyreviewService.addReview(any())).thenReturn(true);
	        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/companyreview/addreview").contentType
	                (MediaType.APPLICATION_JSON)
	                .content(asJsonString(companyreview)))
	                .andExpect(MockMvcResultMatchers.status().isCreated())
	                .andDo(MockMvcResultHandlers.print());
	    }

	    @Test
	    public void addReviewFailure() throws Exception
	    {
	        when(companyreviewService.addReview(any())).thenReturn(false);
	        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/companyreview/addreview").
	                contentType(MediaType.APPLICATION_JSON)
	                .content(asJsonString(companyreview)))
	                .andExpect(MockMvcResultMatchers.status().is2xxSuccessful())
	                .andDo(MockMvcResultHandlers.print());
	    } 
	    
	    @Test
	    public void deleteReviewSuccess() throws Exception {

	        when(companyreviewService.deleteReview("101")).thenReturn(true);
	        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/companyreview/deletereview/101")
	                .contentType(MediaType.APPLICATION_JSON))
	                .andExpect(MockMvcResultMatchers.status().isOk())
	                .andDo(MockMvcResultHandlers.print());
	    }

	    @Test
	    public void deleteReviewFailure() throws Exception {

	        when(companyreviewService.deleteReview("101")).thenReturn(false);
	        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/companyreview/deletereview/101")
	                .contentType(MediaType.APPLICATION_JSON))
	                .andExpect(MockMvcResultMatchers.status().isNotFound())
	                .andDo(MockMvcResultHandlers.print());
	    }

	    private static String asJsonString(final Object obj) {
	        try {
	            return new ObjectMapper().writeValueAsString(obj);
	        } catch (Exception e) {
	            throw new RuntimeException(e);
	        }
	    }


	}

