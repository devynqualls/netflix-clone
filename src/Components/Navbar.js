import React, { useEffect, useState } from "react";
import './Navbar.css'

function Navbar() {
    const [showNavBackground, handleShowNavBackground] = useState(false)
    
    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                handleShowNavBackground(true)
            } else handleShowNavBackground(false)
            });
        return () => {
            window.removeEventListener("scroll", ()=>{})
        }
    }, [])
  return (
    <div className={`Navbar ${showNavBackground && "nav-background"}`}>
      <h3 className="dev-logo">DEV<span className="Logo-Flix">FLIX</span></h3>
      <img
        className="nav-user"
        alt="User Img"
        src=" https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  );
}

export default Navbar;
