"use client"
import React, { useState } from 'react'

export default function Toggle() {
  const [isDarkMode,setIsDarkMode]=useState(false)

  const divStyle ={
    background:isDarkMode?"black":"white",
    color:isDarkMode?"white":"black",
    height:"100vh",
    transition:"all 0.5s ease"
  }

  const btnStyle ={
    background:isDarkMode?"white":"black",
    color:isDarkMode?"black":"white",
    transition:"all 0.5s ease",
    padding:"20px",
    cursor:"pointer"
  }
  return (
    <div style={divStyle} className='flex justify-center items-center'>
      <button onClick={()=>{
        setIsDarkMode(!isDarkMode)
      }} style={btnStyle} className='rounded-4xl font-medium'>{isDarkMode?"Light":"Dark"} Mode</button>
    </div>
  )
}
