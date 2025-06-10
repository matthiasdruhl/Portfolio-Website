import ".././index.css";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Homepage() {
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="h-1/4 min-w-200 w-full flex">
        <div className="w-3/20"> </div>
        <div className="w-17/20 bg-black flex flex-col  justify-end mb-2">
          <h1 className="text-3xl font-bold">Hey, I'm Matthias Druhl</h1>
          <h2 className="text-xl text-gray-400 mt-1">Computer Scientist</h2>
        </div>
      </div>

      <div className="w-full flex flex-row h-3/4">
        <div className="w-1/2 min-w-100  h-full flex text-white">
          <div className="w-3/10 h-full"></div>
          <div className="w-7/10 h-full">
            <div className="gap-4 text-2xl">
              <h1 className="text-white text-xl mb-3">Socials:</h1>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300 text-blue-400">
                  <FaLinkedin />
                  <p className="text-center">LinkedIn...</p>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300 text-blue-400">
                  <FaGithub />
                  <p className="text-center">GitHub...</p>
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300 text-blue-400">
                  <FaInstagram />
                  <p className="text-center">Instagram...</p>
                </div>
              </a>
              <a
                href="mailto:youremail@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300 text-blue-400">
                  <FaEnvelope />
                  <p className="text-center">Email...</p>
                </div>
              </a>
            </div>

            <div className="gap-4 text-lg mt-5">
              <h1 className="text-white text-xl mb-3">Projects:</h1>
              <a href="">
                <div className="flex items-center text-base space-x-2 mb-1 hover:text-orange-300">
                  <p className="text-center text-blue-400">Project 1: </p>
                  <p className="text-center">Project Skils Used</p>
                </div>
              </a>
              <a href="">
                <div className="flex items-center text-base space-x-2 mb-1 hover:text-orange-300">
                  <p className="text-center text-blue-400">Project 2: </p>
                  <p className="text-center">Skils Used</p>
                </div>
              </a>
              <a href="">
                <div className="flex items-center text-base space-x-2 mb-3 hover:text-orange-300">
                  <p className="text-center text-blue-400">More... </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 min-w-100 h-full text-white">
          <h1 className="text-xl mb-3">My Journey</h1>
          <div className="h-20 h-fit w-3/4 mb-5 border-2 border-blue-400 min-w-50 rounded-md">
            <div className="ml-8 p-3 flex flex-col justify-center h-9/10">
              <h2 className="text-base font-bold">
                Georgia Institute of Technology
              </h2>
              <h2 className="text-base">
                B.S. Computer Science (Information Infonetworks/ Intelligence
                Threads)
              </h2>
            </div>
            <div className="w-1/2 h-1 bg-blue-300"></div>
          </div>
          <div className="h-20 h-fit mb-3 w-3/4 border-2 border-blue-400 min-w-50 rounded-md">
            <div className="ml-8 p-3 flex  items-center h-9/10">
              <h2 className="text-base font-bold mr-3">
                United States Air Force
              </h2>
              <h2 className="text-base">Software Engineering Intern</h2>
            </div>
            <div className="w-1/4 h-1 bg-blue-300"></div>
          </div>
          <div className="h-20 h-fit mb-3 w-3/4 border-2 border-blue-400 min-w-50 rounded-md">
            <div className="ml-8 p-3 flex  items-center h-9/10">
              <h2 className="text-base font-bold mr-3">
                Georgia Tech Research Institute
              </h2>
              <h2 className="text-base">Student Intern</h2>
            </div>
            <div className="w-1/4 h-1 bg-blue-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
