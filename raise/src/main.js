import './main.css';
import Categories from './categories';
import CardData from './grid'

const Main = () => {

return (
    <div className="bd">
        <div className="searchBoxStyle">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.07-.59 4.21-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
<input type="text" placeholder="   Search a Campaign...." />
<button>Search</button>
</div>
        <Categories/> 
        <CardData/>  
    </div>

)
}

export default Main;
