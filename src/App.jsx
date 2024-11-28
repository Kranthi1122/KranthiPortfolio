import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import reactImage from "./assets/React.png";
import linkedinImage from "./assets/linkedin.png";
import gmailImage from "./assets/gmail.png";
import githubImage from "./assets/github.png";
import nodeImage from "./assets/NODE.png";
import javascriptImage from "./assets/javascript.png";
import expressImage from "./assets/express.png";
import HTMLIMage from "./assets/HTML.png";
import cssImage from "./assets/CSS.png";
import mongodbIMAGE from "./assets/MONGODB.png";
import whatsappImage from "./assets/whatsapp.png";
import pharmaImage from "./assets/pharma.jpg";
import thunderImage from "./assets/thunder.jpg";
import vueImage from "./assets/VUE.png";
import "./App.css";
import image from "./assets/kranthiProfilePic.jpg";
import SkillCards from "./Components/Skills";
import CountUp from "react-countup";
function App() {
  const [count, setCount] = useState(0);
  const fileUrl = "/kranthiResume.pdf";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form", formState);
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <>
      <div className='w-screen h-screen'>
        <div class='bg-gradient-to-b from-green-50 to-green-100 h-dvh'>
          <header className='fixed top-0 w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50'>
            <div className='px-4 mx-auto sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16 lg:h-20'>
                {/* Logo Section */}
                <div className='flex-shrink-0 flex items-center'>
                  <a href='#' title='' className='flex'>
                    <img
                      className='w-auto h-10 rounded-full'
                      src={image}
                      alt='Logo'
                    />
                  </a>
                  <h2 className='text-base text-black font-semibold ml-2 tracking-wider'>
                    KRANTHI KUMAR
                  </h2>
                </div>

                {/* Hamburger Button for Small Screens */}
                <button
                  type='button'
                  onClick={toggleMenu}
                  className='inline-flex p-1 text-black transition-all duration-200 border border-white bg-white lg:hidden focus:bg-gray-100 hover:bg-gray-100'
                >
                  {/* Menu Icon */}
                  <svg
                    className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>

                  {/* Close Icon */}
                  <svg
                    className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>

                {/* Navigation Links for Large Screens */}
                <div className='hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10'>
                  <a
                    href='#home'
                    className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                  >
                    Home
                  </a>
                  <a
                    href='#about'
                    className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                  >
                    About
                  </a>
                  <a
                    href='#skills'
                    className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                  >
                    Skills
                  </a>
                  <a
                    href='#projects'
                    className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                  >
                    Projects
                  </a>
                  <a
                    href='#contact'
                    className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Menu for Small Screens */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:hidden bg-white shadow-lg`}
            >
              <div className='flex flex-col items-start p-4 space-y-4'>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href='#home'
                  className='block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                >
                  Home
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href='#about'
                  className='block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                >
                  About
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href='#skills'
                  className='block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                >
                  Skills
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href='#projects'
                  className='block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                >
                  Projects
                </a>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  href='#contact'
                  className='block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'
                >
                  Contact
                </a>
              </div>
            </div>
          </header>

          <section class='py-10 sm:py-16 mt-20 lg:py-24' id='home'>
            <div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div class='fixed top-72 left-10 bg-white text-white p-4 rounded-lg shadow-lg hidden lg:block animate-fade-up'>
                <a
                  href='https://www.linkedin.com/in/kranthi-pusala'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={linkedinImage}
                    alt='LinkedIn'
                    className='h-10 w-10 rounded mb-5 mt-5 cursor-pointer'
                  />
                </a>
                <a
                  href='https://github.com/Kranthi1122'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={githubImage}
                    alt=''
                    className='h-10 w-10 rounded mb-5'
                  />
                </a>
                <a
                  href='mailto:kranthinaidu80@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={gmailImage}
                    alt=''
                    className='h-10 w-10 rounded mb-5'
                  />
                </a>
                <a
                  href='https://wa.me/918639897116'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={whatsappImage}
                    alt='WhatsApp'
                    class='h-10 w-10 rounded mb-5'
                  />
                </a>
              </div>

              <div class='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
                <div>
                  <h1 class='text-4xl font-bold text-black sm:text-6xl lg:text-7xl animate-fade-right'>
                    I'm{" "}
                    <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                      K
                    </span>
                    ranthi MERN Stack
                    <div class='relative inline-flex'>
                      <span class='absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]'></span>
                      <h1 class='relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
                        Developer
                      </h1>
                    </div>
                  </h1>

                  {/* <p class='mt-8 text-base text-black sm:text-xl animate-fade-right'>
                    Software Engineer with over 1.7 years of experience in
                    developing web applications, skilled in both frontend and
                    backend technologies, including React, Vue.js, Angular, and
                    MondoDB, Node.js with Express. Committed to delivering
                    high-quality, efficient code and innovative software
                    solutions. I possess strong problem-solving abilities and a
                    focus on performance optimization. I am eager to advance my
                    expertise and contribute to impactful projects within a
                    dynamic organization
                  </p> */}
                  <p class='mt-8 text-base text-black sm:text-xl animate-fade-right'>
                    Passionate MERN Stack Developer with expertise in building
                    dynamic, scalable web applications using MongoDB, Express,
                    React, and Node.js. Committed to delivering clean, efficient
                    code and seamless user experiences.
                  </p>

                  <div class='mt-10 sm:flex sm:items-center sm:space-x-8'>
                    <a
                      href='#about'
                      title=''
                      class='inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 animate-fade-right'
                      role='button'
                    >
                      {" "}
                      About Me{" "}
                    </a>
                    <a
                      href='#'
                      title=''
                      class='inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80 animate-fade-right'
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = fileUrl;
                        link.download = "kranthi-resume.pdf"; // File name to be downloaded
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-10 mr-2 animate-bounce'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                      </svg>
                      Download Resume
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    class='w-full rounded-3xl animate-fade-down z-0'
                    src={image}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section class='py-10 bg-gray-100 sm:py-16 lg:py-24' id='about'>
          <div class='max-w-5xl px-4 mx-auto sm:px-6 lg:px-8'>
            <div class='max-w-2xl mx-auto text-center animate-fade-right'>
              <h2 class='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
                Numbers Speak My Experience
              </h2>
              <p class='mt-3 text-xl leading-relaxed text-gray-600 md:mt-8'>
                With over 1.7 years of experience as a skilled MERN Stack
                Developer, I have honed my expertise in crafting dynamic,
                high-performing web applications. I have successfully delivered
                2+ projects, demonstrating a strong commitment to clean code,
                scalable architecture, and user-centric design. My passion for
                innovation drives me to continuously learn and implement the
                latest technologies, ensuring impactful solutions tailored to
                client needs."
              </p>
            </div>

            <div class='grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-2'>
              <div className='animate-fade-up delay-150'>
                <h3 class='font-bold text-7xl'>
                  <span class='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'>
                    {" "}
                    <CountUp
                      start={0}
                      end={1.7}
                      decimals={1}
                      duration={7}
                      suffix='+'
                    />{" "}
                  </span>
                </h3>
                <p class='mt-4 text-xl font-medium text-gray-900'>
                  Years in Experience
                </p>
                <p class='text-base mt-0.5 text-gray-500'>
                  Creating the successful path
                </p>
              </div>

              <div className='animate-fade-up delay-150'>
                <h3 class='font-bold text-7xl'>
                  <span class='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'>
                    {" "}
                    <CountUp start={0} end={2} duration={7} suffix='+' />{" "}
                  </span>
                </h3>
                <p class='mt-4 text-xl font-medium text-gray-900'>
                  Projects delivered
                </p>
                <p class='text-base mt-0.5 text-gray-500'>In last 2 years</p>
              </div>
            </div>
          </div>
        </section>
        <section
          class='py-10 bg-gray-100 sm:py-16 lg:py-24 border border-t-2 border-gray-300'
          id='skills'
        >
          <div class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div class='max-w-2xl mx-auto text-center animate-fade-down delay-150'>
              <h2 class='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
                Skills
              </h2>
              <p class='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
                Experienced Full-Stack Developer skilled in the MERN stack,
                creating dynamic web applications with React.js, Node.js, and
                MongoDB. Proficient in building responsive UIs, robust APIs, and
                deploying scalable solutions using modern tools like Tailwind
                CSS and Vercel.
              </p>
            </div>

            <div class='grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={HTMLIMage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>HTML</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={cssImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>CSS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={javascriptImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>JavaScript</p>
                    </div>
                    <svg
                      class='block w-6 h-6 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={reactImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>React</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={vueImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>Vue</p>
                    </div>
                    <svg
                      class='hidden w-5 h-5 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={nodeImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>Node Js</p>
                    </div>
                    <svg
                      class='hidden w-5 h-5 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={expressImage}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>Express Js</p>
                    </div>
                    <svg
                      class='hidden w-5 h-5 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class='overflow-hidden rounded shadow transform transition duration-300  flex justify-center items-center h-50 w-60 bg-white animate-fade-left animate-delay-75 hover:scale-105'>
                <div class='p-8'>
                  <div class='flex items-center'>
                    <img
                      class='flex-shrink-0 w-12 h-auto'
                      src={mongodbIMAGE}
                      alt=''
                    />
                    <div class='ml-5 mr-auto'>
                      <p class='text-xl font-semibold text-black'>MongoDB</p>
                    </div>
                    <svg
                      class='hidden w-5 h-5 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class='py-10 bg-gray-50 sm:py-16 lg:py-24' id='projects'>
          <div class='flex flex-col lg:flex-row gap-6 mt-12 px-4'>
            <div class='flex flex-col bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/2 animate-fade-right'>
              <div class='flex items-center'>
                <img
                  src={pharmaImage}
                  alt='Project 1'
                  class='w-16 h-16 rounded-full'
                />
                <h3 class='text-2xl font-bold text-gray-800 ml-4'>
                  Project 1: Digital Air Series
                </h3>
              </div>
              <p class='mt-4 text-gray-600'>
                I developed a dynamic web application leveraging Vue.js with a
                strong emphasis on user interface and user experience design.
                The application incorporates real-time communication features
                through socket connections, ensuring seamless and interactive
                user interactions. To handle message exchange efficiently, I
                implemented the MQTT protocol, enabling reliable message
                publishing and subscription across topics. Expanding my
                expertise, I transitioned into backend development using
                Node.js, adopting the Koa.js framework to streamline routing and
                middleware management. For robust database operations, I
                integrated Knex.js, which facilitated efficient SQL database
                management and query execution, ensuring the backend was both
                powerful and maintainable.
              </p>
              <div class='mt-4'>
                <h4 class='text-lg font-semibold text-gray-800'>
                  Skills Highlighted:
                </h4>
                <ul class='list-disc list-inside mt-2 text-gray-700'>
                  <li>Vue & Antd CSS</li>
                  <li>Node.js & Express & Koa</li>
                  <li>MongoDB & Postgress</li>
                  <li>Mqtt & Kubernetes</li>
                </ul>
              </div>
            </div>

            <div class='flex flex-col bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/2 animate-fade-left'>
              <div class='flex items-center'>
                <img
                  src={thunderImage}
                  alt='Project 2'
                  class='w-16 h-16 rounded-full'
                />
                <h3 class='text-2xl font-bold text-gray-800 ml-4'>
                  Project 2: Request Thunder
                </h3>
              </div>
              <p class='mt-4 text-gray-600'>
                As part of a company initiative, I contributed to the
                development of an API load testing tool designed to generate
                fake API hits, ensuring the standardization and robustness of
                applications. I created a user-friendly interface using React,
                leveraging React Context for efficient state management.
                Additionally, I integrated RESTful APIs to manage data
                interactions seamlessly, enabling reliable and effective testing
                workflows.
              </p>
              <div class='mt-4'>
                <h4 class='text-lg font-semibold text-gray-800'>
                  Skills Highlighted:
                </h4>
                <ul class='list-disc list-inside mt-2 text-gray-700'>
                  <li>React & Antd CSS</li>
                  <li>Node & Express</li>
                  <li>MongoDB & Sql</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          class='py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24'
          id='contact'
        >
          <div class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div class='max-w-2xl mx-auto text-center animate-fade-left animate-delay-100'>
              <h2 class='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
                Contact me
              </h2>
              <p class='max-w-xl mx-auto mt-4 text-base leading-relaxed text-white'>
                I'd love to hear from you! Whether you have a question,
                feedback, or want to collaborate on a project, feel free to
                reach out. I'm always open to new opportunities and connections.
                Let's get in touch!
              </p>
            </div>

            <div class='max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20'>
              <div class='grid items-stretch grid-cols-1 lg:grid-cols-5 animate-fade-right animate-delay-100'>
                <div class='lg:col-span-3'>
                  <div class='p-6 sm:p-10'>
                    <h3 class='text-2xl font-semibold text-black'>
                      Send me a message
                    </h3>

                    <form
                      action='https://formspree.io/f/meqyeqya'
                      method='post'
                      class='mt-8'
                    >
                      <div class='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                        <div>
                          <label
                            hrmlFor='name'
                            class='text-base font-medium text-gray-900'
                          >
                            {" "}
                            Your name{" "}
                          </label>
                          <div class='mt-2.5 relative'>
                            <input
                              type='text'
                              required
                              value={formState.name}
                              onChange={onChange}
                              name='name'
                              id='name'
                              placeholder='Your name'
                              class='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor='email'
                            class='text-base font-medium text-gray-900'
                          >
                            {" "}
                            Your email{" "}
                          </label>
                          <div class='mt-2.5 relative'>
                            <input
                              type='email'
                              name='email'
                              id='email'
                              placeholder='email'
                              required
                              value={formState.email}
                              onChange={onChange}
                              class='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor='phone'
                            class='text-base font-medium text-gray-900'
                          >
                            {" "}
                            Phone number{" "}
                          </label>
                          <div class='mt-2.5 relative'>
                            <input
                              type='tel'
                              name='phone'
                              id='phone'
                              placeholder='phone number'
                              required
                              value={formState.phone}
                              onChange={onChange}
                              class='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor='company'
                            class='text-base font-medium text-gray-900'
                          >
                            {" "}
                            Company name{" "}
                          </label>
                          <div class='mt-2.5 relative'>
                            <input
                              type='text'
                              name='company'
                              id='company'
                              placeholder='Company name'
                              required
                              value={formState.company}
                              onChange={onChange}
                              class='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                            />
                          </div>
                        </div>

                        <div class='sm:col-span-2'>
                          <label
                            htmlFor='message'
                            class='text-base font-medium text-gray-900'
                          >
                            {" "}
                            Message{" "}
                          </label>
                          <div class='mt-2.5 relative'>
                            <textarea
                              name='message'
                              id='message'
                              placeholder='Message'
                              value={formState.message}
                              onChange={onChange}
                              class='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                              rows='4'
                            ></textarea>
                          </div>
                        </div>

                        <div class='sm:col-span-2'>
                          <button
                            type='submit'
                            class='inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700'
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class='bg-gray-100 lg:col-span-2'>
                  <div class='h-full p-6 sm:p-10'>
                    <div class='flex flex-col justify-between h-full'>
                      <div>
                        <h4 class='text-2xl font-semibold text-black'>
                          Contact info
                        </h4>

                        <div class='mt-8 space-y-7'>
                          <div class='flex items-start'>
                            <svg
                              class='flex-shrink-0 text-blue-600 w-7 h-7'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                              />
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                            <span class='block ml-3 text-base text-gray-900'>
                              {" "}
                              Andhra Pradesh, Vijayawada, NTR Dist, 520008{" "}
                            </span>
                          </div>

                          <div class='flex items-start'>
                            <svg
                              class='flex-shrink-0 text-blue-600 w-7 h-7'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                              />
                            </svg>
                            <span class='block ml-3 text-base text-gray-900'>
                              {" "}
                              kranthinaidu80@gmail.com{" "}
                            </span>
                          </div>

                          <div class='flex items-start'>
                            <svg
                              class='flex-shrink-0 text-blue-600 w-7 h-7'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                              />
                            </svg>
                            <div class='ml-3'>
                              <span class='block text-base text-gray-900'>
                                {" "}
                                +91 8639897116{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='mt-8 lg:mt-auto'>
                        <hr class='border-gray-200' />
                        <div class='flex items-center justify-between mt-7'>
                          <p class='text-lg font-semibold text-black'>
                            Follow me on
                          </p>

                          <ul class='flex items-center justify-end space-x-3'>
                            <li>
                              <a
                                href='https://www.facebook.com/kranthi.naidu.524'
                                title=''
                                class='
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                '
                              >
                                <svg
                                  class='w-4 h-4'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                  fill='currentColor'
                                >
                                  <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a
                                href='https://www.instagram.com/kranthi_pusala/'
                                title=''
                                class='
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                '
                              >
                                <svg
                                  class='w-4 h-4'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                  fill='currentColor'
                                >
                                  <path d='M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z'></path>
                                  <circle
                                    cx='16.806'
                                    cy='7.207'
                                    r='1.078'
                                  ></circle>
                                  <path d='M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z'></path>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a
                                href='https://github.com/Kranthi1122'
                                title=''
                                class='
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-gray-300
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                '
                              >
                                <svg
                                  class='w-4 h-4'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                  fill='currentColor'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
                                  ></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='py-10 bg-slate-400 sm:py-16'>
          <div class='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
            <div class='text-center sm:flex sm:items-center sm:justify-center sm:text-left'>
              <h2 class='text-xl font-bold text-white'>
                © 2024 Kranthi Kumar Pusala. All rights reserved.
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
