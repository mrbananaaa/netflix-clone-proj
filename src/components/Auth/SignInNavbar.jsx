import React from 'react'
import logo from "../../assets/logo.png"

const style = {
  container: `fixed top-0 w-full p-5 flex justify-between items-center select-none z-50`,
  logo: `cursor-pointer`,
  btn: `font-graph text-sm bg-red px-3 py-2 rounded-sm active:bg-opacity-90`
}

const SignInNavbar = ({ setSignIn, signIn }) => {
  return (
    <div className={style.container}>
      <img
          className={style.logo} 
          src={logo}
          alt="logo"
          width={100}
        />
        <button
          className={`${signIn && 'hidden'} ${style.btn}`}
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
    </div>
  )
}

export default SignInNavbar