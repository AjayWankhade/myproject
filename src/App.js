import logo from './logo.svg';
import './App.css';
import ResetPassword from './components/ResetPassword';
import Wallet from './components/Wallet';
import Array from './components/Array';
import filter from './filter.png';
import clock from './clock.png';
import Toggle from './components/Toggle';
import BotDealsUI from './components/BotDealsUI';
import Bot_Deals from './components/Bot_Deals';
import FormValidation from './components/FormValidation';
import Binance_Futures from './components/Binance_Futures';

function App() {
  return (
     <div className="App" 
        style={{width:'100%',height:'1200px',backgroundColor:'lightgrey'}} >
             
             <Binance_Futures></Binance_Futures>
            
   </div>
   /* <Toggle></Toggle>

   <BotDealsUI></BotDealsUI>
   < Bot_Deals></Bot_Deals>
    
   < */
  //  
  // <FormValidation></FormValidation>
  // {/* <ResetPassword></ResetPassword>  */}
  );
}

export default App;
