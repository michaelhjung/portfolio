import "./Skills.css"
import js from "../../assets/icons/JavaScript.svg"
import node from "../../assets/icons/NodeJS-Light.svg"
import python from "../../assets/icons/Python-Light.svg"
import html from "../../assets/icons/HTML.svg"
import css from "../../assets/icons/CSS.svg"
import react from "../../assets/icons/React-Light.svg"
import redux from "../../assets/icons/Redux.svg"
import express from "../../assets/icons/ExpressJS-Light.svg"
import flask from "../../assets/icons/Flask-Light.svg"
import sqlite from "../../assets/icons/SQLite.svg"
import postgres from "../../assets/icons/PostgreSQL-Light.svg"
import heroku from "../../assets/icons/Heroku.svg"

export default function Skills() {
    return (
        <div className="skills-container" >
            <h2>Skills</h2>
            <ul id="list--skills" className="list">
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={js} alt="js" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={node} alt="node" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={python} alt="python" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={html} alt="html" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={css} alt="css" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={react} alt="react" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={redux} alt="redux" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={express} alt="express" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={flask} alt="flask" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={sqlite} alt="sqlite" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={postgres} alt="postgres" /></li>
                <li id="list-item--skills" className="list-item"><img id="img--skills" className="img" src={heroku} alt="heroku" /></li>
            </ul>
        </div>
    )
}
