import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Rodape from './components/Rodape';
import TodosTimes from './components/TodosTimes';
import useStateTimes from './times';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useStateTimes();

  const adicionarColaborador = colaborador => {
    setColaboradores(
      [...colaboradores, colaborador]
    );
  };

  const deletarColaborador = id => {
    setColaboradores(
      colaboradores.filter(
        colaborador => colaborador.id !== id
      )
    )
  };

  const favoritaColaborador = id => {
    setColaboradores(
      colaboradores.map(
        colaborador => {
          if (colaborador.id === id) {
            colaborador.favorito = !colaborador.favorito;
          }

          return colaborador;
        }
      )
    )
  }

  const mudarCorDoTime = (id, cor) => {
    setTimes(
      times.map(time => {
        if(time.id === id) {
          time.cor = cor;
        }
        
        return time;
      })
    );
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, novoTime]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        aoCadastrar={colaborador => adicionarColaborador(colaborador)} 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
      />
      <TodosTimes 
        times={times}
        colaboradores={colaboradores}
        aoDeletar={deletarColaborador}
        aoMudarCor={mudarCorDoTime}
        aoFavoritar={favoritaColaborador}
      />
      <Rodape/>
    </div>
  );
}

export default App;
