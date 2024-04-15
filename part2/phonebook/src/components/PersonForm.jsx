const PersonForm = ({newName, nameHandler, newNumber, 
  numberHandler, onSubmit}) => {
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input 
          value={newName} 
          onChange={nameHandler} />
      </div>
      <div>
        Number: <input 
          value={newNumber} 
          onChange={numberHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm