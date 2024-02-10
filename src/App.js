import React,{useState, useEffect} from "react";

export default function App() {

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [count, setCount] = useState(0);
  const [isStart,setIsStart] = useState(false)

  useEffect(()=>{
  if(isStart){
    setCount(count+1)
    startWatch()
  }
  },[sec, isStart]);

  const startWatch = () =>{
    setTimeout(()=>{
      setSec(sec + 1);

      if(sec == 60) { 
        setMin(min+1)
        setSec(0)
      };

      if(min == 60) {
        setMin(0)
        setHr(hr+1)       
      };

      if(hr == 24) setHr(0);

    },1000)
  };

     
  const resetWatch =()=>{
    setSec(0);
    setMin(0);
    setHr(0);
    setCount(0);
  }
  
  return (
    <div>
       <div style={{position:"absolute", top:"10px", left:"50px" }}>-: Time :- </div>
       <div style={{position:"absolute", top:"40px", left:"45px"}}> {`( ${sec} : ${min} : ${hr})`} </div>
       <div style={{position:"absolute", top:"70px", left:"40px" ,display:"flex", gap:"10px",with:"100%", }}>
<div onClick={()=>{setIsStart(!isStart)}}
style={{border:"1px solid black", padding:"5px",cursor:"pointer" }}
>{isStart? 'Stop' : "Start"}</div>
<div
style={{border:"1px solid black", padding:"5px", cursor:"pointer"}}
onClick={()=>{resetWatch()}} >Reset</div>
       </div>

    </div>
  );
}