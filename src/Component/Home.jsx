import React, { useState,useRef,useEffect } from 'react';
import { heading } from './File';
import { secondHeading } from './File';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { models } from './File';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
const [selectedTab, setSelectedTab] = useState(models[0].id); 
const contentRef = useRef(null);
const itemRefs = useRef([]);

useEffect(() => {
  const activeIndex = models.findIndex((img) => img.id === selectedTab);
  if (contentRef.current && itemRefs.current[activeIndex]) {
    const activeCard = itemRefs.current[activeIndex];

    contentRef.current.scrollTo({
      left: activeCard.offsetLeft - contentRef.current.offsetWidth / 2 + activeCard.offsetWidth / 2,
      behavior: "smooth",
    });
  }
}, [selectedTab, models]);;




 return (
    <>
      <header className="headerContainer">
        <nav className="navbar">
          <img src="/images/image3.webp" alt="Logo" className="logo" />

          <div className="iconContainer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="icon" />
            )}
          </div>

          <ul className={`heading ${menuOpen ? 'show' : ''}`}>
            {heading.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="itemContainer">
                  {item.name}
                </a>
              </li>
            ))}
          
            <li>
              <button className="firstbtn mobile-only">Get Started Now</button> 
            </li>
            
          </ul>

          <div className="btnContainer">
            <h3 className="logindiv">Login</h3>
            <button className="firstbtn">Get Started Now</button>
          </div>
        </nav>
        <div className="firstContainer">
          <p className="firstdiv">
            Leverage on Automation
            <span className="myh2">
              AI Models for <br /> Business Solutions
            </span>
          </p>
          <h4 className="myh4">
            Leverage the power of AI to automate, analyze and optimize your workflow.
            Our <br /> specialized models are designed to fit different business needs.
          </h4>
          <button  className='secondGetStart'>Get Started Now</button>
        </div>
      </header>

      <main className="mainContainer">
        <section className='secondSection'>
          <h6 className='h6div'>Join 4,000+ companies already growing</h6>
          <ul className='secondingHeading'>
            {secondHeading.map((item, index) => (
              <li key={index} className='eachImage'>
                <img src={item.img} alt={item.name} className='img' />
                {item.name}
              </li>
            ))}
          </ul>
        </section>

        <section className='thirdSection'>
          <h2 className='secondh2'>AI Models tailored for your <br/> business needs
          <span className='secondh5'>
            Leverage the power of AI to automate, analyze, and optimize your workflow.
            Our <br/>specialized models are designed to fit different business needs.
          </span>
          </h2>
         
         
         
     
          <div className="container">
      <div className="tabContainer">
        {models.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedTab(img.id)}
            className={`tabButton ${selectedTab === img.id ? "active" : ""}`}
          >
            {img.name}
          </button>
        ))}
      </div>

    
      <div className="contentWrapper" ref={contentRef}>
       
      <div
    className="displayContainer ghost"
    ref={(el) => (itemRefs.current[-1] = el)}
  >
    <div className="descDiv">
      <h3 className="title">{models[models.length - 1].name}</h3>
      <p className="description">{models[models.length - 1].desc}</p>
      <button className="actionButton">{models[models.length - 1].action}</button>
    </div>
    <img src={models[models.length - 1].img} alt="ghost-start" className="image" />
  </div>


        {models.map((img, index) => (
          <div
            key={img.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`displayContainer ${selectedTab === img.id ? "activeContent" : "inactiveContent"}`}
          >
            <div className="descDiv">
              <h3 className="title">{img.name}</h3>
              <p className="description">{img.desc}</p>
              <button className="actionButton">{img.action}</button>
            </div>

            <img src={img.img} alt="Selected" className="image" />
          </div>
        ))}


<div
    className="displayContainer ghost"
    ref={(el) => (itemRefs.current[models.length] = el)}
  >
    <div className="descDiv">
      <h3 className="title">{models[0].name}</h3>
      <p className="description">{models[0].desc}</p>
      <button className="actionButton">{models[0].action}</button>
    </div>
    <img src={models[0].img} alt="ghost-end" className="image" />
    </div>


      </div>


    </div>


            
        </section>
      </main>
    </>
  );
}

export default Home;