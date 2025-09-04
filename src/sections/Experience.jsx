import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { workExperiences, calculateSizes } from "../constants/index.js";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const sizes = calculateSizes(isMobile);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Work Experience 💼</p>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Left side (3D model) */}
          <div className="w-full h-[400px] lg:h-[600px] relative flex items-center justify-center">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <HeroCamera isMobile={isMobile}>
                  <HackerRoom
                    scale={sizes.deskScale}
                    position={sizes.deskPosition}
                    rotation={[0.2, -3.7, 0]}
                  />
                </HeroCamera>
                <group>
                  <Target position={sizes.targetPosition} />
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition} />
                  <Rings position={sizes.ringPosition} />
                </group>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
          </div>

          {/* Right side (experiences) */}
          <div className="flex flex-col space-y-6">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() =>
                  setAnimationName(item.animation.toLowerCase())
                }
                onPointerOut={() => setAnimationName("idle")}
                className="group bg-black-100 hover:bg-black-200 hover:shadow-lg rounded-lg transition-all duration-300 ease-in-out p-5 flex gap-4"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <p className="font-bold text-base text-white-800">
                    {item.name}
                  </p>
                  <p className="text-sm mb-2 text-gray-400">
                    {item.pos} — <span>{item.duration}</span>
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 group-hover:text-white transition-all duration-300 ease-in-out">
                    {item.title.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
