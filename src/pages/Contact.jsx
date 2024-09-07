import ContactBackground from '../components/Contactbackground';
import '../css/contact.css';

const Contact = ()=> {
    return(
        <>
        <ContactBackground/>
        <div className='contact-con'>
            <div>
                <h1>Get in Touch</h1>
                <p className='text-contact'>We’d love to hear from you. Whether you have a project in mind or just want to say hello, drop us a message!</p>
            </div>
        </div>
            <div className="contact-container">
                <div>
                    <form action="" className='form-container'>
                        <label>
                            Name: {' '}
                            <input type="text" />
                        </label>

                        <label>
                            Email: {' '}
                            <input type="email" />
                        </label>

                        <label>
                            Message: {' '}
                            <textarea name="" id="" placeholder='Your Message....'></textarea>
                        </label>
                        <button className='submit-btn' type='submit'>Send Message</button>
                    </form>
                </div>
                <div>
                    <h2 className='text-headline'>Our Contact Information</h2>
                    <ul className='ul-parent'>
                        <li className='list'>Address: "1234 Innovation Street, Tech City, TC 56789"</li>
                        <li className='list'>Phone: "(123) 456-7890"</li>
                        <li className='list'>Email: "contact@yourteam.com"</li>
                        <li className='list'>Business Hours: "Monday to Friday, 9 AM - 5 PM"</li>
                    </ul>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.9121727244337!2d120.96438377364194!3d15.489155654708679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972e955348cf89%3A0x8a1d57bc0e712e17!2sCollege%20for%20Research%20and%20Technology%20of%20Cabanatuan!5e0!3m2!1sen!2sph!4v1725370326115!5m2!1sen!2sph" width={430} height={230} style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact;