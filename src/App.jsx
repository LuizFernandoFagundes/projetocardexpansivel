import { useState } from 'react'
import luffy from './assets/luffy.png';
import zoro from './assets/zoro.png';
import nami from './assets/nami.png';
import sanji from './assets/sanji.png';
import chopper from './assets/chopper.png';
import './App.css'

function App() {
  const [imagens, setImagens] = useState([
    {
      nome: 'Monkey D. Luffy',
      imagen: luffy,
    },
    {
      nome: 'Roronoa Zoro',
      imagen: zoro,
    },
    {
      nome: 'Nami',
      imagen: nami,
    },
    {
      nome: 'Vinsmoke Sanji',
      imagen: sanji,
    },
    {
      nome: 'Tony Chopper',
      imagen: chopper,
    }
  ]);


  return (
    
      <div className="container">
       {
        imagens.map((item, index) => (
          <div key={index} className="painel" style={{backgroundImage: `url(${item.imagen})`}} onClick={()=>{

            const painels = document.querySelectorAll('.painel');

painels.forEach(painel => {
  painel.addEventListener('click', () => {
    removeActiveClasses();
    painel.classList.add('active');
  });
});

function removeActiveClasses() {
  painels.forEach(painel => {
    painel.classList.remove('active');
  });
}


          }}>
            
            <h3>{item.nome}</h3>
          </div>
        ))
       }        
      </div>
    
  )
}

export default App
