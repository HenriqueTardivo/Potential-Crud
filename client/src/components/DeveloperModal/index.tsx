import Modal from 'react-modal';
import { Container, RadioGroup, RadioBox } from '../DeveloperModal/styles';
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../serivce/api';

interface DeveloperModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
    newDeveloper: ()=> void;
}

export function DeveloperModal ({isOpen,onRequestClose,newDeveloper}:DeveloperModalProps){
    const [sexo, setSexo] = useState('');
    const [nome, setNome] = useState('');
    const [hobby, setHobby] = useState('');
    const [idade, setIdade] = useState(0);
    const [datanascimento, setDatanascimento] = useState('')

    function handleCreateNewDeveloper(event: FormEvent) {
        event.preventDefault();
        const data = {
            nome,
            sexo,
            idade,
            hobby,
            datanascimento
        };
        api.post('/developers',data)
        newDeveloper();
        onRequestClose();
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewDeveloper}>
                <h2>Desenvolvedor</h2>
                <input placeholder="nome" type="text" value={nome} onChange={event => setNome(event.target.value)}></input>

                <RadioGroup>  
                    <RadioBox type="button" onClick={()=> {setSexo('m');}} isActive={sexo==='m'}>
                        <span>Masculino</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={()=> {setSexo('f');}} isActive={sexo ==='f'}>
                        <span>Feminino</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={()=> {setSexo('o');}} isActive={sexo ==='o'}>
                        <span>Outro</span>
                    </RadioBox>
                </RadioGroup>
                <input placeholder="idade" type="number" value={idade} onChange={event => setIdade(Number(event.target.value))}></input>
                <input placeholder="hobby" type="text" value={hobby} onChange={event => setHobby(event.target.value)}></input>
                <input placeholder="datanascimento" type="date" value={datanascimento} onChange={event => setDatanascimento(event.target.value)}></input>
                
                <button type="submit">Cadastrar</button>        
            </Container>
        </Modal>
    );
}