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

  return (
    <>
      <div className={type} id={id} >
        <button>Move</button>
        <button onClick={() => document.getElementById(id).style.display = 'none'}>X</button>
        <div>
          {fields}
        </div>
        <button onClick = {addCard}>+</button>
      </div>
      {additionalCards.map((card) => (
          <>{card}</>
        ))}
    </>
  )
}

export default Card
