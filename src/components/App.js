import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    top: 0,
  });

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        ></div>
      );
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  };

  function handleKeyDown(event){
    console.log(event.keyCode,renderBall,ballPosition);
    // console.log("i")
     switch (event.keyCode) {
       case 39:
         setBallPosition({
           left: ballPosition.left + 5,
           top: ballPosition.top,
         });
         break;
       case 40:
         setBallPosition({
           left: ballPosition.left,
           top: ballPosition.top + 5,
         });
         break;
       case 37:
         setBallPosition({
           left: ballPosition.left - 5,
           top: ballPosition.top,
         });
         break;
       case 38:
         setBallPosition({
           left: ballPosition.left,
           top: ballPosition.top - 5,
         });
         break;
       default:
         break;
     }
     
   }
  

  // bind ArrowRight keydown event
  useEffect(() => {
    console.log("hi")
     document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown",handleKeyDown);
  });
 

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;