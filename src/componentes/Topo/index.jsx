import './style.css';
import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

export default function Topo (props) {
    return (
            <header className= {props.temaEscuro ? 'topo-modo-escuro' : 'topo=modo-escuro'}>
                <img className='logo' src={logo} alt="logo"/>
                <button onClick={props.alterarTema} className={props.temaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                    <img classsName='iconesBtn' src={props.temaEscuro ? sun : moon} alt="logo botao"/>
                </button>
            </header>
    )
}