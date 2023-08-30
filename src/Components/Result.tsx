import { MouseEventHandler } from "react"

type Resulttype ={
    Score:number,
    TotalScore:number,
    tryagain:MouseEventHandler
}

function Result(props:Resulttype) {
  return (
    <>
    <div>
      Your Score: {props.Score}
      Total Score: {props.TotalScore}
    </div>
    <button id="next-button" onClick={props.tryagain}>Try Again</button>
    </>
  )
}

export default Result
