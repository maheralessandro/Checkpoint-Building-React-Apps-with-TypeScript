import React, { useState } from 'react'; 


interface MyProps {
    name : string
}

const Greeting = ({ name }:MyProps) => { 
    const [value , setValue] = useState("");

    const handelChange = (e:any)=>{
       setValue(e.target.value)
    }
return <div>
    <p>Hello, {name}!</p>
    <select onChange={handelChange}>
        <option value="Tunis">Tunis</option>
        <option value = "Rome">Rome</option>
        <option value = "Pari">Pari</option>
    </select>
    </div>;
 };
 
 
 
 export default Greeting;
