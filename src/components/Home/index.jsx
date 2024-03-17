import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/Animation - 1710664195697.json';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'A', 'j', 'a', 'y', ',']
  const jobArray = ['f', 'u', 'l', 'l', '-', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId);
}, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i, </span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={nameArray} 
          idx={15} />
          <br />
          <AnimatedLetters 
          letterClass={letterClass} 
          strArray={jobArray} 
          idx={18} />
          </h1>

          <h2>Web Developer | AI Programmer | Prompt Engineer</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
          <div className="hero-image">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
