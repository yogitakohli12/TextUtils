import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const removecls = () => {
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')

    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }



  function DarkMode(cls) {
    console.log(cls);
    removecls();
    document.body.classList.add('bg-' + cls)
    if (myStyle.color === 'black') {
      setmyStyle({
        color: 'black',
        backgroundColor: 'cls'

      });

      document.body.style.backgroundColor = 'cls';
      //document.title='TextUtils - DarkMode';
    }
    else {
      setmyStyle({
        color: 'black',
        backgroundColor: 'cls'
      });

      document.body.style.backgroundColor = 'cls';
      //document.title='TextUtils - LightMode'
    }
  }

  const [myStyle, setmyStyle] = useState({
  });


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
        
        <div className="container-fluid" id='container' style={{ cursor: "pointer" }}>
          <Link className="navbar-brand" to="/Textutils" >{props.title}</Link>     {/*props*/}

         
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">{props.about}</Link>
              </li>
              
              <div className="d-flex mx-5 ">
                <div className="bg-primary rounded mx-2 my-2" onClick={() => { DarkMode('primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid '}}></div>
                <div className="bg-secondary rounded mx-2 my-2" onClick={() => { DarkMode('secondary') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid ' }}></div>
                <div className="bg-danger rounded mx-2 my-2" onClick={() => { DarkMode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid ' }}></div>
                <div className="bg-warning rounded mx-2 my-2" onClick={() => { DarkMode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid ' }}></div>
                <div className="bg-success rounded mx-2 my-2" onClick={() => { DarkMode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid ' }}></div>
                <div className="bg-light rounded mx-2 my-2" onClick={() => { DarkMode('light') }} style={{ height: '25px', width: '25px', cursor: 'pointer', border: '2px solid ' }}></div>
              </div>
            </ul>

          
        </div>
      </nav>

    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'set the title here',
  about: 'set the about here'
}


