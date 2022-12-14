import "./ContactMe.css"
import linkedin from '../../assets/icons/skills/LinkedIn.svg';
import github from '../../assets/icons/skills/Github-Dark.svg';
import angellist from '../../assets/icons/angellist.svg';
import email from '../../assets/icons/email.svg';

export default function ContactMe() {
    return (
        <section className="contact-me-container" id="contact-me" >
            <h2>Contact Me</h2>
            <div className="contact-me-icons-container">
                <a className="contact-icon" href="mailto:jung.michaelh@gmail.com" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={email} alt="linked in" />
                </a>
                <a className="contact-icon" href="https://www.linkedin.com/in/michael-h-jung/" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={linkedin} alt="linked in" />
                </a>
                <a className="contact-icon" href="https://github.com/michaelhjung" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={github} alt="github" />
                </a>
                <a className="contact-icon" href="https://angel.co/u/michaelhjung" target="_blank" rel="noreferrer">
                    <img className="contact-icon-img" src={angellist} alt="angellist" />
                </a>
            </div>
        </section>
    )
}
