import {useState,useEffect} from 'react'

const useForm = (validateInfo) => {
  const [values,setValues] = useState({
    "username" : "",
    "email" : "",
    "password" : "",
    "password2":""
  })
  const [errors,setErrors] = useState({})

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
  }
  return {handleChanges,values,handleSubmit,errors}
}

export default useForm