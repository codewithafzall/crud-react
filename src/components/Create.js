import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [name ,setName]=useState('')
    const [email ,setEmail]=useState('')
    const [password ,setPassword]=useState('')


  const postdata =(e)=>{
    e.preventDefault();
    axios.post(`https://64b30e5e38e74e386d55d5d9.mockapi.io/data`,{
        name,email,password
    }) 

  .then(() => {

    setName('');
    setEmail('');
    setPassword('');
  })
  .catch((error) => {
    console.log(error);
  });
}

  return (
    <div>
       <section>
          <div className='container'>
              <div className='row justify-content-center'>
                  <div className='col-lg-6 m-5 p-4'>
                  <h2 className='text-center text-uppercase'>Enter Your Details</h2>
                  <form>
                   <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label">Name</label>
                   <input autoCapitalize='on' autoComplete='off' value={name} onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label mt-3">Password</label>
                   <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1"/>
                   <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                   </div>
                   <div class=" form-check">
                   </div>
                   <button onClick={postdata} type="submit" class="btn btn-primary w-100">Submit</button>
                   <p className='text-capitalize mt-3'>The data get save in the data table you can view it by clicking on the right corner.</p>
                   </form>
                  </div>
              </div>
          </div>
       </section>
    </div>
  )
}

export default Create