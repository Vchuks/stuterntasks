import React, { useState } from 'react'

const Input = ({handleUpdate, handleChange, input}) => {
   
    

  return (
    <div className='input'>
      <input type="text" placeholder='Search with Firstname' value={input} onChange={handleChange} onKeyDown={handleUpdate} />
    </div>
  )
}

export default Input
