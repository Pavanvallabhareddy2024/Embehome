import React, { useState } from 'react';
import './signin.css';
import logo from "../assets/logo_1024_512.png";

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Username: ${formData.username}, Password: ${formData.password}`);
  };

  const handleClear = () => {
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='bgcontainer'>
      <div className='innerbg'>
        <img src={logo} className='img animated-image' alt="image"/>
        <form onSubmit={handleSubmit}>
          <div className='inputcontainer'>
            <div className='form-row'>
              <label style={{fontFamily:'roboto',fontWeight:"bold",color:'white',fontSize:'20px'}} htmlFor='username'>UserName:</label>
              <input
                id='username'
                name='username'
                type='text'
                value={formData.username}
                onChange={handleInputChange}
                placeholder='Enter your username'
                style={{ color: 'black',backgroundColor:"white" }}
              />
            </div>
            <div className='form-row'>
              <label style={{ fontFamily: 'roboto', fontWeight: "bold", color: 'white', fontSize: '20px' }} htmlFor='password'>Password:</label>
              <input
                id='password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Enter your password'
                style={{ color: 'black', backgroundColor: "white" }}
              />
            </div>
          </div>
          <div className='button-container'>
            <button type='button' className='clear-button' onClick={handleClear}>
              Clear
            </button>
            <button type='submit' className='submit-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
