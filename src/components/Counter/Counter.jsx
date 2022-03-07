import { useState } from "react";
import "./Countercss/Countercss.css"
export function Counter(props){
    const[counter,setCounter]=useState(0)

    const adding1=(value)=>{
        setCounter(counter+value)
    }
const removing1=(value)=>{
    setCounter(counter+value)
}

// const[counter,setCounter]=useState(0)

const adding2=(value)=>{
    setCounter(counter+value)
}
const removing2=(value)=>{
setCounter(counter+value)
}

// console.log("hello world")

// return 
 return <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={()=>{adding1(1)}}>
         Add Book:{counter}
    </button>
    <button className="remBook" onClick={()=>{removing1(-1)}}>
         Remove Book:{counter}
       {/* totalBooks:{counter} */}
    </button>
    <span className="totalBooks"> Books:{counter}</span>
    <br></br>
    <span>Pen:</span>
    <button className="addPen" onClick={()=>{adding2(1)}}>
       Add Pen:{counter}
    </button>
    <button className="remPen" onClick={()=>{removing2(-1)}}>
       {/* totalPens:{counter} */}
       Remove Pen :{counter}
    </button>
    <span className="totalPen">Pens:{counter}</span>
    <br></br>
    <span>Notebook:</span>
    <button className="addNotebook" onClick={()=>{adding1(1)}}>
       Add Notebok: {counter}
    </button>
    <button className="remNotebook" onClick={()=>{removing1(-1)}}>
        Remove Notebook;{counter}
       
    </button>
    <span className="totalNotebook">Notebook:{counter}</span>
    <br></br>
    <span>InkPen:</span>
    <button className="addInkPen" onClick={()=>{adding2(1)}}>
       Add InkPen:
    </button>
    
    <button className="remInkPen" onClick={()=>{removing2(-1)}}>
        Remove InkPens:{counter}
      
       
    </button>
    <span className="totalInkPen">InkPen:{counter}</span>
</div>
// return
}