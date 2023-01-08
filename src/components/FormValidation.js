import React from 'react';
import optimus from '../images/optimus.png';
import check from '../images/check.png';
import app from '../images/app.png'
import user from '../images/user.png'
import mobile from '../images/mobile.png'
import referalCode from '../images/referalCode.png'
import email from '../images/email.png';



function  FormValidation(){
      return(
        <div className='FirstDiv'   style={{display:'flex',justifyContent:'center',alignContent:'center',background:'lightgrey'}}>
        <div style={{marginInline:80}}>
  
     <div style={{height:40}}></div>

        <img src='optimus.png'  style={{}}></img>
       
       <div style={{height:20}}></div>
       
        <div  style={{color:'black',fontSize:24,fontFamily:'gotham',fontWeight:'bold',height:29,lineHeight:'21px'}}>Registration</div>
       <br></br>
        <div style={{fontFamily:'gotham',alignItems:'center',lineHeight:'21px',color: '#6B7998',marginBottom:'1rem',textAlign:'center',width:'300px',marginInline:20}} >We Satisfy Your Needs. Registr your self here to Get started with us.</div>
         
        <div   >
<form>
<div className='ipBox' style={{ background:'white',display:'flex',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={user} style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='name' name='name' id='name'  placeholder='User Name' ></input>
 
</div>
</form>

<div style={{height:15}}></div>

<div  style={{ background:'white',display:'flex',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={email} style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='email'name='email' id='email' placeholder='Email' ></input>
                     
 
</div>




<div style={{height:15}}></div>

<div  style={{ background:'white',display:'flex',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src='lock.png' style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='password' name='password' id='password'   
                      placeholder='Password'></input>
  
 
</div>



<div style={{height:15}}></div>

<div style={{ background:'white',display:'flex',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src='lock.png' style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='password' name='confPass' id='confPass'
                      placeholder='Re-Enter Password'></input>
  
  
    
</div>



<div style={{height:15}}></div>

<div style={{ background:'white',display:'flex',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={mobile}style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='number' name='mobile' id='mobile' 
                      placeholder='Mobile No'></input>
       
</div>



<div style={{height:15}}></div>

<div  style={{ background:'white',display:'flex',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
    <img src={referalCode} style={{marginLeft:8,height:20}}></img>
  <input className='inp-ctl' style={{marginLeft:8, height:'3rem',width:'80%',fontSize: '1rem',border: '0px',borderRadius:'10px',paddingLeft:'10px',color:'#8D97BD',fontFamily: 'Gotham'}} type='number'  name='referal' id='referal' 
                      placeholder='Referal Code'></input>
                   

</div>


<div style={{height:15}}></div>


<div style={{height:15}}></div>

<div>
   <img src={check} style={{fontFamily:'gotham',paddingRight:80}}></img>

</div>


<div style={{height:20}}></div>

<div>
   <img src={app} style={{}}></img>

</div>


<div class="input-box" style={{paddingTop:'10%'}}>
       <button className='btn' type='submit' style={{color:'white',fontFamily:'gotham',backgroundColor:'blue',borderRadius:'10px',height:'50px',width:'22rem',}} >Sign Up</button>
   </div>
</div>
  </div>
        </div>
      );

}
export default FormValidation;