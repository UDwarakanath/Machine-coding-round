import useForm from "./useForm"
import validateInfo from "./validateInfo"
import "./Form.css"
const FormSignUp = ({setIsSubmitted}) => {
  const {handleChanges,values,handleSubmit,errors} = useForm(validateInfo,setIsSubmitted)
  return (
    <div className="form_input">
      <form  className="form" onSubmit={handleSubmit}>
        <h1>
          Get Started with us today ! Create your account by filling out information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="username-label">User Name</label>
          <input type="text" name="username"value={values.username} className="form-input" onChange={handleChanges}/>
          {errors.username ? <p>{errors.username}</p> : null}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="email-label">Email</label>
          <input type="email" name="email" value={values.email}className="form-label"  onChange={handleChanges}/>
          {errors.email ?  <p>{errors.email}</p> : null}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="password-label">Password</label>
          <input type="password" name="password" value={values.password} onChange={handleChanges} className="form-input" />
          {errors.password? <p>{errors.password}</p> : null}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="password2-label">Confirm Password</label>
          <input type="password" name="password2" value={values.password2} onChange={handleChanges} className="form-input" />
          {errors.password2 ? <p>{errors.password2}</p> : null}
        </div>

        <button className="form-input-button" type="submit">
          sign up
        </button>
        <span className="form-input-login">
          Already have an account?  <a href="#">Login</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignUp