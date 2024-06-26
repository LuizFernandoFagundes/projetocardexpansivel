import { useState } from 'react'
import luffy from './assets/luffy.png';
import zoro from './assets/zoro.png';
import nami from './assets/nami.png';
import sanji from './assets/sanji.png';
import chopper from './assets/chopper.png';
import './App.css'
import Card from './components/cards/card'

function App() {
  const [cards, setCards] = useState([
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
  return (
    
      <div className="container">
       {
        cards.map((item, index) => (
          <Card item={item} key={index}/>
        ))
       }        
      </div>
    
  )
}

export default App
