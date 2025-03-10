package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeedto) {
        EmployeeDto saved = employeeServices.createEmployee(employeedto);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id){
              EmployeeDto emp = employeeServices.getEmployeeById(id);
        return ResponseEntity.ok(emp);
       }
    
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee() {
    	List<EmployeeDto> emp = employeeServices.getAllEmployee();

    	return ResponseEntity.ok(emp);
    	
    }
}

