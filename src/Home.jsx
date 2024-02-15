import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Would you like to delete?");
    if (isConfirmed) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            const updatedData = data.filter((user) => user.id !== id);
            setData(updatedData);
          } else {
            console.error("Delete request failed");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className='container py-4'>
      <h1 className='mb-4'>List of Users</h1>
      <div className='card'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h5 className='m-0'>Users</h5>
          <Link to="/create" className='btn btn-primary'>Add +</Link>
        </div>
        <div className='card-body'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td className='d-flex'>
                    <Link to={`/read/${d.id}`} className='btn btn-info me-2'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-primary me-2'>Edit</Link>
                    <button onClick={() => handleDelete(d.id)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home;
