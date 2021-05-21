import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import "../styles/navbar.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { VscBookmark } from "react-icons/vsc"

interface NavbarProps {
    onChange: ChangeEventHandler;
    onSubmit: FormEventHandler;
    value: string;
}
const Navbar: React.FC<NavbarProps> = ({onChange, value, onSubmit}) => {
    return (
        <nav className="navbar">
           <ul className="navbar__list">
               <Link to="/" className="logo"><img src={logo} alt="Company logo" className="logo"/></Link>
               <div className="search">
                   <form action="#" className="search" onSubmit={onSubmit}>
                       <AiOutlineSearch className="search__icon"/>
                    <input type="text" className="search__input" placeholder="Search..." onChange={onChange} value={value}/> 
                   </form>
                   
               </div>
                <div className="bookmark">
                    <VscBookmark className="bookmark__icon"/>
                    <p>Bookmarks</p>
                </div>
               </ul> 
        </nav>
    )
}

export default Navbar
