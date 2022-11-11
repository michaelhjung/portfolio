import './ProfileMenu.css';

export default function ProfileMenu() {
    return (
        <div className='profile-menu'>
            <a href="#skills" className='profile-menu-link'>Skills</a>
            <a href="#projects" className='profile-menu-link'>Projects</a>
            <a href="#education" className='profile-menu-link'>Education</a>
            <a href="#contact-me" className='profile-menu-link'>Contact Me</a>
        </div>
    )
}
