// import './App.css';
// import { useState } from 'react';
// import { QueryClientProvider, QueryClient } from 'react-query';
// //react Routing import
// import Planet from './Component/Planet';
// import ModelSuccessful from './Component/ModelSuccessful';
// import FormValidation_ApiIntegration from './Component/FormValidation_ApiIntegration';


// export const queryClient = new QueryClient();

// function App() {

  
//   return (

//     <QueryClientProvider client={queryClient} >
//     <div className="App" >
  
     
// {/* <Planet></Planet> */}
// // FormValidation_ApiIntegration

// <ModelSuccessful></ModelSuccessful>
//     </div>
//     </QueryClientProvider>

//   );
  
// }

// export default App;


import React from 'react'
import './App.css';
import { useState,useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
//react Routing import
import Planet from './Component/Planet';
import ModelSuccessful from './Component/ModelSuccessful';
import FormValidation_ApiIntegration from './Component/FormValidation_ApiIntegration';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Registration_11 from './Component/Registration_11';
import Task_10route from './Component/Task_10route';


 const queryClient = new QueryClient();

function App() {

  return (

    <QueryClientProvider client={queryClient} >
    <div className="App" >
    {/* <Planet></Planet>  */}
     
       <Task_10route></Task_10route>
       <Registration_11></Registration_11>
   {/* <FormValidation_ApiIntegration></FormValidation_ApiIntegration>  */}
{/* <ModelSuccessful></ModelSuccessful> */}
    </div>
    </QueryClientProvider>

  );
  
}

export default App;



