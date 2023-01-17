import React from 'react';   
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
   
import Registration_11 from '../../src/Component/Registration_11'
import Alluser from './User_10';
import Update from './Update_10';
import FormValidation_ApiIntegration from './FormValidation_ApiIntegration'


function Task_10route() {
  
return (
<div>
<Router>  
 
<div style={{ width: "100%", height: "200vh", background: "lightgray" }}>

    <div alt="nav" style={{ padding: "20px", 
                          background: "violet", 
                          display:'flex',
                          flexDirection:'row', 
                          justifyContent:'space-evenly' }}>
    
    <Link to="/register" style={{padding:'20px',
                                     color:'black', 
                                     fontSize:'25px',
                                     fontWeight:'bold', 
                                     textDecoration:'none',
                                     background:'lightgreen',
                                     border:'2px solid',
                                     borderRadius:'10px'
                                     
                                     }}> 
                    Registration 
    </Link>

    <Link to="/userdata" style={{padding:'20px',
                                 color:'black', 
                                 fontSize:'25px',
                                 fontWeight:'bold', 
                                 textDecoration:'none',
                                 background:'lightgreen',
                                 border:'2px solid',
                                 borderRadius:'10px'
                                 }} >
                    All User 
    </Link> 




    {/* <Link to="/formValidate" style={{padding:'5px',
                                 color:'black', 
                                 fontSize:'30px',
                                 fontWeight:'bold', 
                                 textDecoration:'none',
                                 background:'lightgreen',
                                 border:'1px solid',
                                 borderRadius:'7px'
                                 }} >
                    Form validation
    </Link>  */}

    </div>         

    <Routes>
      <Route exact path="/register"  element={<Registration_11/>}/>
      <Route exact path="/userdata"  element={<Alluser/>}/> 
      <Route path="/update/:userId" element={<Update/>} />
      {/* <Route exact path="/formValidate" element={<FormValidation_ApiIntegration/>} /> */}
    </Routes> 

    </div>  
</Router> 

  </div>  
  );
}

export default Task_10route;