import React from "react";
import left from '../images/left.png';
import img1 from '../images/img1.png';

function BotDealsUI(){
    return (
        <div style={{backgroundColor:'lightgray'}}>
        <div
        style={{
          color: "white",
          width: "100%",
          padding:'10px',
          height: "128px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          background: "linear-gradient(134.24deg, #1A2237 -1.37%, #051450 100%",
          display: "flex",
          justifyContent: "space-start",
          alignItems: "center",
          fontWeight:'bold',
          gap:'20px',
         paddingLeft:10,
         paddingBottom:2
          
        }}
      >
        
        <img src={left} style={{width:'50px', height:'50px'}}></img>


<text style={{fontSize:"24px",fontWeight:'bold', color:"white"}}>Bot deal</text>
      
      </div>
      <div style={{height:'10px'}}></div>
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        marginTop: "10px",
        gap: "12px",
        width: "90%",
        height: "60px",
        background: "#FFFFFF",
        borderRadius: "10px",
        textAlign: 'start',
        marginLeft:10
      }}
    >
      <img style={{ paddingLeft: "5%" }} src={img1} alt="a"></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "170%",
          }}
        >
          <text style={{ fontWeight: "700" }}>DOTUSDT  </text>
          <text style={{ color: "#04CA00", display: "flex" }}>
          +0.53% +0.06$
          </text>
        </div>
        <div style={{width:'175%'}}>
          <text style={{color:"#6B7998"}}>Sabdesh USDT-18 Short Bot</text>

          <div
            style={{
              display: "flex",
              fontWeight: "600",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            
          </div>
        </div>
      </div>
    </div>

    <div style={{height:'20px'}}></div>
       <div>
       <text style={{background: 'linear-gradient(134.24deg, #1A2237 -1.37%, #051450 100%)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',WebkitTextFillColor: 'transparent',fontFamily: 'gotham',fontStyle: 'normal',fontWeight: 400,fontSize: '20px',lineHeight: '24px',size:'20px',fontWeight:'bolder',position: 'absolute',width: '75px',height:'24px',left: '20px'}}>Bought</text>
       </div>

       <div style={{height:'40px'}}></div>

       <div style={{display:'flex',padding:'15px',marginInline:20,width:'335px',backgroundColor:'white',flexDirection:'row',flexWrap:'wrap',height:'549px',gap:'25px',alignItems:'initial',justifyContent:'space-between'}}>
      
          <div>
          <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>Base order size</div>
           <div style={{height:'10px'}}></div>
          <div style={{width: '100%',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>10 USDT</div>
          <div style={{height:'10px'}}></div>
          <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>Safety orders</div>
          <div style={{height:'10px'}}></div>
          <div style={{width: '59px',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>0/6</div>
          <div style={{height:'10px'}}></div>
          <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>Creation Date </div>
          <div style={{height:'10px'}}></div>
          <div style={{width: '100%',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>17 May 2022, 10:19 AM</div>

          </div>

          
         <div>
         <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>Safety order size</div>
           <div style={{height:'10px'}}></div>
          <div style={{width: '100%',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>10 USDT</div>
          <div style={{height:'10px'}}></div>
          <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>Take Profit</div>
           <div style={{height:'10px'}}></div>
          <div style={{width: '100%',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>0.3%</div>
          <div style={{height:'10px'}}></div>
          <div style={{fontFamily:'Gotham',fontWeight:400,fontSize:'13px',lineHeight:'11.18px',color: '#6B7998'}}>  Deal ID</div>
           <div style={{height:'10px'}}></div>
          <div style={{width: '100%',height: '13px',fontFamily: 'Gotham',fontStyle: 'normal',fontWeight: '500',fontSize:'14px',color: 'black',fontWeight:'bold'}}>1697352557</div>
    
         </div>
         
          
         <button style={{boxSizing: 'border-box',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'0px',width: '146px',height: '50px',background: '#FFFFFF',border: '1px solid #000000',borderRadius: '10px',color:'black',fontWeight:'bold',fontFamily: 'Gotham'}}> Cancel</button>
         <button style={{background: 'blue',boxSizing: 'border-box',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'0px',width: '146px',height: '50px',border: '1px solid #000000',borderRadius: '10px',color:'white'}}> Cancel</button>

       </div>
       
        
    </div>
    );
}
export default BotDealsUI;