import React from "react";
import { Button, Modal } from "react-bootstrap";

const PromptQuiz = ({ showPrompt, handleClose, handleStartQuiz }) => {
    return (
        <Modal show={showPrompt} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Popup de Quiz
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Gostaria de responder a um quiz para ganhar 100% de desconto?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Não
                </Button>
                <Button variant="primary" onClick={handleStartQuiz}>
                    Sim
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PromptQuiz;
