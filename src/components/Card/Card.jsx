import './Card.css'

export default function Card(props) {

  return (
    <div className='cards'>
      <h1>{props.nome}</h1>
      <img src={props.imagem} width="200px" />
    </div>)
}