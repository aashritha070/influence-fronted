import './navbar.css';
import React from 'react';
import { useContext } from 'react';


import Context from '../../context/Context'
import { Link } from 'react-router-dom';
export default function Navbar() {

  const {user,dispatch}=useContext(Context);
 

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    
    <div className='NavBar'>
             <div className='navbar-left'>
        <ul className='menu'>
          <li className='logo'>Influence</li>
        </ul>
      </div>

      <div className='navbar-mid'>
        <ul className='menu'>
        <a className='alink' href="/">  <button className='navButton'><li className='menuItem'>HOME</li></button></a>
    
          
          {user? (<ul className='menu'> <a className='alink' href="/writePost">  <button className='navButton'><li className='menuItem'> WRITE</li></button></a>
        <Link to={`/?user=${user.username}`} className='alink'> <button className='navButton'><li className='menuItem'> MY POSTS</li></button></Link></ul>):
          (<ul className='menu'><li className='menuItem'></li>
          
          <li className='menuItem'> </li></ul>
        
          )}  </ul>
      </div>



      <div className='navbar-right'>
      

        {user ? (
        <ul className='menu'><li className='menuItem'>hi  {user.username}</li>
            <li className='menuItem' onClick={handleLogout}>LOGOUT </li></ul> ) : (
          <ul className='menu'>
            <li className='menuItem'><a className='alink' href="/login"> LOGIN</a></li>
            <li className='menuItem'><a className='alink' href="/signUp"> REGISTER</a></li>
          </ul>
        )}
       
       </div>
    </div>
  )
}
