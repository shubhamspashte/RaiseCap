import React from 'react';
import './grid.css';

const Grid = () => {
    return (
        <div className='box'>
            <div className='circleimage'>
                <img className='imglogo' src='img.png' alt='campaign'></img>
            </div>
            <div className='gridcontent'>
                Content
            </div>
        </div>
);
};

const Newapp = () => {
    return (
        <div>
            <div className='ar'>
                <Grid />
                <Grid />
                <Grid />
                <Grid />
                <Grid />
                <Grid />
            </div>
        </div>
);
};
export default Newapp;