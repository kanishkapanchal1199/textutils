import React,{useState} from 'react'



export default function TextForm(props) {
    
const[text,setText]=useState('');//Array Destructing

const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    setText(newtext);
}
const handleLowClick=()=>{
    console.log("LowerCase was clicked" + text);
    let newtext=text.toLowerCase();
    setText(newtext);
}
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
}
//text="new text"; Wrong way to change the state
//setText("new text");// Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white ': '#071f42'}}>
        <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#071f42 ': 'white',color: props.mode==='dark' ? 'white ': '#071f42'}}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark' ? 'white ': '#071f42'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} chracters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Nothing to preview" }</p>
</div>
</>
  )
}
