import "./Projects.css"
import carebnbThumbnail from "../../assets/carebnb-thumbnail.png"
import squealThumbnail from "../../assets/squeal-thumbnail.png"
import placeholder3 from "../../assets/placeholder-3.jpg"

export default function Projects() {
    return (
        <div className="projects-container" >
            <h2>Projects</h2>
            <div className="carousel">
                <div id="proj-1-container" className="proj-container carousel-item">
                    <a className="proj-link" href="https://carebnb-2022.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className="img img--proj" src={carebnbThumbnail} alt="project thumnail 1" />
                    </a>
                    <div>Carebnb, an Airbnb clone</div>
                </div>

                <div id="proj-2-container" className="proj-container carousel-item">
                    <a className="proj-link" href="https://squeal-yelp.herokuapp.com/login" target="_blank" rel="noreferrer">
                        <img className="img img--proj" src={squealThumbnail} alt="project thumnail 2" />
                    </a>
                    <div>Squeal, a Yelp clone</div>
                </div>

                <div id="proj-3-container" className="proj-container carousel-item">
                    <a className="proj-link" href="">
                        <img className="img img--proj" src={placeholder3} alt="project thumnail 3" />
                    </a>
                </div>
            </div>
        </div>
    )
}
