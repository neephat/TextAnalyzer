
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
import Alerts from "./components/Alerts";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light', true);
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    }
    );
    setTimeout( ()=>{
      setAlert(null);
    },3000);
  }

  // const removeBodyClass = ()=>{
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  // }
  
  const toggleMode = (cls)=> {
    // removeBodyClass();
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Enabled Dark Mode', 'success');

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Enabled Light Mode', 'success');
    }
  }
  return (
    
    <>
      <BrowserRouter>
      <Navbar title="TextANALYZER" aboutText="About Us" mode={mode} toggleMode={toggleMode} homebtn="Home" />
      <Alerts alertMsg={alert} />
      <Routes>
      <Route path="/about" element={<About mode={mode} />} />
      <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter Your text below to Analyze" />} />
      </Routes>    
      </BrowserRouter>
      </>

  );
}


export default App;