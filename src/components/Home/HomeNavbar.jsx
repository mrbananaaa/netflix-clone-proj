import React, { useEffect, useState } from "react";
import logoImage from "../../assets/logo.png";
import profileImage from "../../assets/profile.webp";
import { Link } from "react-router-dom";

const style = {
  container: `fixed top-0 w-full flex justify-between items-center p-5 transition-all duration-300 ease-in select-none z-10`,
  image: `cursor-pointer`,
};

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const navbarHandler = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarHandler);

    return () => window.removeEventListener("scroll", navbarHandler);
  }, []);

  return (
    <div className={`${style.container} ${scroll && "bg-dark"}`}>
      <Link to="/">
        <img
          className={style.image}
          src={logoImage}
          alt="netfucklogos"
          width={100}
        />
      </Link>
      <Link to="/profile">
        <img
          className={style.image}
          src={profileImage}
          alt="profile"
          width={35}
        />
      </Link>
    </div>
  );
};

export default Navbar;
