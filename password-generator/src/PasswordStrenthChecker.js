import React from 'react'

const PasswordStrenthChecker = ({charLength,checkBoxesData}) => {
  const selectedOption = checkBoxesData.filter((checkbox) => checkbox.state);
  const checkStrength = () => {
    let strength = ""
    if(selectedOption.length <= 1 && charLength <= 4){
      strength += "Weak"
    }else if(selectedOption.length <= 2 && charLength <= 8){
      strength += "Medium"
    }else if(selectedOption.length <=3 && charLength <= 12){
      strength += "Strong"
    }else{
      strength += "Very Strong"
    }
    return strength
  }
  return( 
    selectedOption.length > 0 && <div className='check_strength'>
      <p>strength</p>
      <p>{checkStrength()}</p>
    </div>)
  
}


export default PasswordStrenthChecker