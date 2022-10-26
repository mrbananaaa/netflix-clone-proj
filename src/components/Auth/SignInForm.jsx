import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../app/firebaseInit"

const style = {
  container: `bg-black/80 p-14 font-graph select-none`,
  title: `font-semibold text-2xl`,
  inputWrapper: `pt-3 flex flex-col space-y-3 text-dark text-sm`,
  input: `outline-none px-4 py-3 rounded min-w-[60vw] md:min-w-[20vw] selection:bg-red selection:text-white text-slate-700 focus:text-dark bg-slate-200 focus:bg-slate-100`,
  btn: `mt-8 w-full mx-auto rounded py-3 font-semibold bg-red outline-none active:bg-opacity-90`,
  signUpText: `text-gray-300 text-xs md:text-sm text-center pt-4`,
  signUpLink: `font-semibold text-white active:bg-red`,
}

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [
    signInWithEmailAndPassword,
    user,
    // loading,
    // error,
  ] = useSignInWithEmailAndPassword(auth);

  const inputHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    if(formData.email.length === 0 || formData.password.length < 6) return

    await signInWithEmailAndPassword(formData.email, formData.password)
  }

  console.log(user);

  return (
    <>
      <form 
        className={style.container}
        onSubmit={formSubmitHandler}
      >
        <h1 className={style.title}>Sign In</h1>
        <div className={style.inputWrapper}>
          <input
            className={style.input} 
            type="email" 
            name="email"
            onChange={inputHandler}
          />
          <input 
            className={style.input}
            type="password" 
            name="password"
            onChange={inputHandler}
          />
        </div>
        <button
          className={style.btn}
        >
          Sign In
        </button>
        <p className={style.signUpText}>
          New to Netfuck? <a className={style.signUpLink} href="/">Sign up now.</a>
        </p>
      </form>
    </>
  )
}

export default SignInForm