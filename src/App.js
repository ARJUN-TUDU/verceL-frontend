import logo from './logo.svg';
import './App.css';
import axios from 'axios' 
import {useState,useEffect} from 'react'

function App() {

  const [data,setData] = useState([]);

  



  useEffect(()=>{
       
    const getData = async() => {
       
      try {
          const response = await axios.get("https://vercel.com/arjun-tudu/vercel-deploy-3");
          console.log(response)
          setData(response.data);
      }catch(err){
        if(err){
          console.log("data getting error");
        }
      }

    }


    getData();
     

  },[])
  

  return (
    <div className="App">
       <h1>dw</h1>
       {
        data.map((x)=>{
          return <h1 key = {x.age}>{x.name}</h1>
        })
       }
       <hr/>
       




        
     
    </div>
  );
}

export default App;
