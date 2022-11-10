import { useState, useRef } from 'react';
import { Modal } from '../../context/Modal';
import hero from "../../assets/michael_audrey.png";
import profilePic from "../../assets/mj.jpg";
import "./Hero.css";

export default function Hero() {
    const [showLearnMore, setShowLearnMore] = useState(false);
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

    return (
        <div className='hero-about-container'>
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
                    <Modal onClose={() => setShowLearnMore(false)}>
                        <div className='learn-more'>
                            <img
                                className='learn-more-pic'
                                src={profilePic}
                                alt="michael"
                            />
                            <div className='learn-more-text'>
                                Hello! Thanks for taking the time to review my portfolio.
                                <br />
                                <br />
                                I'm a UC Berkeley alumnus and a Master's-prepared Nurse turned Software Engineer. Why the career change?
                                Two of my biggest fills are:
                                <ol>
                                    <li>Creating something from nothing</li>
                                    <li>Devising ways to improve efficiency and organization</li>
                                </ol>
                                What I love about coding is that I get to do both!
                                I can take a completely blank file and turn it into an entire interactive web application.
                                Not only that, but there are endless opportunities to grow and improve it.
                                I'm excited to share with you my work and am more than happy to chat about any questions you may have.
                                Thanks for stopping by!
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
