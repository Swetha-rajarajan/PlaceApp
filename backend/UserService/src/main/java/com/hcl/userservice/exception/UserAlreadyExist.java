package com.hcl.userservice.exception;

public class UserAlreadyExist extends Exception {
	
	private static final long serialVersionUID = 1L;
	
	public UserAlreadyExist(String message) {
		super(message);
	}
}
