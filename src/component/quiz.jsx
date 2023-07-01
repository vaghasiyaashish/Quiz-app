import React, { useState } from "react";
import {QuizData} from "../Data/index";
import { Results } from "./quizapp";

export function Quiz(){
      const [current,setCurrent] = useState(0);
      const [result,setResult] = useState(0);
      const [click,setClick] =useState(0);
      const [showresult,setShowresult]=useState(false);


    function changQuesion(){
      update();
        if (current<QuizData.length-1) {
            setCurrent(current+1)   
            setClick(0)         
        }else{
               setShowresult(true); 
        }  
    }
    function update(){
      if (click===QuizData[current].answer) {
        setResult(result+1)
      }
    }
    function reset(){
      setShowresult(false);
      setClick(0);
      setCurrent(0);
      setResult(0);
    }
    return(
     
     <>
        <h1 className="text-center">Quiz APP</h1>
        <div className="heading">
          {showresult ? (
            < Results result = {result} totalresult={QuizData.length} tryAgain={reset}/>
          ):( <>
            <div className="Quiestions">
                   <span>{current+1}. </span> 
                   <span className="Quiestion">{QuizData[current].question}</span>
            </div>
            <div className="countener">
                 {QuizData[current].options.map((options,i)=>{
                   return(
                    <button className={`option-btn ${click == i+1?"cheked":null}`} key={i} onClick={()=>setClick(i+1)} >{options}</button>
                   )
                 })}
            </div>
            <input className="button" type="button" value={"Next"} onClick={changQuesion} />
            </>)}
        </div>

        </>
    )
}