import React from 'react';
import Button from '../../common/Button/Button';
import './contactForm.css';

const ContactForm = () => {
  return (
    <form className="form">
      <h3 className="contactTitle">Contact</h3>
      <div className="input-group">
        <input type="text" id="lastName" required />
        <label htmlFor="lastName">Nom</label>
      </div>
      <div className="input-group">
        <input type="text" id="firstName" required />
        <label htmlFor="firstName">Prénom</label>
      </div>
      <div className="input-group">
        <input type="email" id="email" required />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-group">
        <input type="text" id="sujet" required />
        <label htmlFor="sujet">Sujet</label>
      </div>
      <div className="input-group messageInput">
        <textarea cols="30" rows="1" id="message" required></textarea>
        <label htmlFor="message">Message</label>
      </div>
      <div className="submitArea">
        <Button type="submit" colorStyle="purpleBtn" className="submitContact">Envoyer</Button>
      </div>
    </form>
  );
};

export default ContactForm;
