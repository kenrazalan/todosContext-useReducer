import React,{useState,useEffect} from 'react';
import axios from 'axios';


function SwMovie(){
    const [number,setNumber] = useState(1);
    const [movie,setMovie] = useState("");

    useEffect(() => {
        async function getData(){
              const res = await axios.get(`https://swapi.dev/api/films/${number}/`);
              console.log(res)
              setMovie(res.data)
        }
        getData();
    },[number])
  
    
return(<div>
    <h1>Pick A Movie</h1>
    <h2>You Pick {number} </h2>
<h3>{movie.title}</h3>
<p>{movie.opening_crawl}</p>
    <select value={number} onChange={(e)=>{ setNumber(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
</div>)

}

export default SwMovie;