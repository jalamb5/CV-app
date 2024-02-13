/* eslint-disable react/prop-types */
import { useState } from 'react';
import General from './general'
import Education from './education'
import Experience from './experience'

function Card({ fields, type }) {
  const types = {general: <General />, education: <Education />, experience: <Experience />}

  const [additionalCards, setAdditionalCards] = useState([]);

  const addCard = () => {
    setAdditionalCards([...additionalCards, types[type]]);
  }

  return (
    <>
      <button>Move</button>
      <button>X</button>
      <div>
        {fields}
      </div>
      <button onClick = {addCard}>+</button>

      {additionalCards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
    </>
  )
}

export default Card
