import React, { useState } from 'react';
import './impact.css';


    const ImpactStories = () => {
    const [showStory1, setShowStory1] = useState(false);
    const [showStory2, setShowStory2] = useState(false);

    const toggleStory1 = () => {
        setShowStory1(!showStory1);
    };

    const toggleStory2 = () => {
        setShowStory2(!showStory2);
    };

    return (
        <div>
        <h2>Impact Stories</h2>
        <div>
            <button onClick={toggleStory1}>Toggle Story 1</button>
            {showStory1 && (
            <div>
                <h3>Success Story 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus lectus et eros feugiat, vitae fermentum lacus aliquam. Mauris id ligula in odio tempus vestibulum.</p>
            </div>
            )}
        </div>
        <div>
            <button onClick={toggleStory2}>Toggle Story 2</button>
            {showStory2 && (
            <div>
                <h3>Success Story 2</h3>
                <p>Donec auctor ipsum sit amet felis malesuada, at rhoncus velit pulvinar. Nullam hendrerit nulla sit amet massa tincidunt, id vehicula felis consequat.</p>
            </div>
            )}
        </div>
        </div>
    );
    };

    export default ImpactStories;
