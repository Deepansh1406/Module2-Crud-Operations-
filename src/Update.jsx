import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {

    // const [data, setData] = useState({});
    const { id } = useParams();

    const [value, setValues]= useState({
        name:"",
        email:"",
        phone:''
    })

    const navigate = useNavigate();

  
    useEffect(() => {
      axios.get(`http://localhost:3000/users/${id}`)
        .then(res => {
            setValues(res.data);

        })
        .catch(err => console.log(err));
    }, [id]);

    const handleUpdate= (event)=>{
        event.preventDefault();
        axios.put("http://localhost:3000/users/" + id , value)
      .then(res => {
        console.log(res)
        navigate("/")
    })
      .catch(err => console.log(err));
    }
  
  return (
    <div className='d-flex justify-content-center align-items-center bg-light min-vh-100' style={{width:"650px"}}>
    <div className='w-100 w-md-75 border bg-white shadow p-5 rounded'>
      <h1 className='mb-4'>Update User</h1>
        <form className='w-100' onSubmit={handleUpdate} >
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
              value={value.name}

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
              value={value.email}

            />
          </div>
          <div className='mb- text-start'>
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
              value={value.phone}
            />
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button type='submit' className='btn btn-success me-2'>
              Update
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

export default Update