import React, { useEffect } from 'react'
import { useState } from 'react';
import {getEmployee,deleteEmployee} from  '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const Employee = () => {
  const [employees,setEmployee] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    getAllEmplyee();  
  }, []);
  function getAllEmplyee(){
    getEmployee()
    .then((response) => {
        setEmployee(response.data);
      })
  .catch( error => {
    console.error(error);
  })
  }
  function addNewEmployee(){
     navigate('/Add-Employee')
  }

  const updateEmployee = (id) => {
    navigate(`/Edit-Employee/${id}`);
  }
  
  function deleteEmployeeId(id){
     console.log(id);
     deleteEmployee(id).then(()=>{
      getAllEmplyee();
     }).catch((error)=>{
       console.error(error);
     })
  }

  return (<>
  <div>
    <div className='container'>
    <h1 className='text-center'>List of Employee </h1>

    <button type="button" className ="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
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
              <button className='btn btn-danger' onClick = {() => deleteEmployeeId(emp.id)}>delete</button>
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