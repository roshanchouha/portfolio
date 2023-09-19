import React, { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Links = () => {

    useEffect(() => {
        AOS.init();
   }, [])
    return (
        <div>
            <div className='Link' data-aos ="fade-left" >
                <a   href="https://www.facebook.com/profile.php?id=100008015474928"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/roshan-chouhan-0a089b229/"> <LinkedInIcon /></a>
                <a href="https://github.com/roshanchouha"><GitHubIcon /></a>
                <a href=""><EmailIcon /></a>
                <a href=""></a>
            </div>
        </div>
    );
}

export default Links;
