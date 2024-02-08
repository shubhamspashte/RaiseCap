import React from 'react';
import './image.css'

const Image= () => {
return (
    <div className='childrenimagecontainer'>
      <img className='childrenimage'src="/children.jpg" alt="Example"/>
      <div class="textover">Text Over</div>
    </div>
);
};


export default Image;
