/* eslint-disable react/prop-types */
import General from './general'
import Education from './education'
import Experience from './experience'

function Card({ fields, type }) {
  const types = {general: <General />, education: <Education />, experience: <Experience />}

  const addCard = () => {
    return (
      <div>
        {types[type]}
      </div>
    )
  }

  return (
    <>
      <button>Move</button>
      <button>X</button>
      <div>
        {fields}
      </div>
      <button onClick = {() => console.log(type)}>+</button>
    </>
  )
}

export default Card
