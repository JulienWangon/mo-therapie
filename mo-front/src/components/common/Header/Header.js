import { useState } from 'react';
import './header.css'

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ContactForm from '../ContactForm/ContactForm';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <header>
      <div className="topHeader">
        <span className="headerName" data-aos="fade" data-aos-delay="200">Marine Ottaviani</span>
        <span className="headerSlogan" data-aos="fade" data-aos-delay="1000">Psychopraticienne</span>
      </div>

      <div className="bottomHeader" data-aos="fade-up" data-aos-delay="1800">
        <Button
          className="contactBtn"
          type="button"
          colorStyle="whiteBtn"
          onClick={toggleModal}             
        > Contact</Button>

        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <ContactForm />
        </Modal>
      </div>   
    </header>
  );
};

export default Header;