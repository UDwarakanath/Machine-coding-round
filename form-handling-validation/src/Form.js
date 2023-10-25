import { useState } from "react"
import FormSignUp from "./FormSignUp"
import FormSuccess from "./FormSuccess"

const Form = () => {
  const [isSubmitted,setIsSubmitted] = useState(false)

  const formSubmit = () => setIsSubmitted(true)
  return (
    <div>
      {
        isSubmitted ? <FormSuccess/> :
        <FormSignUp setIsSubmitted={formSubmit}/>
      }
    </div>
  )
}

export default Form
