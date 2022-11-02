import "./Projects.css"

export default function Projects() {
    return (
        <div className="projects-container" >
            <h2>Projects</h2>
            <div className="carousel">
                <div id="proj-1-container" className="proj-container carousel-item">
                    <a className="proj-link" href="https://carebnb-2022.herokuapp.com" target="_blank" rel="noreferrer">
                        <img
                        id="carebnb-img"
                        className="img img--proj"
                        src="https://i.imgur.com/NT3BnP3.gif"
                        alt="project thumnail 1"
                        onMouseOver={e => e.target.src = "https://i.imgur.com/GL5RbON.gif"}
                        onMouseOut={e => e.target.src = "https://i.imgur.com/NT3BnP3.gif"}
                    />
                    </a>
                    <div>Carebnb, an Airbnb clone</div>
                </div>

                <div id="proj-2-container" className="proj-container carousel-item">
                    <a className="proj-link" href="https://squeal-yelp.herokuapp.com" target="_blank" rel="noreferrer">
                        <img
                        id="squeal-img"
                        className="img img--proj"
                        src="https://i.imgur.com/ybZFSqq.gif"
                        alt="project thumnail 2"
                        onMouseOver={e => e.target.src = "https://i.imgur.com/HoTKQgn.gif"}
                        onMouseOut={e => e.target.src = "https://i.imgur.com/ybZFSqq.gif"}
                    />
                    </a>
                    <div>Squeal, a Yelp clone</div>
                </div>

                <div id="proj-3-container" className="proj-container carousel-item">
                    <a className="proj-link" href="https://escape-hatch.herokuapp.com" target="_blank" rel="noreferrer">
                        <img
                        id="hatch-img"
                        className="img img--proj"
                        src="https://i.imgur.com/a5sJ7qJ.gif"
                        alt="project thumnail 3"
                        onMouseOver={e => e.target.src = "https://i.imgur.com/rPdmTPd.gif"}
                        onMouseOut={e => e.target.src = "https://i.imgur.com/a5sJ7qJ.gif"}
                    />
                    </a>
                    <div>Hatch, a virtual escape room</div>
                </div>
            </div>
        </div>
    )
}
