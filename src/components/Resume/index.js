import "./Resume.css"
import resume from '../../assets/icons/resume.svg';

export default function Resume() {
    return (
        <section className="resume-container" id="resume">
            <h2>Resume</h2>
            <div className="resume-icons-container">
                <a className="resume-icon" href="https://drive.google.com/file/d/1oVtWhZYqaRysS2H3kzyYKWEg_XbVwk_h/view?usp=share_link" target="_blank" rel="noreferrer">
                    <img className="resume-img" src={resume} alt="resume" />
                </a>
            </div>
        </section>
    )
}
