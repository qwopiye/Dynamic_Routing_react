import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const Navigate=useNavigate();
  return (
  
    <div>
      <h1>Contact Page</h1>
      <p>
        Welcome, future software engineers! With over 15 years in this dynamic industry, I've
        had the privilege of witnessing incredible transformations and mentoring countless
        individuals from diverse backgrounds into successful developers. This guide is crafted
        specifically for you—someone with little to no prior programming knowledge, yet a
        burning curiosity and determination to embark on a rewarding career in software
        engineering.
      </p>
       <p>
        Welcome, future software engineers! With over 15 years in this dynamic industry, I've
        had the privilege of witnessing incredible transformations and mentoring countless
        individuals from diverse backgrounds into successful developers. This guide is crafted
        specifically for you—someone with little to no prior programming knowledge, yet a
        burning curiosity and determination to embark on a rewarding career in software
        engineering.
      </p>
      <button onClick={()=>{
        Navigate("/home")
      }}>Go to Home Page</button>
    </div>
  )
}
