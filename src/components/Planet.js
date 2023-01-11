import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const Planet = () => {
  const Data1 = { display:'flex',justifyContent:'center',fontWeight:'bold', alignItems:'center', height:'60px',width:'100%',border:'0px solid'}
const Data2 = {height:'20px',width:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'0px solid'}

const {isLoading, error, data} = useQuery('data', async() =>{
  return await axios
      .get ("http://swapi.dev/api/planets/")
      .then((res) => (res.data.results))
 })

if (isLoading) 
{
  return <div>Loading.....</div>
}

if(error) 
{
  return <div>error.....</div>
}
return (

  <div style={{ padding:'20px'}}>
    <h1 >Planets Data</h1>
      <h1 style={{color:'blue'}}>Fetch Data From API EndPoint</h1>
  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:'10px'}}>
      <div style={Data1}>
          Name
      </div>

      <div style={Data1}>
      orbital_period
      </div>

      <div style={Data1}>
          Rotation period
      </div>

      <div style={Data1}>
      climate
      </div>

    
  </div>



  <div  >
       
       {data.map((ele) => {
         return (
           <div key={ele.name} 
               style={{marginTop:'40px',display:'flex',flexDirection:'row', justifyContent:'space-between', gap:'30px'}} >

             <div style={Data2}>
                    {ele.name}
               </div>

             <div style={Data2}>
                   {ele.orbital_period}
               </div>

             <div style={Data2}>
                   {ele.rotation_period}
               </div>

             <div style={Data2}>
                       {ele.climate}
               </div>
           </div>
           
         )
       })}

   </div>
   
   </div>
)
 



  

 


}

export default Planet;
