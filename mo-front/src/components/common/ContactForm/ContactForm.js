import Button from '../../common/Button/Button';
import './contactForm.css';

const ContactForm = () => {
  return (
    <form className="form">
      <h3 className="contactTitle">Contact</h3>
      <div className="input-group">
        <input type="text" id="lastName" placeholder="Nom" required />
      </div>
      <div className="input-group">
        <input type="text" id="firstName" placeholder="Prénom" required />
      </div>
      <div className="input-group">
        <input type="email" id="email" placeholder="Email" required />
      </div>
      <div className="input-group">
        <input type="text" id="sujet" placeholder="Sujet" required />
      </div>
      <div className="input-group messageInput">
        <textarea cols="30" rows="1" id="message" placeholder="Message" required></textarea>
      </div>
      <div className="submitArea">
        <Button text="Envoyer" type="submit" colorStyle="purpleBtn" className="submitContact" />
      </div>
    </form>
  );
};

export default ContactForm;
