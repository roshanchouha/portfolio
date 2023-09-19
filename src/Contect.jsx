import React from 'react';
import Links from './component/Links';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot ,faPhoneFlip ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
 

const Contect = () => {
     const submit =()=>{
         alert("Thankyou  for Connecting Us");
     }
    return (
        <>
            <div className='container min-vh-100    m' id='Contects'>
             <div  id='Img'></div>
                <div  >
                    <h5 className='Head text-center text-primary'>Contect Me</h5>
                    <h1 className='Title  text-center'>Get In Touch </h1>
                    <div className='Form'>
                        
                        <section className="mt-5">
  
 
                            <div className="row">

                         
                                <div className="col-md-6 mb-md-0 mt-5 mx-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
 
                                        <div className="row">

                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                <label for="name" className="">Your name</label>
                                                    <input type="text" id="name" name="name" className="form-control" />
                                                         
                                                </div>
                                            </div>
                                            

                                           
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                <label for="email" className="">Your email</label>
                                                    <input type="text" id="email" name="email" className="form-control" />
                                                        
                                                </div>
                                            </div>
                                             

                                        </div>
                                       
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                <label for="subject" className="">Subject</label>
                                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                                         
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <div className="row">

                                         
                                            <div className="col-md-12">

                                                <div className="md-form">
                                                <label for="message">Your message</label>
                                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                                    
                                                </div>

                                            </div>
                                        </div>
                                        

                                    </form>

                                    <div className="text-center text-md-left ">
                                        <a className="btn btn-primary mt-4" onClick= {submit}>Send</a>
                                    </div>
                                    <div className="status"></div>
                                </div>
                                
                                <div className="Location col-md-3 text-center mt-1 p-4">
                                    <ul className="list-unstyled mb-0">
                                        <li> <FontAwesomeIcon className='fs-2 text-primary' icon={faLocationDot} bounce />
                                            <p>H/N-255 Agrawal Colony, Pithampur 454775 Madhya Pradesh </p>
                                        </li>

                                        <li> <FontAwesomeIcon className='fs-2 text-primary' icon={faPhoneFlip} shake />
                                            <p>+ 91 6264554662</p>
                                        </li>

                                        <li> <FontAwesomeIcon  className='fs-2 text-primary mt-2' icon={faEnvelope} beat />
                                            <p>roshanchouhan29@gmail.com</p>
                                            
                                        </li>
                                    </ul>
                                </div> 

                            </div>

                        </section>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contect;
