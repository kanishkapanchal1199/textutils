
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode,setDarkMode]=useState('dark');//wheather dark mode is enabled or not
  const[alert,setAlert] =useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    setAlert(null),3000
    )
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor='#071f42';
      showAlert('Dark mode has been enabled','success')
     // document.title='TextUtils - Dark Mode';
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
      //document.title='TextUtils - Light Mode';
    }
  }
  return (
<>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alerts alert={alert}/>
<div className="container mb-3">
  <Routes>
  <Route excat path="/about" element={<About mode={mode}/>}/>
  <Route excat path="/" element={<TextForm heading="Enter the Text to analyze below" mode={mode}/>}/>
  </Routes>
  </div>
  </Router>
</>
  );
}

export default App;
