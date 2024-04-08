const NumberLine = ({entry}) =>
  <li>{entry.name}</li>

const NumberList = ({list}) => 
  <div>
    <h2>Numbers</h2>
    <ul className="no-bullets">
      {list.map(entry =>
        <NumberLine key={entry.name} entry={entry} />
      )}
    </ul>
  </div>

export default NumberList