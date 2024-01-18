import React, { useState } from 'react'

function Todolist() {

  const[detail,setDetail]=useState({
    FirstName:"",
    LastName:"",
    Phone:"",
  });
  const[detaillist,setDetaillist]=useState([]);
console.log('newdetail',detail);
console.log('list',detaillist);

function dataarray(){
  if(detail.FirstName.length>0 || detail.LastName.length>0 || detail.Phone.length>0)
  setDetaillist([...detaillist, detail]);
  
  setDetail({
    FirstName:"",
    LastName:"",
    Phone:"",
  });
}

function editfunction(index){
console.log('edit id',index);
let newedititem= detaillist.find((item,ind)=>{
  return index===ind;
});
console.log('value of ',newedititem)
setDetail(newedititem);
}

function delefunction(ind){
  console.log('id',ind)
 const updatevalue= detaillist.filter((item, index)=>{
return ind!==index;
  }
   
  )

  setDetaillist(updatevalue);
}
  return (
    <>
    <div>
      <label>First Name</label>
      <input value={detail.FirstName} onChange={(e)=>setDetail({...detail, FirstName:e.target.value})}></input>
      <label>Last Name</label>
      <input value={detail.LastName} onChange={(e)=>setDetail({...detail, LastName:e.target.value})}></input>
      <label>Phone</label>
      <input value={detail.Phone} onChange={(e)=>setDetail({...detail, Phone:e.target.value})}></input>
      <button  onClick={dataarray}>Submit</button>
    </div>
    <div className='list'>
    {
      detaillist.map((item,index)=>(
        <div key={index}>
          {item.FirstName}
          {item.LastName}
          {item.Phone}
          {index}
         <button onClick={()=>delefunction(index)}>Delete</button>
         <button onClick={()=>editfunction(index)}>Edit</button>
        </div>
      )
      )
    }
    </div>

</>
  )
}

export default Todolist
