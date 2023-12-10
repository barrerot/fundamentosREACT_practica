import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" style={styles.modal}>
      <div className="modal-content" style={styles.modalContent}>
        <div className="modal-body" style={styles.modalBody}>
          {children}
        </div>
        <div className="modal-footer" style={styles.modalFooter}>
          <button
            onClick={onClose}
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            style={{ ...styles.button, ...styles.confirmButton }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

// Estilos en línea para el modal
const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    maxWidth: "500px",
    width: "100%",
  },
  modalBody: {
    marginBottom: "20px",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "white",
  },
  confirmButton: {
    backgroundColor: "#4caf50",
    color: "white",
  },
};
