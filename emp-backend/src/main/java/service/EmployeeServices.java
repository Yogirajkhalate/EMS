package service;

import dto.EmployeeDto;

public interface EmployeeServices {
	
   EmployeeDto createEmployee(EmployeeDto employeedto);
   EmployeeDto getEmployeeById(Long id);
}
