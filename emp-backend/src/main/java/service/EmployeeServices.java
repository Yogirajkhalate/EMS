package service;

import java.util.List;

import dto.EmployeeDto;
import entity.Employee;

public interface EmployeeServices {
	
   EmployeeDto createEmployee(EmployeeDto employeedto);
   EmployeeDto getEmployeeById(Long id);
   List<EmployeeDto> getAllEmployee();
}
