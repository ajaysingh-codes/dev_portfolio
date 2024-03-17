import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { faCss3, faHtml5, faJava, faReact, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={15}/>
          </h1>
          <p>As a Senior Computer Science student at San Jose State University (graduating Fall 2024), I've mastered technologies including Java, Python, Node.js, PHP, SQL, Unix/Linux, Game design, and Machine Learning.</p>
          <p>Committed to continuous learning, I've expanded my skills through internships and online learning, focusing on React.js and Prompt Engineering in my current position as an AI Programmer for the Department of Innovation and Leadership (at SJSU).</p>
          <p>I am a passionate and forward-thinking software developer, eager to leverage my technical expertise and creativity to solve complex challenges in the tech industry.</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faJava} color="#DD0031"/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About