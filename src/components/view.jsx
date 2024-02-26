function View() {

  const handleViewClick = () => {
    // hide all buttons
    document.body.classList.toggle('hide')
  }

  return (
    <>
      <div className="view">
        <button type="button" onClick={handleViewClick}>View CV</button>
      </div>
    </>
  )
}

export default View
