import React from 'react';
import img from "../image/timer.avif"
import Paper from '@mui/material/Paper';

 
const Project = (props) => {
   
    return (
        <>
           <Paper  elevation={10} style={{width: "18.5rem"}}>
           <div class="card" style={{width: "18.5rem"}}>
  <img src={props.image} class="card-img-top cardImage" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="aboutCard scrollbar " id='scrollbar1'>{props.about}</p>
    <a href={props.link} class="whiteButton"> Preview Video</a>
  </div>
</div>
           </Paper>
              
           
  
            {/* <div id='cards' className=''>
                <img   className='Cards' src={props.image} alt="" />
            </div> */}
        </>
    );
}

export default Project;
