import './App.css';
import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
//react Routing import
import Planet from './Component/Planet';
import ModelSuccessful from './Component/ModelSuccessful';


export const queryClient = new QueryClient();

function App() {

  
  return (

    <QueryClientProvider client={queryClient} >
    <div className="App" >
  
     
{/* <Planet></Planet> */}

<ModelSuccessful></ModelSuccessful>
    </div>
    </QueryClientProvider>

  );
  
}

export default App;
