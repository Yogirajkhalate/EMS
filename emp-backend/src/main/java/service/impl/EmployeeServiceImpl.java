package service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.EmployeeDto;
import entity.Employee;
import exception.ResourceNotFound;
import mapper.EmployeeMapper;
import repository.EmployeeRepo;
import service.EmployeeServices;

 @Service
public class EmployeeServiceImpl implements EmployeeServices {
	 @Autowired
	public EmployeeRepo employeeRepo;
	public EmployeeServiceImpl() {
	}
	public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
		this.employeeRepo = employeeRepo;
	}
      // Add Employee 
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeedto) {	
		Employee employee = EmployeeMapper.mapToEmployee(employeedto);
		Employee saved = employeeRepo.save(employee);
		return EmployeeMapper.mapToEmployeeDto(saved) ;
	}
	
	// GEt  1 Employee
	@Override
	public EmployeeDto getEmployeeById(Long id) {
	    Employee emp =  employeeRepo.findById(id)
	      .orElseThrow(() -> new ResourceNotFound("Employee not exist of Id : " +id));
		return EmployeeMapper.mapToEmployeeDto(emp);
	}
	
	// Get All Employee
	@Override
	public List<EmployeeDto> getAllEmployee() {
	   List<Employee> emp = employeeRepo.findAll();
	   
		return emp.stream().map((empl) -> EmployeeMapper.mapToEmployeeDto(empl)).collect(Collectors.toList());
	}
	
	// Update Employee 
	@Override
	public EmployeeDto updateEmp(long id, EmployeeDto emp) {
		 Employee empl =  employeeRepo.findById(id)
			      .orElseThrow(() -> new ResourceNotFound("Employee not exist of Id : " +id));
		
		 empl.setFirstName(emp.getFirstName());  
		 empl.setLastName(emp.getLastName());
		 empl.setEmail(emp.getEmail());
		 Employee update = employeeRepo.save(empl);
			 
		return EmployeeMapper.mapToEmployeeDto(update);
	}
	
	// delete Employee 
	@Override
	public void deletEmp(long id) {
		Employee empl =  employeeRepo.findById(id)
			      .orElseThrow(() -> new ResourceNotFound("Employee not exist of Id : " +id));
		employeeRepo.deleteById(id);
	}

}
