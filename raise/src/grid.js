import React from 'react'
import './grid.css';


function CardData() {
const rtn = [{
    docName:'Medical',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    docImg: "./img.png"
    }, {
    docName:'Children',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    docImg: "./img.png"
    }, {
    docName:'Food & Hunger',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    docImg: "./img.png"
    },  {
    docName:'Campaign 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    docImg: "./img.png"
    },  {
    docName:'Campaign 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    docImg: "./img.png"
    }]
return rtn;
}

class Cards extends React.Component {
render () {
    const cardData = CardData();
    return (
    
    <section>
    {
        cardData.map((card, i) => {
        return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
            <img src={card.docImg} alt="doc-img"/>
            <div>
            <p className="docName">{card.docName}</p>
            <p className="title">{card.title}</p>
            <p className="desc">{card.desc}</p>
            </div>
            </div>
        )
        })
    }
    </section>
    
    )
}
}

class Display extends React.Component {

    state = {
    currentCard: 0,
    position: 0,
    cardStyle: {
        transform: 'translateX(0px)'
    },
    width: 0,
    };

componentDidMount() {
    let boxWidth = document.getElementById("card").clientWidth;
    this.setState({ width: boxWidth });
}


handleClick(type) {
    let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    margin = JSON.parse(margin.replace(/px/i, '')); 

    const cardWidth = this.state.width; 
    const cardMargin = margin; 
    const cardNumber = CardData().length;
    let currentCard = this.state.currentCard; 
    let position = this.state.position; 

    
    if(type === 'next' && currentCard < cardNumber-1) {
    currentCard++;
    position -= (cardWidth+cardMargin);
    } else if(type === 'prev' && currentCard > 0) {
    currentCard--;
    position += (cardWidth+cardMargin);
    }
    this.setCard(currentCard, position);
}

setCard(currentCard, position) {
    this.setState({
    currentCard: currentCard,
    position: position,
    cardStyle: {
        transform: `translateX(${position}px)`
    }
    })
}

render() {
    return (
    <div className="sliderWrapper">
        <h1>- Campaigns where you can donate -</h1>
    <div className="cards-slider">
        <div className="slider-btns">
        <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
        <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
        </div>
        <Cards cardStyle={this.state.cardStyle} />
    </div>
    </div>
    )
}
}


export default Display;