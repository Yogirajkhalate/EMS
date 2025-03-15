import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeId, updateEmployee,deleteEmployee } from '../services/EmployeeService'
import { useNavigate ,useParams } from 'react-router-dom'

const AddEmployee = () => {
  
 const { id } = useParams();
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')


  const [error,SetError]=useState({firstName:'',lastName:'',email:''})
    
  useEffect(() => {
    if (id) {
      getEmployeeId(id)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
            .catch((error) => console.error(error));
    }
}, [id]); 

  
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

      function saveOrUpdateEmployee(e) {
        e.preventDefault();
       if(validateForm()){
         
        const employee = { firstName, lastName, email };
    
        console.log("Sending data:", employee); 
        if(id){

          updateEmployee(id,employee).then((response) => {
            console.log(response.data);
            navigate('/employees');
          }).catch(error=>{
            console.error(error);
          })
         }else{
        createEmployee(employee)
            .then((response) => {
                console.log("Response:", response.data);
                navigate('/employees');
            })
            .catch((error) => {
                console.error("Error:", error.response ? error.response.data : error.message);
            });

       }
      }
        
    }

    function validateForm(){
      let valid = true;
      const errorCopy = { ...error };

      if(firstName.trim()){
        errorCopy.firstName='';
      }else{
        errorCopy.firstName='First Name is Required'
        valid = false;
      }
      if(lastName.trim()){
        errorCopy.lastName='';
      }else{
        errorCopy.lastName='Last Name is Required'
        valid = false;
      }
      if(email.trim()){
        errorCopy.email='';
      }else{
        errorCopy.email='Email is Required'
        valid = false;
      }
      SetError(errorCopy);
      return valid;
    }
    function backToHome(){
      navigate('/employees');
    }
    function pageTital(){
        if(!id){
        return <h1 className='text-center'> Add Employee </h1>
        }else{
          return <h1 className='text-center'> Upadate Employee </h1>
        }
    }
  return (
    <>
    <br />
    <br />
    <div className='container'>
        <div className='row'>
            <div className='card'>
              {
               pageTital()
              }
              <div className='card-body'>
                <form >
                    <div className='form-group'>
                
                <label className='form-label mb-2' > First Name : </label>
                <input type='text'
                 placeholder='Add Employee first Name' 
                 name='firstName' 
                 value={firstName} 
                 className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                 required
                 onChange={handleFirstName}
                 /> {
                  error.firstName && <div className='invalid-feedback'>{error.firstName}</div>
                }
                
                
                 <label className='form-label mb-2' > Last Name : </label>
                <input type='text'
                 placeholder='Add Employee Last Name' 
                 name='lastName' 
                 value={lastName} 
                 className={`form-control ${error.lastName ? 'is-invalid' : ''}`}

                 required
                 onChange={handleLastName}
                 /> 
                 {error.email && <div className='invalid-feedback'>{error.lastName}</div>}
                 <label className='form-label mb-2' > Email : </label>
                <input type="email"
                 placeholder='Add Employee Email' 
                 name='email' 
                 value={email} 
                 className={`form-control ${error.email ? 'is-invalid' : ''}`}
                 required
                 onChange={handleEmail}
                 /> 
                 {error.email && <div className='invalid-feedback'>{error.email}</div>}
                    </div>
                    <button type="button" className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>

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

<button   type="button"
className="btn btn-secondary" 
style={{ marginLeft: '10px' }}
onClick={backToHome} 
 >back</button>

                </form>
                 
              </div>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default AddEmployee;
