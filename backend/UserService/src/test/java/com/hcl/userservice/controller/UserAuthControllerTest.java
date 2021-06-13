package com.hcl.userservice.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.hcl.userservice.model.User;
import com.hcl.userservice.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcl.userservice.controller.UserAuthController;

@AutoConfigureMockMvc
@SpringBootTest(classes = {  UserAuthController.class, UserService.class,User.class })
public class UserAuthControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	private User user;
	
	@MockBean
	UserService userService;
	
	@InjectMocks
	UserAuthController userAuthController;
	
    
	@BeforeEach
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(userAuthController).build();
		user = new User();
		user.setUserId(1);
		user.setUsername("admin");
		user.setEmail("admin@gmail.com");
		user.setPassword("admin");
		user.setFirstName("twinkal");
		user.setLastName("mistry");
		user.setMobileNumber(7600183275l);
	}
	
	@Test
	public void addUserSuccess() throws Exception {
		when(userService.addUser(any())).thenReturn(user);
		mockMvc.perform(post("/api/auth").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
				.andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void addUserExist() throws Exception {
		 when(userService.getuserByUsername(user.getUsername())).thenReturn(user);
		when(userService.addUser(any())).thenReturn(user);
		mockMvc.perform(post("/api/auth").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
				.andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void registerEmailIdExist() throws Exception {
		 when(userService.getuserByUsername(user.getUsername())).thenReturn(user);
		 when(userService.addUser(any())).thenReturn(null);
		mockMvc.perform(post("/api/auth").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
				.andExpect(status().isConflict()).andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void LoginUser() throws Exception {
        when(userService.validate(user.getEmail(), user.getPassword()));
		mockMvc.perform(post("/api/auth/login").contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
				.andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
	}
	
	
	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}


}
