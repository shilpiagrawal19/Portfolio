import { useState } from "react";
import emailjs from 'emailjs-com';
import hand from '../../Assets/hand.png'
import { Person, Mail } from "@material-ui/icons"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import Title from '../Title';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
// import Slide from 'react-reveal/Slide';






export default function Contact() {
  
  const [message, setMessage] = useState(false);
 function sendEmail (e) {
    e.preventDefault();
        setMessage(true);
    emailjs.sendForm('service_jcuda82', 'template_sl3e6mg', e.target, 'user_t48JjNsFxzI7L2xqgGi6H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (

    <div className="contact" id="contact">

      

      <div className="right">
      <Bounce top>
      <h2>CONTACT</h2></Bounce>
      <Slide right>

      <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
           {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        </Slide>

      </div>

      <div className="left">
      <Slide left>
      <div className="itemContainer">
          <Mail className="icon"/>
          <span><a href="agrawalshilpi191@gmail.com">agrawalshilpi191@gmail.com</a></span>    
          </div>


        <div className="itemContainer">
        <Person className="icon"/>
        <span>+91 810 939 3133</span>
        </div>

        <div className="itemContainer">
        <LinkedInIcon className="icon"/>
        <span><a href="https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b">https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b</a></span>
        </div>

        <div className="itemContainer">
        <GitHubIcon className="icon"/>
        <span><a href="https://github.com/shilpiagrawal19">https://github.com/shilpiagrawal19</a></span>
        </div>

        <div className="itemContainer">
        <HomeIcon className="icon"/>
        <span>79,Bada Sarafa near Rajwada ,Indore</span>
        </div>
        </Slide>


      </div>
    </div>
  );
}
        // <img src={hand} alt="" />
