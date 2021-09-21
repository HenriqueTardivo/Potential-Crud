import Modal from 'react-modal';
import { Container, RadioGroup, RadioBox } from '../DeveloperModal/styles';
import closeImg from '../../assets/close.svg'
import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../serivce/api';

interface Developer {
    id: number;
    nome: string,
    sexo: string,
    idade: number,
    hobby: string,
    datanascimento: string;
}
interface EditDeveloperModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
    newDeveloper: ()=> void;
    developerId: number;
}

export function EditDeveloperModal (props:EditDeveloperModalProps){
    const [editDev,setEditDev] = useState<Developer[]>()
    const [id, setId] = useState(0)
    const [sexo, setSexo] = useState('');
    const [nome, setNome] = useState('');
    const [hobby, setHobby] = useState('');
    const [idade, setIdade] = useState(0);
    const [datanascimento, setDatanascimento] = useState('') 

    function handleEditDeveloper(event: FormEvent) {
        event.preventDefault();
        const data = {
            nome,
            sexo,
            idade,
            hobby,
            datanascimento
        };
        api.put(`/developers/${props.developerId}`,data)
        props.newDeveloper();
        props.onRequestClose();
    }

    useEffect(()=> {
        api.get(`developers/${props.developerId}`).then(response => {setEditDev(response.data)
            editDev?.map((value,key) =>{
                setId(key)
                setSexo(value.sexo);
                setDatanascimento(value.datanascimento);
                setIdade(value.idade);
                setNome(value.nome);
                setHobby(value.hobby);
            })
              
        });

    }
        ,[props.isOpen]
    )


 
    return(
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={props.onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleEditDeveloper}>
                <h2>Editar Desenvolvedor</h2>
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