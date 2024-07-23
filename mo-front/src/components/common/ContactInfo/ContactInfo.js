import './contactInfo.css';

const ContactInfo = ({ numero, rue, codePostal, ville, telephone }) => {
  return (
    <div className="contactInfoContainer">
      <span className="adresse">{numero} {rue} {codePostal} {ville}</span>
      <a className="phone" href={`tel:0${phone}`}>0{phone}</a> 
    </div>
  )
};

export default ContactInfo;