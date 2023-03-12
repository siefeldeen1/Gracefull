import React, { useEffect } from 'react'

function inputs() {

const post = ()=>{
    fetch('http://localhost:8082/',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            product:document.getElementById('product').value,
            mini_title:document.getElementById('mini_title').value,
            description: document.getElementById('description').value,
            skin_Type: document.getElementById('skin_Type').value,
            size: document.getElementById('size').value,
            scent: document.getElementById('scent').value,
            price: document.getElementById('price').value,
            img: document.getElementById('img').value
            }) 
        }).then((res)=> res.json())
    .then((data)=>{
        if(data){
            console.log(data);
            alert("saved")
        }
     })
}


  return (
    <div>
            <div>
                <label htmlFor="">product</label>
                <input id='product' type="text" />
            </div>
            
            <div>
                <label htmlFor="">mini_title</label>
                <input id='mini_title' type="text" />
            </div>
            <div>
                <label htmlFor="">description</label>
                <input id='description' type="text" />
            </div>
            <div>
                <label htmlFor="">skin_Type</label>
                <input id='skin_Type' type="text" />
            </div>
            <div>
                <label htmlFor="">size</label>
                <input id='size' type="text" />
            </div>
            <div>
                <label htmlFor="">scent</label>
                <input id='scent' type="text" />
            </div>
            <div>
                <label htmlFor="">price</label>
                <input id='price' type="text" />
            </div>
            <div>
                <label htmlFor="">img</label>
                <input id='img' type="text" />
            </div>
<button onClick={()=>{post()}}>submit</button>
    </div>
  )
}

export default inputs