import React from 'react';
import Hero from "./sections/Hero.jsx";
import ShowcaseSections from "./sections/ShowcaseSections.jsx";
import Navbar from "./components/Navbar.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
       <>
        <Navbar/>
        <Hero/>
        <ShowcaseSections/>
        <LogoSection/>
        <FeatureCards/>
        <ExperienceSection/>
        <TechStack/>
        <Contact/>
        <Footer/>
       </>
    );
};

export default App;