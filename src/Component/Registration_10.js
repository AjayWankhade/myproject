import axios from 'axios'
import {  useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import Modal from 'react-modal';

import fail from '../Componant/8/fail.png'
import successful from '../Componant/8/successful.png'


function Registration(){

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            age:''
        },
    
        onSubmit: async (values) => {
            await axios
            .post("http://localhost:4000/user", values)
            .then((res) => {
                console.log(values)
                console.log('data post successfully')
                setModalIsOpen(true)
                setImg(successful)
                setSuccess('Successful')
                setMassage('Congratulation! Your record have added successfully')
                setButton('Continue')
            })
            .catch((err) => {
                console.log(err, 'error occurs')
                setModalIsOpen(true)
                setImg(fail)
                setSuccess('Something went Wrong')
                setMassage('Ops! looks like you have fill some wrong information,Try again.')
                setButton('Try Again')
            })
        },
    
        validationSchema: yup.object({
            name: yup.string().trim().required('Name is Required'),
            email: yup
              .string()
              .email('Must be a valid email')
              .required('Email is required'),
            password: yup.string().required('Password is Required'), 
            age: yup.number().required('Age is Required'),
            
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
                           name="name" 
                           placeholder='User Name'
                           value={formik.values.name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           />
          </div>
              {formik.errors.name && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.name}</div>
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
            <div style={{fontSize:'20px', fontWeight:'bold'}}>Age:-</div>
            <input style={{marginLeft:'10px', fontSize:'20px',border:'none'}}
                           type="text" 
                           name="age" 
                           placeholder='age'
                           value={formik.values.age}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}/>
          </div>
              {formik.errors.age && (
                <div style={{fontSize:'20px',color:'red'}}>{formik.errors.age}</div>
              )} 

                <div style={{height:'30px'}}></div>

          <div style={{display:'flex', justifyContent:'center'}}>
            <button style={{padding:'15px', 
                            width:'70%', 
                            background:'blue', 
                            color:'white', 
                            borderRadius:'10px'}}
                            type="submit"
                             >
                      submit
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

export default Registration;