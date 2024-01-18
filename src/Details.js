import React,{useEffect,useState} from 'react'

function Details() {
    const [data,setData]=useState(null);
    // useEffect(()=>{fetchdetails()},[]);
  
    
  async  function fetchdetails(){
   const data=await fetch("https://jsonplaceholder.typicode.com/users");
   const data_json=await data.json();
   setData(data_json);
    }
    console.log("data",data);
   
 function arrangeascend(){
    const arr=[];
   var  max=0;
    data.map((item)=>{
        if(max<item.name.length)
        {
            max=item.name.length;
            
        }
    
    })
    
 }

  return (
    <div>

    {
        data?.map((item)=>(
            <>
                <p>{item?.name}</p>
            </>
        ))
    }
      <button onClick={()=>fetchdetails()} >Get Users</button>
      <button onClick={()=>arrangeascend()}>Sort List</button>
    </div>
  )
}

export default Details
