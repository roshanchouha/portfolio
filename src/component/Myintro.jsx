import React, { useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HeadsetIcon from '@mui/icons-material/Headset';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import MovieIcon from '@mui/icons-material/Movie';
import SchoolIcon from '@mui/icons-material/School';
import Education from './Education';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AOS from 'aos';
import image from "../image/meonpic.jpg"
 

const Myintro = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <div id='into' >
          
                <div className='about'>
               
                    <div data-aos="flip-left" data-aos-duration="1500" className='image'>
                        {/* <img data-aos="flip-left" data-aos-duration="1500" src={image} alt="hii" /> */}
                    </div>
                    <div className='Detail' data-aos="fade-in" data-aos-duration="3000" >
                        <h3 className='text-primary fs-4'>My Intro</h3>
                        <h1 className={{ color: "red" }}>About Me</h1>
                        <p>Hello,

                            I am excited to introduce myself as a Full Stack Developer with a passion for creating robust and innovative web applications. With a diverse skill set that spans both front-end and back-end development, I bring a comprehensive understanding of the entire development process to the table.

                            I look forward to discussing how my skills and experience can contribute to your team's success.</p>

                        <div className='info py-3 '>
                            <PersonIcon className='text-primary' /> Name : Roshan Chouhan <br />
                            <LocalPhoneIcon className='text-primary' /> Phone : 6264554662 <br />
                            <EmailIcon className='text-primary' /> Email : roshanchouhan29@gmail.com <br />
                        </div>

                        <h3 >My Interests</h3>

                        <div className='hobbie'>
                            <div><SportsCricketIcon className='text-primary' /> Cricket  </div>
                            <div><HeadsetIcon className='text-primary' /> Music</div>
                            <div><MovieIcon className='text-primary' /> Movie</div>
                        </div>

                    </div>
                </div>
            </div>

            <div id='eduction' className='container-fluid min-h-screen ' >
                <div className=''>
                    <h3 className=' Qualification text-center  mt-5 text-primary '>MY Qualification</h3>
                    <h1 className='text-center fs-1'>Awesome Journey</h1>
                    <div className='EducationDetail'>
                        <div className='school '>

                            <h1 className='fs-2'><SchoolIcon className=' fs-1' /> Education</h1>
                            <div     data-aos ="zoom-in-down" data-aos-duration="2000" className='Line border border-5   '></div>
                            <div className='Deg'>
                                <div  data-aos="fade-right" className="MCA">
                                    <div className=' container card my-6' id='Card'>
                                        <div className='card-body my-2'>
                                            <h5 className='text-white'>School  of computer science and IT,DAVV Indore </h5>
                                            <h6 className='text-white Field'>Master of Computer  Application (MCA)</h6>
                                            <div className='text-white Date text-left'> <EventAvailableIcon className=' text-white date ms-5' /> 2021-2023 </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-left"   data-aos-duration="2000" className='BCA'>
                                    <div className=' container card my-5' id='Card1'>
                                        <div className='card-body my-2'>
                                            <h5 className='Name text-blue'>Sanskar College Of Professional  Studies Indore</h5>
                                            <h6 className='Name '>	Bachelors of computer Application (BCA) </h6>
                                            <div className='text-primary Date text-left'> <EventAvailableIcon className='text-primary date ms-5' /> 2018-2021 </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-right"   data-aos-duration="2000" className='ten'>
                                    <div className=' container card my-5' id='Card'>
                                        <div className='card-body my-2'>
                                            <h5 className='text-white'>Pithampur Public Higher Secondary School </h5>
                                            <h6 className='text-white Field'>Higher Secondary Certificate (HSC)</h6>
                                            <div className='text-white Date text-left'> <EventAvailableIcon className=' text-white date ms-5' /> 2017-2018 </div>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-left"    data-aos-duration="2000" className='twelev'>
                                    <div className=' container card my-5' id='Card1'>
                                        <div className='card-body my-2'>
                                            <h5 className='Name text-blue'>New Patel Public High School Pithampur</h5>
                                            <h6 className='Name '>Secondary School Certificate (SSC) </h6>
                                            <div className='text-primary Date text-left'> <EventAvailableIcon className='text-primary date ms-5' /> 2015-2016 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Myintro;
