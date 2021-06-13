package com.hcl.userservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.userservice.exception.UserAlreadyExist;
import com.hcl.userservice.model.User;
import com.hcl.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	// save the user
	
	@Override
	public User addUser(User user) throws UserAlreadyExist{
		User addUser = null;
		try {
			addUser= userRepository.save(user);
		}catch(Exception e) {
		}
		return addUser;
	}
	
	//validate the user using username and password

	@Override
	public boolean validate(String username, String password) {
		boolean status = false;
		if(userRepository.findByUsernameAndPassword(username, password) !=null) {
			status = true;
		}
		return status;
	
	}

	// get the user by username
	
	@Override
	public User getuserByUsername(String username)  {
		User user = null;
		try {
			user = userRepository.findByUsername(username);
		}
		catch(Exception e) {
		}
		if(user != null) {
			return user;
		}
		return user;
	}
	
	
	
}
