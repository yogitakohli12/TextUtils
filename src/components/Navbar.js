import React,{useState} from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

export default function Navbar(props) {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
  <div className="container-fluid" id='container' style={{cursor:"pointer"}}>
    <a className="navbar-brand" to="/" >{props.title}</a>     {/*props*/}
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/preview">{props.about}</Link>
  </li>
      </ul>
      
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>*/}
    </div>
  </div>
</nav>

    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string
  }
  
Navbar.defaultProps = {
   title: 'set the title here',
    about:'set the about here'
  }


  /*<nav classNameName="navbar">
        <a href="/"><i classNameName="fa-solid fa-bars"></i></a>
          <a classNameName="logo">YoGitA KohLi</a>
          <div classNameName="btn">
            <button>HoMe</button>
            <button>AboutMe</button>
            <button>PortFolio</button>
            <button>SkiLLs</button>
            <button>ProJecTs</button>
            <button>CoNtAcT</button>
          </div>

    </nav>

      <div classNameName="home">
      <img classNameName="image" src="" alt="image"/>
        <h2>Hello,It's Me</h2>
        <h1 classNameName="name"> YoGitA  kohLi...</h1>
      
        <p  id="para">Am a B.Tech student in Computer Science .
           of APIIT SD INDIA Panipat College of Engineering and Technology.  
            I Quite passionate about Computers and Designing.
            I love to learn new Technologies and Languages,And I like Watching Cricket and Listening Music.
         </p>
         <a  classNameName="more" >More AboUt Me..</a>
         </div>

<br />
<br />

      <div classNameName="data">
      <h1 classNameName="heading">About Me</h1>
      <br />
       <p classNameName="text">
          My name is <span>Yogita KohLi</span>. I am  a B.Tech student at APIIT SD INDIA
          in Computer Science Departmentfrom Panipat College Of Engineering and Technology , 
          Kurukshetra University. I was born in Delhi and raised in Panipt.
          I quite Passionate about Computers and Designing.love to learn new Technologies and Languages,
          And I like Watching Cricket and Listening Music</p>
      <br />
      
      

        <div>
            <h1 classNameName="heading">SkiLLs</h1>
            
            <ul  classNameName="text">
               <li>Markup Language : HTML ( HyperText Markup Language )</li>
               <li>Sheet Style Language : CSS ( Casecading Style Sheet )</li>
               <li>Scripting Language : Python , sed </li>
               <li>Tools : Git , Vim</li>
               <li>Basic Knowledge : Java , Python , Javascript </li>
               <li>Operating System : Windows , Linux/Unix</li>
            </ul> 
        </div>
    </div>
    <h1 className="heading">ProJecTs</h1>
    <p ><h2 className="project-heading">I have Descent Knowledge about frontend Web Development</h2></p>
    <h1 className="heading">Contect Me</h1>
    <h3 className="cheer">Feel Free to get in touch. CHeers!..</h3>
      
    <div className="links">

        <a href="" className="link">facebook</a>
        <a href=""  className="links">instagram</a>
        <a href="" className="links">whatsapp</a>
        <a href="" className="links">tik-tok</a>
      
      </div>
        <br/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="heading">Email</h2>
        <br/>
        <h4><a >yogitakohli12345@gmail.com</a></h4>
        <h4><a >yogikohli7100@gmail.com</a></h4>
        <h4><a  >y_8620108@apiit.edu.in</a></h4>*/
