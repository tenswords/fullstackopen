const PersonLine = ({entry, removeHandler}) =>
  <li>
    {entry.name} {entry.number} <span/>
    <button onClick={() => removeHandler(entry)}>delete</button>
  </li>

const Persons = ({list, removeHandler}) => 
  <div>
    <ul className="no-bullets">
      {list.map(entry =>
        <PersonLine key={entry.name} entry={entry} removeHandler={removeHandler} />
      )}
    </ul>
  </div>

export default Persons