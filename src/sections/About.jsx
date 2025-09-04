import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
   const [copiedText, setCopiedText] = useState("");

 
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    setTimeout(() => {
      setCopiedText("");
    }, 2000);
  };
  return (
  
<section className="c-space my-20 px-4 sm:px-6 lg:px-12" id="about">
  <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
    
    {/* Intro */}
    <div className="col-span-1">
      <div className="grid-container">
        <img 
          src="assets/grid1.png" 
          alt="grid-1" 
          className="w-full h-56 sm:h-64 object-contain mx-auto" 
        />
        <div className="space-y-3">
          <p className="grid-headtext">Hi, I’m Venkat Bhoopalam Shivashankar</p>
          <p className="grid-subtext">
            I’m a Computer Science grad student who loves exploring new technologies and turning ideas into real-world solutions. From radar research to web apps, I’ve enjoyed building across different domains, and I’m now excited to grow further by tackling meaningful, real-world challenges.
          </p>
        </div>
      </div>
    </div>

    {/* Tech Stack */}
    <div className="col-span-1">
  <div className="grid-container">
    <div className="space-y-3">
      <p className="grid-headtext">Tech Stack</p>
      <p className="grid-subtext">
        I work with a mix of languages, frameworks, and tools to design and build scalable applications.
      </p>

      {/* Bullet Points */}
      <ul className="list-inside text-gray-300 text-sm sm:text-base space-y-1">
        <li><b>Languages:</b> Python, JavaScript, Java, C++</li>
        <li><b>Frontend:</b> React, Tailwind CSS</li>
        <li><b>Backend & Databases:</b> Node.js, Express, MongoDB, MySQL</li>
        <li><b>DevOps & Cloud:</b> Docker, Kubernetes, AWS</li>
        <li><b>Data & ML:</b> TensorFlow, PyTorch, Pandas, NumPy</li>
        <li><b>Collaboration & Tools:</b> GitHub, Postman, Figma</li>
      </ul>

      {/* Tech Stack Icons */}
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-5 place-items-center">
        {[
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
          { src: "https://cdn.simpleicons.org/pytorch/EE4C2C", alt: "PyTorch" },
          { src: "https://cdn.simpleicons.org/pandas/150458", alt: "Pandas" },
          { src: "https://cdn.simpleicons.org/numpy/013243", alt: "NumPy" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
        ].map((icon, i) => (
          <img 
            key={i} 
            src={icon.src} 
            alt={icon.alt} 
            className="h-10 w-10 transition-transform duration-200 hover:scale-110" 
          />
        ))}
      </div>
    </div>
  </div>
</div>


    {/* Globe */}
    <div className="col-span-1">
      <div className="grid-container flex flex-col items-center space-y-5">
        <div className="rounded-3xl flex justify-center items-center">
          <Globe
            height={260}
            width={260}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelsData={[
              { lat: 28.5383, lng: -81.3792, text: 'Orlando, FL', color: 'white', size: 80 }
            ]}
          />
        </div>
        <div className="space-y-3 text-center">
          <p className="grid-headtext">I’m flexible with time zones & locations</p>
          <p className="grid-subtext">Based in Orlando, FL — open to remote collaboration worldwide.</p>
          <a href="#contact">
            <Button name="Contact Me" isBeam containerClass="w-full mt-4" />
          </a>
        </div>
      </div>
    </div>

    {/* Passion */}
    <div className="xl:col-span-2">
      <div className="grid-container">
        <img 
          src="assets/grid3.png" 
          alt="grid-3" 
          className="w-full h-50 sm:h-64 object-contain mx-auto" 
        />
        <div className="space-y-2">
          <p className="grid-headtext">My Passion for Coding</p>
          <p className="grid-subtext">
            I enjoy coding because it feels like solving little puzzles every day. 
            Sometimes it’s smooth, sometimes it’s messy, but there’s always something new to learn. 
            What I like most is seeing small ideas slowly grow into something useful for others.
          </p>
        </div>
      </div>
    </div>

    {/* Contact */}
    <div className="col-span-1">
      <div className="grid-container justify-center">
        <img
          src="assets/grid4.png"
          alt="grid-4"
          className="w-full h-40 sm:h-48 object-cover rounded-xl"
        />
        <div className="space-y-5 text-center">
          <p className="grid-subtext">Contact me</p>
          {/* Email Copy */}
              <div
                className="copy-container flex items-center justify-center gap-2 cursor-pointer p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                onClick={() => handleCopy("venkatbs500@gmail.com")}
              >
                <img
                  src={copiedText === "venkatbs500@gmail.com" ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-white">
                  venkatbs500@gmail.com
                </p>
              </div>

              {/* Phone Copy */}
              <div
                className="copy-container flex items-center justify-center gap-2 cursor-pointer p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                onClick={() => handleCopy("+1 4072274878")}
              >
                <img
                  src={copiedText === "+1 4072274878" ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-white">
                  +1 4072274878
                </p>
              </div>
        </div>
      </div>
    </div>

  </div>
</section>


  );
};

export default About;
