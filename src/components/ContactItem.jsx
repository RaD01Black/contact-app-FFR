
function ContactItem({data : {id, name, LastName, email, phone}, deleteHandler}) {
  return (
    <li key={id}>
    <p>
      {name} {LastName}
    </p>
    <p>
      <span>📧</span> {email}
    </p>
    <p>
      <span>📞</span> {phone}
    </p>
    <button onClick={() => deleteHandler(id)} >🗑️</button>
  </li>
  )
}

export default ContactItem