import left from '../images/left.png'
import img1 from '../images/img1.png'


const Bot_Deals=() =>{

   
    return (
    <div style={{ background:'#D5DBF1',width:'100%', heigth:'1000px',}}>  

        <div style={{ padding:'20px',display:'flex',flexDirection:'row',height:"128px",alignItems:'center',gap:'30px',background:"#051450", borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"}}>
            <img src={left} style={{width:'50px', height:'50px'}}></img>
            <text style={{fontSize:"24px",fontWeight:'bold', color:"white"}}>Bot deal</text>
        </div>

        <div style={{height:'60px', background:'white', display:'flex',margin:'20px',flexDirection:'row',alignItems:'center',gap:'6px'}}>

                <div> 
                    <img src={img1}  style={{height:'40px', width:'40px', marginLeft:'10PX'}}></img>
                 </div>

                <div alt='right' style={{margin:'10px', width:'85vw'}}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',
                        }}>
                        <div style={{fontSize:'14px', fontWeight:'bold'}}>DOTUSDT</div>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <text style={{fontSize:'14px', color:'green',fontWeight:400}}>+0.53%</text>
                             <div style={{width:'50px'}}></div>
                            <text style={{fontSize:'14px', color:'green',fontWeight:400}}>+0.06$</text>
                        </div>
                        
                    </div>
                        <div style={{height:'8px'}}></div>
                    <div style={{fontSize:'14px', fontWeight:'bold', color: '#6B7998',fontFamily:'Gotham'}}>
                        <text>Sabdesh USDT-M Short Bot</text>
                    </div>
                </div>

        </div>


        <div alt='mid' style={{margin:'20px',fontSize:'24px', fontWeight:'bold'}}>
            Bought
        </div>
    
        <div style={{height:'500px',margin:'20px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'flex-start',  background:'white'}}>

                <div alt='first' style={{height:'150PX',display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                        <div style={{fontSize:'14px', color:'#6B7998'}}>Base Order Size</div>
                        <div style={{marginTop:'5px',frontSize:'16px', fontWeight:'bold'}}>10 USDT</div>
                            <div style={{height:'10px'}}></div>
                        <div style={{fontSize:'14px', color:'#6B7998'}}>Safety Order</div>
                        <div style={{marginTop:'5px',frontSize:'16px', fontWeight:'bold'}}>0/6</div>
                            <div style={{height:'10px'}}></div>
                        <div style={{fontSize:'14px', color:'#6B7998'}}>Creation Date</div>
                        <div style={{height:'5px'}}></div>
                        <div style={{marginTop:'5px',frontSize:'16px', fontWeight:'bold'}}>17 May 2022</div>
                    </div>
                   
                    <div>
                        <div style={{fontSize:'14px', color:'#6B7998'}}>Safety Order Size</div>
                        <div style={{marginTop:'5px',frontSize:'16px', fontWeight:'bold'}}>10 USDT</div>
                            <div style={{height:'10px'}}></div>
                        <div style={{fontSize:'14px', color:'#6B7998'}}>Take Profit</div>
                        <div style={{marginTop:'5px', frontSize:'16px', fontWeight:'bold'}}>0.3%</div>
                            <div style={{height:'10px'}}></div>
                        <div style={{marginTop:'5px', fontSize:'14px', color:'#6B7998'}}>Deal ID</div>
                        <div style={{height:'5px'}}></div>
                        <div style={{frontSize:'16px', fontWeight:'bold'}}>167548</div>
                    </div>
                    
                </div>

                    <div style={{height:'40px'}}></div>

                <div alt='second' style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
                    <button style={{width:'45%',height:'50px', background:'#FFFFFF', borderRadius:'15px'}}>
                        <p style={{fontSize:'14px', fontWeight:'bold'}}>Cancel</p>
                    </button>

                    <button style={{width:'45%',height:'50px', background:'#0535F1', borderRadius:'15px'}}>
                        <p style={{color:'white',fontSize:'14px', fontWeight:'bold'}}>Close By Market</p>
                    </button>
                </div>

                    <div style={{height:'30px'}}></div>

                <div style={{width:'80%',height:'300PX',  display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:'10%'}}>
                            

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                       <div style={{width:'16px', height:'16px', background:'gray', borderRadius:'50%'}}></div>
                       <div style={{width:'6px', height:'55px', background:'lightgray'}}></div>
                       <div style={{width:'16px', height:'16px', background:'gray', borderRadius:'50%'}}></div>
                       <div style={{width:'6px', height:'35px', background:'lightgray'}}></div>
                       <div style={{width:'16px', height:'16px', background:'black', borderRadius:'50%'}}></div>
                       <div style={{width:'6px', height:'50px', background:'lightgray'}}></div>
                       <div style={{width:'16px', height:'16px', background:'blue', borderRadius:'50%'}}></div>
                       <div style={{width:'6px', height:'50px', background:'lightgray'}}></div>
                    </div>
                    
                    <div >
                        <div>
                            <div style={{fontSize:'20', fontWeight:'bold', color:'green'}}>
                                Safety Order
                            </div>
                            <div style={{marginTop:'5px', fontSize:'18', color:'green'}}> 
                                <text>155.0 DOGEUSDT</text>
                            </div>
                            <div style={{marginTop:'5px',fontSize:'16'}}>
                                0.06812000
                            </div>
                        </div>

                        <div>
                            <div style={{marginTop:'5px', fontSize:'20', fontWeight:'bold'}}>
                                Current Price
                            </div>
                            <div style={{marginTop:'5px', fontSize:'16'}}>
                                0.06633000
                            </div>
                        </div>

                        <div>
                            <div style={{marginTop:'5px', fontSize:'20', fontWeight:'bold'}}>
                                Buy Step
                            </div>
                            <div style={{marginTop:'5px', fontSize:'18'}}>
                                Finished
                            </div>
                            <div style={{marginTop:'5px', fontSize:'16'}}>
                                0.0688000
                            </div>
                        </div>

                       
                    </div>

                </div>
        </div>

       <div style={{height:'10px'}}></div>

       
    </div>
   
    );
  }
  
  export default Bot_Deals;