import React from 'react'

function About() {
  return (
    <div style={{height:600}} className='w-100 d-flex justify-content-center align-items-center'>
      <div className='w-75'>
        <label className='w-100' style={{color:'white',fontSize:50, textAlign:"center",}}>About</label>
      <div style={{boxShadow:"-4px 45px 38px 3px rgba(0,0,0,0.1)"}} className='w-100  bg-white rounded p-5 mt-4'>
        <p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      </div>
    </div>
  )
}

export default About
