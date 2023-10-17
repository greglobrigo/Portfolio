'use client'
import React, { useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal'
import './navbar.css';

export default function Navbar() {

  const downloadResume = () => {
    window.open('Resume.pdf');
  }
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <h1>glxd</h1>
          </div>
          <div className="gpt3__navbar-links_container">
            <Fade direction="left" delay={2000}>
              <p><a href="#home">Home</a></p>
            </Fade>
            <Fade direction="left" delay={2400}>
              <p><a href="#about">About</a></p>
            </Fade>
            <Fade direction="left" delay={2800}>
              <p><a href="#projects">Projects</a></p>
            </Fade>
            <Fade direction="left" delay={3200}>
              <p><a href="#contact">Contact</a></p>
            </Fade>
            <Fade direction="left" delay={3600}>
              <p onClick={downloadResume}>
                <a href="#resume">Resume</a></p>
            </Fade>
          </div>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Fade direction="up">
                  <p><a href="#home">Home</a></p>
                </Fade>
                <Fade direction="up" delay={200}>
                  <p><a href="#about">About</a></p>
                </Fade>
                <Fade direction="up" delay={400}>
                  <p><a href="#projects">Projects</a></p>
                </Fade>
                <Fade direction="up" delay={600}>
                  <p><a href="#contact">Contact</a></p>
                </Fade>
                <Fade direction="up" delay={800}>
                <p onClick={downloadResume}>
                    <a href="#resume">Resume</a></p>
                </Fade>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
