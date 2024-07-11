import React from 'react'
import { useState } from 'react'

export default function Textarea(props) {
    const [text,settext] = useState("");
    const changetext=(e)=>{
        settext(e.target.value);
       // console.log(e.target.value);
    }

    const changeonupclick=()=>{
        let newtext=text.toUpperCase()
       settext(newtext)
       props.showalert('Converted to Uppercase','success');

    }

    const changeonloclick=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showalert('Converted to Lowercase','success');
    }

    const changeonclclick=()=>{
        settext('');
        props.showalert('Text cleared','success');
    }

    const removespace=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showalert('Extra space removed','success');
    }

    const clicktocopy=()=>{
         let newtext=document.getElementById('floatingTextarea');
         newtext.select();
         navigator.clipboard.writeText(newtext.value);
         props.showalert('Copied to clipboard','success');
    }

    const counter=(arr)=>{
        let lastele=arr[arr.length-1];
          if(lastele===""){
            return arr.length-1;
          }
          else {
            return arr.length;
          }
    }
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='mt-4'>{props.label} </h2>
        <label  htmlFor="floatingTextarea"></label>
       
        
        <textarea className="form-control" value={text} onChange={changetext} id="floatingTextarea" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" ></textarea>

        <button type="button" className="btn btn-danger my-3 " onClick={changeonupclick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-danger my-3 mx-2" onClick={changeonloclick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-danger my-3 mx-2" onClick={clicktocopy}>Copy</button>
        <button type="button" className="btn btn-danger my-3 mx-2" onClick={removespace}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-danger my-3" onClick={changeonclclick}>Clear</button>

        

    </div>

    <div className="box" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{counter(text.split(" "))} words , {text.length} characters</p>
    </div>
    </>
  )
}
