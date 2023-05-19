import React, { useState } from "react";

export default function TextForm(props) {
  const handleXtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Space Removed', 'success');
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted into Uppercased', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted into Lowercased', 'success');
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Textarea Cleared', 'success');
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard', 'success');
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h3 className="my-3">{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'black':'white', color: props.mode ==='dark'?'white':'black'}} value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleClearClick}>Clear The Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert Into Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleLowClick}>Convert Into Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleXtra}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 mb-2" onClick={handleCopy}>Copy The Text</button>
    </div>

    <div className="container my-4" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h4 className="head2nd mb-2">Counting Characters, Words and Spaces of your writing:  <b className="para"> {text.replace(/s/g, "").length} Characters, {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.split(' ').length - 1} Spaces</b></h4>
      <h4 className="head2nd mb-2">Timing for counting words:  <b className="para">  {7.999936000511996e-7 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</b></h4>
      <h3 className="previewed">Preview</h3>
      <textarea disabled className="form-control para1" style={{backgroundColor: props.mode ==='dark'?'black':'white', color: props.mode ==='dark'?'white':'black'}} value={text} onChange={handleUpChange} rows="8"></textarea>
      
    </div>
    </>
  );
}
