import AboutBackground from '../components/AboutBackground';
import '../css/About.css'

const About = () => {
  

  return (
     <>
      <AboutBackground/>
      <div className='about-container-parent'>
        <div className='headline-container'>
            <h1 className='head-mission'>Our Story</h1>
            <h3 className='sub-headline'>Driven by passion, united by purpose, committed to excellence.</h3>
        </div>
        <div className="about-container">
              <div>
                <h2 className='head-mission'>Our Mission</h2>
                <p className='head-content'>Our mission is to innovate, collaborate, and create digital experiences that leave a lasting impact. We believe in the power of technology to transform lives and industries.</p>
              </div>
              <div>
                <img src="src/assets/image/team.jpg" width={500} height={200} alt="" />
              </div>
              <div>
                <img src="src/assets/image/standfor.jpg" width={500} height={200} alt="" />
              </div>
              <div>
              <h2 className='head-mission'>What We Stand For</h2>
              <p className='head-content'>Innovation, Collaboration, Integrity, Excellence – these are the core values that guide our work and define who we are.</p>
              </div>

              <div>
                    <h2 className='head-mission'>Our Journey So Far</h2>
                    <p className='head-content'>From our humble beginnings to the impactful projects we’ve delivered, explore the milestones that have shaped our journey</p>
              </div>
              <div>
                    <img src="src/assets/image/events.jpg" width={500} height={200} alt="" />
              </div>

              <div>
                    <img src="src/assets/image/inovation.jpg" alt="" width={500} height={200} />
              </div>
              <div>
                <h2 className='head-mission'>Why Choose Us</h2>
                <p className='head-content'>Our commitment to quality, our passion for innovation, and our collaborative approach set us apart. Partner with us to experience the difference.</p>
              </div>
        </div>
       </div>
     </>
  );
};


export default About;