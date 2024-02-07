import React from 'react'; 
import './start.css';
import { Link } from 'react-router-dom';
const Start = () => {
    const toggleMenu = () => {
    const menuList = document.getElementById("menuList");

    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
    };

    return (
    <div className="startcontainer">
        {/* // <div className="startnavbar"> */}
        {/* <nav className='startnav'> */}
            {/* <ul id="menuList"> */}
            {/* <li><a href="/" target="_blank">About us</a></li> */}
            {/* // </ul> */}
        {/* // </nav> */}
        {/* <img src="/raise/public/chi.jpg" alt='imgrt' className="startmenu-logo" onClick={toggleMenu} /> */}
        {/* </div> */}

        <div className="startrow">
        <div className="startcol-1">
            <h2>Start Fundraiser</h2>
            <h3>Every drop of support counts</h3> <br /> <br />
            <button type="button" name="btnindividual" id="btnindividual" onClick={() => window.open('./IFormComponent')}>
                For Individual <img src="/arrow.png" alt='img'/>
            </button>
            <br /> <br />
            <button type="button" name="btnorganization" id="btnorganization" onClick={() => window.open('./OFormComponent')}>
                For Organization <img src="/arrow.png" alt='img'/>
            </button>
        </div>
        <div className="startcol-2">
            <img src="./chi.jpg" className="startchildrenimage" alt='img' />
            <div className="startcolor-box"></div>
            <div className="startquotes">
                <p className='startline'>Save Every Child</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Start;
