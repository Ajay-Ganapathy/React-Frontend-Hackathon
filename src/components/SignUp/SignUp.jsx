import React from 'react'
import { Link } from 'react-router-dom'
import home2 from '../../assets/images/home2.jpg'

const SignUp = () => {
  return (
       
     <section  style={{ backgroundColor: '#9A616D' }}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style={{ borderRadius: '1rem'}}>
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src={home2}
                  alt="login form"
                  class="img-fluid" style={{height : '100vh'}}
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
  
                  <form>
  
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <h1> <i class="fas fa-user-graduate " style={{color: 'orangered',marginRight : '10px'}}></i></h1>
                     
                      <span class="h1 fw-bold mb-0 mr-3">Stock Management System</span>
                    </div>
  
                    <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing : '1px'}}>Create an account here</h5>

                    <label class="form-label" >Name</label>
  
                    <div class="form-outline mb-3">
                      <input type="text" class="form-control form-control" />
                      
                    </div>

                    <label class="form-label" >Email address</label>
  
                    <div class="form-outline mb-3">
                      <input type="email" class="form-control form-control" />
                      
                    </div>

                    <label class="form-label" >Phone Number</label>
  
                    <div class="form-outline mb-3">
                      <input type="text" class="form-control form-control" />
                      
                    </div>

                    <label class="form-label" >State</label>
  
                    <div class="form-outline mb-3">
                      <input type="text" class="form-control form-control" />
                      
                    </div>

                    <label class="form-label" >Password</label>
  
                    <div class="form-outline mb-3">
                      <input type="password"  class="form-control form-control" />
                    
                    </div>

                    <label class="form-label" >Retype Password</label>
  
                    <div class="form-outline mb-3">
                      <input type="password" class="form-control form-control" />
                      
                    </div>
  
                    <div class="pt-1 mb-3">
                      <Link to = "/login" class="btn btn-dark btn-lg btn-block" >Sign Up</Link>
                    </div>

                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
   
  )
}

export default SignUp
