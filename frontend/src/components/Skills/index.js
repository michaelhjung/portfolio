import { useEffect } from "react"
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

    useEffect(() => {
        const skills = document.querySelectorAll(".list-item--skills");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show-skill", entry.isIntersecting);
                // if (entry.isIntersecting) observer.unobserve(entry.target);
            });
        }, { threshold: 0.8 });

        skills.forEach(skill => {
            observer.observe(skill);
        });
    }, []);


    return (
        <div className="skills-container" >
            <h2>Skills</h2>
            <ul className="list list--skills">
                <li className="list-item list-item--skills"><img className="img img--skills" src={js} alt="js" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={node} alt="node" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={python} alt="python" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={html} alt="html" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={css} alt="css" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={react} alt="react" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={redux} alt="redux" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={express} alt="express" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={flask} alt="flask" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={sqlite} alt="sqlite" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={postgres} alt="postgres" /></li>
                <li className="list-item list-item--skills"><img className="img img--skills" src={heroku} alt="heroku" /></li>
            </ul>
        </div>
    )
}
