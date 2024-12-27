import {useEffect, useState} from "react"
import './App.css';

function App() {

  const [datas,setData]=useState([]);

  const getData=()=>{
    fetch("/api/data").then(res=>res.json()).then(json=>setData(json))
  }

  useEffect(()=>{
     getData()
  },[])

  return (
    <div className="App">

      {datas.map((data)=>
      {
        return(
          <div className="kavin" style={{
          fontFamily:"sans-serif",fontSize:"20px",color:"black"}}>
            
          <div className="1" style={{alignItems:"center",justifyContent:"center",lineHeight:"50px",
             display:"inline-block",height:"150px",width:"400px",border:"1px solid gray",backgroundColor:"rgb(194, 232, 238)	"}}>
          <div><label style={{color:"rgb(255, 42, 0)"}}>NAME:</label>{data.name}</div>
          <div><label style={{color:"rgb(255, 42, 0)"}}>USER-NAME:</label>{data.username}</div>
          <div><label style={{color:"rgb(255, 42, 0)"}}>EMAIL:</label>{data.email}</div>
          </div>
          </div>
        )
       
        

      })}
      
    </div>
  );
}

export default App;
