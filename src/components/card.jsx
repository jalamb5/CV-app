/* eslint-disable react/prop-types */

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
        {fields}
      </div>
      <button onClick = {() => console.log(addCard)}>+</button>
    </>
  )
}

export default Card
