import styles from "./HeaderDoce.module.css"
import NavDoce from "./NavDoce";


function HeaderDoce(){
    return(
        <div className={styles.fundo}>
            <p>Doces Encantados</p>
            <div className={styles.menu}>
                <NavDoce></NavDoce>
                <img src="/doceria/carrinho.png"/>
                <img src="/doceria/coracao.png"/>
            </div>
        </div>
    )
}

export default HeaderDoce
