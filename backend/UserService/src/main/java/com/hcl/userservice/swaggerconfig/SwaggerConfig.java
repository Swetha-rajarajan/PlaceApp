package com.hcl.userservice.swaggerconfig;

import static springfox.documentation.builders.PathSelectors.regex;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicate;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	 @Bean
	    public Docket postsApi(){
	        return new Docket(DocumentationType.SWAGGER_2).groupName("public-api")
	                .apiInfo(apiInfo()).select().paths(postPaths()).build();	}

	    private Predicate<String> postPaths() {
	        // TODO Auto-generated method stub
	        return (regex("/api/auth.*"));	}

	    private ApiInfo apiInfo() {
	        // TODO Auto-generated method stub
	        return new ApiInfoBuilder().title("HCL API").
	                description("Swagger Implementation").
	                termsOfServiceUrl("http://hcl.in").
	                contact("twinkalmistry07@gmail.com").license
	                ("HCL License").licenseUrl("twinkalmistry07@gmail.com").
	                version("1.0").build();
	    }

}
