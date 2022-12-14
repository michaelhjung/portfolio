import './ProfileMenu.css';
import linkedin from '../../assets/icons/skills/LinkedIn.svg';
import github from '../../assets/icons/skills/Github-Dark.svg';
import angellist from '../../assets/icons/angellist.svg';
import email from '../../assets/icons/email.svg';

export default function ProfileMenu({ showLearnMore, setShowLearnMore }) {
    const handleAboutClick = () => {
        setShowLearnMore(true);
    }

    return (
        <div className='profile-menu'>
            <a href="#about" className='profile-menu-link' onClick={handleAboutClick}>About</a>
            <a href="#skills" className='profile-menu-link' onClick={() => setShowLearnMore(false)}>Skills</a>
            <a href="#projects" className='profile-menu-link' onClick={() => setShowLearnMore(false)}>Projects</a>
            <a href="#education" className='profile-menu-link' onClick={() => setShowLearnMore(false)}>Education</a>
            <a href="https://drive.google.com/file/d/1oVtWhZYqaRysS2H3kzyYKWEg_XbVwk_h/view?usp=share_link" className='profile-menu-link' target="_blank" rel="noreferrer">Resume</a>
            <a href="#contact-me" className='profile-menu-link' onClick={() => setShowLearnMore(false)}>Contact Me</a>
            <div className='profile-contact-icons'>
                <a className="profile-contact-icon" href="mailto:jung.michaelh@gmail.com" target="_blank" rel="noreferrer">
                    <img className="profile-contact-icon-img" src={email} alt="linked in" />
                </a>
                <a className="profile-contact-icon" href="https://www.linkedin.com/in/michael-h-jung/" target="_blank" rel="noreferrer">
                    <img className="profile-contact-icon-img" src={linkedin} alt="linked in" />
                </a>
                <a className="profile-contact-icon" href="https://github.com/michaelhjung" target="_blank" rel="noreferrer">
                    <img className="profile-contact-icon-img" src={github} alt="github" />
                </a>
                <a className="profile-contact-icon" href="https://angel.co/u/michaelhjung" target="_blank" rel="noreferrer">
                    <img className="profile-contact-icon-img angellist-icon" src={angellist} alt="angellist" />
                </a>
            </div>
        </div>
    )
}
