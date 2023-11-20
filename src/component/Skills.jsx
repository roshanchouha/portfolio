import React, { useEffect } from 'react';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faReact} from '@fortawesome/free-brands-svg-icons';
import { faReact, faJs, faHtml5, faCss3Alt, faNode, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../image/icons8-mysql-100.png"
import mongo from "../image/mongo.webp"
import mongodb from "../image/mongodb.png"
const Skills = () => {
     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div>
               <div id='Skill' className=' container-fluid min-vh-100   '>
                    <h5 className='text-center text-primary'>Why Choose Me</h5>
                    <h1 className='text-center'>My Experties Area</h1>
                    <div data-aos="fade-in" data-aos-duration="1500" data-aos-offset="300" data-aos-easing="ease-in-sine" className='Slogo'>

                         <div className='card'   >
                              <div className=' card-img  text-center html'> <FontAwesomeIcon icon={faHtml5} className='HTML' /></div>
                              <div className=' card-header text-center'>HTML</div>
                         </div>
                         <div className='card'>
                              <div className=' card-img text-center Css '> <FontAwesomeIcon icon={faCss3Alt} className='CSS' /></div>
                              <div className=' card-header text-center'>CSS</div>
                         </div>
                         <div className='card'>
                              <div className='card-img  text-center javaScript'> <FontAwesomeIcon icon={faJs} className='JS' /></div>
                              <div className=' card-header text-center'>javaScript</div>
                         </div>
                         <div className='card'>
                              <div className='text-center card-img react'>
                                   <FontAwesomeIcon className='React' icon={faReact} spin size="2xl" />
                                   {/* <img className='React' src="image/reactt.svg" alt="" /> */}

                              </div>
                              <div className=' card-header text-center '>React Js</div>
                         </div>
                         <div className='card'>
                              <div className=' text-center card-img  node'>

                                   <FontAwesomeIcon className='Node' icon={faNodeJs} />
                              </div>
                              <div className=' card-header text-center'>Node Js</div>

                         </div>
                         <div className='card'>
                              <div className=' text-center card-img express'>
                                   <h3><span className='  mb-lg-2'>Express</span><FontAwesomeIcon icon={faJs} className='JS' /></h3>
                              </div>
                              <div className=' card-header text-center'>Express</div>

                         </div>
                         <div className='card'>
                              <div className='text-center card-img '>
                                   <FontAwesomeIcon className='Node' icon={faJava} />
                              </div>
                              <div className=' card-header text-center'>Java</div>
                         </div>
                         <div className='card'>
                              <div className='text-center card-img '>
                                   <img className='MySql' src={image} alt="" />
                              </div>
                           <div className=' card-header text-center'>MySql</div>
                         </div>

                         <div className='card'>
                              <div className='text-center card-img mongo'>
                                   <img className='mongodb' src={mongo} alt=""  width='100px'/>
                                 
                              </div>
                           <div className=' card-header text-center'>mongodb</div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
