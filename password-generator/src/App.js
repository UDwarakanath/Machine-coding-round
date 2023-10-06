import {useState} from "react"
import usePasswordGenerator from "./hooks/use-password-generator"
import PasswordStrenthChecker from "./PasswordStrenthChecker"
import "./App.css"
function App() {
  const [charLength,setCharLength] = useState(4)
  const [checkBoxesData,setCheckBoxesData] = useState([
    { name: "Include Uppercase Letters", state: false },
    { name: "Include Lowercase Letters", state: false },
    { name: "Include Numbers", state: false },
    { name: "Include Special Characters", state: false }
  ]
)


  const handleCheckboxChange = (i) => {
    const updatedCheckBox = [...checkBoxesData]
    updatedCheckBox[i].state=!updatedCheckBox[i].state
    setCheckBoxesData(updatedCheckBox)
   }

   const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password)
   }

   const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="container">
      {/* // Password Text and copy button */}
  {password && <div className="header">
        <div className="title_password">{password}</div>
        <button className="title_button" onClick={()=>copyToClipboard(password)}>copy</button>
      </div>}
      {/* character length */}
      <div className="charlength">
        <span>
          <label>character length</label>
          <label>{charLength}</label>
        </span>
        <input type="range" min="4" max="20" value={charLength} onChange={(e)=>setCharLength(e.target.value)}/>
      </div>
      {/* checkboxes */}
      <div className="checkboxes">
        {
          checkBoxesData.map((item, index) => (
          <div className="checkbox" key={index}>
            <input type="checkbox" checked={item.state} onChange={() => handleCheckboxChange(index)} />
            <label>{item.name}</label>
            </div>
            ))
        }
      </div>
      {/* strength */}
      <PasswordStrenthChecker charLength={charLength} checkBoxesData={checkBoxesData}/>
      {/* Error Message */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* Generate button */}
      <button className="generateBtn" onClick={()=>generatePassword(checkBoxesData,charLength)}>Generate Password</button>
    </div>
  )
}

export default App