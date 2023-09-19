import React from 'react';
 
const Project = (props) => {
   
    return (
        <>
            <div id='cards' className=''>
                <img   className='Cards' src={props.image} alt="" />
            </div>
        </>
    );
}

export default Project;
