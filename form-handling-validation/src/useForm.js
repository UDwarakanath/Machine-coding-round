import {useState,useEffect} from 'react'

const useForm = (validateInfo,setIsSubmitted) => {
  const [values,setValues] = useState({
    "username" : "",
    "email" : "",
    "password" : "",
    "password2":""
  })
  const [errors,setErrors] = useState({ "username" : "",
  "email" : "",
  "password" : "",
  "password2":""})

  const handleChanges = e =>{
    const {name,value} = e.target
    setValues({
      ...values,
      [name] : value
    })
  }




  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validateInfo(values))
   
    
    if(Object.keys(errors).length === 0 ){
      setIsSubmitted()
    }
    
  }
  return {handleChanges,values,handleSubmit,errors}
}

export default useForm