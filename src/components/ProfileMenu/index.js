import './ProfileMenu.css';

export default function ProfileMenu({ showLearnMore, setShowLearnMore }) {
    const handleAboutClick = () => {
        setShowLearnMore(true);
    }

    return (
        <div className='profile-menu'>
            <a href="#about" className='profile-menu-link' onClick={handleAboutClick}>About</a>
            <a href="#skills" className='profile-menu-link'>Skills</a>
            <a href="#projects" className='profile-menu-link'>Projects</a>
            <a href="#education" className='profile-menu-link'>Education</a>
            <a href="#contact-me" className='profile-menu-link'>Contact Me</a>
        </div>
    )
}
