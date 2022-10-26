import React from 'react'

const style = {
  textWrapper: `px-10 font-graph text-center selection:bg-red`,
  title: `font-bold text-2xl md:text-4xl`,
  subtitle: `pt-4 text-xl md:text-2xl`,
  subtitleSpan: `selection:bg-green-600`,
  text: `pt-4 text-xs md:text-sm`,
  formWrapper: `pt-4 flex font-graph w-full justify-center`,
  input: `py-2 px-4 outline-none text-dark w-1/2 md:w-1/4`,
  btn: `bg-red text-xs md:text-base px-2 py-1 md:px-4 md:py-3 active:bg-opacity-90 select-none`
}

const GetStartedForm = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
      <>
        <div className={style.textWrapper}>
          <h1 className={style.title}>Unlimited films, TV programmes and more.</h1>
          <h3 className={style.subtitle}>
            Watch anywhere. <span className={style.subtitleSpan}>Cancel at any time.</span>
          </h3>
          <p className={style.text}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <form 
          className={style.formWrapper}
          onSubmit={submitHandler}
        >
          <input 
            className={style.input}
            type="email"
          />
          <button 
            className={style.btn}
          >
            GET STARTED
          </button>
        </form>
      </>
  )
}

export default GetStartedForm