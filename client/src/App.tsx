import React, { useState } from 'react';
import { DevelopersList } from './components/DeveloperList';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { DeveloperModal } from './components/DeveloperModal';

Modal.setAppElement('#root');
export function App() {
  const [isDeveloperModalOpen,setIsDeveloperModalOpen] = useState(false);

  function handleOpenDeveloperModal(){
    setIsDeveloperModalOpen(true);
  }
  function handleCloseDeveloperModal(){
    setIsDeveloperModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewDeveloper={handleOpenDeveloperModal}/>
      <DevelopersList />
      <DeveloperModal isOpen={isDeveloperModalOpen} onRequestClose={handleCloseDeveloperModal}/>

    </>
  );
}

