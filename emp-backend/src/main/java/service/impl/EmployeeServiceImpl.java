package service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dto.EmployeeDto;
import entity.Employee;
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

}
