import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if(!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <button className="closeModal" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;