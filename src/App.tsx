import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

/**
 * ScrollToTop ensures that navigating to a different page 
 * resets the viewport back to the top-most pixel bounds.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

/**
 * AnimatedAppRoutes coordinates dynamic route matching 
 * and maps exit/entrance transitions with motion/react wait-modes.
 */
function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedAppRoutes />
      </Layout>
    </Router>
  );
}
