import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Planet = () => {

  //Fetching data from Api endpoint by reactQuery through Axios library
    const {error,isLoading,data} = useQuery('information',()=>{ 
        return axios.get('https://swapi.dev/api/planets/');
    });



//     // //Fetching data from Api endpoint by reactQuery through Fetch library 
// const {isLoading,Error,data}= useQuery('GetKeyData',()=>{
//   fetch(' http://swapi.dev/api/planets/').then(res=>
//   res.json()
//   )

// })

// if(isLoading)
// {
//   return <div>Loading...</div>
// }
// else if(Error)
// {
//   return <div>Error...</div>
// }




    //Call isLoading Property of query
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error)
    {
        return <h1>Error Comes</h1>
    }
//console.log(data.data.results);
  return (
    <div style={{width:'100%'}}>

      <h1 >Planets Data</h1>
      <h1 style={{color:'blue'}}>Fetch Data From EndPoint</h1>


      <div className='information' style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%'}}>
        <table style={{alignSelf:'space-between', width:'100%',border:'2px solid grey'}} >
            <tr >
                <th>Name</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Population</th>
            </tr>
      {

        //Map Data one by one n
        data.data.results.map((data,index)=>{
           
            const {name, orbital_period, diameter, climate,population} = data
            return (
              
                <tr key={index}>
                    <td>{name}</td>
                    <td>{orbital_period}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{population}</td>
                  
                </tr>
               
            
              
            )
         })
      }
      </table>
      </div>

    </div>
  )
}

export default Planet;
