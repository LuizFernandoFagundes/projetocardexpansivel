import '../../App.css';


const Card =({item})=> {
    return (
        <div  className="painel" style={{backgroundImage: `url(${item.imagen})`}}>
            
            <h3>{item.nome}</h3>
          </div>
    )
}
export default Card;