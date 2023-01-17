import React from 'react';
import check from '../../src/images/check.png';
import app from '../../src/images/app.png'
import user from '../images/user.png'
import mobile from '../images/mobile.png'
import referalCode from '../images/referalCode.png'
import email from '../../src/images/email.png'
import lock from '../../src/images/lock.png'
import optimus from './../images/optimus.png'
import successful from '../../src/images/successful.png'
import fail from '../../src/images/fail.png'
import error from '../../src/images/error.png'
import msg from '..//images/msg.png'

import {  useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'

function FormValidation_ApiIntegration() {

const [modalIsOpen,setModalIsOpen] = useState(false);
 
const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}

const [success, setSuccess] = useState('')
const [message, setMessage] = useState('')
const [button, setButton] = useState('')
const [img, setImg] = useState('')


const formik = useFormik({
    initialValues:{
        name:'',
        email:'',
        password:'',
        reEnterPassword:'',
        mobile_no:'',
        refferal_code:''
    },

    onSubmit: async (values) => {
        await axios
        .post('http://localhost:9000/user/UserCreate', values)
        .then((res) => {
            console.log(values)
            console.log('data post successfully')
            setModalIsOpen(true)
            setImg(msg)
            setSuccess('Successful')
            setMessage('Congratulation! Your record have added successfully')
            setButton('Continue')
        })
        .catch((err) => {
            console.log(err, 'error occurs')
            setModalIsOpen(true)
            setImg(error)
            setSuccess('Something went Wrong')
            setMessage('Ops! looks like you have fill some wrong information,Try again.')
            setButton('Try Again')
        })

    },

    validationSchema: yup.object({
        name: yup.string().trim().required('Name is Required'),
        email: yup
          .string()
          .email('Must be a valid email')
          .required('Email is required'),
        password: yup.string().trim().required('Password is Required'),
        reEnterPassword: yup.string().label('Password Confirm').required().oneOf([yup.ref('password')], 'Passwords does not match'),
        mobile_no: yup.string().trim().required('mobile no is required'),
      }),
});

    

const input_style = 
{
    height:'50px', 
    paddingLeft:'20px',
    borderRadius:'10px', 
    margin:'10px',
    display:'flex', 
    flexDirection:'row', 
    alignItems:'center', 
    background:'white'
}

const input_img = {width:'18px', height:'18px'}
const input = {height:'17px', border:'none'}

   
return (
    
<div style={{width:'100vw', height:'100%', background:'#D5DBF1'}}>
        <div style={{height:'20px'}}></div>
    <div alt='top' style={{padding:'20px',display:'flex', flexDirection:'column', alignItems:'center'}}>

        <img src={optimus} style={{height:'115px', width:'115px'}}></img>
                
        <div style={{paddingTop:'20px',fontFamily:'Gotham',fontSize:'24px',fontWeight:'bold'}}>
            Registration
        </div>

        <div style={{paddingTop:'10px',fontFamily:'Gotham',fontSize:'14px', textAlign:'center', color:'#6B7998'}}>
            We Statify Your Need. Register your self here to Get started with us.
        </div>
        
    </div>

    
    <div alt='middle' style={{height:'auto',
                              padding:'20px', 
                              display:'flex', 
                              flexDirection:'column', 
                              gap:'14px'}}>
    
    <form onSubmit={formik.handleSubmit} > 
        <div style={input_style}>
            <img src={user} style={input_img}></img>
            <input style={input} 
                   type="text" 
                   name="name" 
                   placeholder='User Name'
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
         {formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
        </div>

        <div style={input_style}>
            <img src={email} style={input_img}></img>
            <input style={input} 
                   type="email" 
                   name="email" 
                   placeholder='email'
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
            {formik.errors.email && (
                <div>{formik.errors.email}</div>
             )}    
        </div>

        <div style={input_style}>
            <img src={lock} style={input_img}></img>
            <input style={input} 
                   type="password" 
                   name="password" 
                   placeholder="password"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
            {formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
        </div>    

        <div style={input_style}>
            <img src={lock} style={input_img}></img>
            <input style={input} 
                   type="password" 
                   name="reEnterPassword"
                   placeholder="Re-EnterPassword"
                   value={formik.values.reEnterPassword}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
            {formik.errors.reEnterPassword && (
                <div>{formik.errors.reEnterPassword}</div>
            )}
        </div>   

        <div style={input_style}>
            <img src={mobile} style={input_img}></img>
            <input style={input} 
                   type="mobile_no" 
                   name="mobile_no" 
                   placeholder="mobile no"
                   value={formik.values.mobile_no}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
            {formik.errors.mobile_no && (
                <div>{formik.errors.mobile_no}</div>
            )}
        </div> 

        <div style={input_style}>
            <img src={referalCode} style={input_img}></img>
            <input style={input} 
                   type="refferal_code" 
                   name="refferal_code" 
                   placeholder="refferal code"
                   value={formik.values.refferal_code}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   />
            {formik.errors.refferal_code && (
                <div>{formik.errors.refferal_code}</div>
            )}   
        </div>


        <div alt='end'>
        <div>
                        <img src={check} style={{ fontFamily: 'gotham', paddingRight: 80 }}></img>

                      </div>

    <div style={{fontSize:'14px',textAlign:'center'}}> 
        
        <div>or sign in with</div>
        
    </div>
        <div style={{height:'20px'}}> </div>
        <div>
                        <img src={app} style={{}}></img>

        </div>
     
     <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>

        <button style={{width:'70%',
                        color:'white',
                        fontSize:'14px',
                        height:'50px', 
                        background:'blue', 
                        borderRadius:'10px'}}
                        type="submit"
                        
                        >
            Sign Up
        </button>

     </div>
    
        <div style={{height:'20px'}}></div>
     <div style={{fontSize:'14px',color:'#768E9C', textAlign:'center'}}> 
        already have an account 
        <span style={{fontWeight:'bold', color:'black'}}> Log In</span>
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
                {message}
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

    <div style={{height:'20px'}}></div>

</div> 

);
}
  
export default FormValidation_ApiIntegration;