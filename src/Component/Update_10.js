import React from 'react';  
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useFormik } from 'formik';
import Modal from 'react-modal';

import error from '../../src/images/error.png'
import msg from '../../src/images/msg.png'

function Update(){

    const params = useParams()
    // console.log(params.userId) 

    const formik = useFormik({
      initialValues:{
          UserName:'',
          email:'',
          password:'',
          mobile:''
      },
  
      onSubmit: async (values) => {
        
          await axios
          .put(`http://localhost:9000/user/update/${params.userId}`, values)
          .then((res) => {
              console.log(values)
              console.log('data update successfully')
              setModalIsOpen(true)
              setImg(msg)
              setSuccess('Successful')
              setMassage('Congratulation! data update successfully')
              setButton('Continue')
          })
          .catch((err) => {
              console.log(err, 'error occurs')
              setModalIsOpen(true)
              setImg(error)
              setSuccess('Something went Wrong')
              setMassage('Ops! looks like you have fill some wrong information,Try again.')
              setButton('Try Again')
          })
      },
    });

    const [modalIsOpen,setModalIsOpen] = useState(false);
     
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    const [success, setSuccess] = useState('')
    const [massage, setMassage] = useState('')
    const [button, setButton] = useState('')
    const [img, setImg] = useState('')
  
    

    useEffect(()=>{
      get_id();
    });
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setmobile] = useState('')
    
    const get_id = async () => {
      await axios
      .get (`http://localhost:9000/user/get/${params.userId}`)
      .then((data2) => {
                          setName(data2.data.UserName) 
                          setEmail(data2.data.email)
                          setPassword(data2.data.password)
                          setmobile(data2.data.mobile)
                        
                        })
      .catch((error) => (console.log(error, 'error')))
    }


    const inputStyle = {
        padding:'20px', 
        display:'flex',
        flexDirection:'row', 
        alignItem:'center',
        background:'white', 
        borderRadius:'10px'
      }

return(
<div style={{width: "100%", height: "100vh", background: "lightblue",display:'flex',justifyContent:'center'}}>
    
    <div>

    <div style={{margin:'20px',
            padding:'20px',
            fontSize:'20px',
            fontWeight:'bold',
            fontFamily:'sans-serif',
            color:'white', 
            background:'purple', 
            borderRadius:'15px',
            width:'200px',
            textAlign:'center'}}
               >
                Update details 
    </div> 

    <form onSubmit={formik.handleSubmit}>
        <div style={{ padding:'20px',
                  display:'flex', 
                  flexDirection:'column', 
                  gap:'20px'}}>       
          
          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Name:- </div>
            <input style={{marginLeft:'10px', fontSize:'20px', border:'none'}}
                           type="text" 
                           name="UserName"
                           value={formik.values.UserName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           placeholder={name}>
                       
            </input>
                
          </div>

          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Email:-</div>
            <input  style={{marginLeft:'12px', fontSize:'20px', border:'none'}} 
                    type="text" 
                    name="email" 
                    placeholder={email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>

          </div>

          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Password:-</div>
            <input  style={{marginLeft:'12px', fontSize:'20px', border:'none'}} 
                    type="password" 
                    name="password" 
                    placeholder={password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />

          </div>

          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Mobile:-</div>
            <input style={{marginLeft:'10px', fontSize:'20px',border:'none'}}
                           type="text" 
                           name="mobile"
                           placeholder={mobile}
                           value={formik.values.mobile}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           />
               
          </div>

                <div style={{height:'30px'}}></div>

          <div style={{display:'flex', justifyContent:'center'}}>
            <button style={{padding:'15px', 
                            width:'70%', 
                            background:'blue', 
                            color:'white', 
                            borderRadius:'10px'}}
                            type="submit"
                             >
                      Submit
              </button>
          </div>
          
        </div>
    </form>
    </div>

<Modal isOpen={modalIsOpen} 
    style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    content: {
      marginTop:'100px',  
      height:'50%',
      background: 'white',
      borderRadius: '10px',
      outline: 'none',
    }
  }}>
    <div>
        <div style={{
                    display:'flex', 
                    alignItems:'center',
                    justifyContent:'center'}}>
            <img src={img} style={{paddingTop:'20px',height:'100px'}}></img>
        </div>
    </div>

<div  style={{padding:'20px'}}>

<div>
    <div style={{display:'flex', 
                flexDirection:'column', 
                alignItems:'center', 
                gap:'20px'}}>

            <div style={{fontSize:'18px', fontWeight:'bold'}}>{success}</div>

            <div style={{fontSize:'18px',color:'#6B7998',textAlign:'center'}}>
                {massage}
            </div>
    </div>
            <div style={{height:'30px'}}></div>

    <div style={{textAlign:'center'}}>
        <button style={{ 
                    height:'50px', 
                    width:'70%',
                    fontSize:'14px',
                    color:'white',
                    borderRadius:'10px',
                    background:'blue'}}
                    onClick={setModalIsOpenToFalse}
                    >
                {button}
        </button>
    </div>        

</div>
</div>
               
</Modal>
</div>
);

  
}

export default Update;
