import React from 'react';
import infoTarjetas from '../db';

const Cards = ({img},{pais},{precio}) => {
    return(
    
        <div className='card'>   
            <img src={img} alt='foto' className='foto'/>
            <div className='card--stats'>
                <img className='estrella' src='./Asset/Star.png' alt='estrellita'/>
                <span>5.0</span>
                <span className='gris'>{pais}</span>
            </div>
            <p className='titulo'>Lecciones con Katye Zefron</p>
            <p><span className='negrita'>Desde {precio}</span>|Persona</p>
        </div>
        
   )
};

export default Cards;
