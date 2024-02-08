import React from 'react';
import './blog.css';
const Campaign = ({ title, description, image }) => (
    <div className="campaign">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const BlogPage = () => {
    const successfulCampaigns = [
        {
        title: "Project A",
        description: "Description of Project A",
        image: "projectA.jpg"
        },
        {
        title: "Project B",
        description: "Description of Project B",
        image: "projectB.jpg"
        },
    ];

    return (
        <div className="blog-page">
        <h1>Successful Crowdfunding Campaigns</h1>
        <div className="campaigns-container">
            {successfulCampaigns.map((campaign, index) => (
            <Campaign
                key={index}
                title={campaign.title}
                description={campaign.description}
                image={campaign.image}
            />
            ))}
        </div>
        </div>
    );
};
export default BlogPage;
