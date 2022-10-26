import React, { useState } from "react";
import SignInNavbar from "./SignInNavbar";
import GetStartedForm from "./GetStartedForm";
import SignInForm from "./SignInForm";

const style = {
  container: `relative h-screen bg-[url("./assets/landing-background.jpg")] bg-center bg-no-repeat bg-cover overflow-hidden`,
  darkOverlay: `w-full h-full bg-gradient-to-b from-black/90 via-black/50 to-black/90 z-10`,
  contentContainer: `absolute h-full w-full top-0 flex flex-col justify-center items-center`,
};

const SignInScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={style.container}>
      <SignInNavbar setSignIn={setSignIn} signIn={signIn} />

      <div className={style.darkOverlay} />

      <div className={style.contentContainer}>
        {signIn ? <SignInForm /> : <GetStartedForm />}
      </div>
    </div>
  );
};

export default SignInScreen;
