
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import { useState } from 'react';



function App() {

  const [mode,setmode]=useState('light');

  const [alert,setAlert]=useState(null);

  var color;
 
const checkbutton=(val)=>{
/*let value=val.target.value;
  
  if(value==='1'){
    color='#44762e'
  }
  else if(value=='2'){
 // color=
  }
  else{
  // color=
  }*/

}  

const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
  

const togglemode=()=>{
 if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor=(color!=null?color:'#042743')
  showalert('Dark Mode has been enabled','success');
 }
 else{
  setmode('light')
  document.body.style.backgroundColor='white'
  showalert('Light Mode has been enabled','success');
 }
}




  return (
    <>
   

   <Navbar title="TextUtils" mode={mode} togglemode={togglemode} checkbutton={checkbutton}/>
   <Alert alert={alert}/>
   <div className="container ">
   <Textarea showalert={showalert} label="Enter your Text below" mode={mode}/>
   </div>
   
 
    </>
  );
}

export default App;
