import FlatList from 'flatlist-react'
import left from './../images/left.png'
import moneyicon from './../images/moneyicon.png'
import wallet from './../images/wallet.png'
import cal from './../images/cal.png'
import month from './../images/month.png'
import updown from './../images/updown.png'
import change from './../images/change.png'
import first from './../images/first.png'
import second from './../images/second.png'
import third from './../images/third.png'
import fourth from './../images/fourth.png'
import graph from './../images/graph.png'


//Function starts Here 
function Binance_Futures() {
  //Date Taken in array For Mapping
  const data = [
      {img:first,type:'Gas',percentage:'+3.9%',graph:graph},
      {img:second,type:'Stratis',percentage:'-2.9%',graph:graph},
      {img:third,type:'BNB',percentage:'+3.9%',graph:graph},
      {img:fourth,type:'Cardano',percentage:'-2.9%',graph:graph}
  ]
  
  const listItems = (element) => {
          return (
              <div>
              <div alt=' flatlist' style={{padding:'20px',height:'60px',display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center',background:'white',borderRadius:'10px'}}>
          
                  <div style={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
                      <img src={element.img} style={{height:'40px', width:'40px'}}></img>
                      <div>
                          <div style={{fontSize:'14px', fontWeight:'bold'}}>{element.type}</div>
                              <div style={{height:'10px'}}></div>
                          <div style={{fontSize:'14px', color:'#6B7998'}}>$2.96 <span style={{color:'blue'}}> ({element.percentage})</span></div>
                      </div>
                  </div>
          
                  <div>
                      <img src={element.graph} style={{height:'24px', width:'53px'}}></img>
                  </div>
                  
                  <div style={{display:'flex', flexDirection:'column', alignItems:'end'}}>
                      <div style={{fontSize:'14px', fontWeight:'bold'}}>40.454</div>
                          <div style={{height:'10px'}}></div>
                      <div style={{fontSize:'14px', color:'green'}}>$2.96 (+3.9%)</div>
                  </div>
              </div>
              <div style={{height:'10px'}}></div>
              </div>
      )
      }
  
  
  
  //Css For Space Between Div's
const space = {display:'flex',flexDirection:'row',justifyContent:'space-between',alignItem:'center'}
  
     
return (
  //Background Div
<div style={{width:'100%', heigth:'100vh', background:"#D5DBF1"}}>  
 {/* Div for First Blue Area */}
<div alt="head" 
        style={{height:"128px",padding:'10px',display:'flex',flexDirection:'row',alignItems:'flex-start',gap:'30px',background:"#051450",borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}>
        <img src={left} style={{width:'50px', height:'50px',paddingTop:20}}></img>
        <p style={{fontSize:"24px",fontWeight:'bold', color:"white",paddingBottom:40}}>
            Binance Futures
        </p>
    </div>
  
   <div style={{padding:'20px'}}>
  
  
  
      <div alt='mid' style={space}> 
       <div style={{width:'25%', height:'232px', background:'white',paddingLeft:'20px',
                    display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'10px'}}>
  
          <img src={moneyicon} style={{paddingTop:'20px',height:'38px', width:'38px'}}></img>
          <div style={{fontSize:'11px', color:'#6B7998'}}>Total Balance</div>
          <div style={{fontSize:'13px', fontWeight:'bold', color:'#04CA00'}}>340 USD</div>
          <div style={{fontSize:'13px', fontWeight:'bold'}}>0.01 BTC</div>
          <img src={wallet} style={{height:'60px', width:'60px'}}></img>
  
       </div>
              
       <div style={{marginLeft:'10px',width:'70%'}}>
          <div style={{width:'100%', 
                          height:'112px',
                          background:'white',
                          display:'flex', 
                          flexDirection:'row',
                          justifyContent:'space-between',  
                          alignItems:'flex-end',
                          gap:'10px',
                          
                          }}> 
  
              <div style={{ padding:'20px',}}>
                  <div style={{display:'flex', flexDirection:'row',alignItems:'center', gap:'20px' }}>
                      <img src={cal} style={{height:'38px', width:'38px'}}></img>
                      <div> Month Change</div>
                  </div>
                      <div style={{height:'10px'}}></div>
                  <div style={{ fontSize:'13px', fontWeight:'bold', color:'#1A77BA'}}>+123.5 USD (57%)</div>
                      <div style={{height:'10px'}}></div>
                  <div style={{ fontSize:'13px'}}>0.01 BTC (-18.6%)</div>
              </div>
  
              <div style={{padding:'20px'}} >
                  <img src={month} style={{height:'40px', width:'40px'}}></img>
              </div>
          </div>
  
              <div style={{height:'8px'}}></div>
  
              <div style={{width:'100%', 
                          height:'112px',
                          background:'white',
                          display:'flex', 
                          flexDirection:'row',
                          justifyContent:'space-between', 
                          alignItems:'flex-end',
                          gap:'10px',
                          }}> 
  
              <div style={{ padding:'20px',}}>
                  <div style={{display:'flex', flexDirection:'row',alignItems:'center', gap:'20px' }}>
                      <img src={updown} style={{height:'38px', width:'38px'}}></img>
                      <div> Today Change</div>
                  </div>
                      <div style={{height:'10px'}}></div>
                  <div style={{ fontSize:'13px', fontWeight:'bold', color:'red'}}>+123.5 USD (57%)</div>
                      <div style={{height:'10px'}}></div>
                  <div style={{ fontSize:'13px'}}>0.01 BTC (-18.6%)</div>
              </div>
  
              <div style={{padding:'20px'}} >
                  <img src={change} style={{height:'40px', width:'40px'}}></img>
              </div>
          </div>
       </div>
      
          
      </div>
  
          <div style={{height:'10px'}}></div>
  
      <FlatList list={data}  renderItem={listItems}></FlatList>  
        
  
      <div style={{height:'20px'}}></div>
      </div>
      </div>
   
    );
  }
  
  export default Binance_Futures;