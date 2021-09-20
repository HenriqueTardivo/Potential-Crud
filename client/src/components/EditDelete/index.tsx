import Modal from 'react-modal';
import { DeleteDeveloperModal } from '../DeleteDeveloperModal';
import { useState } from 'react';
import editImg from '../../assets/edit.png'
import deleteImg from '../../assets/delete.png'
import { EditDeveloperModal } from '../EditDeveloperModal';

interface EditDeleteProps {
  editDeveloper: ()=> void; 
  developer: {
    id: number;
    nome: string,
    sexo: string,
    idade: number,
    hobby: string,
    datanascimento: string;
  }
}

Modal.setAppElement('#root');
export function EditDelete(props: EditDeleteProps){
    const [isDeleteDeveloperModalOpen,setIsDeleteDeveloperModalOpen] = useState(false);
    const [isEditDeveloperModalOpen,setIsEditDeveloperModalOpen] = useState(false);

    function handleOpenEditDeveloperModal(){
      setIsEditDeveloperModalOpen(true)
    }
    function handleCloseEditDeveloperModal(){
      setIsEditDeveloperModalOpen(false);
    }
    function handleOpenDeleteDeveloperModal(){
      setIsDeleteDeveloperModalOpen(true)
    }
    function handleCloseDeleteDeveloperModal(){
      setIsDeleteDeveloperModalOpen(false);
    }
    return (
        <>
        <DeleteDeveloperModal isOpen={isDeleteDeveloperModalOpen} onRequestClose={handleCloseDeleteDeveloperModal} developerId={props.developer.id} newDeveloper={props.editDeveloper}/>  
        <EditDeveloperModal isOpen={isEditDeveloperModalOpen} onRequestClose={handleCloseEditDeveloperModal} developerId={props.developer.id} newDeveloper={props.editDeveloper} />

        <td>
            <button onClick={handleOpenEditDeveloperModal}>
              <img src={editImg} alt="Editar registro" />
            </button>
        </td>
        <td>
            <button onClick={handleOpenDeleteDeveloperModal}>
                <img src={deleteImg} alt="Deletar registro" />
            </button>                            
        </td>
        </>
    );
}