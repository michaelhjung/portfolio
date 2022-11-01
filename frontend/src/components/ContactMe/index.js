import "./ContactMe.css"
import linkedin from '../../assets/icons/LinkedIn.svg';
import github from '../../assets/icons/Github-Dark.svg';

export default function ContactMe() {
    return (
        <div className="contact-me-container" >
            <h2>Contact Me</h2>
            <div className="contact-me-icons-container">
                <a className="contact-icon" href="https://www.linkedin.com/in/michael-h-jung/" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={linkedin} alt="linked in" />
                </a>
                <a className="contact-icon" href="https://github.com/michaelhjung" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={github} alt="github" />
                </a>
            </div>
        </div>
    )
}