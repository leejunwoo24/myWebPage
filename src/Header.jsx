import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./styles/Header.css"




export function Header(){


  return(
    <header className='webHeader'>
    <div className='logologinfindstore'>
    <h1 className='logo'>
      <Link className="routerLink" to="/">mamonde</Link>
      </h1> 
  <div className='loginAndFindStore'>
    <p>로그인</p>
    <p>매장찾기</p>
    <p><IoIosSearch size={25}/></p>
</div>
    </div>

<nav className='routerNav'>
  <p>
  <Link className="routerLink" to="/components/subComponents/OurStory">OurStory</Link>
  </p>
  
  <p>
  <Link className="routerLink" to="/components/subComponents/BestandYou">Best&You</Link>
  </p>

  <p>
  <Link className="routerLink" to="/components/subComponents/Product">Product</Link>
  </p>
</nav>
</header>
  )
}