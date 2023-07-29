import logo from './logo.svg';
import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState }from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


function App() {
  
  const [mode , setMode] = useState('light')
  // const color_now = mode;
  // document.body.style.backgroundColor = '#042743'
  const toggleMode = () =>{
    
    // console.log("mode is light");
    if (mode === 'light'){
      document.body.style.backgroundColor = '#042743';
      setMode('dark');
    }else {
      document.body.style.backgroundColor = 'white';
      setMode('light');
    }
  }
  const buttonColur = (ids) => {
  
    let pre_colo = document.body.style.backgroundColor;
    console.log("this recodes of befor colors " + pre_colo);
    if (pre_colo === ""){
      pre_colo = "white";
    }
    let off_colo = null;
    if (pre_colo !== ids){
      document.body.style.backgroundColor = ids;
    
    }else{
      mode === "light"?off_colo = "white" : off_colo = "#042743";
      //console.log(ids + " trying to get off");
      document.body.style.backgroundColor = off_colo;
    }
    
  }
  return (
    <>
     <Router>
      <Navebar title = "My Apps" navbar_tex = "About Text"  mode={mode} toggleMode={toggleMode} buttonColur={buttonColur}/> 
      <div className='container my-4'>
      <Routes>
            <Route exact path="/about"   element={<About />} />
           
            <Route exact path="/" element={<TextForm heading="Type Text here" mode={mode}/>}/>
            
      </Routes>
      
     
  
     {/* <div className='container my-4'>
      <About/>
     </div> */}


     </div>
     
     {/* <Navebar  /> */}
     
    </Router>
    </>
    

    
  );
}

export default App;
