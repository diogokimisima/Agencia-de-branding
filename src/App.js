import './App.css';
import {useState } from 'react';
import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Experiencia from './componentes/Expericiencia';
import Rodape from './componentes/Rodape';

function App() {
  const[temaEscuro, setTemaEscuro] = useState(false);

  const alterarTema= () => {
      setTemaEscuro(!temaEscuro);
  };
  return (
    <main>
      <Topo  alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <Banner temaEscuro={temaEscuro}/>
      <Experiencia temaEscuro={temaEscuro}/>
      <Rodape temaEscuro={temaEscuro}/>
    </main>
  );
}

export default App;
