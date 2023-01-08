
import React from 'react';
import first from   '../first.png';
import second from   '../second.png';
import third from   '../third.png';



function Array() {
    const data = [
        {
            Img: first,
            Change_percent: "+0.53%",
            Change_doller: "+0.06$",
            Name:"Sabdesh USDT-M Short Bot",
            LP:"12096",
            QTY:"85890",
            SO:"1/26"
        },
        {
            Img: second,
            Change_percent: "+0.53%",
            Change_doller: "+0.06$",
            Name:"Sabdesh USDT-M Short Bot",
            LP:"24596",
            QTY:"5610",
            SO:"1/2"
        },
        {
            Img: third,
            Change_percent: "+0.53%",
            Change_doller: "+0.06$",
            Name:"Sabdesh USDT-M Short Bot",
            LP:"78096",
            QTY:"7520",
            SO:"1/6"
        },
       
    ]

    const listItems = data.map(
        (element) => {
            return (
            <ul >
            <div className="array" style={{ display: 'flex',flexDirection:'row', alignItems: 'center',justifyContent:'flex-start', gap: '10px', margin: '10px',padding: '10px', height: '80px',background: '#FFFFFF',borderRadius: '10px'}}>
            <div className='left' > 
                <img src={element.Img} style={{height:'50px', width:'50px'}}>
                    
                </img>
              
            </div>

            <div className='right' >
                    <div className='first' style={{ display: 'flex',flexDirection: 'row',gap: '20px',alignItems: 'center',height: '20px'}}>
                        <p>DOTUSDT</p>
                        <p style={{color:'green',fontWeight:'bold'}}>{element.Change_percent}</p>
                        <p>
                        <span style={{color:'green',fontWeight:'bold'}}>{element.Change_doller}</span>
                        </p>
                    </div>

                    <div className='second' style={{display: 'flex',flexDirection:'row',alignItems: 'center',height: '20px'}}>
                        <p>{element.Name}</p>
                    </div>

                    <div className='third' style={{  display: 'flex', flexDirection: 'row',alignItems: 'center',gap:'20px',height: '20px'}}>
                        <p >LP 
                            <span style={{color:'blue' ,fontWeight:'bold'}}>{element.LP}</span>
                         </p>

                        <p >QTY 
                        <span style={{color:'blue' ,fontWeight:'bold'}}>{element.LP}</span>
                        </p>

                        <p >SO 
                        <span style={{color:'blue' ,fontWeight:'bold'}}>{element.LP}</span>
                        </p>
                    </div>
            </div>
        </div>
        </ul>
            )
        }
    )

  return (
    <div>
        {listItems}
    </div>
  );
}

export default Array;
