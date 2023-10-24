
const validateInfo = (values) => {
  
  const errors = {}

  if(!values.username.trim()){
    errors.username = "username is required"
  }
  if(!values.email){
    errors.email = "Email Adress is required"
  }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
    errors.email = "enter a valid email"
  }

  if(!values.password){
    errors.password="password is required"
  }else if(values.password.length < 6){
    errors.password = "password should have minimum of 6 charecters"
  }

  if(!values.password2){
    errors.password2 = "password confirmation is required"
  }else if(values.password !== values.password2){
    errors.password2 = "confirmation password doesn't match"
  }
  
  return errors
}

export default validateInfo;