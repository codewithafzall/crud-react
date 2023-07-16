import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    const [data, setData]=useState([]);

    const fetchdata =()=>{
        axios.get(`https://64b30e5e38e74e386d55d5d9.mockapi.io/data`)
        .then((res)=>{
            const result = res.data
            setData(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const deleteData = (id) => {
        axios.delete(`https://64b30e5e38e74e386d55d5d9.mockapi.io/data/${id}`)
        .then((res) => {
            fetchdata(); 
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(()=>{
       fetchdata()
    },[])
  return (
    <div>
        <div className='container-fluid'>
              <div className='row justify-content-center'>
                   <div className='col-lg-8 p-3'>
                   <h3 className='text-center bg-info p-3'>Here You can Read The Data.</h3>
                   <table className='table table-info table-bordered'>       
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
              {data.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td><button onClick={() => deleteData(item.id)}  className='btn btn-primary'>DELETE</button></td>
                    </tr>
                )
              })}
            </tbody>
        </table>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default Read