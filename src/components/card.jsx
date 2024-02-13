/* eslint-disable react/prop-types */
import Forms from "./forms"

function Card({ fields }) {

  const addCard = (fields) => {
    <div>
      <Card fields={fields} />
    </div>
  }

  return (
    <>
      <button>Move</button>
      <button>X</button>
      <div>
        <Forms type={fields} />
      </div>
      <button onClick={addCard}>+</button>
    </>
  )
}

export default Card
