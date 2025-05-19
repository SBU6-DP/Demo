import React, { useState } from 'react'
import './login.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useMsal } from '@azure/msal-react';
import nexus from '../../../images/Logo/NexusLabs-Logo.png'
import srm_white_logo from '../../../images/Logo/logo_srm_white.png'



function Login() {
  const { instance } = useMsal();
  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: '',
    password: '',
    isRememberMe : false
  })

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmitLogin =()=>{
    const {username,password,isRememberMe} = user

    // if(username.length<0){
    //   return toast.error("Username Required")
    // }

    // if(password.length<=0){
    //   return toast.error("Password required")
    // }

    console.log(user)
    // navigate('/dashboard')

  }


  const login = () => {
    instance.loginRedirect({ scopes: ['user.read'] })
  };
  return (
    <div className='container-fluid p-0 login-bg'>
      <div className='container login-container'>
        <div className='login-box'>
          <div className='row align-items-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 xol-xxl-6'>
             <div className='text-center'>
             <img src={nexus} className='login-name'/>
             </div>
              <div className='login-team'>
              <div className='login-team-line'>
                <div className=''>
                  SBU - 6, 
                </div>
                <div className='text-uppercase'>
                 Digital Practice
                </div>
              </div>
              </div>
              <div className='text-center mt-5'>
                <img src={srm_white_logo} className='srm-logo'/>
              </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 xol-xxl-6'>
              <div className='login-right'>
                <h4 className='login-head'>Login</h4>
                <div className='row'>
                  <div className='col-12'>
                    <div>
                      <input className='login-input' type='text' placeholder='Username' onChange={(e) => handleChange('username', e.target.value)} />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div>
                      <input className='login-input' type='text' placeholder='Password' onChange={(e) => handleChange('password', e.target.value)} />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div>
                      <input type='checkbox' checked={user?.isRememberMe} className='login-check-box' onChange={(e)=>setUser({...user,isRememberMe:e.target.checked})}/> <label className='login-remember'>Remeber Me</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div>
                      <button className='login-btn' onClick={()=>handleSubmitLogin()}>Login</button>
                    </div>
                  </div>
                  <div className='login-forget'>
                    Forget password ?
                  </div>
                  <div className='login-or'>
                    <span className='login-or-line'>or </span>
                  </div>
                  <div className='col-12'>
                    <div>
                      <button className='login-btn' onClick={login}>Login with SSO</button>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='login-doc'>
                      <span>Terms & Condition</span><span>Support</span> <span>Customer Care</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login