import Modal from 'react-modal';
import { Container, ControlButtons } from './styles';
import closeImg from '../../assets/close.svg'
import { api } from '../../serivce/api';

interface DeleteDeveloperModal {
    isOpen: boolean;
    onRequestClose: ()=> void;
    developerId: number;
}

export function DeleteDeveloperModal({isOpen,onRequestClose,developerId}:DeleteDeveloperModal) {
    function deleteDeveloper() {
        api.delete(`/developers/${developerId}`);
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <Container>
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal"/>
                </button>
                <h2>Deseja realmente deletar esse registro?</h2>
                <ControlButtons>
                    <button onClick={deleteDeveloper}>
                        <span>Deletar</span>
                    </button>
                    <button onClick={onRequestClose}>
                        <span>Cancelar</span>
                    </button>
                </ControlButtons>

            </Container>

        </Modal>
    );
}