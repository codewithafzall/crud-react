import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Update = () => {

    const [name ,setName]=useState('')
    const [email ,setEmail]=useState('')
    const [password ,setPassword]=useState('')
    const [id , setID]=useState(null)

    const handleReload = () => {
        window.location.reload();
      };


    const updateddata =(e)=>{
        e.preventDefault();
        axios.put(`https://64b30e5e38e74e386d55d5d9.mockapi.io/data/${id}`,{
            name,email,password
        })
        .then(handleReload)

          .then(alert("Your Data Has Been Updated"))
          
          .catch((error)=>{
            console.log(error)
          })
    }

    useEffect(()=>{
      setID((localStorage.getItem('ID')));
      setName((localStorage.getItem('NAME')));
      setEmail((localStorage.getItem('EMAIL')));
      setPassword((localStorage.getItem('PASSWORD')));
  },[]) 

  return (
   

    <div>
         <div className='container'>
              <div className='row justify-content-center'>
                  <div className='col-lg-6 m-5 p-4'>
                  <h2 className='text-center text-uppercase'>update Details</h2>
                  <form>
                   <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label">Name</label>
                   <input value={name} onChange={(e)=>{setName(e.target.value)}} autoCapitalize='on' autoComplete='off' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
                   <label for="exampleInputEmail1" class="form-label">Email address</label>
                   <input value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='off' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label mt-3">Password</label>
                   <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1"/>
                   <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                   </div>
                   <div class=" form-check">
                   </div>
                   <a href='/Read'><button onClick={updateddata} type="submit" class="btn btn-primary w-100">UPDATE</button></a>
                   <p className='text-capitalize mt-3'>by clicking the update button the data will be updated in the data table.</p>
                   </form>
                  </div>
                  
              </div>
          </div>

    </div>
  )
}

export default Update