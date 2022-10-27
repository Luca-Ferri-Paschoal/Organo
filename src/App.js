import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Rodape from './components/Rodape';
import TodosTimes from './components/TodosTimes';
import { times } from './times.js';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionar = colaborador => {
    debugger;
    setColaboradores(
      [...colaboradores, colaborador]
    );
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        aoCadastrar={colaborador => aoAdicionar(colaborador)} 
        times={times.map(time => time.nome)}
      />
      <TodosTimes 
        times={times}
        colaboradores={colaboradores}
      />
      <Rodape/>
    </div>
  );
}

export default App;
