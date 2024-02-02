import React from 'react';
import './categories.css'
const Categories = () => {
    return (
    <>
    
    <h1>Categories</h1>
    <div className='categoriesList'>
        <div className='list'>
            <div className='optionm'>
                <h2>Medical</h2>
            </div>
            <div className='optionm'>
                <h2>Children</h2>
            </div>
            <div className='optionm'>
                <h2>Food & Hunger</h2>
            </div>
            <div className='optionm'>
                <h2>Women & Girls</h2>
            </div>
            <div className='optionm'>
                <h2>Animals</h2>
            </div>
            <div className='optionm'>
                <h2>Environment</h2>
            </div>
            <div className='optionm'>
                <h2>Others</h2>
            </div>
        </div>
    </div>
    

    </>

    );
};

export default Categories;

