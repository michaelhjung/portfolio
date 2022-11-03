import { useEffect } from "react";
import './Education.css';
import ucbLogo from '../../assets/logos/ucb-logo.svg';
import smuLogo from '../../assets/logos/smu-logo.png';
import aaLogo from '../../assets/logos/aa-logo.png';

export default function Education() {
    useEffect(() => {
        const education = document.querySelectorAll(".edu-icon-wrapper");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show-edu", entry.isIntersecting);
                // if (entry.isIntersecting) observer.unobserve(entry.target);
            });
        }, { threshold: 0.7 });

        education.forEach(edu => {
            observer.observe(edu);
        });
    }, []);


    return (
        <div className='education-container'>
            <h2>Education</h2>
            <div className='edu-icons-container'>
                <div className='edu-icon-wrapper'>
                    <img id="ucb-img" className='edu-logo' src={ucbLogo} alt="UC Berkeley" />
                    <span className="edu-degree">Bachelor of Arts, Integrative Biology</span>
                </div>
                <div className='edu-icon-wrapper'>
                    <img id="smu-img" className='edu-logo' src={smuLogo} alt="Samuel Merritt University" />
                    <span className="edu-degree">Master of Science, Nursing, Case Management</span>
                </div>
                <div className='edu-icon-wrapper'>
                    <img id="aa-img" className='edu-logo' src={aaLogo} alt="App Academy" />
                    <span className="edu-degree">Full Stack Software Engineering Program</span>
                </div>
            </div>
        </div>
    )
}
