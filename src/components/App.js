import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

function App(){
    
    const [renderBall, setRenderBall] = useState(false);
    // const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: 0,top:0 });

    const buttonClickHandler=()=> {
        setRenderBall(true);
      }

    const updateXY = (x , y)=>{
        setBallPosition({
            left :x,
            top:y,
         });
    };
    const handleClick =()=>{ switch(event.keyCode){
        case 39:
            updateXY(ballPosition.left + 5, ballPosition.top);
            break;
            case 40:
            updateXY(ballPosition.left,ballPosition.top + 5);
            break;
            case 37:
            updateXY(ballPosition.left - 5,ballPosition.top);
            break;
            case 38:
            updateXY(ballPosition.left,ballPosition.top - 5);
            break;
            default:
               break;
          
     } 
    }

     useEffect(()=>{
            document.addEventListener("keydown",handleClick);
            return ()=> document.removeEventListener("keydown",handleClick);
         
     });

    
    
    const renderBallOrButton=()=> {
		if (renderBall) {
		    return <div className="ball" 
            style={{
                left: ballPosition.left+"px",
                top:ballPosition.top+"px",
                position:"absolute",
            }}
            ></div>
           
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    
   
        return (
            <div className="playground">
                {renderBallOrButton()}
            </div>
        )
    
}


export default App;
