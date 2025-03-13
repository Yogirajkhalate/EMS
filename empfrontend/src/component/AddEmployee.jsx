import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const AddEmployee = () => {
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')


   const navigate = useNavigate();
    function handleFirstName(e){
      setFirstName(e.target.value);
    }

   function handleLastName(e){
    setLastName(e.target.value);
    }

    function handleEmail(e){
      setEmail(e.target.value);
      }

      function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
    
        console.log("Sending data:", employee); // Debugging statement
    
        createEmployee(employee)
            .then((response) => {
                console.log("Response:", response.data);
                navigate('/employees');
            })
            .catch((error) => {
                console.error("Error:", error.response ? error.response.data : error.message);
            });
    }
     
  return (
    <>
    <br />
    <br />
    <div className='container'>
        <div className='row'>
            <div className='card'>
              <h1 className='text-center'> Add Employee </h1>
              <div className='card-body'>
                <form method='POST'>
                    <div className='form-group'>
                <label className='form-label mb-2' > First Name : </label>
                <input type='text'
                 placeholder='Add Employee first Name' 
                 name='firstName' 
                 value={firstName} 
                 className='form-control'
                 required
                 onChange={handleFirstName}
                 /> 
                 <label className='form-label mb-2' > Last Name : </label>
                <input type='text'
                 placeholder='Add Employee Last Name' 
                 name='lastName' 
                 value={lastName} 
                 className='form-control'
                 required
                 onChange={handleLastName}
                 /> 
                 <label className='form-label mb-2' > Email : </label>
                <input type='email'
                 placeholder='Add Employee Email' 
                 name='email' 
                 value={email} 
                 className='form-control'
                 required
                 onChange={handleEmail}
                 /> 
                    </div>
                    <button type="button" className='btn btn-success' onClick={saveEmployee}>Submit</button>

                    <button 
    type="button" 
    className="btn btn-secondary" 
    style={{ marginLeft: '10px' }} 
    onClick={() => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }}
>
    Clear
</button>

                </form>
                 
              </div>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default AddEmployee;
