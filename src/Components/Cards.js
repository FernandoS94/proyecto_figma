import React from 'react';
import infoTarjetas from '../db';

const Cards = ({tarjetas}) => {
    return(
    
        <div className='card'>   
            <img src={tarjetas.img} alt='foto' className='foto'/>
            <div className='card--stats'>
                <img className='estrella' src='./Asset/Star.png' alt='estrellita'/>
                <span>5.0</span>
                <span className='gris'>{tarjetas.pais}</span>
            </div>
            <p className='titulo'>Lecciones con Katye Zefron</p>
            <p><span className='negrita'>Desde {tarjetas.precio}</span>|Persona</p>
        </div>
        
   )
};

export default Cards;
