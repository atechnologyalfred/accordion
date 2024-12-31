
 export default function Show ({title, content}) {
  return (
  <li className = "show-list-item">
    <h3>{title}</h3>
    <p>{content}</p>
    <span className = "delete">X</span>
  </li>
  )
}

