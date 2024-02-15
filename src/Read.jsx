import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='d-flex justify-content-center align-items-center bg-light min-vh-100' style={{width:"650px"}}>
      <div className='w-75 w-md-50 border bg-white shadow p-5 rounded'>
        <h3 className='mb-4'>Details of This User</h3>
        <div className='mb-3'>
          <strong>Name:</strong> {data.name}
        </div>
        <div className='mb-3'>
          <strong>Email:</strong> {data.email}
        </div>
        <div className='mb-3'>
          <strong>Phone:</strong> {data.phone}
        </div>

        <div className='d-flex justify-content-center'>
          <Link to={`/update/${id}`} className='btn btn-success me-2'>
            Edit
          </Link>
          <Link to={'/'} className='btn btn-primary'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
