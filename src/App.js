import './App.css';
import HeaderDoce from "./components/HeaderDoce";
import BannerDoce from "./components/BannerDoce";
import MainDoces from "./components/MainDoces";
import ProdutosMainDoces from "./components/ProdutosMainDoces";
import FotterDoce from "./components/FotterDoce";

function App() {
    return (
        <div className="App">
            <HeaderDoce></HeaderDoce>
            <BannerDoce></BannerDoce>
            <MainDoces></MainDoces>
            <ProdutosMainDoces img="/doceria/brigadeiroPreto.jpg" descrição="Um sabor mais intenso e uma coloração escura e irresistível." preço="1,50"></ProdutosMainDoces>
            <ProdutosMainDoces img="/doceria/brownie.jpg" descrição="Uma sobremesa densa e indulgente, composta por uma mistura de chocolate e nozes" preço="7,50"></ProdutosMainDoces>
            <ProdutosMainDoces img="/doceria/brigadeiroBranco.jpg" descrição="Preparada com leite condensado, manteiga e coberta com granulado ou açúcar cristal, com  um sabor suave e uma cor clara e convidativa" preço="1,20"></ProdutosMainDoces>
            <ProdutosMainDoces img="/doceria/coneRecheado.jpg" descrição=" Um cone crocante de wafer ou chocolate com um recheio de trufa de chocolate macio e indulgente. É uma combinação perfeita de texturas e sabores." preço="8,00"></ProdutosMainDoces>
            <FotterDoce></FotterDoce>
        </div>
    );
}

export default App;
