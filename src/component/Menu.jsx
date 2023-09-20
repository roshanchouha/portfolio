import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
             <div id="MenuButton" className='MenuBox'>
                        <div  className='Menudata '>
                            <NavLink className=' bg-white text-decoration-none p-2  text-primary-emphasis' to="/"> Home </NavLink>
                            <NavLink className='bg-white text-decoration-none p-2' to="/myintro">Myintro</NavLink>
                            <NavLink className='bg-white text-decoration-none p-2' to="/skills">Skills</NavLink>
                            {/* <NavLink className='bg-white text-decoration-none p-2' to="/service"> Service </NavLink> */}
                            <NavLink className='bg-white text-decoration-none p-2' exact to="/portfolios"> Portfolio</NavLink>
                            <NavLink className='bg-white text-decoration-none p-2' to="/contect"> Contect Me</NavLink>
                        </div>
                    </div>
        </>
    );
}

export default Menu;
