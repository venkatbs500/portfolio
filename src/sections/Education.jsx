import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { education } from "../constants/index.js";

const Education = () => {
  const [animationName, setAnimationName] = useState("idle");

  const pickAnim = (item, fallback = "Reading") =>
    item.animation && item.animation.trim() ? item.animation : fallback;

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <p className="head-text mb-12">Education 🎓</p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Education list */}
          <div className="flex flex-col space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setAnimationName(pickAnim(item))}
                onMouseLeave={() => setAnimationName("idle")}
                className="cursor-default bg-black-100 hover:bg-black-200 hover:shadow-xl rounded-xl p-6 transition-all duration-300 ease-in-out border border-gray-800"
              >
                {/* Logo + School */}
                <div className="flex items-center gap-4 mb-3">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      className="w-12 h-12 object-contain rounded-md bg-white p-1"
                    />
                  )}
                  <div>
                    <p className="font-bold text-lg text-white">{item.school}</p>
                    <p className="text-sm text-gray-400">
                      {item.degree} — <span>{item.duration}</span>
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {(item.subjects || item.semesters) && (
                  <Link
                    to={`/subjects/${index}`}
                    className="mt-4 inline-block text-blue-400 hover:text-blue-300 text-sm underline transition"
                  >
                    View Subjects →
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right: 3D Developer Model */}
<div className="w-full h-[400px] lg:h-full bg-black-100 rounded-xl shadow-lg border border-gray-800 flex items-center justify-center">
  <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={0.8} />
    <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} />
    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

    <Suspense fallback={<CanvasLoader />}>
      <Developer
        key={animationName}
        scale={5}          // ⬅️ smaller size
        position-y={-8}  // ⬅️ move up a little
        animationName={animationName}
      />
    </Suspense>
  </Canvas>
</div>

        </div>
      </div>
    </section>
  );
};

export default Education;
