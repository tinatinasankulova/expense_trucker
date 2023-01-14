import './Card.css'

const Card = (props) => {
  const cardBlock = 'card' + " " + props.className
  return (
    <div className={cardBlock}>{props.children}</div>
  )
}

export default Card