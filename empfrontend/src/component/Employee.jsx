import React, { useEffect } from 'react'
import { useState } from 'react';
import {getEmployee} from  '../services/EmployeeService'
const Employee = () => {
  const [employees,setEmployee] = useState([])
  useEffect(() => {
    getEmployee()
    .then((response) => {
        setEmployee(response.data);
      })
  .catch( error => {
    console.error(error);
  }
  )
  }, [])
  
  return (<>
    <div className='container'>
    <h1 className='text-center'>List of Employee </h1>
    <table className='table table-striped table-hover table-bordered table-sm'>
        <thead >
            <th>Employee Id </th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee email </th>
        </thead>
        <tbody>
            {
        employees.map(emp =>
           <tr key={emp.id}
           >
            <td>{emp.id}</td>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.email}</td>
           </tr>)
           }
        </tbody>
    </table>
    </div>
  </>
  )
}

export default Employee;