import React from "react";
import { Linkedin, Mail } from "lucide-react";
import profileImg from "../public/assets/profileImg.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6TTI4LjUgMThsLTMgMS41di03LjVsMy0xLjV2N501eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <div className="mb-6 inline-block px-3 py-1 bg-blue-200 bg-opacity-25 rounded-full text-sm text-blue-100 backdrop-blur-sm">
            Software Engineer & Computer Engineer
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Renan Ferreira
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
            Full-stack software engineer using modern languages and frameworks.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:renan.s.frr@gmail.com"
              className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="mr-2" size={18} />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/renansfrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium border border-blue-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin className="mr-2" size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 opacity-75 blur"></div>
            <div className="bg-blue-800 rounded-full w-56 h-56 relative flex items-center justify-center shadow-2xl">
              <img
                src={profileImg}
                alt="Renan Ferreira"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-20 text-gray-50 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,42.7C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
