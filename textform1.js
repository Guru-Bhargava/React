import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpperClick =()=>{
        console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        // setText("You have clicked on handleUpperClick")
        setText(newText)
    }

    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value)
        // with handleonchange when we setText then it possible to add text in the textarea else it takes only the value text and which ever text we enter wont be visible 
    }
    const [text, setText] = useState('Enter Text Here');
    //text="New text"; //wrong way to change the state
    //setText("New text"); //correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            {/* text which we have set is now used in the textarea  */}
            </div>
            <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        </div>
    )
}
