import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import './home.css'
import axios from 'axios'


export default function Home() {
  const[posts, setPosts]=useState([])
  const {search} = useLocation();
  const [tag, setTag] = useState([]);
  
  useEffect(()=>{
    const renderBlog = async ()=>{
     const res = await axios.get("http://localhost:5000/posts"+ search)
     setPosts(res.data)
    }
    renderBlog();
  },[search])
 
  useEffect(()=>{
    const getTag = async () =>{
      const res= await axios.get("http://localhost:5000/tag");
      setTag(res.data);
    };
    getTag();
  },[]);


  return (
  <>
  <Navbar/>
    <Header />
    <div className='Home'>
      <div className='recent-message'>
        <div className='sidebar_home'>
       <ul className='sideBarList_Home'>
          {tag.map((c)=>(
            <Link to={`/?tag=${c.name}`}  >
               <li className='sideBarListItem_Home'>{c.name}</li>
          </Link>
          ))}
        </ul>
        </div>
      <p >New on Influence!</p>
      </div>
    
    <Posts posts={posts} />
    
    
    </div>
    <Footer />
    </>
  )
}
