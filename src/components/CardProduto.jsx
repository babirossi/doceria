import styles from "./CardProduto.module.css"

function CardProduto(prop){
    return(
        <div>
            <p>Nome: {prop.nome}</p>
            <p>Marca: {prop.descricao}</p>
            <p>Valor do produto: R$ {prop.preco}</p>
        </div>
    )
}

export default CardProduto