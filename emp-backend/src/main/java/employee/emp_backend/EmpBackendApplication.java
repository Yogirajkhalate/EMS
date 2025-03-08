package employee.emp_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("entity")
public class EmpBackendApplication {
	public static void main(String[] args) {
		System.out.println("Check");
		SpringApplication.run(EmpBackendApplication.class, args);	
	}

}
