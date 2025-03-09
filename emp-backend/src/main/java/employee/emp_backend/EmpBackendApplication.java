package employee.emp_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan( basePackages = {"controller","service", "service.impl", "repository", "mapper", "dto"})
@EntityScan("entity")
@EnableJpaRepositories(basePackages = "repository")
public class EmpBackendApplication {
	public static void main(String[] args) {
		System.out.println("Check");
		SpringApplication.run(EmpBackendApplication.class, args);	
	}
}
