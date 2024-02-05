import React,{useState} from 'react';
import './main.css';
import Categories from './categories';
import Newapp from './grid'

const Main = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};
    const handleSearch = () => {
    console.log('Searching a campaign:', searchTerm);
};

return (
    <div className="bd">
        
        <div className='searchBoxStyle'>
            <input
                type="text"
                placeholder="Search a Campaign"
                value={searchTerm}
                onChange={handleInputChange}
                className='inputStyle'/>
            <button 
                onClick={handleSearch} className='buttonStyle' style={{backgroundImage:'url("/mg.png")'}}>         
            </button>
        </div> 
        <Categories/> 
        <Newapp/>  
    </div>

)
}

export default Main;
