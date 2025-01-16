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

    const speakText = () =>{
      let content = new SpeechSynthesisUtterance();
      content.text=oldtext;
      content.rate=1;
      content.pitch=1;
      speechSynthesis.speak(content);
    }
    

  return (
      <>
        
        <div className='container my-3'  >
        
              <h1 style={{color:"navy"}}>{props.heading}</h1>   
              
              <br />
              <textarea className="form-control" style={{backgroundColor:'lightblue'}}  value={oldtext} onChange={handleonupperchange}  id="Textarea" rows="6"></textarea>
              <br />
              <button className='btn btn-success mx-1 my-2' onClick={changetouppercase} style={{border:'1px solid '}} > Convert To Uppercase </button>
              <button className='btn btn-success mx-1 my-1' onClick={changetolowercase} style={{border:'1px solid '}} > Convert To Lowercase </button>
              <button type="button" class="btn btn-success mx-1 my-1" onClick={Cleartext} style={{border:'1px solid '}}>ClearText</button>
              <button type="button" class="btn btn-success mx-1 my-1" onClick={HandleCopy} style={{border:'1px solid '}}>CopyTxt</button>
              <button type="button" class="btn btn-success mx-1 my-2" onClick={HandleExtraspace} style={{border:'1px solid '}}>Handlespace</button>
              <button type="button" class="btn btn-success mx-1 my-2" onClick={speakText} style={{border:'1px solid '}}>Speak</button>
              
              <h2>My Text Summary</h2>
              <p>{oldtext.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {oldtext.length} characters</p>
              <p>{0.008 * oldtext.split(" ").filter((element)=>{return element.length!==0}).length}Minutes To Read</p>
              <h3>preview</h3>
              <p>{oldtext.length>0?oldtext:"type something in the textbox given above to preview it here."}</p>
        </div>
      </>
  )
}
