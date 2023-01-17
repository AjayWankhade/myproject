import React from 'react';  
import axios from 'axios'
import {  useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import Modal from 'react-modal';

import error from '../../src/images/error.png'
import msg from '../../src/images/msg.png'


function Registration_11(){

    const formik = useFormik({
        initialValues:{
            UserName:'',
            email:'',
            password:'',
            mobile:''
        },
    
        onSubmit: async (values) => {
            await axios
            .post("http://localhost:9000/user/UserCreate", values)
            .then((res) => {
                console.log(values)
                console.log('data post successfully')
                setModalIsOpen(true)
                setImg(msg)
                setSuccess('Successful')
                setMassage('Congratulation! Your record have added successfully')
                setButton('Continue')
            })
            .catch((err) => {
                console.log(err, 'error occurs')
                console.log(values)
                setModalIsOpen(true)
                setImg(error)
                setSuccess('Something went Wrong')
                setMassage('Ops! looks like you have fill some wrong information,Try again.')
                setButton('Try Again')
            })
        },
    
        validationSchema: yup.object({
            UserName: yup.string().trim().required('Name is Required'),
            email: yup
              .string()
              .email('Must be a valid email')
              .required('Email is required'),
            password: yup.string().required('Password is Required'), 
            mobile: yup.number().required('Age is Required'),
            
          }),
    });
    
    const [modalIsOpen,setModalIsOpen] = useState(false);
     
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    const [success, setSuccess] = useState('')
    const [massage, setMassage] = useState('')
    const [button, setButton] = useState('')
    const [img, setImg] = useState('')
    
    const inputStyle = {
        padding:'20px', 
        display:'flex',
        flexDirection:'row', 
        alignItem:'center',
        background:'white', 
        borderRadius:'10px'
    }  
 
return(
<div>
<div>
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
                           placeholder='User Name'
                           value={formik.values.UserName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           />
          </div>
              {formik.errors.UserName && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.UserName}</div>
              )}


          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Email:-</div>
            <input  style={{marginLeft:'12px', fontSize:'20px', border:'none'}} 
                    type="text" 
                    name="email" 
                    placeholder='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
          </div>
              {formik.errors.email && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.email}</div>
              )} 



          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Password:-</div>
            <input  style={{marginLeft:'12px', fontSize:'20px', border:'none'}} 
                    type="password" 
                    name="password" 
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/> 
          </div>
              {formik.errors.password && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.password}</div>
              )} 


          <div style={inputStyle}>
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Mobile:-</div>
            <input style={{marginLeft:'10px', fontSize:'20px',border:'none'}}
                           type="text" 
                           name="mobile" 
                           placeholder='Mobile'
                           value={formik.values.mobile}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}/>
          </div>
              {formik.errors.mobile && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.mobile}</div>
              )} 

                <div style={{height:'30px'}}></div>

          <div style={{display:'flex', justifyContent:'center'}}>
            <button style={{padding:'15px', 
                            width:'70%', 
                            background:'blue', 
                            color:'white', 
                            fontWeight:'bolder',
                            borderRadius:'15px'}}
                            type="submit"
                             >
                      Submit
              </button>
          </div>
          
    </div>
  </form>
</div>

<Modal 
    isOpen={modalIsOpen}
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

export default Registration_11;