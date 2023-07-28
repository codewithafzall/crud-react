import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    const [data, setData]=useState([]);

    const fetchdata =()=>{
        axios.get(`https://64b30e5e38e74e386d55d5d9.mockapi.io/data`)
        .then((res)=>{
            const result = res.data
            setData(result)
            console.log(result)
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

    const updatedata=(item)=>{
        let{id,name,email,password}= item;
        localStorage.setItem('ID',id);
        localStorage.setItem('NAME',name);
        localStorage.setItem('EMAIL',email);
        localStorage.setItem('PASSWORD',password);
        handleReload();
     };

     const handleReload = () => {
        window.location.reload();
      };

    useEffect(()=>{
       fetchdata()
    },[])
  return (
    <div>
       {data.length > 0 ? 
       (<div className='container-fluid'>
              <div className='row justify-content-center'>
                   <div className='col-lg-8 p-3'>
                   <h1 className='text-center bg-info p-3'>DATA TABLE</h1>
                   <table className='text-center table table-bordered'>       
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
                        <td>
                            <div className='d-flex justify-content-around'>
                            <button onClick={()=>{updatedata(item)}}  className='btn btn-primary'>UPDATE</button>
                            <button onClick={() => deleteData(item.id)}  className='btn btn-primary'>DELETE</button>
                            </div>
                        </td>
                    </tr>
                )
              })}
            </tbody>
        </table>
                   </div>
              </div>
        </div>):
        (
            <h1 className='text-center bg-info display-2 m-5 p-5'>NO RECORDS</h1>
        )} 
    </div>
  )
}

export default Read