import { useState } from "react";
import "./Accordian.css"
const Accordian = ({data}) => {
    
    console.log(data)
    const [show,setShow] = useState(null)
    const toggle = (id) =>{
        setShow(show === id ? null : id)
    }
  return (
   <div className="accorian-container">
  {  data &&
    data.map(({id,title,info})=>{return <div className="Accordian" >
    <div className="title" onClick={()=>toggle(id)}>
      <h3>{title}</h3>
      {show ? "-" : "+"}
    </div>
    {show === id ? <p className="info">{info}</p> : ""}
  </div>})
   }
   </div>
  );
};

export default Accordian;
