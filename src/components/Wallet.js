import React from 'react';

const Wallet=()=>{
    return(
        <div style={{backgroundColor:'darkgrey'}}>

           <div style={{display:'flex',justifyContent:'space-between',background: 'linear-gradient(134.24deg, #1A2237 -1.37%, #051450 100%)',width:'100%',height:'128px',borderBottomLeftRadius:'10%',borderBottomRightRadius:'10%'}}>
                <p style={{fontFamily:'gotham',color:'white',fontSize:'24px',marginInline:20,width:'67px',height:'23px',top:'74px',left:'20px',marginTop:60}}>Deals</p>
                 <img src='Filter.png' style={{background: '#EEEEEE',opacity:'80%',width:'24px',height:'24px',marginInline:20,marginTop:60}}></img>
           </div>

      <div style={{display:'flex',justifyContent:'flex-start'}}>
          <img src='clock.png' style={{width:'24px',height:'24px',marginLeft:20,marginTop:13}}></img>
          <p style={{lineHeight:'15.31px',fontSize:'16px',fontFamily:'gotham',width:'106px',height:'15px',top:'150px',left:'50px',fontWeight:'bold'}}>Recent Deals</p>
      </div>
     
    <div style={{height:20}}></div>

    
     <div style={{backgroundColor:'white',borderRadius:'5px',justifyContent:'center',width:'100%',marginLeft:20,padding:'10px',height:'82px',marginRight:20,}}>
         <div style={{display:'flex',flexDirection:'row'}}>
            
             <img src='Rectangle.png' style={{width:'60px',height:'60px',top:'11px',left:'10px',borderRadius:'5px',marginLeft:10,marginTop:10}}>
             </img>
        
         </div>

     </div>






        </div>
    )
}
export default Wallet;