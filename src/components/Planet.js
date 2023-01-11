import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Planet = () => {

  //Fetching data from Api endpoint by reactQuery through Axios 
    const query = useQuery('info',()=>{ 
        return axios.get('https://swapi.dev/api/planets/');
    });


    //Call isLoading Property of query
    if(query.isLoading){
        return <h1>Loading...</h1>
    }
    if(query.isError)
    {
        return <h1>Error Comes</h1>
    }
//console.log(query.data.data.results);
  return (
    <div style={{width:'100%'}}>

      <h1 >Planets Data</h1>


      <div className='info' style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%'}}>
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
        query.data.data.results.map((data,index,arr)=>{
           
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

export default Planet