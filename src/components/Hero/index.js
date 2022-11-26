import { useState, useRef } from 'react';
import { Modal } from '../../context/Modal';
import hero from "../../assets/michael_audrey.png";
import profilePic from "../../assets/mj.jpg";
import "./Hero.css";

export default function Hero({ showLearnMore, setShowLearnMore, mjLogo, mjLogoDark }) {
    const showAbout = useRef(false);
    const handleGreetingClick = () => {
        const aboutTextList = document.querySelectorAll('.about-text');

        aboutTextList.forEach(node => node.removeAttribute('class'));

        if (!showAbout.current) {
            aboutTextList.forEach(node => node.setAttribute('class', 'about-text about-fade-in'));
            showAbout.current = true;
        } else {
            aboutTextList.forEach(node => node.setAttribute('class', 'about-text about-fade-out'));
            showAbout.current = false;
        }
    };

    const handleLearnMoreClick = () => {
        setShowLearnMore(true);
    }

    const handleCloseLearnMoreModal = () => {
        setShowLearnMore(false);
        const profileButtonImg = document.getElementById("mj-logo");
        profileButtonImg.src = mjLogo;
    }

    return (
        <div className='hero-about-container' id="about">
            <h2 id="hero-sub-heading" className='hero-text'>I used to handle crud. Now, I handle CRUD.</h2>
            <div className="hero-container">
                <img src={hero} alt="hero" id="hero-img" />
                <h1 id="hero-heading" className="hero-text">Michael Jung, <br />Software Engineer</h1>
                <div
                    className="hero-text greeting"
                    onClick={handleGreetingClick}
                >Hey, there 👋🏼</div>
                <div className='learn-more-button' onClick={handleLearnMoreClick}>
                    learn more
                </div>
                {showLearnMore && (
                    <Modal onClose={handleCloseLearnMoreModal}>
                        <div className='learn-more'>
                            <div className='learn-more-pic-container'>
                                <img
                                    className='learn-more-pic'
                                    src={profilePic}
                                    alt="michael"
                                />
                            </div>
                            <div className='learn-more-text'>
                                <div className='learn-more-text-section'>
                                    I'm a <i>UC Berkeley alumnus</i> and a Master's-prepared <i>nurse</i>🩺 turned <strong>Software Engineer</strong> 👨🏻‍💻.
                                </div>

                                <div className='learn-more-text-section'>
                                    <strong>Why the career change</strong>?
                                    Although I was good at what I did and loved the people I worked with, my favorite part about nursing was the problem solving 🧩.
                                    I loved finding ways to think outside the box and utilize the tools & resources I had to make things happen.
                                    Particularly, I loved using my knowledge of various technological tools to improve mine and other's workflow 📈.
                                </div>

                                <div className='learn-more-text-section'>
                                    On the side, I enjoyed hobbies where I could take blank canvas and build something out of nothing 🎨 (e.g., video editing).
                                </div>

                                <div className='learn-more-text-section'>
                                    Programming affords me the privilege of <strong>blending <span className='creativity-text'>creativity</span> with critical thinking 🧠</strong>.
                                    I get to build aesthetically pleasing and functionally efficient applications with a user-centered approach.
                                </div>

                                <div className='learn-more-text-section'>
                                    I'm excited to share with you my work and am more than happy to <a className="learn-more-email-link" href="mailto:jung.michaelh@gmail.com" target="_blank" rel="noreferrer">chat ☕️</a> about any questions you may have.
                                    Check out <a className='learn-more-projects-link' href="#projects">3 of my recent projects</a> below, each completed within 1-2 week timeframes.
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
            <>
                <span className='about-text about-hidden' id='about-text-1'>
                    RAPID LEARNER
                </span>
                {/* <span className='about-text about-hidden' id='about-text-2'>
                    DISCIPLINED
                </span> */}
                <span className='about-text about-hidden' id='about-text-3'>
                    DETAIL-<span id='about-o'>O</span>RIENTED
                </span>
                <span className='about-text about-hidden' id='about-text-4'>
                    TEAM PLAYER
                </span>
                <span className='about-text about-hidden' id='about-text-5'>
                    ORGANIZED
                </span>
            </>
        </div>
    )
}
