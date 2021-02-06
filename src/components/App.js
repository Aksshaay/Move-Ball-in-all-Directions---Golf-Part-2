import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App = ()=> {
    const [renderBall,setRenderBall]=useState(false);
    const [posi,setPosi]=useState(0);
    const [ballPosition,setBallPosition]=useState({left:0,top:0})
    const buttonClickHandler = () =>{
             setRenderBall(true);
   }
   useEffect(()=>{
     document.addEventListener("keydown",(event)=>{
         switch(event.keyCode){
             case 39:
                 setPosi({
                     left:ballPosition.left + 5,
                     top:ballPosition.top,
                 });
             case 38:
                 setPosi({
                     left:ballPosition.left,
                     top:ballPosition.top-5,
                 });
                 break;
             case 37:
                    setPosi({
                        left:ballPosition.left-5,
                        top:ballPosition.top
                    });
                    break;
             case 40:
                 setPosi({
                     left:ballPosition.left,
                     top:ballPosition.top+5,
                 });
                 break;
            default:
                setPosi({
                    left:ballPosition.left,
                    top:ballPosition.top;
                });
                break;           


         }
     })
},[])
    const renderBallOrButton = () => {
		if (this.state.renderBall) {
		    return <div className="ball" style={{
                left:ballPosition.left + "px",
                top:ballPosition.top +"px",
            }}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    

   
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    
}


export default App;
