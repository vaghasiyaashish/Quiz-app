import React from "react";

export function Results (props){
    return(
        <>
        <div className="score">
               your score:- {props.result} <br />
               Total score:- {props.totalresult} <br />
                  <button className="button" onClick={()=>props.tryAgain()}>Try again</button>
        </div>
        </>
    )
}