/* eslint-disable react/prop-types */
import Forms from "./forms"

function Card({ fields }) {
  return (
    <>
      <button>Move</button>
      <button>X</button>
      <div>
        <Forms type={fields} />
      </div>
      <button>+</button>
    </>
  )
}

export default Card
