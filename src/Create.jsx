import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {

    const [value, setValues]= useState({
        name:"",
        email:"",
        phone:''
    })


    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3000/users", value)
      .then(res => {
        console.log(res)
        navigate("/")
    })
      .catch(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-light min-vh-100' style={{width:"650px"}}>
    <div className='w-100 w-md-75 border bg-white shadow p-5 rounded ' >
      <h1 className='mb-4'>Add a User</h1>
        <form className='w-100' onSubmit={handleSubmit}>
          <div className='mb-3 text-start'>
            <label htmlFor='name' className='form-label'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              placeholder='Enter name'
              required
              onChange={e=>setValues({...value, name:e.target.value})}
            />
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-control'
              placeholder='Enter email'
              required
              onChange={e=>setValues({...value, email:e.target.value})}
            />
          </div>
          <div className='mb-3 text-start'>
            <label htmlFor='phone' className='form-label'>
              Phone:
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='form-control'
              placeholder='Enter phone'
              required
              onChange={e=>setValues({...value, phone:e.target.value})}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-success me-2'>
              Submit
            </button>
            <Link to='/' className='btn btn-secondary'>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create;
