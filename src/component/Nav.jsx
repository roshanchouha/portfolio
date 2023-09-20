import React from 'react';
import image from '../image/logo.avif';
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
const Nav = () => {
    const MenuBtn =()=>{
        const element = document.getElementById('MenuButton').classList.toggle("MenuBox2");
        console.log(element);
    }

    return (
        <div className='container-fluid-lg p-2 bg-white ' id='navigation'>
            <nav className='nav navb navbar-collapse  me-5'>
                <div className='bg-white mx-2 '>
                    <img id='Logo' src={image} alt="" />
                </div>
                <div  className='NavHid'>
                    <NavLink className=' bg-white text-decoration-none p-2 ps-4 text-primary-emphasis' to="/"> Home </NavLink>
                    <NavLink className='bg-white text-decoration-none p-2' to="/myintro">Myintro</NavLink>
                    <NavLink className='bg-white text-decoration-none p-2' to="/skills">Skills</NavLink>
                    {/* <NavLink className='bg-white text-decoration-none p-2' to="/service"> Service </NavLink> */}
                    <NavLink className='bg-white text-decoration-none p-2' exact to="/portfolios"> Portfolio</NavLink>
                    <NavLink className='bg-white text-decoration-none p-2' to="/contect"> Contect Me</NavLink>
                </div>
                <button  className='Menu Menu2' onClick={MenuBtn} > <MenuIcon /> </button>
            </nav>



        </div>
    );
}

export default Nav;
