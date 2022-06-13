import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpperClick =()=>{
        console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        // setText("You have clicked on handleUpperClick")
        setText(newText)
    }

    const handleLowerClick =()=>{
        console.log("Lowercase was clicked")
        let newText= text.toLowerCase();
        // setText("You have clicked on handleLowerClick")
        setText(newText)
    }

    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value)
        // with handleonchange when we setText then it possible to add text in the textarea else it takes only the value text and which ever text we enter wont be visible 
    }
    const [text, setText] = useState('');
    //text="New text"; //wrong way to change the state
    //setText("New text"); //correct way to change the state
    return (
        <>
        <div class="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            {/* text which we have set is now used in the textarea  */}
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
