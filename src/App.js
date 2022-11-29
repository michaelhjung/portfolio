import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Eduation";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import ProfileMenu from "./components/ProfileMenu";
import mjLogo from "./assets/logos/mj-logo.png";
import mjLogoDark from "./assets/logos/mj-logo-dark.png";

function App() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showLearnMore, setShowLearnMore] = useState(false);
    const handleProfileButtonClick = () => {
        if (!showProfileMenu) setShowProfileMenu(true);
        else setShowProfileMenu(false);
    }

    const closeProfileMenu = () => {
        setShowProfileMenu(false);
        const profileButtonImg = document.getElementById("mj-logo");
        profileButtonImg.src = mjLogo;
    }

    useEffect(() => {
        if (!showProfileMenu) return;
        if (showProfileMenu) document.addEventListener('click', closeProfileMenu);

        return () => document.removeEventListener('click', closeProfileMenu);
    });

    return (
        <div className="page-wrapper" >
            <img
                src={mjLogo}
                alt="mj"
                id="mj-logo"
                onMouseEnter={(e) => e.target.src = mjLogoDark}
                onMouseLeave={(e) => showProfileMenu ? e.target.src = mjLogoDark : e.target.src = mjLogo}
                onClick={handleProfileButtonClick}
            />
            {showProfileMenu && (
                <ProfileMenu showLearnMore={showLearnMore} setShowLearnMore={setShowLearnMore} />
            )}


            <Hero
                showLearnMore={showLearnMore}
                setShowLearnMore={setShowLearnMore}
                mjLogo={mjLogo}
                mjLogoDark={mjLogoDark}
            />
            <Skills />
            <Projects />
            <Education />
            <Resume />
            <ContactMe />
        </div>
    );
}

export default App;
