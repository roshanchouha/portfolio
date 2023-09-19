import React from 'react';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
 
const Education = (props) => {
    return (
        <div>
            <div className='schoolName'>
                 <div className='schoolInfo'>
                    <h5 className='Degree ms-5 '>{props.degree}</h5>
                    <h6 className='field ms-5 '>{props.field}</h6>
                    <div className=' text-primary'> <EventAvailableIcon className=' text-primary date ms-5' /> {props.year} </div>
                </div>
            </div>

            
        </div>
    );
}

export default Education;
