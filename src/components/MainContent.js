import React from 'react';

export default function MainContent() {
    return(
        <main>
            <div className="main-image"></div>
            <div className="main-content">
                <h1 className="name">Elon Musk</h1>
                <h3 className="info">Richest man in the world</h3>
                <a href="https://www.tesla.com/" target="_blank"><p className="website">tesla.com</p></a>
                <div className="contact-buttons-container">
                    <div className="email-button">
                        <img className="button-icon" src="https://cdn.discordapp.com/attachments/920071068729880716/1047943202092621854/image.png"/>
                        <h3>Email</h3>
                    </div>
                    <div className="linkedin-button">
                        <img className="button-icon" src="https://cdn.discordapp.com/attachments/920071068729880716/1047943304030986350/image.png"/>
                        <h3>Linkedin</h3>
                    </div>
                </div>
                <div className="about-container">
                    <h2 className="section-title">About</h2>
                    <p className="paragraph">CEO and chief engineer of SpaceX; CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; and owner and CEO of Twitter, Inc.</p>
                </div>
                <div className="interests-container">
                    <h2 className="section-title">Interests & Hobbies</h2>
                    <p className="paragraph">Elon even credits his passion for gaming for inspiring his present fascination with technology and innovation Attributing his interest in computers and tech to playing video games as a kid. He's played just about everything, but his favorites are Deus Ex, Fallout and BioShock</p>
                </div>
            </div>
        </main>
    )
}