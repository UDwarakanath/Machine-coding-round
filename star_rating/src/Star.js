const Star = ({filled}) =>{
  return <span className={`star-rating ${filled && "filled"}`}>*</span>
}

export default Star