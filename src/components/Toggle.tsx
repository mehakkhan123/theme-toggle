"use client"
// import React, { useState } from 'react'

// export default function Toggle() {
//   const [isDarkMode,setIsDarkMode]=useState(false)

//   const divStyle ={
//     background:isDarkMode?"black":"white",
//     color:isDarkMode?"white":"black",
//     height:"100vh",
//     transition:"all 0.5s ease"
//   }

//   const btnStyle ={
//     background:isDarkMode?"white":"black",
//     color:isDarkMode?"black":"white",
//     transition:"all 0.5s ease",
//     padding:"20px",
//     cursor:"pointer"
//   }
//   return (
//     <div style={divStyle} className='flex justify-center items-center'>
//       <button onClick={()=>{
//         setIsDarkMode(!isDarkMode)
//       }} style={btnStyle} className='rounded-4xl font-medium'>{isDarkMode?"Light":"Dark"} Mode</button>
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function Toggle() {
  const [isDarkMode,setIsDarkMode]=useState(false)

  const divStyle ={
    background:isDarkMode?"black":"white",
    color:isDarkMode?"white":"black",
    height:"100vh",
    transition:"all 0.5s ease"
  }

  const outer ={
    background:isDarkMode?"white":"black",
    transition:"all 0.5s ease",
    padding:"10px",
    cursor:"pointer"
  }

  const inner ={
    background:isDarkMode?"black":"white",
    transition:"all 0.5s ease",
    padding:"10px",
    cursor:"pointer",
    transform:isDarkMode?"translateX(-4px)":"translateX(25px)"
  }
  return (
    <div style={divStyle} className='flex justify-center items-center gap-2 box-border'>
      <div onClick={()=>{
        setIsDarkMode(!isDarkMode)
      }} style={outer} className='w-16 rounded-4xl font-medium'>
        <div style={inner} className='p-3 w-5 bg-amber-50 rounded-full'></div>
      </div>

      <p>{isDarkMode?"Dark":"Light"} Mode</p>
    </div>
  )
}
