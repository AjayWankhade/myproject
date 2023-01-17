import React, { useState } from 'react'
import left from '../../src/images/left.png'
import girl from '../../src/images/girl.png'
import selectExc from '../../src/images/selectExc.png'
import userOct from '../../src/images/userOct.png'
import key from '../../src/images/key.png'
import msg from '../../src/images/msg.png'
import Modal from 'react-modal';
import arrow from '../../src/images/arrow.png';

// Function Starts Here
function  ModelSuccessful(){
  
  //sets initialValue  is false For OpenModel
  const[isOpenModel,setIsOpen]=useState(false)

  
  const isSetopen=()=>{
    setIsOpen(true)
  }

  const isSetClose=()=>{
    setIsOpen(false)
  }
    
return (
    <div className='Outer' style={{width:'100%', height:'100%', background:'#D5DBF1'}} >
       <div className='BlueArea' style={{background:'#051450',borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
          <div style={{height:'50px'}}></div>

          <div className='head' style={{paddingBottom:'20px',paddingLeft:'20px',gap:'20px',display:'flex',flexDirection:'row',alignItems:'center',borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
              <img src={left}></img>
              <p style={{color:'white',fontWeight:'bold',fontFamily:'Gotham',fontSize:'24px'}}>Add Exchange</p>

          </div>
       </div>

       <div style={{height:'30px'}}></div>
         <div style={{textAlign:'center'}}>
            <img src={girl} style={{width:'288px', height:'210px',left:'43px',top:'169px'}}></img>
         </div>

         <div style={{height:'20px'}}></div>
        <div className='Attributes' style={{marginInline:'10px'}}>
            
              <div className='FirstAttribute' style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',marginInline:'10px',backgroundColor:'white',borderRadius:'10px'}}>
                <p style={{fontSize:'14px', fontWeight:'bold',height:'30px'}}>Select Exchange</p>
                <img src={arrow}></img>
              </div>

              <div style={{height:'10px'}}></div>

              <div className='FirstAttribute' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:'5px',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',marginInline:'10px',backgroundColor:'white',borderRadius:'10px'}}>
                 <img src={userOct}></img>
                 <input style={{fontSize:'14px', height:'50px',fontWeight:'bold', color:'#8D97BD', border:'none'}}
                                placeholder='Account Name'>
                </input>
              </div>

              <div style={{height:'10px'}}></div>

              <div className='FirstAttribute' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:'5px',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',marginInline:'10px',backgroundColor:'white',borderRadius:'10px'}}>
                 <img src={key}></img>
                 <input style={{fontSize:'14px', height:'50px',fontWeight:'bold', color:'#8D97BD', border:'none'}}
                                type='password' placeholder='Api Kay'>
                </input>
              </div>

              <div style={{height:'10px'}}></div>
   
              <div className='FirstAttribute' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:'5px',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',marginInline:'10px',backgroundColor:'white',borderRadius:'10px'}}>
                 <img src={key}></img>
                 <input style={{fontSize:'14px', height:'50px',fontWeight:'bold', color:'#8D97BD', border:'none'}}
                                type='password' placeholder='Secret Key'>
                </input>
                </div>
         
              
              <div style={{height:'40px'}}></div>
   
         
              <button className='FirstAttribute' style={{justifyContent:'flex-start',gap:'5px',alignItems:'center',paddingLeft:'10px',paddingRight:'10px',marginInline:'10px',backgroundColor:'#195DFE',borderRadius:'10px',width:'95%'}}>
                  <p style={{fontSize:'14px',color:'white'}} onClick={isSetopen}>Submit</p>
                </button>


        </div>

        <Modal isOpen={isOpenModel}
        style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        },
        content: {marginTop:'150px',height:'320px',background: 'white',borderRadius: '10px',outline: 'none'}}}>
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={msg} style={{paddingTop:'20px',height:'100px'}}></img>
            </div>
        </div>
    
    <div alt='successful' style={{padding:'20px'}}>
    
    <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', gap:'20px'}}>
    
                <div style={{fontSize:'18px', fontWeight:'bold'}}>Successful</div>
    
                <div style={{fontSize:'18px',color:'#6B7998',textAlign:'center'}}>
                    Congratulation! Your record have added successfully
                </div>
        </div>
                <div style={{height:'30px'}}></div>
    
        <div style={{textAlign:'center'}}>
            <button style={{ height:'50px',width:'70%',fontSize:'14px',color:'white',borderRadius:'10px',background:'blue'}} onClick={isSetClose}
>
                    Continue
            </button>
        </div>        
    
    </div>
    </div>
                   
    </Modal>
       </div>
        );
}
export default ModelSuccessful;