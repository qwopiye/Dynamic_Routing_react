import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'
//  import { blogsData } from '../data';
// import Blog from './Blog';

function Blogs() {
    const{title}=useParams();
    const location=useLocation();
    
    // const[bodyData,setBodyData]=useState("");
    // useEffect(()=>{
    //     const blogData=blogsData.filter((blog)=>blog.title===title)
    //     setBodyData(blogData[0].body);
    // },[title])

  return (
    <div>
      <h1>{title}</h1>
       <p>{location.state.body.slice(0,100)}</p>
        <p>{location.state.body.slice(101,200)}</p>
    </div>
  )
}

export default Blogs
