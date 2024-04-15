const PersonLine = ({entry, removeHandler}) =>
  <li>
    {entry.name} {entry.number} <span/>
    <button onClick={() => removeHandler(entry)}>delete</button>
  </li>

const Persons = ({list, removeHandler}) => {

  const listStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }

  return (
    <div>
      <ul style={listStyle}>
        {list.map(entry =>
          <PersonLine key={entry.name} entry={entry} removeHandler={removeHandler} />
        )}
      </ul>
    </div>
  )
}

export default Persons