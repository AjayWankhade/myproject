
import error from '../../src/images/error.png'

const TestModel=()=>{
    return(
         <div style={{marginTop:'150px',height:'320px',background: 'white',borderRadius: '10px',outline: 'none'}}>
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={error} style={{paddingTop:'20px',height:'100px'}}></img>
            </div>
        </div>
    
    <div alt='successful' style={{padding:'20px'}}>
    
    <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center', gap:'20px'}}>
    
                <div style={{fontSize:'18px', fontWeight:'bold'}}>Something went Wrong</div>
    
                <div style={{fontSize:'18px',color:'#6B7998',textAlign:'center'}}>
                Ops! looks like you have fill some worng information, Try again.
                </div>
        </div>
                <div style={{height:'30px'}}></div>
    
        <div style={{textAlign:'center'}}>
            <button style={{ height:'50px',width:'70%',fontSize:'14px',color:'white',borderRadius:'10px',background:'blue'}} 
>
Try Again
            </button>
        </div>        
    
    </div>
    </div>
                   
   
         
         
         
         
         
         
         
         </div>


    )
}
export default TestModel;