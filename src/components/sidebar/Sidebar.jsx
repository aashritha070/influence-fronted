import './sidebar.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Sidebar() {
const [tag, setTag] = useState([]);

  useEffect(()=>{
    const getTag = async () =>{
      const res= await axios.get("http://localhost:5000/tag");
      setTag(res.data);
    };
    getTag();
  },[]);
  return (
    <div className='sidebar'>
        <span className="sideBarTitle">What Interests you?</span>
        <ul className='sideBarList'>
          {tag.map((c)=>(
            <Link to={`/?tag=${c.name}`}  >
               <li className='sideBarListItem'>{c.name}</li>
          </Link>
          ))}
        </ul>
    
     </div>
  )
};
