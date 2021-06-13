package com.hcl.userservice.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggerAspect {
	
	Logger logger = LoggerFactory.getLogger(LoggerAspect.class);
	
	@Before("execution(* com.hcl.userservice.controller.UserAuthController.*(..))")
	public void logforHomepage(JoinPoint joinPoint) {
		logger.info("Inside Before Advice"+joinPoint.getSignature().getName());
	}
	
	@After("execution(* com.hcl.userservice.controller.UserAuthController.*(..))")
	public void logforHP(JoinPoint joinPoint) {
		logger.info("Inside after Advice "+joinPoint.getSignature().getName());
	}
	
	@AfterReturning("execution(* com.hcl.userservice.controller.UserAuthController.*(..))")
	public void HP(JoinPoint joinPoint) {
		logger.info("Inside Afterthrowing Advice "+joinPoint.getSignature().getName());
	}
	


}
