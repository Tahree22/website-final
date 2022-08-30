import logo from '../assets/logo.svg';
import heroImage from '../assets/image.png';
import twitterLogo from '../assets/twitter.svg';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import software from '../assets/software.svg';
import webdev from '../assets/webdevelopment.svg';
import webdesign from '../assets/webdesign.svg';
import skills from '../assets/skills.svg';
import { useState } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globalStyles'
import { LightTheme, DarkTheme } from '../theme'

function LandingPage() {
  const [theme, setTheme] = useState('light')
  
  const toggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

    return (
    <ThemeProvider theme={ theme === 'light' ? DarkTheme : LightTheme }>
      <>
      <GlobalStyles />
      <nav className="nav-bar">
        <img src={logo} alt="logo" />

        <div className="nav-links">
          <ul className="nav-text">
            <a href="#about-sec" className="link-border"><li>About me</li></a>
            <a href="#skills-sec" className="link-border"><li>Services</li></a>
            <a href="#contact-sec" className="link-border"><li>Contact</li></a>
          </ul>
          <div id="switch-btn">
            <label class="switch">
              <input id="checkbox" type="checkbox" onClick={toggler}/>
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-txt">
          <h1>Hi, I am <span>Tari Akinnukawe</span></h1>
        <p>Frontend Developer</p>
        <button className="cv-btn">Download Resume</button></div>
        <div className="hero-img" >
          <img src={heroImage} alt="hero" />
        </div>
      </section>
      <section className="about" id="about-sec">
        <h2>About</h2>
        <p>I love programming and have a keen interest in everything
          that can be built on the web. I am passionate about helping 
          people develop ideas and seamless web experiences through visually 
          appealing User Interfaces. I also enjoy film, food, music, hiking
          and the Formula 1 sport. In my spare time, I write to poetry
          and learn the French language.
        </p>
        <div className="socials">
          <div>
            <a href={"https://mobile.twitter.com/tytypicasso"}>
            <img src={twitterLogo} alt="twitter" />
            <p>Twitter</p>
            </a>
          </div>
          <div>
            <a href={"https://www.linkedin.com/in/adeyinka-akinnukawe-664a37139/"}>
            <img src={linkedInLogo} alt="linkedin" />
            <p>LinkedIn</p></a>
          </div>
          <div>
            <a href={"https://github.com/Tahree22"}>
            <img src={githubLogo} alt="github" />
            <p>Git hub</p></a>
          </div>
        </div>
      </section>
      <section className="skills" id="skills-sec">
        <h2>What I do</h2>
        <div className="skills-cards">
        <div className="card">
          <img src={software} alt="Software" />
          <h3>Software <span>Development</span></h3>
        </div>
        <div className="card">
          <img src={webdev} alt="Web Dev"/>
          <h3>Web <span>Development</span></h3>
        </div>
        <div className="card">
          <img src={webdesign} alt="Web design" />
          <h3>Web <span>Design</span></h3>
        </div>
        </div>
      </section>
      <section className="my-skills">
        <h2>My skills</h2>
      <div className="skills-img">
        <img src={skills} alt="skills" />
        </div>
      </section>
      </>
    </ThemeProvider>   
    )
  }

  export default LandingPage