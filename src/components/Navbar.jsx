import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  
  const {user,logOut}=UserAuth()
  const navigate=useNavigate()

const handleLogout=async()=>{
  try{
    await logOut();
    navigate('/')
  }catch(err){
    console.log(err);
  }
  }

return (

     <div className='absolute w-full p-4 flex items-center justify-between z-50'>
      <Link to='/'>
        <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
      </Link>

    {user?.email ?(
    <div className='flex space-x-2'>
        <Link to='/profile'>
          <button className='capitalize px-4 py-2 rounded cursor-pointer'>Profile</button>
        </Link>
       <button onClick={handleLogout} className='capitalize px-6 py-2 rounded cursor-pointer bg-red-600'>logout</button>
       </div>
):(
  <div className='flex space-x-2'>
        <Link to='/login'>
          <button className='capitalize px-4 py-2 rounded cursor-pointer'>login</button>
        </Link>
        <Link to='/signup'>
          <button className='capitalize px-6 py-2 rounded cursor-pointer bg-red-600'>signup</button>
        </Link>
         </div>
)

}
      
    </div>
  );
}

export default Navbar;
