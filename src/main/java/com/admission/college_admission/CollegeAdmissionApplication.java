package com.admission.college_admission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.admission")
@EntityScan(basePackages = "com.admission.model")
@EnableJpaRepositories(basePackages = "com.admission.repository")
public class CollegeAdmissionApplication {
	public static void main(String[] args) {
		SpringApplication.run(CollegeAdmissionApplication.class, args);
	}
}