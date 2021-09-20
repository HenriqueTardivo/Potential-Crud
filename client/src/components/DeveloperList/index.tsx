import { Container } from './styles';
import { useEffect, useState } from 'react';
import { EditDelete } from '../EditDelete';
import { api } from '../../serivce/api';

interface DeveloperListProps {
    refresh: boolean;
    handleRefresh(): void;
}
interface  Developer {
    id: number;
    nome: string,
    sexo: string,
    idade: number,
    hobby: string,
    datanascimento: string;
}

export function DevelopersList({refresh,handleRefresh}:DeveloperListProps){
    const [developers,setDevelopers] = useState<Developer[]>([]);

    function displaySexo(sexo: string){
        switch (sexo){
            case 'm': return 'Masculino'
            case 'f': return 'Feminino'
            case 'o': return 'Outro'
        }
    }

    useEffect(()=>{
        api.get('/developers').then(response => {setDevelopers(response.data)})
    },[refresh])
    
    return (
        <>
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Idade</th>
                        <th>Hobby</th>
                        <th>Data de Nascimento</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {developers.map(developer => (
                        <tr key={developer.id}>
                            <td>{developer.nome}</td>
                            <td>{displaySexo(developer.sexo)}</td>
                            <td>{developer.idade}</td>
                            <td>{developer.hobby}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-br').format(
                                    new Date(developer.datanascimento)
                                )}
                            </td>
                            <EditDelete developer={developer} editDeveloper={handleRefresh}/>
                        </tr>  
                    ))} 
                </tbody>
            </table>
        </Container>   
        </>    
    );
}