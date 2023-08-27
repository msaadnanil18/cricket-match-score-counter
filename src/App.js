import React from "react";
import {Button} from "antd";
import "./App.css"
import { useState } from "react";



const App =  () => {
  const[teamA, setTeamA] = useState(0)
  const[teamB, setTeamB] = useState(0)
  

   return(
   <>
   <nav className=" bg-indigo-500 w-full h-14 flex justify-center " >
    <div>
      <h1 className=" font-bold text-3xl my-3" >Match score counter</h1>
    </div>
    </nav>

    <header className="flex justify-between" >
      <div className="text-2xl font-bold my-10 mx-[75px]">TEAM A
      <h1 className=" text-4xl m-5 " >{teamA}</h1>
      <ul className="my-20" >
        <li> <button onClick={()=>setTeamA(teamA+1)} className=" p-2  bg-slate-800 my-3 rounded-lg text-slate-200" >+1 POINT</button></li>
        <li> <button onClick={()=>setTeamA(teamA+2)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+2 POINT</button></li>
        <li> <button onClick={()=>setTeamA(teamA+4)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+4 POINT</button></li>
        <li> <button onClick={()=>setTeamA(teamA+6)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+6 POINT</button></li>
        <li> <Button onClick={()=>setTeamA(0)} className="  bg-green-600" type="primary">RESET</Button></li>
      </ul>
      </div>
      <div className="text-2xl font-bold my-10 mx-[75px]" >TEAM B
      <h1 className=" text-4xl m-5 " >{teamB}</h1>
      <ul className="my-20" >
        <li> <button onClick={()=>setTeamB(teamB+1)} className=" p-2  bg-slate-800 my-3 rounded-lg text-slate-200" >+1 POINT</button></li>
        <li> <button onClick={()=>setTeamB(teamB+2)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+2 POINT</button></li>
        <li> <button onClick={()=>setTeamB(teamB+4)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+4 POINT</button></li>
        <li> <button onClick={()=>setTeamB(teamB+6)} className=" p-2 bg-slate-800 my-3 rounded-lg text-slate-200">+6 POINT</button></li>
        <li> <Button onClick={()=>setTeamB(0)} className="  bg-green-600" type="primary">RESET</Button></li>
      </ul>
      </div>
    
     </header>

    
   </>
   )
}

 export default App; 