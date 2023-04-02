import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {

    return (

        <div className='ma6 mt0'>

            <Tilt>
              <div className='br4 shadow-2 pa3' style={{ height: '120px', width: '120px', backgroundColor: 'linear-gradient(45deg, orange, cyan 80%)' }}>
                <img style={{paddingTop: '9px'}} alt='brain' src={brain} />
              </div>
            </Tilt>
            
        </div>

    );

}


export default Logo;