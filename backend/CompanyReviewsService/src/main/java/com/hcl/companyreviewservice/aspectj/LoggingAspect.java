package com.hcl.companyreviewservice.aspectj;

import java.util.Date;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Before;

public class LoggingAspect {
	
	@Before("execution(com.hcl.companyreviewservice.controller.*)")
	public void logBefore() {
		System.out.println("@Before:" + new Date());
	}

	@After("execution(com.hcl.companyreviewservice.controller.*)")
	public void logAfter() {
		System.out.println("@After:" + new Date());
	}

	@AfterThrowing(pointcut = "execution(com.hcl.companyreviewservice.controller.*)", throwing = "exception")
	public void logAfterThrowing(Exception exception) {
		System.out.println("@AfterReturning:" + new Date());
		System.out.println("Exception caught:" + exception.getMessage());
	}

	@AfterReturning(pointcut = "execution(com.hcl.companyreviewservice.controller.*)", returning = "val")
	public void logAfterReturning(Object val) {
		System.out.println("Method return value:" + val);
		System.out.println("@AfterReturning:" + new Date());
	}
}