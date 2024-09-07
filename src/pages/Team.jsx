import TeamCard from '../components/TeamCard';
import abad from '../assets/image/leomar Abad.jpg';
import tablang from '../assets/image/ralph.jpg';
import santos from '../assets/image/santos.jpg';
import orlan from '../assets/image/orlan.jpg';
import '../css/team.css'
const Team = ()=>{
    return(
        <>

        <TeamCard/>
        <div className='meet-the-team-con'>
            <div>
                <h1>Meet the Team</h1>
                <p className='text-con'>A team of creative minds and technical experts, driven by a shared vision.</p>
            </div>
        </div>
        <div className='our-team-con'>
            <div>
                    <h2>Our Team</h2>
            </div>
        </div>
           <div className="team-container">
                    <div>
                        <img src={abad} style={{borderRadius: '100%'}} width={240} height={240} alt="" />
                        <span className='member'>Leader</span>
                        <div>
                            <h4>Leomar T. Abad</h4>
                            <h4 className='position'>Full-Stack Developer</h4>
                        </div>
                    </div>
                    <div>
                    <img src={tablang} style={{borderRadius: '100%'}} width={240} height={240} alt="" />
                    <span className='member'>Member</span>
                    <div>
                            <h4>Ralph Rainier E. Tablang</h4>
                            <h4 className='position'>Web Designer</h4>
                        </div>
                    </div>
                    <div>
                    <img src={santos} style={{borderRadius: '100%'}} width={240} height={240} alt="" />
                    <span className='member'>Member</span>
                        <div>
                            <h4>Santos R. Garcia</h4>
                            <h4 className='position'>UX/UI Designer</h4>
                        </div>
                    </div>
                    <div>
                    <img src={orlan} style={{borderRadius: '100%'}} width={240} height={240} alt="" />
                    <span className='member'>Member</span>
                    <div>
                            <h4>Orlan James G. Sta Ana</h4>
                            <h4 className='position'>System Analysist</h4>
                        </div>
                    </div>
                </div>

                <div className='our-team-con'>
                    <div>
                            <h2>Team Culture</h2>
                    </div>
               </div>
                <div className='team-culture'>
                    <div>
                        <h2 className='head-title'>Our Culture</h2>
                        <p className='subhead-content'>We believe that great work comes from a culture of collaboration, creativity, and mutual respect. Here’s a glimpse into what makes our team unique.</p>
                        <img src="src/assets/image/startup-.jpg" width={330} height={200} alt="" />
                    </div>

                    <div>
                        <h2 className='head-title'>Want to Join Us?</h2>
                        <p className='subhead-content'>We’re always on the lookout for talented individuals who share our passion for innovation. If you think you’d be a great fit, we’d love to hear from you."</p>
                        <img src="src/assets/image/network.jpg" width={330} height={200} alt="" />
                    </div>

                    <div>
                        <h2 className='head-title'>Why Work with Us?</h2>
                        <p className='subhead-content'>Joining our team means being part of a dynamic environment where innovation meets opportunity. We prioritize professional growth, collaboration, and creativity.</p>
                        <img src="src/assets/image/netIn.jpg" width={330} height={200} alt="" />
                    </div>
                </div>

        </>
    )
}

export default Team;