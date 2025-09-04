import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Subjects from "./sections/Subjects"; // new page

const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto">
        <Navbar />

        <Routes>
          {/* Home page layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Subjects detail page */}
          <Route path="/subjects/:id" element={<Subjects />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
