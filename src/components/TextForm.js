import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case",'success')
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handlelowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case",'success')

  };
  const handleclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared successfully ",'success')

  };
  const handleinverseclick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text inversed successfully",'success')

  };
  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard",'success')

  };
  const handleextraspaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Spces removed successfully",'success')

  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="container "           style={{color : props.mode==='dark'?'white':'black'  }}>
        <h1>{props.heading}</h1>
        <label for="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleonchange}
          style={{backgroundColor : props.mode==='light'?'white':'gray',
            color:props.mode==='dark'?'white':'black'
            }}
        ></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>
          Convert To lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleclearclick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleinverseclick}
        >
          Inverse Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleextraspaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2"  style={{color : props.mode==='dark'?'white':'black'  }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charcaters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Text to preview it here"}</p>
      </div>
    </div>
  );
}
