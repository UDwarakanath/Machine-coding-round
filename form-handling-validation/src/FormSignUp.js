import useForm from "./useForm"

const FormSignUp = () => {
  const {handleChanges,values,handleSubmit} = useForm()
  return (
    <div className="form_input">
      <form  className="form" onSubmit={handleSubmit}>
        <h1>
          Get Started with us today ! Create your account by filling out information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="username-label">User Name</label>
          <input type="text" name="username"value={values.username} className="form-input" onChange={handleChanges}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="email-label">Email</label>
          <input type="email" name="email" value={values.email}className="form-label"  onChange={handleChanges}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="password-label">Password</label>
          <input type="password" name="password" value={values.password} onChange={handleChanges} className="form-input" />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="password2-label">Confirm Password</label>
          <input type="password" name="password2" value={values.password2} onChange={handleChanges} className="form-input" />
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