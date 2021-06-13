package com.hcl.userservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.userservice.repository.UserRepository;
import com.hcl.userservice.exception.UserAlreadyExist;
import com.hcl.userservice.exception.UserNotFoundException;
import com.hcl.userservice.model.User;

@Service
public interface UserService {
	
	
	
	public List<User> getAllUsers(); 
	
	public User addUser(User user) throws UserAlreadyExist;
	
	public boolean validate(String username, String password);
	public User getuserByUsername(String username) throws UserNotFoundException;
	
}
