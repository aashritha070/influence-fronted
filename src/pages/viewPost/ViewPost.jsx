import './viewPost.css'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import CurrentPost from '../../components/currentPost/CurrentPost'
import Navbar from '../../components/Navbar/Navbar';
export default function viewPost() {
  return (
    <div>
    <Navbar/>
    <div className='viewPost'>
      
        <CurrentPost />
        <Sidebar />
        </div>
        </div>
  );
}
