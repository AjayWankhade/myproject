import React from 'react'
import axios from 'axios';
import { useQuery } from "react-query";
import { useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Alluser = () => {

  const navigate = useNavigate()  
  
  function update_id(userId){
        navigate(`/update/${userId}`);
        console.log(userId) 
    }

    
    const input = {
      fontSize:'20px',
      fontWeight:'bold'
    }

    

// const delete_id = async (id) => {
//     await axios
//     .delete ("http://localhost:9000/user/delete?id=${_id}")
//     // console.log("Player was deleted")
//     .then((error)=>{console.log(error, "Error ")})
//   }

  const delete_id = async (_id) =>{
     window.prompt('Are You sure want to Delete the User');
    await axios
    .delete(`http://localhost:9000/user/delete/${_id}`)
    .then((res)=>{console.log('Success'+res)})
      
    .catch((err) => console.log(err));
}

  

const {isLoading, error, data:RegistrationData, refetch,} = useQuery('data', async() =>{
        return await axios
            .get ("http://localhost:9000/user/getAll")
            .then((res) => ((res.data)))
              
            
       });

useEffect(()=>{
    refetch();
}, [RegistrationData]);


if (isLoading) return (<div>Loading..</div>)
if(error) return (<div>error...</div>)

return(
  <div style={{ padding:'20px',width:'vw', height:'vh', background:'#D5DBF1'}}>

  {RegistrationData.map((user) => {
      return (

  <div key={user._id} > 
          
      <div style={{
                   display:'flex', 
                   flexDirection:'column', 
                   justifyContent:'space-between', 
                   alignItems:'center',
                   justifyContent:'center',
                   gap:'20px'

                   }}
                  onClick={()=>{refetch()}}
                  
                  >

          <div style={{width:'70%', 
                       background:'white', 
                       padding:'20px',
                       borderRadius:'10px',width:'500px',display:'flex',justifyContent:'center'}}>
              <table style={{color:'black',display:'flex',justifyContent:'space-between',borderRadius:'15px',flexDirection:'row'}}>
               <tr>
              <div style={input}>
                 <td>Name:- <span style={{color:'gray'}}> {user.UserName}</span></td> 
              </div>
              </tr>

               <tr>
              <div style={input}>
                  <td>Email:- <span style={{color:'gray'}}>{user.email}</span></td>
              </div></tr>
             <tr>
              <div style={input}>
               <td> Password:- <span style={{color:'gray'}}>{user.password}</span></td>  
              </div></tr>

              </table>
           
          </div>

          <div style={{padding:'5px',display:'flex', flexDirection:'column', gap:'10px'}}>
             
             <button style={{fontSize:'20px',
                              color:'black',  
                              borderRadius:'10px'
          
                              }}
                          onClick={()=>(delete_id(user._id))}
                           
                              >
                          delete      
              </button>

              {/* <Link to="/update"> */}
                  <button style={{fontSize:'20px', 
                              color:'white', 
                              background:'blue', 
                              borderRadius:'10px'}}
                              onClick={()=>update_id(user._id)}
                              >
                      Update
                  </button>
              {/* </Link> */}
          
          </div>

      </div>
          <div style={{height:'20px'}}></div>
      </div> 
     
      )
  })}

</div>   

)

}
export default Alluser;