import "./Resume.css"
import resume from '../../assets/icons/resume.svg';

export default function Resume() {
    return (
        <section className="resume-container" id="resume">
            <h2>Resume</h2>
            <div className="resume-icons-container">
                <a className="resume-icon" href="https://drive.google.com/uc?export=download&id=1YnV27iuRb4xgSTX5UWGflo7CfXS58Kz2">
                    <img className="resume-img" src={resume} alt="resume" />
                </a>
            </div>
        </section>
    )
}
