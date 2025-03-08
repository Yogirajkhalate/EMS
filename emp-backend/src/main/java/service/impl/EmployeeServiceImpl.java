package service.impl;

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

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeedto) {	
		Employee employee = EmployeeMapper.mapToEmployee(employeedto);
		Employee saved = employeeRepo.save(employee);
		return EmployeeMapper.mapToEmployeeDto(saved) ;
	}
	@Override
	public EmployeeDto getEmployeeById(Long id) {
	    Employee emp =  employeeRepo.findById(id)
	      .orElseThrow(() -> new ResourceNotFound("Employee not exist of Id : " +id));
		return EmployeeMapper.mapToEmployeeDto(emp);
	}

}
