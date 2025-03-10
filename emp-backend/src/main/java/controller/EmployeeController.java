package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dto.EmployeeDto;
import service.EmployeeServices;

@RestController
@RequestMapping("api/employees")
public class EmployeeController {

    private final EmployeeServices employeeServices;

    @Autowired
    public EmployeeController(EmployeeServices employeeServices) {
        this.employeeServices = employeeServices;
    }
    // Add Employee 
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeedto) {
        EmployeeDto saved = employeeServices.createEmployee(employeedto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    
	// GEt  1 Employee
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id){
              EmployeeDto emp = employeeServices.getEmployeeById(id);
        return ResponseEntity.ok(emp);
       }
    
  // Get All Employee
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee() {
    	List<EmployeeDto> emp = employeeServices.getAllEmployee();
    	return ResponseEntity.ok(emp);
    	
    }
	// Update Employee 
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>updateEmp(@PathVariable long id , @RequestBody EmployeeDto emp){
    	EmployeeDto uemp= employeeServices.updateEmp(id, emp);
    	return ResponseEntity.ok(uemp);
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletEmp(@PathVariable long id) {
    	employeeServices.deletEmp(id);
    	return ResponseEntity.ok("Employee Delete Succesfully ");
    }
}

