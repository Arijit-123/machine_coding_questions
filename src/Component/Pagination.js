import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
function Pagination() {
    useEffect(()=>{
      fetchdata()
    },[])
const [info,setInfo]=useState([]);
const [dataone,setDataone]=useState([]);
const [currentpage,setCurrentpage]=useState(2);
const[postperpage,setpostperpage]=useState(8);
   async function fetchdata(){
        const data= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data_json= await data.json();
        setInfo(data_json);
    }
    console.log('info',info);
    const lastpostindex= currentpage * postperpage;
    const FirstpostIndex=lastpostindex - postperpage;
    const currentpost=info.slice(FirstpostIndex,lastpostindex);
    const namearr=[];
    const imgarr=[];
    
 

 
  return (
    <div>
      
      <Paginationsub name={currentpost} />
      <Paginatnumber  totallength={info.length} postperpage={postperpage} setCurrentpage={setCurrentpage} currentpage={currentpage}/>
    </div>
  )
}

const Paginationsub=({name})=>{

    console.log('name',name);
  
    return (
      <>
   
      <div style={{display:'flex'}}>
      {
  name.map((item)=>
  <>
  <Card style={{ width: '18rem' }}>
    <div >
<p>
      {item.title}
      </p>
      <p>
{item.userId}
</p>
    </div>
    </Card>
  </>
  
  )
      }
  
</div>

      </>
    )
  
  
}

const Paginatnumber=({totallength, postperpage, currentpage,setCurrentpage})=>{
  let pages=[];
for(let i=1;i<=Math.ceil(totallength/postperpage);i++){
pages.push(i);
}
return(
  <>
  <div>
    {
      pages.map((page, index)=>{
        return  <button key={index} className={page==currentpage?'active':''} onClick={()=>setCurrentpage(page)} >{page}</button>
       
      })
    }
    </div>
  </>
)
}
export default Pagination
