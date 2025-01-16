import React,{useState} from 'react'

export default function Textfield(props) {

    const changetouppercase = ()=>{
        //console.log("uppercase was clicked" + ' '+ oldtext);
        let updatedtext =  oldtext.toUpperCase(); //function to change to uppercase
        updatetext(updatedtext);
    }

    const handleonupperchange = (event)=>{     //for change the text in textfield
      //console.log("on change");
      updatetext(event.target.value);
     }

    const changetolowercase = ()=>{
      //console.log("uppercase was clicked" + ' '+ oldtext);
      let updatedtext =  oldtext.toLowerCase(); //function to change to uppercase
      updatetext(updatedtext);
  }

  const Cleartext = ()=>{
    let cleartxt =  ""; //function to clear txt
    updatetext(cleartxt);
}

    const removecls = ()=>{
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
    document.body.classList.add('bg-'+cls)
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

    const [myStyle , setmyStyle ] = useState({
    });

    const HandleCopy = ()=>{
      var text = document.getElementById("Textarea");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const HandleExtraspace=()=>{
      let newTxt = oldtext.split(/[ ]+/);          //rejex use
      updatetext(newTxt.join(" "))
    }

    const [oldtext , updatetext ] = useState('');     //states define use

  return (
      <>
        
        <div className='container my-3' style={myStyle}  >
        
              <h2>{props.heading}</h2>   
              {/*<form className="d-flex mx-3" role="search">
                <input className="form-control me-2" type="search" style={myStyle} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit" >Search</button>
              </form> */}
              <br />
              <textarea className="form-control" style={{backgroundColor:'lightblue'}}  value={oldtext} onChange={handleonupperchange}  id="Textarea" rows="6"></textarea>
              <br />
              <button className='btn btn-success mx-1 my-2' onClick={changetouppercase} style={{border:'1px solid '}} > convert to uppercase </button>
              <button className='btn btn-success mx-1 my-1' onClick={changetolowercase} style={{border:'1px solid '}} > convert to lowercase </button>
              <button type="button" class="btn btn-success mx-1 my-1" onClick={Cleartext} style={{border:'1px solid '}}>ClearText</button>
              <button type="button" class="btn btn-success mx-1 my-1" onClick={HandleCopy} style={{border:'1px solid '}}>CopyTxt</button>
              <button type="button" class="btn btn-success mx-1 my-2" onClick={HandleExtraspace} style={{border:'1px solid '}}>Handlespace</button>
              <div className="d-flex">
                <div className="bg-primary rounded mx-2 my-2" onClick={()=>{DarkMode('primary')}} style={{height:'25px', width:'25px',cursor:'pointer' ,  border:'2px solid '}}></div>
                <div className="bg-secondary rounded mx-2 my-2" onClick={()=>{DarkMode('secondary')}} style={{height:'25px', width:'25px',cursor:'pointer',  border:'2px solid '}}></div>
                <div className="bg-danger rounded mx-2 my-2" onClick={()=>{DarkMode('danger')}} style={{height:'25px', width:'25px',cursor:'pointer',  border:'2px solid '}}></div>
                <div className="bg-warning rounded mx-2 my-2" onClick={()=>{DarkMode('warning')}} style={{height:'25px', width:'25px',cursor:'pointer',  border:'2px solid '}}></div>
                <div className="bg-success rounded mx-2 my-2" onClick={()=>{DarkMode('success')}} style={{height:'25px', width:'25px',cursor:'pointer',  border:'2px solid '}}></div>
                <div className="bg-light rounded mx-2 my-2" onClick={()=>{DarkMode('light')}} style={{height:'25px', width:'25px',cursor:'pointer',  border:'2px solid '}}></div>
              </div>
              <h2>My Text Summary</h2>
              <p>{oldtext.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {oldtext.length} characters</p>
              <p>{0.008 * oldtext.split(" ").filter((element)=>{return element.length!==0}).length}Minutes To Read</p>
              <h3>preview</h3>
              <p>{oldtext.length>0?oldtext:"type something in the textbox given above to preview it here."}</p>
        </div>
      </>
  )
}
