import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout/Layout';
import {toast}  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
 
  });
  const { name, email, password, phone, address } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default means when i clieck on register page not refresh
   // Handle form submission, e.g., send data to your backend API
    console.log(formData);
     try{
        const res=await axios.post('http://localhost:8080/api/v1/auth/register',{name,  email,  password,phone,address}
        );
    if(res.data.success){
        toast.success(res.data.message);
        navigate('/login')
    }

     }catch(error){
       toast.error('something went wrong');
     }
  };

  return (
    <Layout title={'Register Page'}>
     <div className="container register-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Create your account and shop smarter.</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Register
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account? <Link to="/login"> LOGIN</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Register;
