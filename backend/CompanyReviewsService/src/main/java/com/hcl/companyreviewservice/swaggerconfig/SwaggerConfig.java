package com.hcl.companyreviewservice.swaggerconfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.google.common.base.Predicate;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket postsApi(){
        return new Docket(DocumentationType.SWAGGER_2).groupName("public-api")
                .apiInfo(apiInfo()).select().paths(postPaths()).build();	}

    private Predicate<String> postPaths() {
        // TODO Auto-generated method stub
        return (regex("/api/v1/companyreview.*"));	}

    private ApiInfo apiInfo() {
        // TODO Auto-generated method stub
        return new ApiInfoBuilder().title("PlaceApp API").
                description("Placeapp Api Swagger Implementation").
                termsOfServiceUrl("http://hcl.in").
                contact("joshideepika500@gmail.com").license
                ("HCL License").licenseUrl("joshideepika500@gmail.com").
                version("1.0").build();
    }}
