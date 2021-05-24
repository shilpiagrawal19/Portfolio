import React from 'react'
import Education from './Education';


function About() {

    function Tittle({title, span}) {
        return (
            <div className="Title">
                <h3>
                    {title}
                    <span> {span}</span>
                </h3>
            </div>
        )
    }

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <p className="about-text">
                A passionate Software debveloper who is always eager to learn new things.
                I love creating website with great user experiance.I like to optimised 
                code and make it highly configurable.I would love to work with an organization 
                which provides me the opportunity to improve my skills along with growth of the organization.
                
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Birthday</p>
                        <p>Highest Qualification</p>
                        <p>Languages</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: 19/01/1999</p>
                        <p>: Bachelor of Engineering</p>
                        <p>: Hindi, English</p>
                        <p>: 8109393133</p>
                        <p>: agrawalshilpi191@gmail.com</p>
                        <p>: 79,Bada Sarafa near Rajwada ,Indore</p>
                       
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>

            <div className="skill">
            </div>
            </div>
    )
}
        

    return (
        <div className="about" id="about">

        <div className="AboutPage">
            <Tittle title={'About Me'} />
            <div className="aboutsection">
            <ImageSection className="details"/>
            <Education/>
            </div>
            

        </div>
        </div>
    )
}

export default About;