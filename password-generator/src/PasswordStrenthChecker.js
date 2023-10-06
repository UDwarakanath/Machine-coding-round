import React from 'react'

const PasswordStrenthChecker = ({charLength,checkBoxesData}) => {
  const checkStrength = () => {
    let strength = ""
    const selectedOption = checkBoxesData.filter((checkbox) => checkbox.state);
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
  return (
    <div className='check_strength'>{checkStrength()}</div>
  )
}


export default PasswordStrenthChecker