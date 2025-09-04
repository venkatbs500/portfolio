import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isMobile);

  return (
    <section className="min-h-screen w-full flex flex-row" id='home'>
      {/* Left Section */}
      <div className="md:w-3/4 w-full sm:flex justify-center items-center sm:mt-20 mt-20 c-space">
        <div className="w-full mx-auto flex flex-col">
          <p className="hero_tag text-gray_gradient italic">
            Hey! I&apos;m Venkat B S{" "}
            <span className="waving-hand text-white">👋</span>
          </p>
          <p className="sm:text-2xl text-xl font-medium text-white font-generalsans">
            Aspiring Software Engineer
          </p>
          <span className="text-white font-medium leading-8 sm:mt-22 mt-5">
            Aspiring Software Engineer who treats bugs like puzzles (and sometimes accidental pets 🐛). Passionate about learning, building, and turning caffeine into code.
          </span>
          <a href="https://drive.google.com/file/d/1bXL7j9tk24dcy7TihWVHbX4oc4WkLk-Z/view" target="_blank">
            <Button
              name="Resume"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-56 sm:mt-22 mt-10 !mx-0"
            />
          </a>

          <div className="flex gap-5 justify-self-end mt-10">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/venkat-bs-996275287/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/venkatbs500"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/github.svg" alt="github" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.instagram.com/venkat_._64/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/instagram.svg" alt="instagram" />
              </a>
            </div>
        
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/3 w-full md:flex justify-center items-center sm:mt-0 mt-20 hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          <img src="/public/assets/Photo.jpeg"></img>
        </div>
      </div>
      <div className="absolute bottom-[-2px] left-0 right-0 z-10 w-fit mx-auto">
        <a href="#about" className="w-fit">
          <img
            src="assets/scroll-down.gif"
            alt="scroll-down"
            className="w-16 h-16 mx-auto"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
