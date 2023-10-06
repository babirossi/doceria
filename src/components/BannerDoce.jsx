import bannerCss from "./BannerDoce.module.css"
function BannerDoce(){
    return(
        <div>
            <img className={bannerCss.banner} src="/doceria/VenhaExperimentarNossosDoces2.png"/>
        </div>
    )
}
export default BannerDoce