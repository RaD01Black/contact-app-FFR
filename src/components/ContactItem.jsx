
function ContactItem({data : {id, name, LastName, email, phone}}) {
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
    <button>🗑️ </button>
  </li>
  )
}

export default ContactItem