import React from 'react';
import Links from './Links';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import image from '../image/logo.avif'
const Footer = () => {
    return (
        <>
            <div className='Footer container-fluid border border-3   text-white '>
                <div className='bg-white  foot'>
                    <img id='Logo' src={image} alt="" />
                </div>
                <div className=' container col-md-8 mt-3' id='FootText'>
                    <p className='aboutDetail'> <span className='fs-2 '>A</span>s a Full Stack Developer, my mission is to leverage my technical expertise and creativity to architect, develop, and deliver exceptional web applications that not only meet but exceed user expectations. I am committed to crafting seamless user experiences, optimizing performance, and ensuring the security and scalability of the systems I work on.
                        My goal is to work in a dynamic and collaborative environment where I can continually expand my knowledge of emerging technologies, refine my coding skills, and contribute to innovative projects. I am driven by the opportunity to tackle complex challenges, find elegant solutions, and ultimately, make a meaningful impact in the world of web development.I am eager to join a forward-thinking team where my Full Stack Developer skills can flourish, and where I can be an integral part of building the digital experiences of tomorrow.

                    </p>
                </div>

                <div className='Flink rounded-2'>
                    <a className=' text-decoration-none ' href="https://www.facebook.com/profile.php?id=100008015474928"><FacebookIcon /></a>
                    <a href="https://www.linkedin.com/in/roshan-chouhan-0a089b229/"><LinkedInIcon /></a>
                    <a href="https://github.com/roshanchouha"><GitHubIcon /></a>
                    <a href=""><EmailIcon /></a>
                </div>
            </div>


        </>
    );
}

export default Footer;
