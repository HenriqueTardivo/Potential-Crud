import { Container } from './styles';
import developer from '../../assets/developer.png'

interface HeaderProps {
    onOpenNewDeveloper: ()=>void;
}

export function Header({onOpenNewDeveloper}:HeaderProps){
    return (
        <Container>
            <img src={developer} alt="Developer" />
            <h1>Cadastro de desenvolvedores</h1>
            <button type="button" onClick={onOpenNewDeveloper}>
                Novo desenvolvedor
            </button>  
        </Container>      
    );
}