export default function Card({title , description}){
  return(
    <div className="card">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}