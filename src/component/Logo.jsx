import React from 'react';
import JavascriptIcon from '@mui/icons-material/Javascript';
const Logo = (props) => {
    var name=props.name;
    if(name=='JavascriptIcon'){
    return (
        <div>
            <div className='card'>
                 <div className=' card-img   '> <JavascriptIcon className='JS' /></div>
                 <div className=' card-header'>{props.head}</div>
            </div>
        </div>
    );
   }
}

export default Logo;
