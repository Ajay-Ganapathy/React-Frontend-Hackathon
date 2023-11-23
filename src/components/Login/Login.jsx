import React from 'react'
import { Link } from 'react-router-dom';
import { useLocalContext } from '../../context/context';
const Login = () => {

  const { login, loggedInUser } = useLocalContext();
  return (
<div>

<section class="vh-120" style= {{backgroundColor: '#9A616D'}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style={{borderRadius:  '1rem'}}>
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                {/* <img
                  src={home2}
                  alt="login form"
                  class="img-fluid" style={{borderRadius: '1rem 0 0 1rem', height : "110vh"}}
                /> */}
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
  
                  <form>
  
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <h1> <i class="fas fa-user-graduate " style={{color: 'orangered', marginRight: '10px'}}></i></h1>
                      <span class="h1 fw-bold mb-0">Enlighten Minds</span>
                    </div>
  
                    <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Sign into your account</h5>

                    <label class="form-label" >Email address</label>
  
                    <div class="form-outline mb-4">
                      <input type="email" class="form-control form-control-lg" />
                      
                    </div>

                    <label class="form-label" >Password</label>
  
                    <div class="form-outline mb-4">
                      <input type="password"  class="form-control form-control-lg" />
                     
                    </div>
  
                    <div class="pt-1 mb-4">
                      <Link to="/home" class="btn btn-dark btn-lg btn-block" >Login</Link>
                    </div>

                    <div class="pt-1 mb-4">
                     <h2 className = "mr-4">OR</h2>
                    </div>

                    

                    <input type="button" className = "btn btn-danger btn-block" value = "Sign in With Google" onClick = {() => login()} />
  
                   
                    <h3 class="mb-5 pb-lg-2" style= {{color: '#393f81'}}>Don't have an account? </h3>

                    <Link to = "/signup" class="btn btn-dark btn-lg btn-block" >Signup</Link>
                   
                    
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Login;