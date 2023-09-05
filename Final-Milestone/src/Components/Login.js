//TYPE 1

//import React from 'react'
// import "./Login.css"

// const Login = () => {
//   return (
//     <div className='d-flex justify-content-center bg-secondary align-items-center vh-100' id='bg-img'>
//         <div className='border border-3 border-secondary p-4 bg-white'>
//             <form>
//                 <h3 className='text-center'>Login</h3>
//                 <div className='mb-3'>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                     type='email'
//                     placeholder='Enter your Email'
//                     className='form-control'
//                     name='Email'
//                     />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                     type='Password'
//                     placeholder='Enter your Password'
//                     className='form-control'
//                     name='Password'
//                     />
//                 </div>
//                 <div>
//                     <input type='checkbox' className='custom-control custom-checkbox'/>
//                     <label htmlFor='checkbox' className='ms-1'>
//                         Remember me on this device.
//                     </label>
//                 </div>
//                 <div className='d-grid'>
//                     <button className='btn btn-dark' type='submit'>
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

//TYPE 2



// import React from 'react';
// import './Login.css'; // Import your custom CSS if needed

// const Login = () => {
//   return (
//     <div className='login-page'>
//       <div className='login-container'>
//         <div className='login-box'>
//           <form>
//             <h3 className='text-center mb-4'>Log In</h3>

//             <div className='mb-3'>
//               <label htmlFor='email'>Email</label>
//               <input
//                 type='email'
//                 placeholder='Enter your Email'
//                 className='form-control'
//                 name='Email'
//               />
//             </div>

//             <div className='mb-3'>
//               <label htmlFor='password'>Password</label>
//               <input
//                 type='password'
//                 placeholder='Enter your Password'
//                 className='form-control'
//                 name='Password'
//               />
//             </div>

//             <div className='mb-3 form-check'>
//               <input type='checkbox' className='form-check-input' id='remember' />
// <label htmlFor='remember' className='form-check-label'>
//   Remember me on this device.
// </label>
//             </div>

//             <div className='d-grid'>
//               <button className='btn btn-primary' type='submit'>
//                 Log In
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className='background-details'>
//         {/* Add background image or details */}
//       </div>
//     </div>
//   );
// };

// export default Login;



//TYPE 3
import React, { useRef, useState } from 'react'
import image1 from './Crave Crafters.png';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

const Login = () => {
  const errorMessage = useRef()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handlesubmit(e) {
    e.preventDefault()
    await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => (res.json()))
      .then((json) => {
        if (json['message'] !== 'ok') {
          errorMessage.current.innerHTML = 'Invalid email ID or password'
          errorMessage.current.style.color = 'red'
        } else {
          errorMessage.current.innerHTML = `We'll never share your email with anyone else.`
          errorMessage.current.style.color = 'initial'
          window.location.href = '/'
        }
      })
  }

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='d-flex flex-row ps-5 pt-5'>
              <img src={image1} style={{ height: 220, width: 400, justifyContent: "center" }} alt="Logo" className="me-3" />
            </div>
            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
              <MDBInput wrapperClass='mb-3 mx-5 w-150' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-3 mx-5 w-150' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
              <p className="small mb-5 pb-lg-3 ms-5">
                <div className="form-text ps-2 mb-4" ref={errorMessage}>We'll never share your email with anyone else.</div>
                <MDBBtn className="mb-4 w-100" color='info' size='lg' onClick={(e) => handlesubmit(e)}>Login</MDBBtn>
              </p>
              <p className='ms-3'>Don't have an account? <a href="/signup" class="link-info">Register here</a></p>
            </div>
          </MDBCol>
          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="Login Banner" className="w-100" style={{ objectFit: '70%', objectPosition: 'left' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Login