import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
    return (
        <div className="page-wrapper" >
            <Hero />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default App;
