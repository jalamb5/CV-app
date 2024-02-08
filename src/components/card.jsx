function Card({ fields }) {
  return (
    <>
      <button>Move</button>
      <button>X</button>
      <div>
        {fields}
      </div>
      <button>+</button>
    </>
  )
}

export default Card
