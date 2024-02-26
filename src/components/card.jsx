/* eslint-disable react/prop-types */
import { useState, useId } from 'react';
import General from './general'
import Education from './education'
import Experience from './experience'


function Card({ fields, type }) {
  const id = useId();
  const types = {general: <General />, education: <Education />, experience: <Experience />}

  const [additionalCards, setAdditionalCards] = useState([]);

  const addCard = () => {
    setAdditionalCards([...additionalCards, types[type]]);
  }

  const classList = `${type} cards`

  return (
    <>
      <div className={classList} id={id} >
        <div className='add-remove hidable'>
          <button className='remove' onClick={() => document.getElementById(id).style.display = 'none'}>X</button>
          <button className='add' onClick = {addCard}>+</button>
        </div>
        <div>
          {fields}
        </div>
      </div>
      {additionalCards.map((card) => (
          <>{card}</>
        ))}
    </>
  )
}

export default Card
