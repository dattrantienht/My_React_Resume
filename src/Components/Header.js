import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;
    const mouseScroll = "images/scroll-icon.gif";
    var networks= this.props.data.social.map(function(network){
      return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={[network.iconPack, network.icon]} /></a></li>
    })

    // let screenWidth = window.innerWidth;
    // let numParticles = screenWidth > 1024 ? 100 : screenWidth > 767 ? 65 : 25;

    return (
      <header id="home">
        {/* <ParticlesBg num={numParticles} className="pbg-l" type="cobweb" color="#00C8FF" bg={true} /> */}
        
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#testimonials">
              Testimonials
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>&nbsp;&nbsp;&nbsp;Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>&nbsp;&nbsp;&nbsp;Github
                </a>
              </ul>
            </Fade> */}
            <Fade>
            <ul className="social">
               {networks}
            </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <img alt="" src={mouseScroll}/>
          </a>
        </p>

      </header>
    );
  }
}

export default Header;
