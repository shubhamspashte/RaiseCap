import React from 'react';
import './image.css'

const Image= () => {
return (
    <div className='childrenimagecontainer'>
      <img className='childrenimage'src="/children.jpg" alt="Example"/>
      <div className="rhombus"></div>
      <div class="textover">Your small help make world better</div>
    </div>
);
};


export default Image;
