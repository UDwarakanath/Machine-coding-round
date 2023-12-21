import { useState } from "react";
import "./Accordian.css"
const Accordian = ({data}) => {
    
    // console.log(data)
    const [show,setShow] = useState(null)
    const [multipleItems,setMultipleItems] =useState([]) 
    const [enableMultipleSelection,setEnableMultipleSelection] =useState(false)

    const handleEnable = ()=>{
      if(show !== null) setShow(null) 
      setEnableMultipleSelection(!enableMultipleSelection)
    }


    console.log(multipleItems)
    const handleMultipleSelection = (id)=>{
      show !== null && setShow(null) 
      const item = multipleItems.indexOf(id)

      const totalItems = [...multipleItems]

      console.log(totalItems)

      if(item === -1) {
        totalItems.push(id) }else{ totalItems.splice(item,1)}
     

      setMultipleItems(totalItems)
  
    }

    const toggle = (id) =>{
        setShow(show === id ? null : id)
    }
  return (
   <div className="accorian-container">
    <button onClick={handleEnable}>Enable Multiple Selection</button>
  {  data &&
    data.map(({id,title,info})=>{return <div className="Accordian" >
    <div className="title" onClick={enableMultipleSelection ?  ()=>handleMultipleSelection(id): ()=>toggle(id)}>
      <h3>{title}</h3>
      {show ? "-" : "+"}
    </div>
    {show === id || multipleItems.includes(id)? <p className="info">{info}</p> : ""}
  </div>})
   }
   </div>
  );
};

export default Accordian;
