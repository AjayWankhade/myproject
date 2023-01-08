import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import clock from "../images/clock.png";
import filter from "../images/filter.png";


import { useState } from "react";

 
function Toggle() {
  const [show, setshow] = useState(true);
  
  function clickhandlers() {
    if (show === true) {
      setshow(false);
    }
    if (show === false) {
      setshow(true);
    }
  }
  const array = [
    {
      image: img1,
      data1: "DOTUSDT  ",
      liquidity: "+0.53% +0.06$",
      data2: "Sabdesh USDT-18 Short Bot",
      LP: "LP",
      QTY: "QTY",
      SO: "SO",
      number: "18",
    },
    {
      image: img2,
      data1: "DOTUSDT  ",
      liquidity: "+0.53% +0.06$",
      data2: "Sabdesh USDT-18 Short Bot",
      LP: "LP",
      QTY: "QTY",
      SO: "SO",
      number: "85",
    },
    {
      image: img3,
      data1: "DOTUSDT  ",
      liquidity: "+0.53% +0.06$",
      data2: "Sabdesh USDT-18 Short Bot",
      LP: "LP",
      QTY: "QTY",
      SO: "SO",
      number: "78",
    },
  ];
  const array2 = array.map((e) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        marginTop: "10px",
        gap: "12px",
        width: "85%",
        height: "82px",
        background: "#FFFFFF",
        borderRadius: "10px",
        textAlign: "justify",
      
      }}
    >
      <img style={{ paddingLeft: "2%" }} src={e.image} alt="a"></img>
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
            width: "180%",
          }}
        >
          <text style={{ fontWeight: "700" }}> {e.data1}</text>
          <text style={{ color: "#04CA00", display: "flex" }}>
            {e.liquidity}
            <div style={{height:'25px'}}></div>
          </text>
        </div>
        <div style={{width:'180%'}}>
          <text style={{color:"#6B7998"}}>{e.data2}</text>
          <div style={{height:'8px'}}></div>
          <div
            style={{
              display: "flex",
              fontWeight: "600",
              justifyContent: "space-between",
              width: "100%",
              
            }}
          >
          
            <div style={{ display: "flex", paddingRight: "10px" ,}}>
              <text>{e.LP}</text>
              <div style={{width:7.5}}></div>
              <div style={{ color: "blue" }}>{e.number}</div>
            </div>
            <div style={{ display: "flex", paddingRight: "10px" }}>
              <text>{e.QTY}</text>
              <div style={{width:7.5}}></div>
              <div style={{ color: "blue" }}>{e.number}</div>
            </div>
            <div style={{ display: "flex", paddingRight: "10px" }}>
              <text>{e.SO}</text>
              <div style={{width:7.5}}></div>
              <div style={{ color: "blue" }}>{e.number}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div
      style={{
        paddingTop: "80px",
        width: "100vw",
        height: "100vh",
        background: "lightgrey",
        margin: "0px",
        padding: "0px",
        fontFamily: "'Gotham', sans-serif",
        fontStyle: "normal",
    
      }}
    ><div style={{width: "100%",height: "128px",borderBottomLeftRadius: "20px",borderBottomRightRadius: "20px",background: "linear-gradient(134.24deg, #1A2237 -1.37%, #051450 100%",alignItems: "center"
}}>
   <div style={{marginInline:20,display:'flex',justifyContent:'space-between'}}>

      <div style={{color: "white",fontWeight:'bold', fontFamily: "'Gotham', sans-serif",paddingTop:60,fontWeight:500,fontSize:'24px'}}>Deals</div>
<div style={{paddingTop:50}}>
<button style={{width:"45px", height:"45px", backgroundColor:"transparent", border:"1px solid white",borderRadius:"50%", cursor:"pointer" }}>
    <img
      onClick={clickhandlers}
        style={{ width: "24px", height: "24px" }}
          src={filter}
          alt="button"></img>

        </button>
        </div>
        </div>
      </div>
      <div style={{fontWeight:'600',marginLeft:"10%",marginTop:"10px",display:"flex",alignItems:"center"}}>
        <img src={clock} alt="clock"></img>
        <text style={{paddingLeft:"10px"}}>Recent Deals</text>
      </div>
      {show ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {array2}
        </div>
      ) : null}
    </div>
  );
}
export default Toggle;