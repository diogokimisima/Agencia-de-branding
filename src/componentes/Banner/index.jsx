import './style.css'

export default function Banner (props) {
    return (
        <section id="secaoBanner">
            <div id="imagemDeFundo" className={props.temaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
            <div className="texto-secaoBanner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2> Agência de Branding </h2>
            <span>e design Digital</span>
            </div>
        </section>
    )
}