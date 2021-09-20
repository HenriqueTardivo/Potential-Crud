import styled from 'styled-components'

export const Container = styled.div`
    justify-content: center; 
    

    table {
        width: 100%;     
        border-spacing: 0 0.5rem;

        th{                
           background: var(--black);
           color: var(--white);
           font-weight: 400;
           padding: 1rem 2rem;
           text-align: left;
           line-height: 1.5rem;      
        }
        td{
           padding: 1rem 2rem;
           border: 0;
           background: var(--shape);            
           color: var(--text-body);
           border-radius: 0.25rem;
        
           img {
                max-width:40px;
                max-height:30px;
                width: 100%;
                height: 100%;
                transition: 0.2;
                &:hover {
                    filter: brightness(0.7)
                }    
           }
        }
    }

`;
