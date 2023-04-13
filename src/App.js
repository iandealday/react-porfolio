import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillGitlab} from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';
import picture from './images/ian-nobg.png'
import logo from './images/cd-logo.png'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900">
        <section className='min-h-screen'>
          <nav className='py-6 mb-12 flex flex-wrap justify-between items-center'>
            <img className='w-20' src={logo} alt='logo' />
            <div className="flex items-center">
              <input className="hidden" type="checkbox" id="menu-toggle" />
              <label className="cursor-pointer md:hidden block" htmlFor="menu-toggle">
                <svg className="fill-current text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" /></svg>
              </label>
              <ul className="flex-grow hidden md:flex md:items-center">
                <li>
                  <p className='text-xl font-roboto px-3 py-2 rounded-md ml-8 dark:text-white'>About Me</p>
                </li>
                <li>
                  <p className='text-xl font-roboto px-3 py-2 rounded-md ml-8 dark:text-white'>Experience</p>
                </li>
                <li>
                  <p className='text-xl font-roboto px-3 py-2 rounded-md ml-8 dark:text-white'>Projects</p>
                </li>
                <li>
                  <p className='text-xl font-roboto px-3 py-2 rounded-md ml-8 dark:text-white'>Contact</p>
                </li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-3 py-2 rounded-md ml-8 " href='https://github.com/iandealday/react-porfolio' target='_blank' rel="noreferrer">Source Code</a>
                </li>
              </ul>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl ml-10 dark:text-white' onClick={() => setDarkMode(!darkMode)} />
            </div>
          </nav>

          <div className='text-center p-3'>
            <h2 className='text-5xl text-teal-600 font-medium md:text-6xl'>Christoper Ian de Alday</h2>
            <h3 className='text-gray-500 text-2xl py-2 md:text-3xl'>Full Stack Web Developer</h3>
            <p className='text-md py-1 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              As a designer and developer, I want to be with companies around the world to create amazing websites,
              app and services that are simple, but elegant and easy to use
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-1 text-gray-600'>
            <a href="https://iandealday.github.io/webportfolio/" target='_blank' rel="noreferrer">
              <TbWorldWww />
            </a>
            <a href="https://gitlab.com/ian.dealday" target='_blank' rel="noreferrer">
              <AiFillGitlab />
            </a>
            <a href="https://github.com/iandealday" target='_blank' rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/christoper-ian-de-alday/" target='_blank' rel="noreferrer">
              <AiFillLinkedin />
            </a>
          </div>

          <div className='bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 mx-auto md:h-96 md:w-96 flex justify-center items-center'>
            <img className="object-contain" src={picture} alt='Ian'/>
          </div>
        </section>

        {/* <section className=''>
          <div className=''>
            <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md py-1 text-gray-600 dark:text-white'>Since the beginning of my journey as a freelance developer, I've done remote work for <span className='text-teal-500'>agencies</span> consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create for both business and consumer use.</p>
          </div>
        </section> */}

      </main>
    </div>
  );
}

export default App;