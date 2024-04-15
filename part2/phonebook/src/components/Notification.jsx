const Notification = ({msg}) => {
  if (msg === null) 
    return null

  const statusStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  return (
    <div style={statusStyle}>
      {msg}
    </div>
  )  
}

export default Notification