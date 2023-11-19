import './Home.css';
import React from 'react';
const Home = (props) => {

    return (
        <div>
            <div className="banner-container">
                <div className="textCenter">
                    <h1 className="style">MOVIE</h1>
                    <img src='assets/FeaturedTitleImage.png' width="300px" />
                    <p className="style">Lorem Ipsum is simply dummy text and the printing and<br />
                                        typesetting industry. Lorem Ipsum has been the <br />
                                        industry's standard dummy text ever since the 1500s. 
                                        
                    </p>
                  </div>
            </div>
        </div>
    );
};

export default Home;