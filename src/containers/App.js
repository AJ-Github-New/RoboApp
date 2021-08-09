import React,{useState} from "react";
import { useEffect } from "react";
//import {robots} from "./robots.js";
import Scroll from "../components/Scroll.js";
import CardList from "../components/CardList.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchBox from "../components/SearchBox.js";
import ErrorBoundary from "../ErrorBoundary.js";
function App() {
  const [search,setSearch]=useState('');
  const [robots,setRobots]=useState([]);
   
  useEffect(()=> //works like componentDidMount and componentDidUpdate here it is for Didmount as we are not setting dependencies for checking updates
  {
    console.log("useEffect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{setRobots(users)});
  },[])

  return (
    <div className="App">
     
                <div className="container"> 
                <h1 className="row">RoBo Friends</h1>
                <br></br>
                <input classsName="row sticky-sm-top" style={{width:"30%"}} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search RoBo"/>
                </div>
                <br></br>
              <div className="row robo"></div> 
              { robots.length>0 ?
              <>
              <Scroll>
                <ErrorBoundary>
              <SearchBox robots={robots} search={search}/>
              <CardList robots={robots} search={search}/>
              </ErrorBoundary>
              </Scroll>
              </> :
              <h1>Loading...</h1>
              }
              {console.log("render")}
     
      
    </div>
  );
}

export default App;
