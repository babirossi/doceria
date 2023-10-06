import navcss from "./NavDoce.module.css"
function NavDoce(){
    return(
        <nav className={navcss.menuNav}>
            <p>Início</p>
            <p>Produtos</p>
            <p>Contatos</p>
        </nav>
    )
}
export default NavDoce