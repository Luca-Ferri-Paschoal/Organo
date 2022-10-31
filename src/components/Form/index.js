import { useState } from 'react';
import './Form.css';
import TextField from './../TextField';
import ListaSuspensa from './../ListaSuspensa';
import Botao from './../Botao';
import { v4 as uuidv4 } from 'uuid';
import SelectColor from '../SelectColor';

const Form = props => {
    const [nome, setNome] = useState('Luca');
    const [cargo, setCargo] = useState('Chefão');
    const [imagem, setImagem] = useState(
        'https://github.com/Luca-Ferri-Paschoal.png'
    );
    const [time, setTime] = useState(props.times[0]);

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#0000FF');

    const aoSalvar = e => {
        e.preventDefault();

        const colaborador = {
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            favorito: false,
        }

        // setNome('');
        // setCargo('');
        // setImagem('');

        props.aoCadastrar(colaborador);
    };

    const aoSubmeterTime = e => {
        e.preventDefault();

        const time = {
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime,
        };

        props.cadastrarTime(time);
    };

    const alteraCor = e => {
        setCorTime(e.target.value);
    }

    return (
        <section className="formulario-container">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placehoder="Digite o seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placehoder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placehoder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => {
                        setTime(valor);
                    }}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={aoSubmeterTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <TextField
                    obrigatorio
                    label="Nome"
                    placehoder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <SelectColor 
                    cor={corTime}
                    alteraCor={alteraCor}
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    );
};

export default Form;
