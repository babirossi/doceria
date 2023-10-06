function ProdutosMainDoces(doces){
    return(
        <div>
            <img src="/doceria/coracao.png"/>
            <img src={doces.img}/>
            <p>{doces.descrição}</p>
            <p>R$ {doces.preço}</p>
            <button>Ver mais</button>
        </div>
    )
}

export default ProdutosMainDoces