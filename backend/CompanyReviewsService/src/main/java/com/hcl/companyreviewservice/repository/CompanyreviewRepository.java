package com.hcl.companyreviewservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hcl.companyreviewservice.model.Companyreview;
//Repository using mongodb framework
@Repository
public interface CompanyreviewRepository extends MongoRepository<Companyreview, String> {

}
