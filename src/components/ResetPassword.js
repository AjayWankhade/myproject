import React from 'react';
import optiums from '../images/optimus.png'

const ResetPassword=()=>{
    return(
  <div className='main-container' style={{alignContent:'center',display:'flex',justifyContent:'center',background:'lightgrey'}}>
      <div style={{marginInline:80}}>
  
     <div style={{height:40}}></div>

        <img className='logo' src={optiums}  style={{}}></img>
       
       <div style={{height:20}}></div>
       
        <div  style={{color:'black',fontSize:24,fontFamily:'gotham',fontWeight:'bold',height:29,lineHeight:'21px'}}>Reset Password</div>
       <br></br>
        <div style={{fontFamily:'gotham',alignItems:'center',lineHeight:'21px',color: '#6B7998',marginBottom:'1rem',textAlign:'center'}} >Use a combination of at least eight letters,numbers, and special character</div>
         
        <div class="box"  >

        <div className='inputBox' style={{ background:'white',display:'flex',borderRadius:10}}>
            <img src='lock.png' style={{marginLeft:8,height:30,paddingTop:10}}></img>
          <input className='input-ctl' style={{marginLeft:8, height:'3rem',width:'70%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'white',fontFamily: 'Gotham'}} type='password' placeholder='Password'></input>
        </div>
        
        <div style={{height:8}}></div>
        
        <div className='inputBox' style={{ background:'white',display:'flex',borderRadius:10}}>
            <img src='lock.png' style={{marginLeft:8,height:30,paddingTop:10}}></img>
          <input className='input-ctl' style={{marginLeft:8, height:'3rem',width:'70%',fontSize: '1rem',border: '0px',borderRadius:'3px',paddingLeft:'10px',color:'white',fontFamily: 'Gotham'}} type='password' placeholder='Re-Enter Password'></input>
        </div>
   


        <div class="input-box" style={{paddingTop:'10%'}}>
               <button className='btn'style={{borderRadius:'10px',height:'50px',width:'18rem',fontSize:'1rem',color:'white',backgroundColor:'blue',fontFamily:'gotham'}} >Submit</button>
           </div>

           <div style={{height:20}}></div>

    
  </div>
    
  </div>
        
        </div>
    )
}
export default ResetPassword; 