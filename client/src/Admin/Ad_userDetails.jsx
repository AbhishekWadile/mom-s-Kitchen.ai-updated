import React, { useEffect, useState } from 'react';

function Ad_userDetails() {
  // Sample data for demonstration
//   const users = [
//     { name: 'John Doe', email: 'john@example.com' },
//     { name: 'Jane Smith', email: 'jane@example.com' },
//     { name: 'Alice Johnson', email: 'alice@example.com' }
//   ];

  const [users,setUsers]=useState([])
  const [Gusers,setGusers]=useState([])

  const getUsers = async () =>{
    try{
        const response = await fetch("http://localhost:8080/auth/users");
        const result = await response.json();
        setUsers(result)
    }catch(error){
        console.log(error)
    }
  }
  const getGusers = async () =>{
    try{
        const response = await fetch("http://localhost:8080/auth/gusers");
        const result = await response.json();
        setGusers(result)
    }catch(error){
        console.log(error)
    }
  }
  
  useEffect(()=>{
    getUsers();
    getGusers();
  },[])

  return (
    <div className='h-auto flex flex-col justify-center items-center w-full'>
      <h1 className='mb-[4vh] mt-[4vh] text-[4vh] font-[poppins] font-semibold'>User Login users</h1>  
      <div className='h-auto w-[90%] flex justify-center items-center text-white'>
        <table className='w-[80%] h-auto border-collapse border border-gray-300 text-center'>
          <thead>
            <tr className='bg-gray-700 text-white'>
              {['S.No', 'Name', 'Email ID'].map((item) => (
                <th key={item} className='border border-gray-500 p-2'>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className='bg-gray-800 text-white'>
                <td className='border border-gray-500 p-2'>{index + 1}</td>
                <td className='border border-gray-500 p-2'>{user.name}</td>
                <td className='border border-gray-500 p-2'>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className='mb-[4vh] mt-[4vh] text-[4vh] font-[poppins] font-semibold'>User Social Login users</h1>  
      <div className='h-auto mb-[4vh] w-[90%] flex justify-center items-center text-white'>
        <table className='w-[80%] h-auto border-collapse border border-gray-300 text-center'>
          <thead>
            <tr className='bg-gray-700 text-white'>
              {['S.No', 'Name', 'Email ID'].map((item) => (
                <th key={item} className='border border-gray-500 p-2'>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Gusers.map((user, index) => (
              <tr key={index} className='bg-gray-800 text-white'>
                <td className='border border-gray-500 p-2'>{index + 1}</td>
                <td className='border border-gray-500 p-2'>{user.name}</td>
                <td className='border border-gray-500 p-2'>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ad_userDetails;
