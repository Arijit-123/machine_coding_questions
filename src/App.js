
import React,{useState,useEffect} from 'react';
import './App.css';
import Photogallery from './Component/Photogallery';
import Todolist from './Component/Todolist';
import Pagination from './Component/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stopwatch from './Component/Stopwatch';

function App() {
const [inone,setInone]=useState(0);
const [intwo,setIntwo]=useState(0);
const [inthree,setInthree]=useState(0);
const [infour,setInfour]=useState(0);
 
let val=0;
function conso(){
  console.log('the promise is completed');
}


setTimeout(() => {
 conso();   
}, 1000);


function inputval(e){

  
console.log('inone',inone)
console.log('inonelen',)
if(e.target.value.length <= 4){
  setInone(e.target.value);
 
}
else {
 
   val=((e.target.value % 10)*10)+val;
  setIntwo(val);
}
}

  return (
    <>
    {/* <div className='card__element'>
    <div>
  <label>Card</label>
</div>
<div>
  <input type='number' value={inone} onChange={(e)=>inputval(e)}></input>
  </div>
  <div>
  <input type='number' value={intwo} onChange={(e)=>inputval(e)}></input>
  </div>
  <div>
  <input type='number' value={inthree} onChange={(e)=>inputval(e)}></input>
  </div>
  <div>
  <input type='number' value={infour} onChange={(e)=>inputval(e)}></input>
  </div>
</div> */}
{/* <Photogallery/> */}
{/* <Todolist/> */}
{/* <Pagination/> */}
<Stopwatch/>
    </>
  )
}

export default App;
