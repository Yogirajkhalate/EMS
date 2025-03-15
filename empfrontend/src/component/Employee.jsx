import React, { useEffect } from 'react'
import { useState } from 'react';
import {getEmployee} from  '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const [employees,setEmployee] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    getEmployee()
    .then((response) => {
        setEmployee(response.data);
      })
  .catch( error => {
    console.error(error);
  }
  )
  }, []);

  function addNewEmployee(){
     navigate('/Add-Employee')
  }

  const updateEmployee = (id) => {
    navigate(`/Edit-Employee/${id}`);
  }

  return (<>
  <div>
    <div className='container'>
    <h1 className='text-center'>List of Employee </h1>

    <button type="button" class="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
    <table className='table table-striped table-hover table-bordered table-sm'>
        <thead >
            <th>Employee Id </th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee email </th>
            <th>Action</th>
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
            <td>
              <button className='btn btn-info' onClick = {() => updateEmployee(emp.id)}>Update</button>
            </td>
           </tr>)
           }
        </tbody>
    </table>
    </div>
    </div>
  </>
  )
}

export default Employee;