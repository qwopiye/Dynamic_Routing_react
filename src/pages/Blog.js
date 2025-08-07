import React, { useState } from 'react'
import{blogsData}from '../data'
import { Link } from 'react-router-dom';
export default function Blog() {
  const [blogs]=useState(blogsData);
  const trankeString=(str , num)=>{
    if(str.length > num){
      return str.slice(0 , num) + "...";
    }else{
      return str;
    }
  }
  return (
    <div>
      <h1>Bloges Page</h1>
      <section>
        {blogs.map((blog)=>{
          const{id,title,body}=blog;
          return <article key={id} >
            <h1>{title}</h1>
            <p>{trankeString(body,100)}</p>
            <Link to={title} state={{id,title,body}}>learn more</Link>
          </article>
        })}
      </section>
     
    </div>
  )
}
