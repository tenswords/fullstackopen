const Notification = ({status}) => {
  if (status === null) 
    return null

  const statusStyle = {
    color: status.isError ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  return (
    <div style={statusStyle}>
      {status.msg}
    </div>
  )  
}

export default Notification