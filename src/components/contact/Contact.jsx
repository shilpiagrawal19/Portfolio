import { useState } from "react";
import emailjs from 'emailjs-com';
import hand from '../../Assets/hand.png'

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
      <div className="left">
        <img src={hand} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Contact No" name="subject" />        
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
           {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
