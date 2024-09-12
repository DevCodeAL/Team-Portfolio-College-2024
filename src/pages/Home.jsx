import { useEffect, useRef } from "react";
import '../App.css';
import Hero from "../components/Hero";
import SEO from '../assets/image/handdesing.jpg';
import UIUX from '../assets/image/ux.jpg';
import WebDesign from '../assets/image/websitedesign.jpg';
import Html from '../assets/image/html.png';
import Css from '../assets/image/css.png';
import Javascript from '../assets/image/JavaScript-logo.png';
import Php from '../assets/image/php.png';
import NodeJs from '../assets/image/nodejs.png';
import mySql from '../assets/image/MySQL-Logo.png';
import MongoDb from '../assets/image/Mongodb-PNG-Image-HD.png';
import ReactJs from '../assets/image/react.png';
import ExpressJs from '../assets/image/express.png';
import Bootstrap from '../assets/image/bootstrap.png';
import Git from '../assets/image/git.jpg';
import Postman from '../assets/image/postman.png';



const Home = ()=>{
    const containerRef = useRef(null);
    useEffect(()=>{
        const elements = containerRef.current.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('hide');
                    }
                });
        }, {
                threshold: 0.1
        });

        elements.forEach((element)=> observer.observe(element));

        return ()=>{
            elements.forEach((element)=> observer.unobserve(element));
        }

    }, []);

    
    return(
        <>
        <Hero/>
        <div ref={containerRef}>
        <div className="hero-parent">
            <div className="hero-division">
                <div className="h-child1">
                    <div  className="text-container">
                    <h1 className="title-h">Empowering Students: Web Development & Research for Innovative Capstone Projects</h1>
                    <p className="content">"We are a dedicated group of students from "College for Research and Technology", driven by a shared passion for research and technology. Our team is committed to pushing the boundaries of innovation, leveraging cutting-edge tools and methodologies to solve real-world problems."</p>
                    <hr className="line"/>
                    <button className="btn">FIND OUT MORE</button>
                    </div>
                </div>
                </div>

                <div className="our-mission">
                <div className="fade-in">
                    <h2 className="title-h1">Our Mission</h2>
                    <div className="ourmission-line"></div>
                    <p>Our mission is to harness the power of research and technology to create impactful solutions that address contemporary challenges. We aim to bridge the gap between academic knowledge and practical application, empowering both students and professionals in the field.</p>
                    </div>
                </div>

                <div className="our-mission">
                    <div className="fade-in">
                    <h2 className="title-h1">Meet The Team</h2>
                    </div>
                    <div className="fade-in">
                    <div className="ourmission-line"></div>
                    <p>Our team is a diverse group of students passionate about Web Development, UI/UX design.      "Together, we bring a blend of creativity, technical skills, and a shared vision to transform captone project into a reality."</p>
                    </div>
                </div>

               
                <div className="at-your-service-container">
                    <h2 className="fade-in" id="At-your-serv-con">At Your Service</h2>
                    <span className="fade-in" id="title-line"></span>
                <div className="fade-in">
                    <div className="img-title">SEO</div>
                        <img src={SEO} width={300} height={272} className="skill-img" alt="" />
                    </div>
                    <div className="fade-in">
                    <div className="img-title">UI / UX</div>
                        <img src={UIUX} width={300} height={272} className="skill-img" alt="" />
                    </div>
                    <div className="fade-in">
                    <div className="img-title">Web Development</div>
                        <img src={WebDesign} width={300} height={272} className="skill-img" alt="" />
                    </div>
                </div>
               
                
            <div className="fade-in">
                <h2 className="title-h1">Skills</h2>
                <div id="ourmission-line"></div>
                </div>
                <div className="home-container">
                    <div className="fade-in">
                       <img src={Html} width={100} height={100} className="skill-img"  alt="" />
                       <span>HTML</span>
                    </div>
                    <div className="fade-in">
                        <img src={Css} width={100} height={100} className="skill-img"  alt="" />
                        <span>CSS</span>
                    </div>
                    <div className="fade-in">
                        <img src={Javascript} width={100} height={100} className="skill-img" alt="" />
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className="fade-in">
                        <img src={Php} width={100} height={100} className="skill-img" alt="" />
                        <span>PHP</span>
                    </div>
                    <div className="fade-in">
                            <img src={NodeJs} width={100} height={100} className="skill-img" alt="" />
                            <span>NODE JS</span>
                        </div>
                    <div className="fade-in">
                        <img src={mySql} width={100} height={100} className="skill-img" alt="" />
                        <span>MY SQL</span>
                    </div>
                    <div className="fade-in">
                            <img src={MongoDb} width={100} height={100} className="skill-img" alt="" />
                            <span>MONGO DB</span>
                        </div>
            </div>

            <div className="fade-in">
            <h2 className="title-h1">Frameworks, Tools & Libraries</h2>
            <div id="ourmission-lines"></div>
            </div>
            <div className="home-container">
                        <div className="fade-in">
                        <img src={ReactJs} width={100} height={100} className="skill-img" alt="" />
                        <span>REACT JS</span>
                        </div>
                        <div className="fade-in">
                            <img src={ExpressJs} width={100} height={100} className="skill-img" alt="" />
                            <span>EXPRESS JS</span>
                        </div>

                        <div className="fade-in">
                        <img src={Bootstrap} width={100} height={100} className="skill-img" alt="" />
                        <span>BOOTSTRAP</span>
                    </div>
                       
                        <div className="fade-in">
                            <img src={Git} width={100} height={100} className="skill-img" alt="" />
                            <span>GIT</span>
                        </div>
                        <div className="fade-in">
                            <img src={Postman} width={100} height={100} className="skill-img" alt="" />
                            <span>POSTMAN</span>
                        </div>
                    </div>
                    </div>
        </div>  
        </>
    )
}

export default Home;