import hero from "../../assets/michael_audrey.png"
import "./Hero.css"

export default function Hero() {
    return (
        <div className="hero-container" >
            <img src={hero} alt="hero" id="hero-img" />
            <h1 id="hero-heading" className="hero-text">Michael Jung, <br /> Full Stack Software Engineer</h1>
            <div className="hero-text greeting">Hey, there 👋🏼</div>
        </div>
    )
}
