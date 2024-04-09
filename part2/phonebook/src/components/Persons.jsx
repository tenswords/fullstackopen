const PersonLine = ({entry}) =>
  <li>{entry.name} {entry.number}</li>

const Persons = ({list}) => 
  <div>
    <ul className="no-bullets">
      {list.map(entry =>
        <PersonLine key={entry.name} entry={entry} />
      )}
    </ul>
  </div>

export default Persons