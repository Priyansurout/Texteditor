import React , { useState } from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handUPcall = () => {
        // console.log("Upper button clicks" + text);
        let settext = text.toUpperCase();
        setText(settext);
    }
    const handLowcall = () => {
        let settext = text.toLowerCase();
        setText(settext);
    }
    const handelOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const handclrcall = () => {
        let clrtext = '';
        setText(clrtext);
    }
    const handFindcall = () => {
        let findtext = document.querySelector('.form-control-sm').value.toLowerCase().split(" ").join("");
        let ftextcount = text.toLowerCase().split(" ").filter(fText => fText === findtext).length;
        // let count = 
        // console.log(ftextcount);
        document.getElementById('find-count').innerHTML =  "Total Count: " + ftextcount;

        
      
  }
    const handmail = () => {
        let list = text.split(" ");
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let email = "";
        let cont = 1;

        for (let i =0 ; i < list.length ;i++){
            // console.log(list[i]);

            if(list[i].match(mailformat)){
                // console.log(list[i]);
                email += cont + "." + list[i] + " ";
                cont += 1;
                
            }
        };
        // console.log(email);
        document.querySelector('.form-control-lg').innerHTML = email;
        

    }
    let handCopycall = () => {
        let copyText = document.getElementById('exampleFormControlTextarea1');
        
        copyText.select();
        // copyText.setSelectionRange(0,999999);

        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();


    }
    let handRmovescall = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
 
    

    const [text, setText] = useState('');
  return (
    <>
        <div className="container" style={{color : props.mode === 'dark'?'white' : '#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundColor : props.mode === 'dark'?'#13466e' : 'white',color : props.mode === 'dark'?'white' : '#042743'}} onChange={handelOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0}  onClick={handUPcall}>click here Upper</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0}  onClick={handLowcall}>click here Lower</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handclrcall}>Clear</button>
            <button type="button" className="btn btn-light mx-1 my-1" disabled={text.length === 0}  onClick={handCopycall}>Copy Text</button>
            <button type="button" className="btn btn-light mx-1 my-1" disabled={text.length === 0} onClick={handRmovescall}>Remove Spaces</button>
            

      
        </div>
        <div className='container my-4' style={{color : props.mode === 'dark'?'white' : '#042743'}}>
            <h3>Search for Word </h3>
            <div className="input-group mb-2">
                <input type="text" className="form-control-sm" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-prepend">
                    <button className="btn btn-dark mx-2"disabled={text.length === 0}  onClick={handFindcall}>Search</button>
                </div>
            </div>
            <p id="find-count">Total Count : 0</p>
        </div>
        <div className='countainer my-2'>
            <div className="mb-3" style={{color : props.mode === 'dark'?'white' : '#042743'}}>
                <h6>All Email ID</h6>
                <textarea className="form-control-lg" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor : props.mode === 'dark'?'#13466e': 'white', border : props.mode === 'dark'?'2px solid white' : null,color : props.mode === 'dark'?'white' : '#042743' }}></textarea>
                <button  disabled={text.length === 0} className="btn btn-primary mx-3" onClick={handmail}>Find</button>
            </div>
        </div>
        
        <div className='container my-3' style={{color : props.mode === 'dark'?'white': '#042743'} }>
            <h1>Your text summary</h1>
            <p>Number of characters in your text : {text.split(" ").join("").length}</p>
            {/* text.lenth */}
            {/* <p>Number of words in your text : { text.split(" ").length-1}</p> */}
            <p>Number of words in your text : {text.split(" ").filter(text => text !== "").length}</p>
            <p>Reading Time(Min): {(text.split(" ").length-1)*0.008}</p>
            <p>{console.log(text.split(" ").join("").length)}</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text : "Enter somthing in the textbox above to preview it here"}</p>
           

        </div>
    </>
    

  )
}
