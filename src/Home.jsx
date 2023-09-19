import React, { useEffect } from 'react';
import Myintro from './component/Myintro';
import Skills from './component/Skills';
import Portfolio from './Portfolio';
import Contect from './Contect';
import Links from './component/Links';
import Footer from './component/Footer';
import Typed from "typed.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from './component/Resume 6.pdf'
import { NavLink } from 'react-router-dom';
import  image from './image/devloper 3d.webp'
const Home = () => {
   useEffect( ()=>{
    const typed = new Typed('.multiple', {
        strings:['Frontend Developer','Web Developer','Full Stack Developer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:100,
        loop:true
    });
   },[]);
   
    return (
        <>
            <div id='home'>
                <div className='herosection'>
                    <div className='homedetail p-2'>
                        <h4 className='text-primary'>Hii, I am</h4>
                        <h1> Roshan Chouhan</h1>
                        <h4> <span className='multiple'></span></h4>
                        <p>"Mastering the Art of Building the Digital World: The Journey of a Full-Stack Developer"</p>
                        <a href={resume} className='btn btn-primary'  download="Resume 6.pdf">Download cv </a> <button className='btn btn-primary'> <NavLink className=" text-decoration-none text-white" to='/contect'> Contact Me</NavLink> </button>
                    </div>
                    <div className='image'>
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
             <div>
                <Links/>
             </div>
            <div> 
               <Myintro />
            </div>
            <div id='Skills' > 
               <Skills />
            </div>
            <div id='work'>
                <Portfolio />
            </div>
            <div id="Cont">
                <Contect />
            </div>
            <div id="Foot">
                <Footer />
            </div>
        </>
    );
}

export default Home;
