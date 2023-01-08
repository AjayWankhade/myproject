import * as  Yup from 'yup'



export const signupSchema=Yup.object({
    user:Yup.string().min(2).max(20).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(4).required("Please Enter Your Password"),
    confPass:Yup.string().required().oneOf([Yup.ref('password'),null,'Please Enter Correct Passsword']),
    mobile:Yup.number().mobile().required("Please Enter Mobile Number"),
    referal:Yup.number().required("Please Enter Referal Number")
})
